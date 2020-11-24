import React from 'react'
import { AiOutlineArrowDown, AiOutlineCheck, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { BiArrowToLeft, BiArrowToRight, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { FiMinus } from 'react-icons/fi';
import { GoTools } from 'react-icons/go';
import { ImFilter } from 'react-icons/im';
import { Col, Input, Nav, NavItem,Row, NavLink, TabContent, Table, TabPane } from 'reactstrap';
import classnames from 'classnames'

// OLHA SINCERAMENTE EU NÃO SEI NEM POR ONDE COMEÇAR, 
// EU ESTAVA PENSANDO EM IMPLEMENTAR UM OUTRO ESTILO E OUTRO FORMATO
// NO CASO SERIA DE NOTA FISCAL NF-E, SÓ QUE A FACULDADE / TRABALJO NÃO ME PERMITIU TEMPO DISPONIVEL PARA ISSO
// ENTÃO EU PAREI... DEIXEI AKI DISPONIVEL CASO VC QUERIA BRINCAR COM ALGUMA COISA... 
// MAS CREIO EU QUE ESTA 40% PRONTO, NÃO ESPERE MUITA COISA NÃO KKKK



export default function Contatos(props) {
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

                <ImFilter className="descricao-clicando ml-4 mt-2" size={25}></ImFilter>
                <GoTools className="descricao-clicando ml-2 mt-2" size={25} ></GoTools>
                <Col sm={4}>
                    <Input className="input-grupo" ></Input>
                </Col>
            </div>
            <Nav tabs>
                <NavItem className="principal-tab">
                    <NavLink className={classnames({ active: props.activeTab6 === '21' })}
                        onClick={() => { props.toggle122('21'); }} >Genérica</NavLink>
                </NavItem>
                <NavItem className="principal-tab">
                    <NavLink className={classnames({ active: props.activeTab6 === '22' })}
                        onClick={() => { props.toggle122('22'); }} >Especifica</NavLink>
                </NavItem>
                <NavItem className="principal-tab">
                    <NavLink className={classnames({ active: props.activeTab6 === '23' })}
                        onClick={() => { props.toggle122('23'); }} >Pessoas para contato</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={props.activeTab6}>
                <TabPane tabId='21'>
                    <Table striped responsive>

                        <thead>
                            <tr>
                                <th scope="col" className="id">ID Cliente Contato</th>
                                <th scope="col" className="codigo">ID Cliente</th>
                                <th scope="col" className="descricao2">ID Usuario</th>
                                <th scope="col" className="unidade">Pessoa Contatada</th>
                                <th scope="col" className="saldo">Data</th>
                                <th scope="col" className="saldo">Hora</th>
                                <th scope="col" className="saldo">Status</th>
                                <th scope="col" className="saldo">Obs</th>
                                <th scope="col" className="saldo">ID vendedor</th>
                                <th scope="col" className="saldo">Valor orçado</th>
                                <th scope="col" className="saldo">Valor Vendido</th>
                                <th scope="col" className="saldo">Valor Vendido</th>
                                <th scope="col" className="saldo">Contato Telefone</th>
                                <th scope="col" className="saldo">Contato Visita</th>
                                <th scope="col" className="saldo">Contato Email</th>
                                <th scope="col" className="saldo">Email</th>
                                <th scope="col" className="saldo"> Telefone</th>
                                <th scope="col" className="saldo">Celular</th>
                                <th scope="col" className="saldo">Cargo</th>
                                <th scope="col" className="saldo">Data Prox Lig</th>
                                <th scope="col" className="saldo">ID Avaliação positiva </th>
                                <th scope="col" className="saldo">ID Avaliação negativa </th>
                                <th scope="col" className="saldo">Hora Prox Lig</th>

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
                                <td>R$ 1.000,00</td>
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
                                <td>R$ 1.000,00</td>
                                <td>R$ 1.000,00</td>
                                <td>R$ 1.000,00</td>

                            </tr>
                        </tbody>
                    </Table>
                </TabPane>
                <TabPane tabId='22'>
                    <div>

                        <Row className="mt-2 ml-2">

                            <Col sm={2}>
                                <label className="mt-2">Identificador</label>
                                <Input></Input>
                            </Col>
                            <Col sm={5}>
                                <label className="mt-2">-</label>
                                <Input ></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2 ml-2">

                            <Col sm={2}>
                                <label className="mt-2">Vendedor:</label>
                                <Input></Input>
                            </Col>
                            <AiOutlineArrowDown className="descricao-clicando mt-1 " size={30} />
                            <Col sm={5}>
                                <label className="mt-2">-</label>
                                <Input></Input>
                            </Col>
                        </Row>

                        <Row className="mt-2 ml-2">

                            <Col sm={2}>
                                <label className="mt-2">Avaliação Positiva:</label>
                                <Input></Input>
                            </Col>
                            <AiOutlineArrowDown className="descricao-clicando mt-1 " size={30} />
                            <Col sm={5}>
                                <label className="mt-2">-</label>
                                <Input></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2 ml-2">

                            <Col sm={2}>
                                <label className="mt-2">Avaliação Negativa:</label>
                                <Input></Input>
                            </Col>
                            <AiOutlineArrowDown className="descricao-clicando mt-1 " size={30} />
                            <Col sm={5}>
                                <label className="mt-2">-</label>
                                <Input></Input>
                            </Col>
                        </Row>

                        <Row className="mt-2 ml-2">

                            <Col sm={2}>
                                <label className="mt-2">Avaliação Negativa:</label>
                                <Input></Input>
                            </Col>
                            <AiOutlineArrowDown className="descricao-clicando mt-1 " size={30} />
                            <Col sm={5}>
                                <label className="mt-2">-</label>
                                <Input></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2 ml-2">

                            <Col sm={2}>
                                <label className="mt-2">Valor Vendido:</label>
                                <Input></Input>
                            </Col>

                            <Col sm={2}>
                                <label className="mt-2">Usuário:</label>
                                <Input></Input>
                            </Col>

                            <Col sm={2}>
                                <label className="mt-2">Data:</label>
                                <Input></Input>
                            </Col>

                            <Col sm={2}>
                                <label className="mt-2">Hora:</label>
                                <Input></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2 ml-2">

                            <Col sm={2}>
                                <label className="mt-2">Telefone Fixo:</label>
                                <Input></Input>
                            </Col>

                            <Col sm={6}>
                                <label className="mt-2">Cargo:</label>
                                <Input></Input>
                            </Col>

                        </Row>
                        <Row className="ml-2 mt-2">

                            <Col sm={10}>
                                <label className="mt-2">Pessoa Contatada</label>
                                <Input></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2 ml-2">

                            <Col sm={2}>
                                <label className="mt-2">Valor Orçado:</label>
                                <Input></Input>
                            </Col>

                            <Col sm={2}>
                                <label className="mt-2">Status:</label>
                                <Input></Input>
                            </Col>

                            <Col sm={3}>
                                <label className="mt-2">Email:</label>
                                <Input></Input>
                            </Col>
                        </Row>
                        <Row className="mt-2 ml-2">

                            <Col sm={2}>
                                <label className="mt-2">Telefone Celular:</label>
                                <Input></Input>
                            </Col>

                            <Col sm={2}>
                                <label className="mt-2">Data Prox Ligação:</label>
                                <Input></Input>
                            </Col>

                            <Col sm={2}>
                                <label className="mt-2">Hora Prox Ligação:</label>
                                <Input></Input>
                            </Col>

                        </Row>
                        <Row className="mt-2 ml-2">

                            <Col sm={8}>
                                <label className="mt-2">Obs:</label>
                                <Input type="textarea"></Input>
                            </Col>
                        </Row>
                    </div>
                    <label className="font-weight-bold ml-3 mt-3">Tipo de contato</label>
                    <div className=" border p-3 d-flex justify-content-left">

                        <Col sm={1}>
                            <Input type="checkbox"></Input>
                            <label >Telefone</label>
                        </Col>
                        <Col sm={1} className="ml-2">
                            <Input type="checkbox"></Input>
                            <label>Visita</label>
                        </Col>


                        <Col sm={1} className="ml-2">
                            <Input type="checkbox"></Input>
                            <label>Email</label>
                        </Col>


                    </div>
                </TabPane>
                <TabPane tabId="23">
                    <div className=" p-3 d-flex justify-content-left">
                        <BiArrowToLeft className="descricao-clicando mt-2  ml-1" size={20}></BiArrowToLeft>
                        <BiLeftArrowAlt className="descricao-clicando mt-2  ml-1" size={20}></BiLeftArrowAlt>
                        <BiRightArrowAlt className="descricao-clicando mt-2  ml-1" size={20}></BiRightArrowAlt>
                        <BiArrowToRight className="descricao-clicando mt-2  ml-1" size={20}></BiArrowToRight>
                        <AiOutlinePlus className="descricao-clicando mt-2 ml-1" size={19}></AiOutlinePlus>
                        <FiMinus className="descricao-clicando mt-2 ml-1" size={19}></FiMinus>
                        <AiOutlineCheck className="descricao-clicando mt-2 m-1 " size={19}></AiOutlineCheck>
                        <AiOutlineClose className="descricao-clicando mt-2 ml-1" size={19}></AiOutlineClose>
                    </div>
                    <Nav tabs>
                        <NavItem className="principal-tab">
                            <NavLink
                                className={classnames({ active: props.activeTab7 === '24' })}
                                onClick={() => { props.toggle1224('24'); }}
                            >
                                Visão Genérica
                                                                          </NavLink>
                        </NavItem>
                        <NavItem className="principal-tab">
                            <NavLink
                                className={classnames({ active: props.practiveTab7 === '25' })}
                                onClick={() => { props.toggle1224('25'); }}
                            >
                                Visão Especifica
                                                                          </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={props.activeTab7}>
                        <TabPane tabId='24'>
                            <Table striped responsive>

                                <thead>
                                    <tr>

                                        <th scope="col" className="id">ID Clientes Pessoa p/ Contato</th>
                                        <th scope="col" className="codigo">ID Cliente</th>
                                        <th scope="col" className="descricao2">Nome Departamento</th>
                                        <th scope="col" className="unidade">Fone</th>
                                        <th scope="col" className="saldo">ID Nextel </th>
                                        <th scope="col" className="saldo">Email</th>

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


                                    </tr>
                                    <tr>

                                        <td >2</td>
                                        <td>20°</td>
                                        <td>20°</td>
                                        <td>R$</td>
                                        <td>Real</td>
                                        <td>R$ 1.000,00</td>


                                    </tr>
                                </tbody>
                            </Table>
                        </TabPane>
                        <TabPane tabId='25'>
                            <Row className="ml-2">
                                <Col sm={2}>
                                    <label>Identificador:</label>
                                    <Input></Input>
                                </Col>
                                <Col sm={4}>
                                    <label>Departamento:</label>
                                    <Input></Input>
                                </Col>
                                <Col sm={3}>
                                    <label>Telefone:</label>
                                    <Input></Input>
                                </Col>
                            </Row>
                            <Row className="ml-2">
                                <Col sm={2}>
                                    <label>Nextel:</label>
                                    <Input></Input>
                                </Col>
                                <Col sm={4}>
                                    <label>Email:</label>
                                    <Input></Input>
                                </Col>

                            </Row>
                        </TabPane>

                    </TabContent>


                </TabPane>
            </TabContent>
        </>
    );
}