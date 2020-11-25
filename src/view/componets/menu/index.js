import React, { useState } from 'react';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import './style.css';


export default function Menu() {
    

    return (
        <Navbar className="menu" expand="lg" fixed="top">
            <div className="mr-auto">
                <Link to="/Produtos" className="logo" >Campos Salles</Link>
               
            </div>
            
            <div className="sirius text-white  align-middle">
                    <h3>PDV</h3>
                    </div>
            <div className="ml-auto">
            <div className="mr-auto">
                <Link className="logo" to="/venda">
                <h3>Vendas</h3>
                </Link>
            </div>
            </div>

        </Navbar>
    )
}

//developed by Diego 