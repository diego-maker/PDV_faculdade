import React, { useState, useEffect } from 'react';
import './style.css'
import { Jumbotron, ModalHeader, Modal, ModalBody, Row, Col, Label, Input, ModalFooter, Button, FormGroup, Table, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Menu from '../../componets/menu'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Pagamento(props) {
   
    useEffect(() => {
        coletarDados();
        openModal();

    }, [console.clear()]);

    //#region constantes e funções
    let parcelasTable1 = []
    const [trocos, setTrocos] = useState('');
    const [descontoRsRead, setDecontoRsread]= useState(false);
    const [descontoPorRead,setDescontoPorRead]= useState(false);
    const [dados1,setDados1] = useState('');
    const [options,setOptions] = useState(dados1[0]);
    const [pagar, setPagar] = useState(localStorage.getItem('subTotal'));
    const [Pagamento, setPagamento] = useState([]);
    const [descontoRs, setDescontoRs] = useState('');
    const [descontoPor, setDescontoPor] = useState('');
    const [acresimo, setAcresimo] = useState(''); // SIM EU SEI QUE EU ESCREVI ERRADO ACRESCIMO 
    const [total, setTotal] = useState('');
    const [tipoPgt, setTipoPgt] = useState('');
    const [pgto, setPgto] = useState("");
    const [desconto, setDesconto] = useState('');
    const [totalCompra] = useState(localStorage.getItem('subTotal'))
    const [modal2, setModal2] = useState(false); // modal principal
    const [modal3, setModal3] = useState(false); // modal para finalizar pagamento
    const hystory = useHistory('');
    const [focando, setFocando] = useState(false);
    let idPedido;
    // const [idPedido , setIdPedido] = useState('');
   
    const toggle2 = () => setModal2(!modal2); // modal principal
    const toggle3 = () => setModal3(!modal3); // modal principal

    async function openModal(){
        
       await toggle2(true);
        let element =  document.getElementsByClassName("input-item-pesquisar")[0];
       await element.lastElementChild.focus();
    }

    async function coletarDados(){
        
        let dados = await axios(`http://18.189.30.2:5000/v1/FormaPagamento`, {
            method: 'GET'
        })
        let obterdados = []
        obterdados = [
            ...obterdados,
            dados.data.map(x => (x.meioPagamento))
        ]

        setDados1(obterdados[0]);
    }

    async function criarPedido() {
        
        let sub = localStorage.getItem('subTotal').substring(3).replace(',', '.');
        let sub2 = localStorage.getItem('subTotal').substring(3).replace(',', '.');
        let item = localStorage.getItem('Item');

        let dados = {
            "nome": "CONSUMIDOR FINAL",
            "cpf": localStorage.getItem('setCpf'),
            "cnpj": "0",
            "quantidade": Number(item),
            "valor": Number(sub),
            "subTotal": Number(sub2)

        }

        try {

            let salvardados = await axios('http://18.189.30.2:5000/v1/Pedido', {
                method: 'POST',
                data: dados
            })
            if(salvardados === undefined){
                return
            }
           idPedido = await salvardados.data.dados.id;
           salvarItens();
        }
        catch {

        }
    }
    async function salvarItens() {
        
        let pedidos = props.location.state;
        let cont = 0;
        while (cont < props.location.state.length) {

            let valorUnitario = pedidos[cont].valorUnt;
            let valorTotalFormated = pedidos[cont].valor;
            valorTotalFormated = valorTotalFormated.substring(3).replace(',', '.');
            valorUnitario = valorUnitario.substring(3).replace(',', '.');

            let dados = {
                "quantidade": pedidos[cont].qtd,
                "valorUnitario": Number(valorUnitario),
                "valorTotal": Number(valorTotalFormated),
                "idProduto": pedidos[cont].id,
                "idPedido": idPedido
            }
            try {

                let salvardados = await axios('http://18.189.30.2:5000/v1/PedidoItem', {
                    method: 'POST',
                    data: dados
                });
                if(salvardados === undefined){
                    return
                }
            }
            catch {

            }

            cont++;
        }
        nfce();

    }
    async function setarPagamento(valor) { // Aki estou fazendo algumas validações de pagamento... exemplo se for maior o pagamento retorne troco --->
        
        let pgto1 = Number(valor.substring(3).replace(',', '.'));
        let total1 = Number(pagar.substring(3).replace(',', '.'));
        
        if (Number(pgto1) > total1) {
            let verifica = localStorage.getItem('subTotal');
            if (verifica === "0") {
                return alert('Valor da compra zerado ou ja foi realizado o pagamento!!!');
            }
            if (descontoPor === "" && descontoRs === "" && acresimo === "") {
                setDesconto('R$ 0,00');
                setAcresimo('R$ 0,00');
                setTotal('R$ 0,00');

            }

            let troco1 = pgto1 - total1;
            troco1 = parseFloat(troco1.toFixed(2));
            setPagar("R$ 0,00");
            criarPedido();
            localStorage.setItem('subTotal', 0);
            setTrocos(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(troco1)));
            alert(`pagamento Realizado! troco ${Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(troco1))}`);
            let element = document.getElementsByClassName("input-final")[0];
            element.focus();
            toggle2(false);
        }


        if (Number(pgto1) === Number(total1)) {


            let verifica = localStorage.getItem('subTotal');
            if (verifica === "0") {
                return alert('Valor da compra zerado ou ja foi realizado o pagamento!!!');
            }
            setPagar("R$ 0,00");
            setPgto(0);         
            criarPedido();
            localStorage.setItem('subTotal', 0);
            alert('pagamento Realizado!');
            let element = document.getElementsByClassName("input-final")[0];
            element.focus();
            toggle2(false);
        


        }

        if (Number(pgto1) < total1) {
            let verifica = localStorage.getItem('subTotal');
            if (verifica === "0") {
                return alert('Valor da compra zerado ou ja foi realizado o pagamento!!!');
            }
            let formatado = pagar.substring(3).replace(',', '.');
            let menos = formatado - pgto1;
            setPagar(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(menos)));
            setPgto(menos);

            if (descontoPor === "" && descontoRs === "" && acresimo === "") {
                setDesconto('R$0,00');
                setAcresimo('R$0,00');
                setTotal('R$ 0,00');

            }
            let element = document.getElementsByClassName("input-item-pesquisar")[0];
            return await element.lastElementChild.focus();
        }

    }
    async function nfce() {
        
       
        let salvardados = ""
             salvardados = await axios('http://18.189.30.2:5000/v1/nota', {
                method: 'POST',
                data: { "idPedido": idPedido},
            });
            if(salvardados === undefined){
                return
            }
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
    function tablePagamento(valor) { // esse função só serve para setar os valores na tabela de pagamento
        debugger
        let descontao = Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(desconto));
        let pagamentao = Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(pgto));
        if (isNaN(pagamentao)) {
            pagamentao = valor;
        }
        if (descontoPor === "" && descontoRs === "" && acresimo === "") {

            return setPagamento([...Pagamento,
            {
                "id": Date.now(),
                "TipoPagamento": tipoPgt,
                "Desconto": 'R$ 0,00',
                "Acrescimo": 'R$ 0,00',
                "Total": 'R$ 0,00',
                "ValorPago": pagamentao
            }]
            );
        }
        if (acresimo === "") {
            return setPagamento([...Pagamento,
            {
                "id": Date.now(),
                "TipoPagamento": tipoPgt,
                "Desconto": descontao,
                "Acrescimo": 'R$ 0,00',
                "Total": total,
                "ValorPago": pagamentao
            }]
            );
        }

        setPagamento([...Pagamento,
        {
            "id": Date.now(),
            "TipoPagamento": tipoPgt,
            "Desconto": descontao,
            "Acrescimo": acresimo,
            "Total": total,
            "ValorPago": pagamentao
        }]
        );
    }

    //#region ESSAS FUNÇÕES A SEGUIR SÃO FUNÇÕES DE EVENTOS DE TECLAS E DESCONTOS...

    function onlynumber(evt) { // Função para tratar apenas digitação de numeros 
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /^[0-9.]+$/;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }


    function contarDigitos(){

        if(pgto.length < 3){
           return setPgto("R$ ");
        }
    }
    function uniKeyCode(event) { // Evento de tecla final... exemplo para encerrar o pagamento e abrir uma nova venda ---> 
        
        if (event.keyCode === 120) {
            let verifica = localStorage.getItem('subTotal')
            if (verifica === '0') {
                return alert('Valor da compra zerado ou ja foi realizado o pagamento!!!')
            }
            return toggle2(true);
        }


        if (event.keyCode === 13) {
            toggle3(true);

        }
    }

    async function uniKeyCode2(event) {   // Esse evento fica no input pagamento... o valor que esta sendo pago
        if(event.keyCode=== 115){
            toggle3(true);
           return
          }

        if (event.keyCode === 13) {
            debugger
            let valor = Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(pgto));
            valor = valor.substring(3).replace(',', '.');
            if (valor === "NaN") {

                valor = pgto.substring(3).replace(',', '.');
                valor = Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(valor))
            }
            
            setarPagamento(valor);
            tablePagamento(valor);
            setPgto('')
            setTipoPgt('');
            setDescontoPor('');
            setDescontoRs('');
            setAcresimo('')
            return setDesconto('');
        }

        if (event.keyCode === 9) {
            let element = document.getElementsByClassName("input-item-pesquisar")[0];
           await element.lastElementChild.focus();
            
        }

        if (event.keyCode === 38) {
            let element = document.getElementsByClassName("input-item-pesquisar")[0];
           await element.lastElementChild.focus();
        }

    }

    function uniKeyCode1(event) {  // Esse evento é apenas do modal finalizar pagamento... para retornar a tela de venda novamente

        if (event.keyCode === 13) {
            return hystory.push('/venda')
        }
    }


    function uniKeyCode3(event) { // Evento que fica no (tipo de pagamento)...
        if(event.keyCode ===9){
            return setFocando(true);
        }
        if(event.keyCode===118){
            
            toggle2(false);
            toggle3(true)
          return
          }

        if (event.keyCode === 38) { // Se apertar tecla "cima" foca no input de acréscimo
        setOptions('');
            let element = document.getElementsByClassName("input-acrescimo")[0];
         return   element.focus();
        }

        if (event.keyCode === 13) { 
            if(tipoPgt === ""){
                return
            }
            setPgto(pagar);
            let element = document.getElementsByClassName("input-pgto")[0];
            element.focus();
        return  
        }

       
    }
    async function handlerFormDescricao(e) {
        debugger
        e.preventDefault();
        if (focando === true) {

            alert("Tecla TAB não é permitida");
            setFocando(false);
            let element = document.getElementsByClassName("input-item-pesquisar")[0];
            await element.lastElementChild.focus();
            return
        } 
    }

 async function uniKeyCode4(event) { // Evento para adicionar acréscimo no pagamento...
    debugger
        if(event.keyCode===8){
            setAcresimo('');
           return setPagar(totalCompra);
        }
        if(event.keyCode=== 115){
            return toggle3(true);
          }

        if (event.keyCode === 38) { // Se apertar a tecla "cima" foca no input desconto
            let element = document.getElementsByClassName("input-desconto")[0];
            return element.focus();
        }
        if (event.keyCode === 40) { // Se apertar a tecla "baixo" foca no input (tipo de pagamento)
            let element = document.getElementsByClassName("input-item-pesquisar")[0];
           return await element.lastElementChild.focus();
        }
        if (event.keyCode === 13) { // Se apertar Enter seta o acréscimo no pagamento
            
            
            if (acresimo === "") {
                let menos = acresimo - total;
                setTotal(menos)
                return setPagar(totalCompra);
            }
            let soma = pagar.substring(3).replace(',', '.');
            soma = Number(soma) + Number(acresimo);
            if (isNaN(soma)) {
                return setAcresimo('');
            }
            console.log(soma)
            setAcresimo(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(acresimo)))
            setTotal(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(soma)))
            return setPagar(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(soma)));
            
        }
    }

    function uniKeyCode5(event) { // Evento para dar desconto em Porcentagem...
        if(event.keyCode===8){
            setDescontoPor('');
           return setPagar(totalCompra);
        }
        if (event.keyCode === 38) { // Se apertar a tecla "cima" foca no input de desconto em Reais
            let element = document.getElementsByClassName("input-descontoRS")[0];
            return element.focus();
        }
        if(event.keyCode=== 115){
            return toggle3(true);
          }

        if (event.keyCode === 40) { // Se apertar tecla "baixo" foca no input de acréscimo
            let element = document.getElementsByClassName("input-acrescimo")[0];
            return element.focus();
        }

        if (event.keyCode === 13) { // Se apertar a tecla Enter seta o Desconto em porcentagem
            
            //ATENÇÃO ESSE DESCONTO EM PORCENTAGEM ESTA REFENTE AO TOTAL BRUTO QUE APARECE NO MODAL!
            if(descontoPorRead === true){
                return
            }
            if(event.keyCode=== 115){
                return toggle3(true);
              }

            if (descontoPor === "") {
                setDecontoRsread(false);
                setDesconto('');
                setTotal("")
                return setPagar(totalCompra);
            }
            if (descontoPor > 100 || descontoPor < 0) {
                setDescontoPor("")
                return alert("Desconto inválido")
            }
            setDecontoRsread(true);
            let somaSe;
            let local = pagar.substring(3).replace(',', '.')
            let soma = Number(descontoPor) * Number(local);
            soma = soma / 100;
            somaSe = Number(desconto) + Number(soma);
            console.log(somaSe);
            setDesconto(somaSe);
            soma = local - soma;
            soma = parseFloat(soma.toFixed(2));
            setPagar(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(soma)))
            setTotal(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(soma)))
        }
    }

    function uniKeyCode6(event) {// Evento para dar desconto em Reais..
       
        if(event.keyCode===8){
            setDescontoRs('');
           return setPagar(totalCompra);
        }
        if (event.keyCode === 40) { // Se apertar a seta "Baixo" ele foca no input de desconto em porcentagem

            let element = document.getElementsByClassName("input-desconto")[0];
            return element.focus();
        }

        if (event.keyCode === 13) { 
            debugger// Se apertar enter seta o desconto
            if(descontoRsRead === true){
                return
            }
            let calcular = pagar.substring(3).replace(',', '.');
            let calculado = descontoRs;
            let verificaRs = descontoRs.indexOf("R$");
                if(verificaRs === 0){
                    return 
                }
            if (calculado === "") {
                setDescontoPorRead(false);
                setDesconto('');
                setTotal("")
                return setPagar(totalCompra);
            }
            if (Number(calculado) > Number(calcular)) {
                setDescontoPor("")
                return alert("Desconto inválido")
            }
            setDescontoPorRead(true);
            let somaSe;
            let soma = calculado;
            somaSe = Number(desconto) + Number(soma);
            setDesconto(somaSe);
            soma = pagar.substring(3).replace(',', '.') - Number(soma);
            setPagar(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(soma)));
            setDescontoRs(Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(Number(calculado)));
        }
        if(event.keyCode=== 115){
          return toggle3(true);
        }
    }

    //#endregion

   
    //#endregion

    return (
        <>
            <Menu />
            <Jumbotron >
                <div className="content" autoFocus onKeyDown={uniKeyCode}>
                    <header className="cabecalho">
                        <h2>PAGANDO</h2>
                    </header>
                    {/* ----------------- INICIO DA TABELA DE PAGAMENTO  --------------- */}
                    <div className="conteudo1">
                        <div className="itens-compra1">
                            <FormGroup>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Tipo Pagamento</th>
                                            <th>Desconto </th>
                                            <th>Acrésimo</th>
                                            <th>Total</th>
                                            <th>Valor Pago</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Pagamento.map((index, id) => (
                                            <tr key={index.Id}>
                                                <th></th>
                                                <td>{index.TipoPagamento}</td>
                                                <td>{index.Desconto}</td>
                                                <td>{index.Acrescimo}</td>
                                                <td> {index.Total}</td>
                                                <td> {index.ValorPago} </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </FormGroup>
                        </div>
                    </div>
                    {/* ----------------- FIM DA TABELA DE PAGAMENTO  --------------- */}

                    {/* ----------------- INICIO DOS INPUT DEMONSTRATIVO DE VALORES NA TELA  --------------- */}
                    <div className="conteudo-compras">
                        <div className=" ml-5">
                            <Row>
                                <Col sm={6}>
                                <form onSubmit={handlerFormDescricao}>
                                    <label className="label-item1">VALOR TOTAL DA COMPRA</label>
                                    <input className="input-final" readOnly value={totalCompra} onKeyDown={uniKeyCode} />
                                </form>
                                </Col>
                                <Col sm={5}>
                                
                                <form onSubmit={handlerFormDescricao}>
                                    <label className="label-item1">QUANTIDADE DE ITENS</label>
                                    <input className="input-item1" readOnly value={localStorage.getItem('Item')} />
                                </form>
                            
                            </Col>
                            </Row>
                        </div>
                       
                        <div className=" ml-5">
                            <div className="">
                                <form onSubmit={handlerFormDescricao}>
                                    <label className="label-item1">VALOR TOTAL À PAGAR</label>
                                    <input className="input-item1"
                                        value={pagar}
                                        readOnly />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------- INICIO DOS INPUT DEMONSTRATIVO DE VALORES NA TELA  --------------- */}


                {     /*   ------------------- ESSE É O MODAL PRINCIPAL --------------------- */}
                <div>
                    <Modal backdrop={false} keyboard={false} autoFocus={false} isOpen={modal2} toggle={toggle2}>
                        <ModalHeader toggle={toggle2}>Recebimento</ModalHeader>
                        <ModalBody>

                            <Row className="mt-2">
                                <Col sm={3}>
                                    <Label className="mt-2 font-weight-bold"
                                        for="input-cliente">TOTAL LiQUIDO</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input type="text"
                                        readOnly={true}
                                        value={pagar}
                                        autoFocus
                                    > </Input>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col sm={3}>
                                    <Label className="mt-2 font-weight-bold"
                                        for="input-cliente"
                                    >DESCONTO R$</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input
                                    readOnly={descontoRsRead}
                                        className="input-descontoRS"
                                        type="text"
                                        value={descontoRs}
                                        onKeyDown={uniKeyCode6}
                                        onKeyPress={onlynumber}
                                        onChange={e => setDescontoRs(e.target.value)}> </Input>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col sm={3}>
                                    <Label className="mt-2 font-weight-bold" for="input-cliente">DESCONTO   %</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input
                                        readOnly={descontoPorRead}
                                        className="input-desconto"
                                        type="text"
                                        value={descontoPor}
                                        onKeyDown={uniKeyCode5}
                                        onKeyPress={onlynumber}
                                        onChange={e => setDescontoPor(e.target.value)}> </Input>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col sm={3}>
                                    <Label className="mt-2 font-weight-bold" for="input-cliente">ACRÉSCIMO</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input
                                        className="input-acrescimo"
                                        type="text"
                                        value={acresimo}
                                        onKeyDown={uniKeyCode4}
                                        placeholder="R$ 0,00"
                                        onKeyPress={onlynumber}
                                        onChange={e => setAcresimo(e.target.value)}> </Input>
                                </Col>
                            </Row>

                           

                            <Row className="mt-2">
                                <Col sm={3}>
                                    <Label className="mt-2 font-weight-bold" for="input-cliente">TIPO PGTO  R$</Label>
                                </Col>
                                <Col sm={8}>
                                     <Autocomplete
                                        aria-hidden="true"
                                        disableClearable
                                        id="custom-input-demo"
                                        options={dados1}
                                        onBlur={handlerFormDescricao}
                                        value={options}
                                        onChange={(event, newValue) => {
                                            setOptions(newValue);
                                        }}
                                        inputValue={tipoPgt}
                                        onInputChange={(event, newInputValue) => {
                                            setTipoPgt(newInputValue);
                                           
                                        }}
                                        onKeyDown={uniKeyCode3}
                                        renderInput={(params) => (
                                            <div ref={params.InputProps.ref}
                                            className="input-item-pesquisar">
                                                <input  
                                                 className="input-item-pagamento"                                       
                                                    spellCheck="true"
                                                    style={{ width: 300, height: 35 }}
                                                    type="text"
                                                    {...params.inputProps} />
                                            </div>
                                        )}
                                    />
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col sm={3}>
                                    <Label className="mt-2 font-weight-bold" for="input-cliente">PGTO R$</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input type="text"
                                        className="input-pgto"
                                        onKeyUp={contarDigitos}
                                        value={pgto}
                                        onKeyPress={onlynumber}
                                        onKeyDown={uniKeyCode2}
                                        placeholder="R$ 0,00"
                                        onChange={e => setPgto(e.target.value)}> </Input>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col sm={3}>
                                    <Label className="mt-2 font-weight-bold" for="input-cliente">TROCO   R$</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input type="text" readOnly={true} placeholder="R$ 0,00" > </Input>
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                        <Row>
                                
                                            
                           </Row>
                        </ModalFooter>
                    </Modal>
                   
                </div>
                {/*  ----------------------- FIM MODAL PRINCIPAL ---------------*/}

                {/* -------------------- INICIO DO MODAL DE PARCELAMENTO E FINALIZAR PAGAMENTO ----------------*/}
                <div>

                    
                    <Modal autoFocus={false} isOpen={modal3} toggle={toggle3}>
                        <ModalHeader toggle={toggle3}>Finalizar pagamento ?</ModalHeader>
                        <ModalBody>
                            <Label
                            >FINALIZAR PAGAMENTO?</Label>
                        </ModalBody>

                        <ModalFooter >
                            <Button className="botao-prosseguir"
                                color="primary"
                                autoFocus
                                onKeyDown={uniKeyCode1}

                            >Ok</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                {/* -------------- FIM DO MODAL DE PARCELAMENTO E FINALIZAR PAGAMENTO -------------*/}

            </Jumbotron>
            
        </>
    )
}

//developed by Diego && victor