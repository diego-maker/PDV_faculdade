import React from 'react'
import { AiOutlineArrowDown, AiOutlineCheck, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { BiArrowToLeft, BiArrowToRight, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { FiMinus } from 'react-icons/fi';
import { GiMoneyStack } from 'react-icons/gi';
import { ImFilter, ImPrinter } from 'react-icons/im';
import { Col, Input, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane } from 'reactstrap';
import classnames  from 'classnames'

export default function MovFinaceira( props) {
    return (
        <>
            <div className="border p-3 d-flex justify-content-left">
                <BiArrowToLeft className="descricao-clicando mt-2  ml-1" size={20}></BiArrowToLeft>
                <BiLeftArrowAlt className="descricao-clicando mt-2  ml-1" size={20}></BiLeftArrowAlt>
                <BiRightArrowAlt className="descricao-clicando mt-2  ml-1" size={20}></BiRightArrowAlt>
                <BiArrowToRight className="descricao-clicando mt-2  ml-1" size={20}></BiArrowToRight>
                <AiOutlinePlus className="descricao-clicando mt-2 ml-1" size={19}></AiOutlinePlus>
                <FiMinus className="descricao-clicando mt-2 ml-1" size={19}></FiMinus>
                <AiOutlineCheck className="descricao-clicando mt-2 m-1 " size={19}></AiOutlineCheck>
                <AiOutlineClose className="descricao-clicando mt-2 ml-1" size={19}></AiOutlineClose>
                <Col sm={4}>
                    <Input className="input-grupo" ></Input>
                </Col>
                <label className="mt-2">Saldo atual:</label>
                <Col sm={2}>
                    <Input className="input-grupo"></Input>
                </Col>
                <ImFilter className="descricao-clicando ml-2 mt-2" size={19}></ImFilter>
                <ImPrinter className="descricao-clicando ml-2 mt-2" size={19}></ImPrinter>
                <GiMoneyStack className="descricao-clicando ml-2 mt-2" size={23}></GiMoneyStack>
            </div>
            <Row className="mt-2">
                <label className="ml-3 mt-2">Saldo atual:</label>
                <Col sm={8}>
                    <Input className="input-grupo" ></Input>
                </Col>
            </Row>
            <Row className="mt-2">
                <Nav tabs>
                    <NavItem className="principal-tab">
                        <NavLink className={classnames({ active: props.activeTab5 === '19' })}
                            onClick={() => { props.toggle12('19'); }} >Visão Genérica</NavLink>
                    </NavItem>
                    <NavItem className="principal-tab">
                        <NavLink className={classnames({ active: props.activeTab5 === '20' })}
                            onClick={() => { props.toggle12('20'); }} >Visão Específica</NavLink>
                    </NavItem>
                </Nav>
            </Row>
            <TabContent activeTab={props.activeTab5}>
                <TabPane tabId="19">
                    <Table striped responsive>

                        <thead>
                            <tr>
                                <th scope="col" className="input">Data</th>
                                <th scope="col" className="id">Tipo</th>
                                <th scope="col" className="codigo">Moeda</th>
                                <th scope="col" className="descricao2">Saldo anterior</th>
                                <th scope="col" className="unidade">Valor Movimentado</th>
                                <th scope="col" className="saldo">Saldo atual</th>
                                <th scope="col" className="saldo">Pedido</th>
                                <th scope="col" className="saldo">Usuário</th>
                                <th scope="col" className="saldo">Observações</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td >2</td>
                                <td>20°</td>
                                <td>20°</td>
                                <td>R$</td>
                                <td>Real</td>
                                <td>R$ 1.000,00</td>
                                <td>R$ 1.000,00</td>
                                <td>R$ 1.000,00</td>
                                <td>R$ 1.000,00</td>
                            </tr>
                            <tr>

                                <td >2</td>
                                <td>20°</td>
                                <td>20°</td>
                                <td>R$</td>
                                <td>Real</td>
                                <td>R$ 1.000,00</td>
                                <td>R$ 1.000,00</td>
                                <td>R$ 1.000,00</td>
                                <td>R$ 1.000,00</td>


                            </tr>
                        </tbody>
                    </Table>
                </TabPane>
                <TabPane tabId="20">
                    <div >
                        <Row className="mt-2">

                            <Col sm={5}>
                                <label>Identificador:</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                            <Col sm={5}>
                                <label>Data:</label>
                                <Input className="input-grupo"  ></Input>
                            </Col>
                            <Col className="mt-2" sm={8}>
                                <AiOutlineArrowDown className="descricao-clicando mr-2" size={20}></AiOutlineArrowDown>
                                <label>Tipo de movimento:</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col sm={5}>
                                <label>Valor Movimentado:</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                            <Col sm={5}>
                                <label>Pedido:</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col sm={5}>
                                <label>Observações:</label>
                                <Input className="input-grupo" type="textarea"></Input>
                            </Col>
                            <Col sm={5}>
                                <label>Operador:</label>
                                <Input className="input-grupo"></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col sm={10}>
                                <label>Origem Lançamento:</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                        </Row>
                    </div>
                </TabPane>
            </TabContent>
        </>
    );
}