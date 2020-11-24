import React from 'react'
import { AiOutlineCheck, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { Col, Row, Input, NavItem, NavLink, Nav, TabContent, TabPane, Table } from 'reactstrap';
import classnames from 'classnames'

export default function DadosPessoais(props) {
    return (
        <div>
            <Row className="mt-2">
                <label className="mt-2 ml-3">R.G:</label>
                <Col sm={3}>
                    <Input className="input-grupo"></Input>
                </Col>
                <label className="mt-2 ml-3">CPF (Pessoa Contato)</label>
                <Col sm={3}>
                    <Input className="input-grupo"></Input>
                </Col>
                <label className="mt-2 ml-3">Estado Civil</label>
                <Col sm={3}>
                    <Input className="input-grupo"></Input>
                </Col>
            </Row>
            <Row className="mt-2">
                <label className="mt-2 ml-3">Profissão:</label>
                <Col sm={3}>
                    <Input className="input-grupo"></Input>
                </Col>
                <label className="mt-2 ml-3">Nascimento:</label>
                <Col sm={2}>
                    <Input className="input-grupo"></Input>
                </Col>
                <label className="mt-2 ml-3">Nome da mãe:</label>
                <Col sm={4}>
                    <Input className="input-grupo"></Input>
                </Col>
            </Row>
            <hr className="ml-2 mr-2 mt-2"></hr>
            <label className="mt-2 ml-3"> Contatos adicionais</label>
            <AiOutlineClose className="descricao-clicando ml-2" size={20}></AiOutlineClose>
            <AiOutlineCheck className="descricao-clicando m-1" size={20}></AiOutlineCheck>
            <AiOutlinePlus className="descricao-clicando ml-1" size={20}></AiOutlinePlus>
            <Nav tabs>
                <NavItem className="principal-tab">
                    <NavLink className={classnames({ active: props.activeTab4 === '17' })}
                        onClick={() => { props.toggle100('17'); }} >Genérica</NavLink>
                </NavItem>
                <NavItem className="principal-tab">
                    <NavLink className={classnames({ active: props.activeTab4 === '18' })}
                        onClick={() => { props.toggle100('18'); }} >Específica</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={props.activeTab4}>
                <TabPane tabId="17">
                <Table hover size="sm"  responsive className="table-bordered">
                    <thead>
                        <tr  className="d-flex">
                            <th  className="col-2">Sel</th>
                            <th className="col-2">Código </th>
                            <th   className="col-4">Fantasia</th>
                            <th   className="col-4">razão Social</th>
                     
                        </tr>
                    </thead>
                    <tbody>
                    <tr  className="d-flex">
                            <td  className="col-2">Sel</td>
                            <td className="col-2">Código </td>
                            <td   className="col-4">Fantasia</td>
                            <td   className="col-4">razão Social</td>
                          
                        </tr>
                       
                    </tbody>
                </Table>
                </TabPane>
                <TabPane tabId="18">
                    <div>

                        <Row>
                            <label className="ml-4 mt-3">Identificador</label>
                            <Col sm={3}>
                                <Input className=" input-grupo mt-2"></Input>
                            </Col>
                            <label className="ml-4 mt-3">Identif. Cliente</label>
                            <Col sm={3}>
                                <Input className=" input-grupo mt-2"></Input>
                            </Col>
                            <label className="ml-1 mt-3">Forma Contato</label>
                            <Col sm={3}>
                                <Input className="input-grupo mt-2"></Input>
                            </Col>
                        </Row>
                        <Row>
                            <label className="ml-4 mt-3">Valor:</label>
                            <Col sm={5}>
                                <Input style={{ marginLeft: 3 }} className="input-grupo mt-2"></Input>
                            </Col>

                        </Row>
                        <Row>
                            <label className="ml-4 mt-3">Nome:</label>
                            <Col sm={5}>
                                <Input className=" input-grupo mt-2"></Input>
                            </Col>
                        </Row>
                        <Row>
                            <label className="ml-4 mt-3">Cargo:</label>
                            <Col sm={5}>
                                <Input className=" input-grupo mt-2"></Input>
                            </Col>
                        </Row>
                    </div>
                </TabPane>
            </TabContent>

        </div>
    );
}