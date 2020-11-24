import React, { useState, useEffect } from 'react';
import './style.css'
import Menu from '../../componets/menu'
import { Jumbotron, Input, Button, PopoverHeader, PopoverBody, UncontrolledPopover } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


export default function ProdutoEspecifica() {

    useEffect(() => {
        //Use effect

        
    }, [console.clear()])

    //#region constantes e funções    
    const [numberVenda, setNumberVenda] = useState('');
    const [numberCusto, setNumberCusto] = useState('')
    const [cstIcms, setCstIcms] = useState('')
    const [cstPis, setCstPis] = useState('')
    const [cest, setCest] = useState('')
    const [ncm, setNcm] = useState('')
    const [cfop, setCfop] = useState('')
    const [unidade, setUnidade] = useState('')
    const [observacoes, setObservacoes] = useState('')
    const [estoque] = useState(0)
    const [custo, setCusto] = useState('')
    const [nomeProduto, setNomeProduto] = useState('');
    const [codigoInterno, setCodigoInterno] = useState('')
    const [valorVenda, setValorVenda] = useState('');
    const [ean, setEan] = useState('')
    const [ativo, setAtivo] = useState(true);
    const [inativo, setInativo] = useState(false);
    const [aliquotaCofins, setAliquotaCofins] = useState('');
    const [aliquotaPis, setAliquotaPis] = useState('');
    const [cstCofins, setCstCofins] = useState('');
    const [origemSalvar, setOrigemSalvar] = useState('');
    const [status, setStatus] = useState('A')
    const history = useHistory();

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

    function uniKeyCode(event) {       //FUNÇÃO EVENTO PARA TRANSITAR DE TELAS
        if (event.keyCode === 27) {
            return history.push('/produtos');
        }
    }

    function onlynumber(evt) { // FUNÇÃO PARA DIGITAR APENAS NUMEROS PELO USUARIO
        debugger
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
    function errors(evt) {  // FUNÇÃO PARA INATIVAR TECLAS ESPECIAIS DIGITADAS PELO USUARIO
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /^[a-zA-Z0-9.]+$/;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }


    function verificaAtivos() { //  PARA SETAR INATIVO OU ATIVO NO CHECKBOX DE CADASTRO
        setAtivo(!ativo);
        setInativo(!inativo);
        if (ativo) {
            return setStatus("I");
        }
        return setStatus("A");
    }
    function contardigitosEan(){
        
        if(ean.length > 12){
            return setEan(ean.substring(0 , ean.length -1));
        };
    }
    function contarDigitosCfop(){
        debugger
        if(cfop.length > 3){
            return setCfop(cfop.substring(0, cfop.length - 1));
        }
    }
    function converterCusto() { // CONVERTER PARA MOEDA
        let numberCusto1;
        let teste = custo.replace(',', '.');
        numberCusto1 = new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(teste));
        setCusto(numberCusto1);
        setNumberCusto(teste);
    }
    function converter() { // CONVERTER PARA MOEDA 

        let numberVenda1;
        let teste = ""

        teste = valorVenda.replace(',', '.');
        numberVenda1 = new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(teste));
        if (numberVenda1 === "R$ NaN") {
            alert("Sounan")
        }
        setValorVenda(numberVenda1);
        setNumberVenda(teste);

    }
    function handlerSubmt(e) {
        e.preventDefault();
    };

    async function SalvarDados() {  //MANDAR OS DADOS SALVOS PARA A 'api'

        let dados = '';
        let req = '';
        dados = {
            "Descricao": nomeProduto.toUpperCase(),
            "CodigoInterno": codigoInterno,
            "CodigoDeBarras": ean,
            "status": status,
            "ValorVenda": Number(numberVenda),
            "Custo": Number(numberCusto),
            "EstoqueDisponivel": Number(estoque),
            "Observação": observacoes,
            "Origem": Number(origemSalvar.substring(0, 1)),
            "Unidade": unidade,
            "Ncm": ncm,
            "Cest": cest,
            "CFOP": cfop,
            "CstCofins": cstCofins,
            "CstPis": cstPis,
            "Icms": cstIcms,
            "AliquotaCofins": aliquotaCofins,
            "AliquotaPis": aliquotaPis,
            "UsuarioId": Number(localStorage.getItem('UsuarioId')),
        }
        try {
            req = await axios(`http://18.189.30.2:5000/v1/Produto`, {
                method: 'POST',
                data: dados
            });

            if (req.data.mensagem !== "Produto cadastrado com sucesso!") {
                dados = {
                    "Descricao": nomeProduto.toUpperCase(),
                    "CodigoInterno": codigoInterno,
                    "CodigoDeBarras": ean,
                    "status": status,
                    "ValorVenda": Number(numberVenda),
                    "Custo": Number(numberCusto),
                    "EstoqueDisponivel": 0,
                    "Observação": observacoes,
                    "Origem": Number(origemSalvar.substring(0, 1)),
                    "Unidade": unidade,
                    "Ncm": ncm,
                    "Cest": cest,
                    "CFOP": cfop,
                    "CstCofins": cstCofins,
                    "CstPis": cstPis,
                    "Icms": cstIcms,
                    "AliquotaCofins": aliquotaCofins,
                    "AliquotaPis": aliquotaPis,
                    "UsuarioId": Number(localStorage.getItem('UsuarioId')),
                }
                req = await axios(`http://18.189.30.2:5000/v1/Produto`, {
                    method: 'POST',
                    data: dados
                });
            }
            return history.push('/produtos');
        } catch {

        }

    }

    function voltar() {
        return history.push('/produtos');
    }
    //#endregion


    return (
        <>
            <Menu />


            <Jumbotron>
                <div className="content">
                    <h2 className="text-center">Produtos</h2>
                    <h6 className="ml-4">Dados do Produto</h6>
                    <hr className="ml-4"></hr>

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
                                    onChange={e => setNomeProduto(e.target.value)}></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-lg-4">
                                <label className="input-codigo-interno">Codigo interno</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Digite o codigo interno do produto..."
                                    value={codigoInterno}
                                    onChange={e => setCodigoInterno(e.target.value.toUpperCase())}></input>
                            </div>
                            <div className="form-group col-lg-2">
                                <label className="input-EAN">EAN 13</label>
                                <input type="text"
                                    className="form-control"
                                    value={ean}
                                    onKeyPress={contardigitosEan}
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
                                    onBlur={converter}
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
                                    onBlur={converterCusto}>

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
                                    ></input>
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

                    </form>

                </div>

                <div className="box-actions">
                    <div className="row">
                        <div className="mr-auto">
                            <Button className="btn-cancelar" onClick={voltar}>Cancelar</Button>
                        </div>
                        <div className="ml-auto">
                            <Button className="btn-enviar" onClick={SalvarDados}>Enviar</Button>
                        </div>
                    </div>
                </div>
                <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                    <PopoverHeader>Atenção</PopoverHeader>
                    <PopoverBody>Para valores com casas decimais utilize o "Ponto ."</PopoverBody>
                </UncontrolledPopover>
            </Jumbotron>
            <button className="remove"></button>

        </>

    )
}

//developed by Diego && victor