import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BiFont } from 'react-icons/bi';
import { Col, Row, Input } from 'reactstrap';

export default function DadosTributarios() {
    return (
        <>
            <div>
                <label className="mt-2 ml-2 font-weight-bold">Regime de tributação</label>
                <Row>
                    <Col sm={1}>
                        <Input className=" input-grupo ml-2"></Input>
                    </Col>
                    <AiOutlineArrowDown className="descricao-clicando mt-1" size={30}></AiOutlineArrowDown>
                    <Col sm={4}>
                        <Input className="input-grupo"></Input>
                    </Col>
                    <label className="mt-1">Tem aliq req icms diferenciada?</label>

                    <input className="mt-1 ml-1 mr-1" type="checkbox"></input>

                    <label className="mt-1">Tem redução ou diferenciamento do ICMS?</label>

                    <input className="mt-1 text-center" type="checkbox"></input>
                    <div className="border ml-1">
                        <label className=" ml-2 ">É revenda (S/N)</label>
                        <input className="mr-2 mt-1 text-center" style={{ width: 30 }}></input>
                    </div>
                </Row>

                <Row className="mt-2 ml-2 mr-2" >
                    <div className="border">
                        <Row className="mt-1">
                            <label className=" font-weight-bold ml-3 mt-1" >Requer substituição tributária</label>
                        </Row>
                        <label className="mt-1 ml-1 mr-1">Para mercadorias nacionais (0)</label>
                        <input className="ml-1 text-center" style={{ width: 30 }}></input>
                        <label className="mt-1 ml-1 mr-1">Para mercadorias estrangeiras com importação direta (1)</label>
                        <input className="ml-1 text-center" style={{ width: 30 }}></input>
                        <label className="mt-1 ml-1 mr-1">Para mercadorias estrangeiras adquirida no mercado interno (2)</label>
                        <input className="ml-1 text-center" style={{ width: 30 }}></input>
                    </div>
                </Row>
                <Row className="mt-2 ml-2 mr-2" >
                    <div className="border">
                        <Row className="mt-1">
                            <label className=" font-weight-bold ml-3 mt-1" >Aliq diferenciadas PIS/ICMS</label>
                        </Row>
                        <label className="mt-1 ml-1 mr-1">Para mercadorias nacionais (0)-</label>

                        <label className="mt-1 ml-1 mr-1">Para mercadorias estrangeiras com importação direta (1)-</label>

                        <label className="mt-1 ml-1 mr-1">Para mercadorias estrangeiras adquirida no mercado interno (2)-</label>
                        <input className="ml-1 text-center" style={{ width: 30 }}></input>
                    </div>
                </Row>
                <Row>
                    <label className="ml-4 mt-4">Suframa</label>
                    <Col sm={3}>
                        <Input className="input-grupo mt-2"></Input>
                    </Col>

                    <label className="ml-4 mt-4" >É consumidor final (S/N)</label>

                    <input style={{ width: 30 }} className="mt-4 mr-1 text-center"></input>

                    <label className="mt-4">Estimativa simplificada CNAE MT</label>
                    <Col sm={1}>
                        <Input className="input-grupo mt-2"></Input>
                    </Col>
                </Row>
                <Row>
                    <label className="mt-4 ml-4">Permite aprovação de crédito</label>
                    <input className="mt-4 mr-1 text-center" style={{ width: 30 }}></input>
                    <label className="mt-4">É contribuinte de ICMS</label>
                    <input className="mt-4 text-center" style={{ width: 30 }}></input>
                </Row>
                <hr className="ml-3 mr-3"></hr>
                <Row className="mt-2  mr-2" >

                    <Col sm={2}>
                        <Row className="mt-1">
                            <label className=" font-weight-bold ml-4 mt-1" >Dados consultado no sefaz</label>
                        </Row>
                        <label className="mt-1 ml-2 mr-1">Situação cadastral do contribuinte</label>

                        <Input className="input-grupo ml-2 " ></Input>
                    </Col>
                    <Col sm={3}>
                        <Row className="mt-2">

                        </Row>
                        <label className="mt-2 ml-1 mr-1">Idincador de contribuinte credenciado a emitir NF-e</label>

                        <Input className="input-grupo ml-1" type="textarea" ></Input>
                    </Col>
                    <Col sm={3}>
                        <Row className="mt-2">

                        </Row>
                        <label className="mt-2 ml-1 mr-1">Idincador de contribuinte credenciado a emitir CT-e</label>

                        <Input className=" input-grupo ml-1" type="textarea" ></Input>
                    </Col>
                    <Col className="mt-5" sm={4}>
                        <label>Regime de apuração do ICMS</label>
                        <Input className="input-grupo"></Input>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col sm={4}>
                        <label className="ml-2">Data Cadastro</label>
                        <Input className="input-grupo ml-2" type="date"></Input>
                    </Col>
                    <Col sm={4}>
                        <label className="ml-2">CNAE</label>
                        <Input className=" input-grupo ml-2" ></Input>
                    </Col>
                    <label className="mt-4">Calcular tributação FCP para CST 00</label>
                    <input className="mt-3" style={{ width: 30, height: 30 }}></input>
                    <BiFont className="descricao-clicando mt-3" size={30}></BiFont>
                </Row>
            </div>
        </>
    );
}