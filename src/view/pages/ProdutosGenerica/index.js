import React, { useState, useEffect } from 'react';
import './style.css'
import Menu from '../../componets/menu'
import { Button, Input, Jumbotron, Modal, ModalBody, ModalHeader, PopoverBody, PopoverHeader, Row, Table, UncontrolledPopover } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { FiPlus, FiX } from 'react-icons/fi'

import axios from 'axios';


export default function ProdutoGenerica() {
    useEffect(() => {
        coletarDados();
        contador();

    }, []);

    //#region constantes e funções 
    
    const [numberCusto, setNumberCusto] = useState('')
    const [cstIcms, setCstIcms] = useState('')
    const [cest, setCest] = useState('')
    const [ncm, setNcm] = useState('')
    const [cfop, setCfop] = useState('')
    const [unidade, setUnidade] = useState('')
    const [observacoes, setObservacoes] = useState('')
    const [estoque, setEstoque] = useState('')
    const [custo, setCusto] = useState('')
    const [nomeProduto, setNomeProduto] = useState('');
    const [codigoInterno, setCodigoInterno] = useState('')
    const [valorVenda, setValorVenda] = useState('');
    const [ean, setEan] = useState('')
    const [ativo, setAtivo] = useState(false);
    const [inativo, setInativo] = useState(false);
    const [aliquotaCofins, setAliquotaCofins] = useState('');
    const [aliquotaPis, setAliquotaPis] = useState('');
    const [cstCofins, setCstCofins] = useState('');
    const [origemSalvar, setOrigemSalvar] = useState('');
    const [status, setStatus] = useState('A')
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [pesquisar, setPesquisar] = useState('');
    const hystory = useHistory();
    const [dados, setDados] = useState([]);
    const [pagination, setPagination] = useState([]);
    const convert = Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' });
    const formatar = Intl.NumberFormat('pt-br');
    const [idProduto, setIdProduto] = useState('');
    const [cstPis, setCstPis] = useState('')
    
    
    const origemProduto = [
        { name: '' },
        { id: 0, name: '0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8' },
        { id: 1, name: '1 - Estrangeira - Importação direta, exceto a indicada no código 6' },
        { id: 2, name: '2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7' },
        { id: 3, name: '3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%' },
        { id: 4, name: '4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes' },
        { id: 5, name: '5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%' },
        { id: 6, name: '6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural' },
        { id: 7, name: '7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural' },
        { id: 8, name: '8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%' }
    ]

    
    function verificaAtivos() { //  PARA SETAR INATIVO OU ATIVO NO CHECKBOX DE CADASTRO
        setAtivo(!ativo);
        setInativo(!inativo);
        if (ativo) {
            return setStatus("I");
        }
        return setStatus("A");
    }
    
   
    async function handlerIsChecked(x) {
        debugger
        const filter = dados.findIndex(item => item.id === x.id)
        const verifica = dados[filter];

        if (verifica.id === x.id) {
            if (x.ischecked === "false") {
                x.ischecked = "true"
            }
            else if (x.ischecked === "true") {
                x.ischecked = "false"
            }
        }

        return dados.map(item => {
            if (item.id === x.id) {
                return x
            }
            return item
        }
        )
    }

    function onlynumber(evt) { // FUNÇÃO PARA DIGITAR APENAS NUMEROS PELO USUARIO
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        //var regex = /^[0-9.,]+$/;
        var regex = /^[0-9.]+$/;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }
    async function handlerIsChecked2(x) {
        debugger
        setIdProduto(x.id);
        toggle(true);
        let dados = await axios(`http://18.189.30.2:5000/v1/Produto/${x.id}`, {
            method: 'GET'
        });
        setCstIcms(dados.data.icms);
        setCstPis(dados.data.cstPis);
        setCest(dados.data.cest);
        setNcm(dados.data.ncm);
        setCfop(dados.data.cfop);
        setUnidade(dados.data.unidade);
        setObservacoes(dados.data.observação);
        setEstoque(dados.data.estoqueDisponivel);
        setCusto(dados.data.custo);
        setNomeProduto(dados.data.descricao);
        setCodigoInterno(dados.data.codigoInterno);
        setValorVenda(dados.data.valorVenda);
        setEan(dados.data.codigoDeBarras);
        setAliquotaCofins(dados.data.aliquotaCofins);
        setAliquotaPis(dados.data.aliquotaPis);
        setCstCofins(dados.data.cstCofins);
        setOrigemSalvar(dados.data.origem);
        setAtivo(dados.data.status);
        return
    }

    function errors() { // tratando caso digitado caracter especial
        let uper = pesquisar
        uper = uper.toUpperCase();
        setPesquisar(uper);
    }


    async function coletarDados() { //coletando os dados da API
        debugger

        let dados = await axios(`http://localhost:4000/produto`, {
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
                "ischecked" : "false" ,
                "descricao": x.nomeProduto,
                "UsuarioId": localStorage.getItem('UsuarioId')
            })

            )
        ]

        setDados(obterdados[0]);
    }


    function Inativar() { // função com condição /inativar produto
        
        if (window.confirm("tem certeza que deseja inativar?")) {
            dados.map(item => {
                if (item.ischecked === "true") {
                    return atualizar(item)
                }
            });
        }
    }

    async function atualizar(produto) {// fazendo a atualiazação caso for inativado o produto
        debugger
        let get = await axios(`http://localhost:4000/produto/DELETE/${produto.id}`, {
            method: 'DELETE'
        })
     
        let dados = await axios(`http://localhost:4000/produto`, {
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
                "ischecked" : "false" ,
                "descricao": x.nomeProduto,
                "UsuarioId": localStorage.getItem('UsuarioId')
            })

            )
        ]

        setDados(obterdados[0]);
        return
    }

    function handlerSubmt(e) {
        e.preventDefault();
        pesquisarDados();
    };
    async function pesquisarDados() {
        // Aki faz a busca do produto digitado pelo usuario
        let obterdados = []
        let response = await axios(`http://18.189.30.2:5000/v1/Parametros/${69}`);

        if (response.data[0].parametro === "Código Interno") {

            try {
                debugger

                let dados2 = await axios(`http://18.189.30.2:5000/v1/ListarProdutoCodigoInterno/${pesquisar}`, {
                    method: 'GET'
                });

                obterdados = [
                    ...obterdados,
                    dados2.data.map(x => ({

                        "codigoInterno": x.codigoInterno,
                        "valorVenda": x.valorVenda,
                        "unidade": x.unidade,
                        "estoqueDisponivel": x.estoqueDisponivel,
                        "id": x.id,
                        "ischecked": "false",
                        "descricao": x.descricao,

                    })

                    )
                ];

                setDados(obterdados[0]);
            } catch {

                let dados = await fetch('http://18.189.30.2:5000/v1/Produto');
                dados = await dados.json();
                return setDados(dados);
            }


            return
        }
        else if (response.data[0].parametro === "Descrição") {

            try {

                let dados2 = await axios(`http://18.189.30.2:5000/v1/ListarProdutoDescricao/${pesquisar}`, {
                    method: 'GET'
                });

                obterdados = [
                    ...obterdados,
                    dados2.data.map(x => ({

                        "codigoInterno": x.codigoInterno,
                        "valorVenda": x.valorVenda,
                        "unidade": x.unidade,
                        "estoqueDisponivel": x.estoqueDisponivel,
                        "id": x.id,
                        "ischecked": "false",
                        "descricao": x.descricao,

                    })

                    )
                ];

                setDados(obterdados[0]);
            } catch {

                let dados = await fetch('http://18.189.30.2:5000/v1/Produto');
                dados = await dados.json();
                return setDados(dados);
            }


            return
        }
        else if (response.data[0].parametro === "Código EAN13") {

            try {

                let dados2 = await axios(`http://18.189.30.2:5000/v1/ListarProdutoEan/${pesquisar}`, {
                    method: 'GET'
                });

                obterdados = [
                    ...obterdados,
                    dados2.data.map(x => ({

                        "codigoInterno": x.codigoInterno,
                        "valorVenda": x.valorVenda,
                        "unidade": x.unidade,
                        "estoqueDisponivel": x.estoqueDisponivel,
                        "id": x.id,
                        "ischecked": "false",
                        "descricao": x.descricao,

                    })

                    )
                ];

                setDados(obterdados[0]);
            } catch {

                let dados = await fetch('http://18.189.30.2:5000/v1/Produto');
                dados = await dados.json();
                return setDados(dados);
            }


            return
        }
        else {
            alert('o parâmetro de pesquisa esta configurado incorretamente');
            return
        }

    }


    async function contador() {

        let dados = await axios(`http://18.189.30.2:5000/v1/ContadorProdutos`, {
            method: 'GET'
        });
        let paginas = dados.data;
        paginas = paginas / 30;
        paginas = Math.round(paginas);

        let cont;
        let pagination2 = [];
        let pagination3 = [];
        for (cont = 0; cont <= paginas; cont++) {
            pagination2[cont] = 1 + cont;
        }
        setPagination(pagination2);

    }

    function uniKeyCode(event) { // função gernerica de evntos de teclas

        if (event.keyCode === 107) {
            return hystory.push('/produtos/new')

        }

        if (event.keyCode === 39) { // Se apertar F9
            return hystory.push('/venda')

        }
        if (event.keyCode === 37) {
            return hystory.push('/inicio');
        }
        if (event.keyCode === 13) { // Se apertar enter
            return pesquisarDados();
        }
    }
    async function salvarProduto() {

        toggle(true);
        debugger
        let obterdados = {};
        let origemSalvando = origemSalvar;
        if(typeof(origemSalvando) === "string"){
         origemSalvando =  Number(origemSalvar.substring(0, 1));
        }
        obterdados = {
            "id": idProduto,
            "descricao": nomeProduto.toUpperCase(),
            "codigoInterno": codigoInterno,
            "codigoDeBarras": ean,
            "status": status,
            "valorVenda": Number(valorVenda),
            "custo": Number(numberCusto),
            "estoqueDisponivel": Number(estoque),
            "observação": observacoes,
            "origem":origemSalvando,
            "unidade": unidade,
            "ncm": ncm,
            "cest": cest,
            "cfop": cfop,
            "cstCofins": cstCofins,
            "cstPis": cstPis,
            "icms": cstIcms,
            "aliquotaCofins": aliquotaCofins,
            "aliquotaPis": aliquotaPis,
            "usuarioId": Number(localStorage.getItem('UsuarioId')),
        }
        let dados = await axios(`http://18.189.30.2:5000/v1/Produto/`, {
            data: obterdados,
            method: 'PUT'
        });
        if (dados.data.sucesso === true) {
            alert('Produto alterado com sucesso');
            setAtivo('');
            setInativo('');
            coletarDados();
        } else {
            alert("Ops, alguma coisa deu errada...")
        }
    }
    //#endregion
    return (
        <>
            <Menu />
            <Jumbotron id="topo">
                <div className="container-fluid mt-0">
                    <div className="content mt-0">
                        <Row className="px-2 botaoo">
                            <div className="mr-auto ajuste-botoes">
                                <Link
                                    to="/produtos/new"
                                    className="btn novo-produto">
                                    Novo Produto
                                <FiPlus size={18} />
                                </Link>
                                <Button className="btn inativar-botao" onClick={Inativar}>
                                   Deletar Produto
                                <FiX size={18} />
                                </Button>
                            </div>
                           
                        </Row>
                        <Table striped responsive>
                            <thead>
                                <tr>
                                    <th scope="col" className="input"></th>
                                    <th scope="col" className="id">Id</th>
                                    <th scope="col" className="codigo">Código Interno</th>
                                    <th scope="col" className="descricao2">Descrição</th>
                                    <th scope="col" className="preco">Preço</th>
                                    <th scope="col" className="unidade">Unidade</th>
                                    <th scope="col" className="saldo">Saldo Atual</th>
                                </tr>
                            </thead>
                            <tbody>
                                { //Aki seta os valores na tabela dinamicamente 
                                    dados.map(x => (

                                        <tr key={x.id}>
                                            <td>
                                                <input
                                                    type="checkbox"

                                                    onClick={handlerIsChecked.bind(this, x)}
                                                />
                                            </td>
                                            <td>
                                                {x.id}
                                            </td>
                                            <td>
                                                {x.codigoInterno}
                                            </td>
                                            <td onDoubleClick={handlerIsChecked2.bind(this, x)} className="descricao-clicando" >
                                                {x.descricao}
                                            </td>
                                            <td>
                                                {convert.format(Number(x.valorVenda))}
                                            </td>
                                            <td>
                                                {x.unidade}
                                            </td>
                                            <td>
                                                {formatar.format(x.estoqueDisponivel)}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                        
                    </div>
                </div>
                <div>

                </div>

            </Jumbotron>

            <Modal toggle={toggle} autoFocus={false} isOpen={modal} size="xl" >
                <ModalHeader>Editar Produto</ModalHeader>
                <ModalBody>
                    <form className="formulario-show ml-4" role="form" onSubmit={handlerSubmt}>

                        <div className="row">
                            <div className="form-group col-lg-2">
                                <label className="input-id">id</label>
                                <input type="text" readOnly onKeyDown={uniKeyCode} className="form-control"></input>
                            </div>
                            <div className="form-group col-lg-7">
                                <label className="input-nome-produto">Nome do Produto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite o nome do produto.."
                                    autoFocus
                                    value={nomeProduto}
                                    onChange={e => setNomeProduto(e.target.value.toUpperCase())}></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-lg-4">
                                <label className="input-codigo-interno">Codigo interno</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Digite o codigo interno do produto..."
                                    value={codigoInterno}
                                    onKeyPress={onlynumber}
                                    onChange={e => setCodigoInterno(e.target.value.toUpperCase())}></input>
                            </div>
                            <div className="form-group col-lg-2">
                                <label className="input-EAN">EAN 13</label>
                                <input type="text"
                                    className="form-control"
                                    value={ean}
                                    onChange={e => setEan(e.target.value)}></input>
                            </div>

                            <div className="form-group col-lg-2">
                                <label className="input-status"> Status </label>

                                <div className="row mt-3">
                                    <input type="radio"
                                        id="ativo-input"
                                        checked={ativo}
                                        onChange={e => setAtivo(e.target.value)}
                                        onClick={verificaAtivos}
                                    ></input>

                                    <label className="ml-2 input-ativo" >Ativo</label>

                                    <input type="radio" className="ml-4"
                                        id="inativo-input"
                                        checked={inativo}
                                        onChange={e => setInativo(e.target.value)}
                                        onClick={verificaAtivos}></input>

                                    <label className=" ml-2 input-inativo" >Inativo</label>

                                </div>

                            </div>

                        </div>

                        <div className="row">
                            <div className="form-group col-lg-2">
                                <label className="input-valor-venda">Valor de Venda</label>
                                <input className="form-control"
                                    id="PopoverFocus"
                                    placeholder="R$ 0,00"
                                    value={valorVenda}
                                    onKeyPress={onlynumber}
                                    onChange={e => setValorVenda(e.target.value)}
                                  
                                ></input>

                            </div>
                            <div className="form-group col-lg-2">
                                <label className="input-custo">Custo</label>
                                <input type="text"
                                    className="form-control"
                                    id="PopoverFocus"
                                    placeholder="R$ 0,00"
                                    onKeyPress={onlynumber}
                                    value={custo}
                                    onChange={e => setCusto(e.target.value)}
                                    >

                                </input>
                            </div>
                            <div className="form-group col-lg-3">
                                <label className="input-grupo-produto">Grupo do produto</label>
                                <select className="form-control">
                                    <option></option>
                                    <option> alimentício</option>
                                    <option> vestuário</option>
                                </select>

                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-4">
                                <label className="input-esoque"> Estoque disponível</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="0"
                                    value={estoque}
                                    onKeyPress={onlynumber}
                                    onChange={e => setEstoque(e.target.value)}></input>
                            </div>
                        </div>



                        <div className="row">
                            <div className="form-group col-lg-10">
                                <label className="input-obs">Observações</label>
                                <Input type="textarea"
                                    placeholder="Digite aqui as observações"
                                    value={observacoes}
                                    onChange={e => setObservacoes(e.target.value)}></Input>
                            </div>
                        </div>

                        <div>
                            <Link
                                to=""
                                color="primary"
                                className="border-none">Dados da nota Fiscal (Obrigotório para a Emissão)</Link>


                            <hr></hr>
                            <div className="row">
                                <div className="form-group col-lg-10">
                                    <label className="input-origem" >Origem do produto</label>
                                    <Input type="select"
                                        value={origemSalvar}
                                        onChange={e => setOrigemSalvar(e.target.value)}>
                                        {origemProduto.map((item) => (


                                            <option key={item.id}>{item.name}</option>
                                        ))}
                                    </Input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-lg-3">
                                    <label className="input-unidade-medida">Unidade de Medida</label>
                                    <select className="form-control" value={unidade} onChange={e => setUnidade(e.target.value)}>
                                        <option></option>
                                        <option>Kg</option>
                                        <option>Unid</option>
                                        <option>Lt</option>
                                    </select>
                                </div>
                                <div className="form-group col-lg-3">
                                    <label className="input-NCM">NCM</label>
                                    <Input
                                        value={ncm}
                                        onChange={e => setNcm(e.target.value)}>
                                    </Input>
                                </div>
                                <div className="form-group col-lg-3">
                                    <label className="input-CEST">CEST</label>
                                    <Input
                                        value={cest}
                                        onKeyPress={errors}
                                        onChange={e => setCest(e.target.value)}>
                                    </Input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-lg-3">
                                    <label className="input-CFOP">CFOP</label>
                                    <Input
                                        value={cfop}
                                        onKeyPress={errors}
                                        onChange={e => setCfop(e.target.value)}></Input>

                                </div>
                                <div className="form-group col-lg-3">
                                    <label className="input-CST-Cofins">CST de Cofins</label>
                                    <Input
                                        value={cstCofins}
                                        onKeyPress={errors}
                                        onChange={e => setCstCofins(e.target.value)} />

                                </div>
                                <div className="form-group col-lg-3">
                                    <label className="input-CST-Pis">CST de PIS</label>

                                    <Input
                                        value={cstPis}
                                        onKeyPress={errors}
                                        onChange={e => setCstPis(e.target.value)}>
                                    </Input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-lg-3">
                                    <label className="input-CST-Icms">CST de Icms</label>
                                    <Input
                                        value={cstIcms}
                                        onKeyPress={errors}
                                        onChange={e => setCstIcms(e.target.value)}>
                                    </Input>

                                </div>
                                <div className="form-group col-lg-3">
                                    <label className="input-Aliquota-Cofins">Aliquota Cofins</label>
                                    <Input
                                        onKeyPress={errors}
                                        value={aliquotaCofins}
                                        onChange={e => setAliquotaCofins(e.target.value)} />
                                </div>
                                <div className="form-group col-lg-3">
                                    <label className="input-Aliquota-Pis">Aliquota PIS</label>
                                    <Input
                                        onKeyPress={errors}
                                        value={aliquotaPis}
                                        onChange={e => setAliquotaPis(e.target.value)}
                                    />
                                </div>
                            </div>


                        </div>
                    </form>
                    <hr></hr>
                    <div className="alinhar">
                        <button
                            onClick={salvarProduto}
                            style={{
                                width: 300,
                                marginTop: 20
                            }}
                            className="btn novo-produto">salvar</button>
                    </div>
                </ModalBody>
                <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                    <PopoverHeader>Atenção</PopoverHeader>
                    <PopoverBody>Para valores com casas decimais utilize o "Ponto ."</PopoverBody>
                </UncontrolledPopover>
            </Modal>

            <button className="remove" autoFocus onKeyDown={uniKeyCode}></button> {/* utilizei esse botao apenas pra ficar mais prático para eu transitar pelas telas */}
        </>
    )
}

//developed by Diego 