import React, { useState, useEffect } from 'react';
import './style.css'
import Menu from '../componets/menu'
import { Link } from 'react-router-dom';
import {  AiFillCamera, AiOutlineClose, AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'
import {  BiArrowToLeft, BiLeftArrowAlt, BiRightArrowAlt, BiArrowToRight, BiVideoRecording } from 'react-icons/bi'
import { ImFilter, ImPrinter } from 'react-icons/im'
import { GoTools } from 'react-icons/go'

import { GrTableAdd } from 'react-icons/gr'
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Jumbotron } from 'reactstrap';
import { BsFillPlusCircleFill, BsFillExclamationCircleFill, BsFillGearFill, BsArrow90DegLeft } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';

import EspecificaCliente1 from '../pagesClientes/EspecificaCliente/EspecificaCliente1';
import DadosComplementares from '../pagesClientes/EspecificaCliente/DadosComplementares';
import DadosTributarios from '../pagesClientes/EspecificaCliente/DadosTributarios';
import DadosPessoais from '../pagesClientes/EspecificaCliente/DadosPessoais';
import Transporte from '../pagesClientes/EspecificaCliente/Transporte';
import Produtos from '../pagesClientes/EspecificaCliente/Produtos';
import ProdutosXclientes from '../pagesClientes/EspecificaCliente/ProdutosXclientes';
import MovFinaceira from '../pagesClientes/EspecificaCliente/MovFinaceira';
import EndEntregas from '../pagesClientes/EspecificaCliente/EndEntregas';
import Contatos from '../pagesClientes/EspecificaCliente/Contatos';
import VisualizarPedidos from '../pagesClientes/EspecificaCliente/VisualizarPedidos';
import VisaoGenerica from '../pagesClientes/EspecificaCliente/VisaoGenerica';
export default function EspecificaProduto() {
    useEffect(() => {

        if (!localStorage.getItem('UsuarioId')) {
            alert('Acesso negado!');
            return
        }
        debugger


    }, []);

    //#region constantes e funções 

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const [activeTab2, setActiveTab2] = useState('4');
    const toggle3 = tab => {
        if (activeTab !== tab) setActiveTab2(tab);
    }
    const [activeTab3, setActiveTab3] = useState('16');
    const toggle10 = tab => {
        if (activeTab !== tab) setActiveTab3(tab);
    }
    const [activeTab4, setActiveTab4] = useState('17');
    const toggle100 = tab => {
        if (activeTab !== tab) setActiveTab4(tab);
    }
    const [activeTab5, setActiveTab5] = useState('19');
    const toggle12 = tab => {
        if (activeTab !== tab) setActiveTab5(tab);
    }
    const [activeTab6, setActiveTab6] = useState('21');
    const toggle122 = tab => {
        if (activeTab !== tab) setActiveTab6(tab);
    }
    const [activeTab7, setActiveTab7] = useState('24');
    const toggle1224 = tab => {
        if (activeTab !== tab) setActiveTab7(tab);
    }

    const [activeTab8, setActiveTab8] = useState('26');
    const toggle12245 = tab => {
        if (activeTab !== tab) setActiveTab8(tab);
    }
    //#endregion
    return (
        <>
            <Menu />

            <Jumbotron id="topo" className="jumbo"  >
                <div className="container-fluid mt-0">

                    <div className="content mt-0">

                        <div className="float-left ">
                            <Link to="/inicio" ><BsArrow90DegLeft className="descricao-clicando mt-1 ml-1 mr-5" size={35}></BsArrow90DegLeft></Link>
                            <BiArrowToLeft className="descricao-clicando mt-1 ml-1" size={20}></BiArrowToLeft>
                            <BiLeftArrowAlt className="descricao-clicando mt-1 ml-1" size={20}></BiLeftArrowAlt>
                            <BiRightArrowAlt className="descricao-clicando mt-1 ml-1" size={20}></BiRightArrowAlt>
                            <BiArrowToRight className="descricao-clicando mt-1 ml-1" size={20}></BiArrowToRight>
                            <AiOutlinePlus className="descricao-clicando ml-1" size={19}></AiOutlinePlus>
                            <FiMinus className="descricao-clicando ml-1" size={19}></FiMinus>
                            <AiOutlineCheck className="descricao-clicando m-1 " size={19}></AiOutlineCheck>
                            <AiOutlineClose className="descricao-clicando ml-1 mr-5" size={19}></AiOutlineClose>


                        </div>
                        <div className=" d-flex  ">
                            <BsFillPlusCircleFill className="descricao-clicando ml-2" size={30}></BsFillPlusCircleFill>
                            <ImFilter className="descricao-clicando ml-2" size={30}></ImFilter>
                            <ImPrinter className="descricao-clicando ml-2" size={30}></ImPrinter>
                            <AiFillCamera className="descricao-clicando ml-5" size={35}></AiFillCamera>
                            <GoTools className="descricao-clicando ml-2" size={30} ></GoTools>
                            <BsFillExclamationCircleFill className="descricao-clicando ml-2" size={30}></BsFillExclamationCircleFill>
                            <BsFillGearFill className="descricao-clicando ml-5" size={30}></BsFillGearFill>
                            <BiVideoRecording className="descricao-clicando ml-2" size={35}></BiVideoRecording>
                            <GrTableAdd className="descricao-clicando ml-2" size={31} ></GrTableAdd>

                        </div>

                        <div className="mt-3">
                            <Nav size="sm" tabs>
                                <NavItem className="principal-tab" >
                                    <NavLink

                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        Visão Genérica
                                     </NavLink>
                                </NavItem>
                                <NavItem className="principal-tab">
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        Especifíca
                          </NavLink>

                                </NavItem>
                                {/* <NavItem className="principal-tab">
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); }}
                                    >
                                        Visualizar Pedidos
                          </NavLink>
                                </NavItem> */}
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <VisaoGenerica />
                                </TabPane>
                                <TabPane tabId="2">
                                    <div>
                                        <Nav tabs>
                                            <NavItem className="tab-secundaria">
                                                <NavLink className={classnames({ active: activeTab2 === '4' })}
                                                    onClick={() => { toggle3('4'); }} >Cliente*</NavLink>
                                            </NavItem>
                                            {/* <NavItem className="tab-secundaria">
                                                <NavLink className={classnames({ active: activeTab2 === '5' })}
                                                    onClick={() => { toggle3('5'); }} >Dados Compl.</NavLink>
                                            </NavItem>
                                            <NavItem className="tab-secundaria">
                                                <NavLink className={classnames({ active: activeTab2 === '6' })}
                                                    onClick={() => { toggle3('6'); }} >Dados Tribu.</NavLink>
                                            </NavItem>
                                            <NavItem className="tab-secundaria">
                                                <NavLink className={classnames({ active: activeTab2 === '7' })}
                                                    onClick={() => { toggle3('7'); }} >Dados Pessoais</NavLink>
                                            </NavItem>
                                            <NavItem className="tab-secundaria">
                                                <NavLink className={classnames({ active: activeTab2 === '8' })}
                                                    onClick={() => { toggle3('8'); }} >Transport.</NavLink>
                                            </NavItem>
                                            <NavItem className="tab-secundaria">
                                                <NavLink className={classnames({ active: activeTab2 === '9' })}
                                                    onClick={() => { toggle3('9'); }} >Produtos</NavLink>
                                            </NavItem>
                                            <NavItem className="tab-secundaria">
                                                <NavLink className={classnames({ active: activeTab2 === '10' })}
                                                    onClick={() => { toggle3('10'); }} >Produtos xClientes</NavLink>
                                            </NavItem>
                                            <NavItem className="tab-secundaria">
                                                <NavLink className={classnames({ active: activeTab2 === '11' })}
                                                    onClick={() => { toggle3('11'); }} >Mov finaceiras</NavLink>
                                            </NavItem>
                                            <NavItem className="tab-secundaria">
                                                <NavLink className={classnames({ active: activeTab2 === '12' })}
                                                    onClick={() => { toggle3('12'); }} >Contatos</NavLink>
                                            </NavItem>
                                            <NavItem className="tab-secundaria">
                                                <NavLink className={classnames({ active: activeTab2 === '13' })}
                                                    onClick={() => { toggle3('13'); }} >End. Entregas</NavLink>
                                            </NavItem> */}
                                            

                                        </Nav>
                                        <TabContent activeTab={activeTab2}>
                                            <TabPane tabId="4">
                                                <EspecificaCliente1
                                                    toggle10={toggle10}
                                                    activeTab3={activeTab3} />
                                            </TabPane>
                                            {/* <TabPane tabId="5">
                                                <DadosComplementares />
                                            </TabPane>
                                            <TabPane tabId="6">
                                                <DadosTributarios />
                                            </TabPane>
                                            <TabPane tabId="7">
                                                <DadosPessoais
                                                    toggle100={toggle100}
                                                    activeTab4={activeTab4} />
                                            </TabPane>
                                            <TabPane tabId="8">
                                                <Transporte />
                                            </TabPane>
                                            <TabPane tabId="9">
                                                <Produtos />
                                            </TabPane>
                                            <TabPane tabId="10">
                                                <ProdutosXclientes />
                                            </TabPane>
                                            <TabPane tabId="11">
                                                <MovFinaceira
                                                    toggle12={toggle12}
                                                    activeTab5={activeTab5}
                                                />
                                            </TabPane>
                                            <TabPane tabId="12">
                                                <Contatos
                                                activeTab6={activeTab6}
                                                toggle122={toggle122}
                                                activeTab7={activeTab7}
                                                toggle1224={toggle1224} />
                                            </TabPane>
                                            <TabPane tabId="13">
                                                <EndEntregas
                                                toggle12245={toggle12245}
                                                activeTab8={activeTab8}
                                                />
                                            </TabPane> */}
                                      </TabContent>
                                    </div>
                                </TabPane>
                                <TabPane tabId="3">
                                    {/* <VisualizarPedidos /> */}
                                </TabPane>
                            </TabContent>

                        </div>


                    </div>
                </div>
                <div>

                </div>

            </Jumbotron>


           
        </>
    )
}

//developed by Diego && victor