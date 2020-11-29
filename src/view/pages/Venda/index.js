import React, { useState, useEffect } from 'react';
import './style.css'
import Menu from '../../componets/menu'
import { Jumbotron, Modal, ModalHeader, ModalBody, Row, Col, Table } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
import { FiX } from 'react-icons/fi';


export default function Venda() {

    useEffect(() => {
        localStorage.setItem("Item", 0)
        coletarDados();
        focarI();
    }, [console.clear()])

    async function focarI() {
        await toggle3(true);
        let element = document.getElementsByClassName("input-item-pesquisar")[0];
        await element.lastElementChild.focus();
    }

    async function coletarDados() { //coletando os dados da API

        let dados = await axios(`http://localhost:4000/produto`, {
            method: 'GET'
        })
        let obterdados = []
        obterdados = [
            ...obterdados,
            dados.data.map(x => (x.nomeProduto))
        ]

        setDados1(obterdados[0]);
    }

    //#region  constantes e funções
    const [dados1, setDados1] = useState('');
    const [options, setOptions] = useState(dados1[0])
    const [contar, setContar] = useState(0);
    const [somaSe, setSomaSe] = useState('');
    const [descricaoItem, setDescricaoItem] = useState('');
    const [modal, setModal] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [cpf, setCpf] = useState('');
    const [descricao, setDescricao] = useState('');
    const [qtd, setQtd] = useState('');
    const [valorUnt, setValorUnt] = useState('');
    const [valor, setValor] = useState('');
    const [subTotal, setSubTotal] = useState('')
    const history = useHistory();
    const toggle = () => setModal(!modal); // abre o modal do cpf
    const toggle3 = () => setModal3(!modal3) // abre o modal do pesquisar
    const [vendas, setVendas] = useState([]); // constante para setar os valores na tabela
    const [focando, setFocando] = useState(false);
    let qtdPadrao = 0;

    async function obterValor() { //FUNÇÃO PARA OBTER OS VALORES 
        let produtoBusca = descricao
        let dados = await axios(`http://localhost:4000/${produtoBusca}`, {
            method: 'GET'
        })
        
        let obterdados = []
        obterdados = [
            ...obterdados,
            dados.data.map(x => ({

                "codigoInterno": x.codigoInterno,
                "valorVenda": x.valor,
                "unidade": x.obs,
                "estoqueDisponivel": x.estoque,
                "id": x._id,
                "descricao": x.nomeProduto
            })

            )
        ]

        await setDescricao(obterdados[0][0].descricao)
        await setValorUnt(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(obterdados[0][0].valorVenda)));
        await setValor(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(obterdados[0][0].valorVenda)));

    }



    async function setarTabela() { // FUNÇÃO PARA SETAR OS VALORES NA TABELA DE ITENS DE VENDAS
       debugger
        let contar1 = 1;
        contar1 = Number(contar1 + contar);
        await setContar(contar1);
        await localStorage.setItem('Item', contar1);

   
            let obterdados = await axios(`http://localhost:4000/${descricao}`, {
                method: 'GET'
            })
            let response = []
            response = [
                ...response,
                obterdados.data.map(x => ({
    
                    "codigoInterno": x.codigoInterno,
                    "valorVenda": x.valor,
                    "unidade": x.obs,
                    "estoqueDisponivel": x.estoque,
                    "id": x._id,
                    "descricao": x.nomeProduto
                })
    
                )
            ]
            
            
            let soma = await Number(response[0][0].valorVenda);
            
            qtdPadrao = await qtdPadrao + Number(qtd);
            soma = await Number(qtdPadrao) * soma;
            await setValorUnt(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(response[0][0].valorVenda)));
            await setValor(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(soma)));
            await setSomaSe(Number(somaSe) + Number(soma))
            await setSubTotal(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(somaSe) + Number(soma)));
    
            await setSubTotal(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(somaSe) + Number(soma)));
            await localStorage.setItem('subTotal', Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(somaSe) + Number(soma)));
            await setVendas([...vendas,
            {
                "id": response[0][0].id,
                "descricao": response[0][0].descricao,
                "qtd": qtdPadrao,
                "valorUnt": Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(response[0][0].valorVenda)),
                "valor": Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(soma))
            }]
            );

            setQtd('');
            setValor('');
            setValorUnt('');
            if (qtd === "") {

                return setDescricaoItem(`1    x    ${response[0][0].descricao}  ${Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(response[0][0].valorVenda)}`)
            }
            await setDescricaoItem(`${qtd}    x    ${response[0][0].descricao}  ${Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(response[0][0].valorVenda)}`)

           await toggle3(true);
            setOptions('');
    }

    async function handlerFormDescricao(e) {

        e.preventDefault();
        if (focando === true) {

            alert("Tecla TAB não é permitida");
            setFocando(false);
            let element = document.getElementsByClassName("input-item-2")[0];
            await element.focus();
            return
        } else {
            setDescricao('');
            await coletarDados();
        }

    }

    function onlynumber(evt) { // FUNÇÃO PARA DIGITAR APENAS NUMEROS PELO USUARIO


        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which || theEvent.charCode;
        key = String.fromCharCode(key);
        if (key === 9) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
        var regex = /^[0-9.]+$/;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    function formatCnpjCpf() { //FUNÇÃO PARA FORMARTAR E VALIDAR O CPF
        try {
            const cnpjCpf = cpf.replace(/\D/g, '');
            if (cnpjCpf.length < 11) {
                let formatado = 0;
                return setCpf(formatado)

            }
            if (cnpjCpf.length > 11) {
                let formatado = 0;
                return setCpf(formatado)
            }

        } catch { }

    }

    async function uniKeyCode(event) { // FUNÇAO GENERICA DE EVENTOS
        if (event.keyCode === 9) {

            return setFocando(true);
        }

        if (event.keyCode === 13) {

            debugger
            if (valorUnt === '' || valor === '') {
                setQtd('');
              await  toggle3(true);
              let element = document.getElementsByClassName("input-item-pesquisar")[0];
              await element.lastElementChild.focus();
                return
            }
            if (qtd === '') {
                setOptions('');
                qtdPadrao = 1;
              await  setarTabela();
              toggle3(true);

            } else {
                setOptions('');
               await setarTabela();
               await toggle3(true);
               let element = document.getElementsByClassName("input-item-pesquisar")[0];
               await element.lastElementChild.focus();
                return;

            }

        }

        if (event.keyCode === 46) {


            let local = localStorage.getItem("Item");
            local = Number(local) - 1;
            localStorage.setItem("Item", local)
            setDescricao('');
            setQtd('');
            setValorUnt('');
            setValor('');
            await toggle3(true);
            let element = document.getElementsByClassName("input-item-pesquisar")[0];
            return await element.lastElementChild.focus();
        }
        if (event.keyCode === 120) {
            if (subTotal === '') {
                return alert('Não existe compra para realizar pagamentos!!')
            }
            history.push('/produtos');
        }

        if (event.keyCode === 37) {

            history.push('/produtos');
        }
        if (event.keyCode === 118) {
            toggle3(true);
        }
    }


    async function pesquisar(event) {
        
        // FUNÇÃO DE EVENTOS NO MODAL PESQUISAR 
        if (event.keyCode === 27) {
            return toggle3(false);

        }
        if (event.keyCode === 13) {
            if (descricao === '') {
                return
            }
            obterValor();
            toggle3(false);
            let element = document.getElementsByClassName("input-item-2")[0];
            return element.focus();

        }
        if (event.keyCode === 120) {
                debugger
            if (subTotal === '') {
                return alert('Não existe compra para realizar pagamentos!!')
            }

          return  history.push('/pagamento', vendas);

        }
        if (event.keyCode === 119) {
            toggle3(true);
            toggle(true);
        }
    }
    //salvei
    async function closeCpf(event) {
        //FUNÇÃO DE EVENTO PARA FECHAR O MODAL DO CPF


        if (event.keyCode === 13) {

            if (cpf === "") {
                localStorage.setItem('setCpf', 0);
                toggle(false);
                await toggle3(true);
                let element = document.getElementsByClassName("input-item-pesquisar")[0];
                await element.lastElementChild.focus();
            }
            localStorage.setItem('setCpf', cpf);
            toggle(false);
            await toggle3(true);
            let element = document.getElementsByClassName("input-item-pesquisar")[0];
            await element.lastElementChild.focus();
        };

    }

    async function bucarDados(event) {

        let response2 = await axios(`http://18.189.30.2:5000/v1/Parametros/${69}`);
        if (response2.data[0].parametro === "Descrição") {

            try {
                let response = await axios(`http://18.189.30.2:5000/v1/ListarProdutoDescricao/${event.toUpperCase()}`);
                let dados = []
                dados = [
                    ...dados,
                    response.data.map(x => (x.descricao))
                ];
                setDados1(dados[0]);


            } catch {

            }


            return
        }
        if (response2.data[0].parametro !== "Descrição") {
            setDados1([]);
        }


    }

    async function limparDado(e) {
        
        if (window.confirm("Cancelar item?")) {
            debugger
            let sub = subTotal.substring(3).replace(',', '.');
            let itemValor = e.valor.substring(3).replace(',', '.');
            sub = sub - itemValor;
            setDescricaoItem('');
            setSubTotal(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(sub)));
            setSomaSe(sub);
            let index = vendas.findIndex(x => x.id === e.id);
            setVendas([...vendas.slice(0, index), ...vendas.slice(index + 1)]);
            setOptions('');
            await toggle3(true);
            let element = document.getElementsByClassName("input-item-pesquisar")[0];
            console.log(somaSe);
            return await element.lastElementChild.focus();
            
        }




    }
    //#endregion

    return (

        <>


            <Menu />

            <Jumbotron className="tiraChao" >

                <div className="container-fluid">

                    <div className="conteudo">
                        <div className="descricao">
                            <form onSubmit={handlerFormDescricao} >
                                <label className="label-item">DESCRIÇÃO</label>

                                <input
                                    className="input-item-3"
                                    name="descricao"
                                    id="Descricao-produto"
                                    value={descricao}
                                    readOnly />


                                <div className="item ">
                                    <div className="divisao">
                                        <label className="label-item">QUANTIDADE</label>

                                        <input className=" input-item-2"
                                            id="quantidade"
                                            onKeyPress={onlynumber}
                                            placeholder="1"
                                            value={qtd}
                                            onChange={e => setQtd(e.target.value)}
                                            onBlur={handlerFormDescricao}
                                            onKeyDown={uniKeyCode}
                                        />
                                    </div>
                                    <label className="mt-4 font-weight-bold">Cancelar item (Delete)</label>
                                    <div className="divisao" >
                                        <label className="label-item" >VALOR UNITARIO</label>
                                        <input className="input-item-2"
                                            readOnly
                                            name="valorUnt"
                                            id="valor unitario"
                                            value={valorUnt}
                                        />
                                    </div>
                                    <div className="divisao">
                                        <label className="label-item" >VALOR TOTAL</label>
                                        <input className="input-item-2"
                                            id="valor total"
                                            readOnly
                                            value={valor}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mb-2 itens-compra">

                        <Table className=" responsive={-sm|-md|-lg|-xl}">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Descrição</th>
                                    <th>Quantidade</th>
                                    <th>Valor Unitario</th>
                                    <th>Valor Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vendas.map(index => (
                                    <tr key={index.Id}>
                                        <th>{index.id} <FiX className="descricao-clicando2" onClick={limparDado.bind(this, index)} size={18} /></th>
                                        <td  >{index.descricao}</td>
                                        <td>{index.qtd}</td>
                                        <td>{index.valorUnt}</td>
                                        <td> {index.valor}  </td>
                                    </tr>
                                ))}


                            </tbody>
                        </Table>

                    </div>
                    <div className="conteudo-compra">

                        <div className=" mt-auto ml-5">

                            <div className="sub-total">
                                <form onSubmit={handlerFormDescricao}>
                                    <label className="label-item">SUB TOTAL</label>
                                    <input className="input-item-2"
                                        value={subTotal}
                                        readOnly
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="mt-2 mr-5">


                            <div className="descricao-compra">
                                <input
                                    className="input-item text-xl-left mt-3"
                                    name="descricao"
                                    label="Descricao produto"
                                    readOnly
                                    value={descricaoItem} />
                            </div>
                        </div>
                    </div>

                </div>

                <div>

                    <Modal autoFocus={false} isOpen={modal3} toggle={toggle3} backdrop={false} keyboard={false}>
                        <ModalHeader toggle={toggle3}>Proucurar Item </ModalHeader>

                        <ModalBody>

                            <Row>
                                <Col sm={11}>

                                    <Autocomplete
                                        aria-hidden="true"
                                        disableClearable
                                        id="custom-input-demo"
                                        options={dados1}
                                        value={options}
                                        onChange={(event, newValue) => {
                                            setOptions(newValue);
                                        }}
                                        inputValue={descricao}
                                        onInputChange={(event, newInputValue) => {
                                            setDescricao(newInputValue);
                                            bucarDados(newInputValue);
                                        }}
                                        onKeyUp={pesquisar}
                                        renderInput={(params) => (
                                            <div ref={params.InputProps.ref}
                                                className="input-item-pesquisar">
                                                <input
                                                    spellCheck="true"
                                                    style={{ width: 350, height: 35 }}
                                                    type="text"
                                                    {...params.inputProps} />
                                            </div>
                                        )}
                                    />
                                </Col>
                            </Row>

                        </ModalBody>

                        <Row className="p-3">

                            <Col className="font-weight-bold" sm={6}>Setar item (ENTER)</Col>
                            <Col className="font-weight-bold" sm={6}>Pagamento (F9)</Col>
                        </Row>


                    </Modal>
                </div>
            </Jumbotron>

        </>
    )
}

//developed by Diego 
