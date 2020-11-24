
import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane, Input } from 'reactstrap';
import classnames from 'classnames';


export default function EspecificaCliente1(props) {
    return (
        <div>
            <Row>
                <Col className="mt-1" sm={2}>
                    <label>Código</label>
                    <Input className="input-grupo" placeholder="244"></Input>
                </Col>
                <Col className="mt-1 ml-2" sm={5}>
                    <label>Razão social</label>
                    <Input className="input-grupo" ></Input>
                </Col>
                <Col className="mt-1 ml-2" sm={3}>
                    <label>Fantasia</label>
                    <Input className="input-grupo" ></Input>
                </Col>
            </Row>
            <Row className="mt-1">
                <Col className="mt-1" sm={4}>
                    <label>Pessoa p/ contato</label>
                    <Input className="input-grupo" ></Input>
                </Col>
                <Col className="mt-1 ml-1" sm={4}>
                    <label>Cargo</label>
                    <Input className="input-grupo" ></Input>
                </Col>

                <div className="border">
                    <label className="ml-4">Situação</label>

                    <Col>
                        <input type="radio"></input>
                        <label className="ml-1">Ativo</label>
                    </Col>
                    <Col >
                        <input type="radio"></input>
                        <label className="ml-1">Inativo</label>
                    </Col>

                </div>
            </Row>
            <Row className="mt-1">
                <Col sm={2}>
                    <label>CPF</label>
                    <Input className="input-grupo" placeholder="000.000.000-00"></Input>
                </Col>
                <Col sm={2}>
                    <label>CNPJ</label>
                    <Input className="input-grupo" placeholder="000.000.000-00"></Input>
                </Col>
                <Col sm={2}>
                    <label>Incrição estadual</label>
                    <Input className="input-grupo" ></Input>
                </Col>
                <Col sm={1}>
                    <label>-</label>
                    <Input className="input-grupo"></Input>
                </Col>

                <AiOutlineArrowDown className="descricao-clicando mt-4" size={20}></AiOutlineArrowDown>


                <Col sm={2}>
                    <label >Segmento (Ramo atividade)</label>
                    <Input className="input-grupo" ></Input>
                </Col>
                <Col sm={2}>
                    <label>Inscrição Municipal</label>
                    <Input className="input-grupo" ></Input>
                </Col>
            </Row>
            <Row className="ml-1">
                <Nav className="mt-1  border" tabs>
                    <NavItem className="principal-tab">
                        <NavLink className={classnames({ active: props.activeTab3 === '16' })}
                            onClick={() => { props.toggle10('16'); }} >Endereço</NavLink>
                    </NavItem>
                    <NavItem className="principal-tab">
                        <NavLink className={classnames({ active: props.activeTab3 === '17' })}
                            onClick={() => { props.toggle10('17'); }} >Cobrança</NavLink>
                    </NavItem>
                    <NavItem className="principal-tab">
                        <NavLink className={classnames({ active: props.activeTab3 === '18' })}
                            onClick={() => { props.toggle10('18'); }} >Entrega</NavLink>
                    </NavItem>
                </Nav>
            </Row>
            <TabContent activeTab={props.activeTab3}>
                {/* --------------------------------------------- TABS ESPECIFICA, ENDEREÇO/COBRANÇA/ ENTREGA -------------------------------------------------------------------------------------------*/}
                <TabPane tabId="16">
                    <div className="especificando-bac">
                        <label className="font-weight-bold">Endereço</label>
                        <hr></hr>
                        <Row>
                            <Col sm={2}>
                                <label className="ml-2 mr-1 mt-1">Tipo Logr:</label>
                                <Input></Input>
                            </Col>
                            <Col sm={4}>
                                <label className="ml-2 mr-1 mt-1">Logradouro</label>
                                <Input></Input>
                            </Col>
                            <Col sm={2}>
                                <label className="ml-3 mr-1 mt-1">Número</label>
                                <Input></Input>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm={2}>
                                <label className="ml-4 mr-1 mt-1">Andar</label>
                                <Input></Input>
                            </Col>
                            <Col sm={4}>
                                <label className="ml-4 mr-1 mt-1">Complemento</label>
                                <Input></Input>
                            </Col>

                        </Row>
                        <Row className="mt-3">
                            <Col sm={2}>
                                <label className="ml-4 mr-1 mt-1">Bairro</label>
                                <Input></Input>
                            </Col>
                            <Col sm={2}>
                                <label className="ml-5 mr-1 mt-1">CEP</label>
                                <Input></Input>
                            </Col>
                            <Col sm={3}>
                                <label className="ml-5 mr-1 mt-1">Cidade</label>
                                <Input></Input>
                            </Col>

                            <AiOutlineArrowDown className=" descricao-clicando mt-4 ml-2" size={20}></AiOutlineArrowDown>
                            <Col sm={1}>
                                <label className="ml-1 mr-1 mt-1">UF</label>
                                <Input></Input>
                            </Col>
                            

                        </Row>
                        <Row className="mt-2">
                        <Col sm={3}>
                            <label>Telefone:</label>
                            <Input ></Input>
                        </Col>
                        <Col sm={3}>
                            <label>Celular:</label>
                            <Input  ></Input>
                        </Col>

                    </Row>
                    
                    <Row className="mt-2">
                        <Col sm={5}>
                            <label>E-mail:</label>
                            <Input  ></Input>
                        </Col>

                    </Row>
                    </div>
                </TabPane>
                <TabPane tabId="17">
                    <div className="especificando-bac">
                        <label className="font-weight-bold" >Endereço de Cobrança</label>
                        <hr></hr>
                        <Row>
                            <Col sm={2}>
                                <label className="ml-2 mr-1 mt-1">Tipo Logr:</label>
                                <Input></Input>
                            </Col>
                            <Col sm={4}>
                                <label className="ml-2 mr-1 mt-1">Logradouro</label>
                                <Input></Input>
                            </Col>
                            <Col sm={2}>
                                <label className="ml-3 mr-1 mt-1">Número</label>
                                <Input></Input>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm={2}>
                                <label className="ml-4 mr-1 mt-1">Andar</label>
                                <Input></Input>
                            </Col>
                            <Col sm={4}>
                                <label className="ml-4 mr-1 mt-1">Complemento</label>
                                <Input></Input>
                            </Col>

                        </Row>
                        <Row className="mt-3">
                            <Col sm={2}>
                                <label className="ml-4 mr-1 mt-1">Bairro</label>
                                <Input></Input>
                            </Col>
                            <Col sm={2}>
                                <label className="ml-5 mr-1 mt-1">CEP</label>
                                <Input></Input>
                            </Col>
                            <Col sm={3}>
                                <label className="ml-5 mr-1 mt-1">Cidade</label>
                                <Input></Input>
                            </Col>

                            <AiOutlineArrowDown className="mt-4 ml-2" size={20}></AiOutlineArrowDown>
                            <Col sm={1}>
                                <label className="ml-1 mr-1 mt-1">UF</label>
                                <Input></Input>
                            </Col>


                        </Row>
                        <Row>
                            <Col sm={2}>
                                <label className="ml-1 mr-1 mt-1">CNPJ</label>
                                <Input></Input>
                            </Col>
                            <Col sm={4}>
                                <label className="ml-1 mr-1 mt-1">Insc estadual</label>
                                <Input></Input>
                            </Col>
                            <Col sm={2}>
                                <label className="ml-1 mr-1 mt-1">Insc estadual</label>
                                <Input></Input>
                            </Col>
                        </Row>
                    </div>
                </TabPane>
                <TabPane tabId="18">
                    <div className="especificando-bac">
                        <label className="font-weight-bold">Endereço </label>
                        <hr></hr>
                        <Row>
                            <Col sm={8}>
                                <label className="ml-2 mr-1 mt-1">Razão social:</label>
                                <Input></Input>
                            </Col>

                        </Row>
                        <Row>
                            <Col sm={2}>
                                <label className="ml-2 mr-1 mt-1">Tipo Logr:</label>
                                <Input></Input>
                            </Col>
                            <Col sm={4}>
                                <label className="ml-2 mr-1 mt-1">Logradouro</label>
                                <Input></Input>
                            </Col>
                            <Col sm={2}>
                                <label className="ml-3 mr-1 mt-1">Número</label>
                                <Input></Input>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm={2}>
                                <label className="ml-4 mr-1 mt-1">Andar</label>
                                <Input></Input>
                            </Col>
                            <Col sm={4}>
                                <label className="ml-4 mr-1 mt-1">Complemento</label>
                                <Input></Input>
                            </Col>

                        </Row>
                        <Row className="mt-3">
                            <Col sm={2}>
                                <label className="ml-4 mr-1 mt-1">Bairro</label>
                                <Input></Input>
                            </Col>
                            <Col sm={2}>
                                <label className="ml-5 mr-1 mt-1">CEP</label>
                                <Input></Input>
                            </Col>
                            <Col sm={3}>
                                <label className="ml-5 mr-1 mt-1">Cidade</label>
                                <Input></Input>
                            </Col>

                            <AiOutlineArrowDown className="mt-4 ml-2" size={20}></AiOutlineArrowDown>
                            <Col sm={1}>
                                <label className="ml-1 mr-1 mt-1">UF</label>
                                <Input></Input>
                            </Col>


                        </Row>
                        <Row>
                            <Col sm={2}>
                                <label className="ml-1 mr-1 mt-1">CNPJ</label>
                                <Input></Input>
                            </Col>
                            <Col sm={4}>
                                <label className="ml-1 mr-1 mt-1">Insc estadual</label>
                                <Input></Input>
                            </Col>
                            <Col sm={2}>
                                <label className="ml-1 mr-1 mt-1">Insc estadual</label>
                                <Input></Input>
                            </Col>
                        </Row>
                    </div>
                </TabPane>
                <hr className="ml-2 mr-2"></hr>
                <div className="mt-3">
                   
                   
                    
                </div>
            </TabContent>

        </div>
    );
}