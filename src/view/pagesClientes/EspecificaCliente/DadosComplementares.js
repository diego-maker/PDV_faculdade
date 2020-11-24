
import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Col, Row, Input } from 'reactstrap';

// OLHA SINCERAMENTE EU NÃO SEI NEM POR ONDE COMEÇAR, 
// EU ESTAVA PENSANDO EM IMPLEMENTAR UM OUTRO ESTILO E OUTRO FORMATO
// NO CASO SERIA DE NOTA FISCAL NF-E, SÓ QUE A FACULDADE / TRABALJO NÃO ME PERMITIU TEMPO DISPONIVEL PARA ISSO
// ENTÃO EU PAREI... DEIXEI AKI DISPONIVEL CASO VC QUERIA BRINCAR COM ALGUMA COISA... 
// MAS CREIO EU QUE ESTA 40% PRONTO, NÃO ESPERE MUITA COISA NÃO KKKK

export default function DadosComplementares() {
    return (
        <div>
            <Row>
                <label className="mt-4 ml-2">Vendedor:</label>

                <Col sm={1}>

                    <Input className="input-grupo ml-2 mt-3 "></Input>
                </Col>
                <AiOutlineArrowDown className="descricao-clicando mt-4" size={30} />
                <Col sm={3}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
                <label className="mt-4 ml-2">Vend esclusivo:</label>
                <Col sm={1}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
                <label className="mt-4 ml-2">Representante:</label>
                <AiOutlineArrowDown className="descricao-clicando ml-1 mt-4" size={30} />
                <Col sm={2}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
            </Row>
            <Row>
                <label className="ml-2 mt-4">Lista de preço</label>:
                                                        <AiOutlineArrowDown className="descricao-clicando ml-1 mt-4" size={30} />
                <Col sm={1}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
                <label className="ml-2 mt-4">Conta Centro custo</label>:
                                                        <AiOutlineArrowDown className="descricao-clicando ml-1 mt-4" size={30} />
                <Col sm={2}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>


                <label className="ml-5 mt-4">Indicação</label>
                <Col sm={1} >
                    <Input className="input-grupo mt-3"></Input>
                </Col>
                <AiOutlineArrowDown className="descricao-clicando ml-1 mt-4" size={30} />
                <Col sm={3}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>

            </Row>

            <Row className="ml-2">
                <label className="ml-5 mt-4">ICMS:</label>
                <Col sm={2}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
                <label className="ml-4 mt-4">Centro de Custo:</label>
                <Col sm={1}>
                    <Input className="input-grupo mt-3" style={{ marginLeft: 3 }}></Input>
                </Col>
                <AiOutlineArrowDown className="descricao-clicando ml-1 mt-4" size={30} />
                <Col sm={5}>
                    <Input style={{ marginLeft: 6 }} className="input-grupo mt-3"></Input>
                </Col>
            </Row>
            <Row >
                <label className="ml-2 mt-4">Cadastrado em:</label>
                <Col sm={2}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
                <label className="ml-4 mt-4">País</label>
                <Col sm={1}>
                    <Input className="input-grupo mt-3" ></Input>
                </Col>
                <AiOutlineArrowDown className="descricao-clicando mt-4" size={30} />
                <Col sm={5}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
            </Row>
            <Row >
                <label className="ml-2 mt-4">Data ultm mov</label>
                <Col sm={2}>
                    <Input className="input-grupo mt-3" style={{ marginLeft: 6 }}></Input>
                </Col>
                <label className="ml-4 mt-4">Setor (Tabela):</label>
                <Col sm={1}>
                    <Input className=" input-grupo mt-3" style={{ marginLeft: 6 }}></Input>
                </Col>
                <AiOutlineArrowDown className="descricao-clicando ml-1 mt-4" size={30} />
                <Col sm={5}>
                    <Input style={{ marginLeft: 6 }} className="input-grupo mt-3"></Input>
                </Col>
            </Row>
            <Row >

                <Col sm={2}>

                </Col>

                <label className="mt-4">Condição de Pagamento</label>
                <Col sm={1}>
                    <Input className="input-grupo mt-3" style={{ marginLeft: 6 }}></Input>
                </Col>
                <AiOutlineArrowDown className="descricao-clicando ml-1 mt-4" size={30} />
                <Col sm={5}>
                    <Input style={{ marginLeft: 6 }} className="input-grupo mt-3"></Input>
                </Col>
            </Row>
            <Row >
                <label className="ml-2 mt-4">Bloqueado:</label>
                <Col sm={1}>
                    <Input className="input-grupo mt-3" style={{ marginLeft: 6 }}></Input>
                </Col>
                <label className="ml-4 mt-4">Setor (Digitável):</label>
                <Col sm={3}>
                    <Input className="input-grupo mt-3" style={{ marginLeft: 6 }}></Input>
                </Col>
                <label className="mt-4">Cadastrado por:</label>
                <Col sm={3}>
                    <Input style={{ marginLeft: 6 }} className="input-grupo mt-3"></Input>
                </Col>
            </Row>
            <hr className="ml-2 mr-2"></hr>
            <Row>
                <label className="ml-5 mt-4">Classificação</label>:
                                                        <AiOutlineArrowDown className="descricao-clicando ml-1 mt-4" size={30} />
                <Col sm={1}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
                <label className="ml-4 mt-4">Atualizado em:</label>:

                                                        <Col sm={2}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
                <label className="ml-4 mt-4">Atualizado por:</label>:

                                                       <Col className="ml-3" sm={2}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
            </Row>
            <Row>
                <label className="ml-2 mt-4">Limite de compras:</label>:
                                                        <AiOutlineArrowDown className="descricao-clicando ml-1 mt-4" size={30} />
                <Col sm={1}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
                <label className="ml-4 mt-4">Valor minimo do pedido:</label>:

                                                        <Col sm={2}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
                <div className="ml-5 border">
                    <label className="ml-4">Classe</label>

                    <Col>
                        <input type="radio"></input>
                        <label className="ml-1">Cliente</label>
                    </Col>
                    <Col >
                        <input type="radio"></input>
                        <label className="ml-1">Marketing</label>
                    </Col>
                </div>
            </Row>

            <Row >
                <Col sm={4}>
                    <label className="mt-4">Obs. Complementares</label>
                    <Input type="input-grupo textarea"></Input>
                </Col>
                <Col sm={4}>
                    <label className="mt-4">Obs. Interesse contribuinte (nas NFEs)</label>
                    <Input type="input-grupo textarea"></Input>
                </Col>

                <label className="mt-4">Revenda (S/N)</label>
                <Col sm={1}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>

            </Row>
            <Row>
                <label className="mt-4 ml-2">Numeros de dias para protesto</label>
                <Col sm={1}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
                <label className="mt-4">Efet. pagamento tarifa bancária</label>
                <Col sm={1}>
                    <Input className="input-grupo mt-3"></Input>
                </Col>
                <label className="mt-4">Caminho do arquivo</label>
                <Col sm={4}>
                    <Input className=" input-grupo mt-4" type="file"></Input>
                </Col>
            </Row>
        </div>
    );
}