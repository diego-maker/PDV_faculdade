import React from 'react'
import { AiOutlineArrowDown, AiOutlineCheck, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { BiArrowToLeft, BiArrowToRight, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { FiMinus } from 'react-icons/fi';
import { Col,Row, Input, Nav, NavItem, NavLink, TabContent, Table, TabPane } from 'reactstrap';
import classnames from 'classnames'
// OLHA SINCERAMENTE EU NÃO SEI NEM POR ONDE COMEÇAR, 
// EU ESTAVA PENSANDO EM IMPLEMENTAR UM OUTRO ESTILO E OUTRO FORMATO
// NO CASO SERIA DE NOTA FISCAL NF-E, SÓ QUE A FACULDADE / TRABALJO NÃO ME PERMITIU TEMPO DISPONIVEL PARA ISSO
// ENTÃO EU PAREI... DEIXEI AKI DISPONIVEL CASO VC QUERIA BRINCAR COM ALGUMA COISA... 
// MAS CREIO EU QUE ESTA 40% PRONTO, NÃO ESPERE MUITA COISA NÃO KKKK

export default function EndEntregas(props) {
    return (
        <>
            <div>
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
                        <Input className="input-grupo"></Input>
                    </Col>
                </div>
                <Nav tabs >
                    <NavItem className="pricipal-tab">
                        <NavLink
                            className={classnames({ active: props.activeTab8 === '26' })}
                            onClick={() => { props.toggle12245('26'); }}
                        >
                            Visão Genérica
                                                         </NavLink>
                    </NavItem>
                    <NavItem className="principal-tab">
                        <NavLink
                            className={classnames({ active: props.activeTab8 === '27' })}
                            onClick={() => { props.toggle12245('27'); }}
                        >
                            Visão Especifica
                                                         </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={props.activeTab8}>
                    <TabPane tabId="26">
                        <Table striped responsive>

                            <thead>
                                <tr>

                                    <th scope="col" className="id">ID Cliente X Entrega</th>
                                    <th scope="col" className="codigo">ID Cliente</th>
                                    <th scope="col" className="descricao2">End lougradouro</th>
                                    <th scope="col" className="unidade">End Numero</th>
                                    <th scope="col" className="saldo">End Andar</th>
                                    <th scope="col" className="saldo">End Complemento</th>
                                    <th scope="col" className="saldo">End Bairro</th>
                                    <th scope="col" className="saldo">End Cep</th>
                                    <th scope="col" className="saldo">End Cidade</th>
                                    <th scope="col" className="saldo">End UF</th>
                                    <th scope="col" className="saldo">CNPJ</th>
                                    <th scope="col" className="saldo">CPF</th>
                                    <th scope="col" className="saldo">ID Vendedor</th>
                                    <th scope="col" className="saldo">INSC Estadual</th>
                                    <th scope="col" className="saldo">Contato Entrega</th>
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
                                    <td>R$ 1.000,00</td>
                                    <td>20°</td>
                                    <td>R$</td>
                                    <td>Real</td>
                                    <td>R$ 1.000,00</td>
                                    <td>R$ 1.000,00</td>
                                </tr>
                            </tbody>
                        </Table>
                    </TabPane>
                    <TabPane tabId="27">
                        <Row className="ml-2 mt-2">
                            <Col sm={2}>
                                <label>Identificador</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                            <Col sm={4}>
                                <label>Razão Social</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                            <Col sm={4}>
                                <label>Logradouro</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2 ml-2">
                            <Col sm={1}>
                                <label>Numero</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                            <Col sm={5}>
                                <label>A/C (Aos cuidados)</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2 ml-2">
                            <Col sm={1}>
                                <label>Andar</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                            <Col sm={5}>
                                <label>Complemento</label>
                                <Input className="input-grupo" > </Input>
                            </Col>
                            <Col sm={4}>
                                <label>Bairro</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2 ml-2">
                            <Col sm={3}>
                                <label>CEP</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                            <AiOutlineArrowDown className="descricao-clicando ml-3 mt-4" size={30}></AiOutlineArrowDown>
                            <Col sm={4}>
                                <label>Cidade</label>
                                <Input className="input-grupo"></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2 ml-2">
                            <Col sm={1}>
                                <label>Uf</label>
                                <Input className="input-grupo"></Input>
                            </Col>
                            <label className="mt-4">Utilizar essa uf para Atribuir CFOPs</label>
                            <Col sm={1}>
                                <label>-</label>
                                <Input className="input-grupo"></Input>
                            </Col>
                            <Col sm={3}>
                                <label>CNPJ</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                            <Col sm={3}>
                                <label>Insc estadual</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2 ml-2">
                            <Col sm={3}>
                                <label>CPF</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                            <Col sm={1}>
                                <label>-</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                            <Col sm={4}>
                                <label>Vendedor</label>
                                <Input className="input-grupo" ></Input>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </>
    );
}