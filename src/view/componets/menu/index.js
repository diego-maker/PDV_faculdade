import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, InputGroupButtonDropdown, Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import './style.css';
import { FiSettings } from 'react-icons/fi';


export default function Menu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [splitButtonOpen, setSplitButtonOpen] = useState(false);
    const toggleSplit = () => 
        {
            toggle(true)
        setSplitButtonOpen(!splitButtonOpen)
        
    };
    const [splitButtonOpen2, setSplitButtonOpen2] = useState(false);
    const toggleSplit2 = () => 
        {
            toggle(true)
        setSplitButtonOpen2(!splitButtonOpen2)
        
    };

    return (
        <Navbar className="menu" expand="lg" fixed="top">
            <div className="mr-auto">
                <Link className="logo" >Campos Salles</Link>
               
            </div>
            
            <div className="sirius text-white  align-middle">
                    <h3>PDV</h3>
                    </div>
            <div className="ml-auto">
            <div className="mr-auto">
                <Link className="logo" to="venda">
                <h3>Vendas</h3>
                </Link>
            </div>
            </div>

        </Navbar>
    )
}

//developed by Diego 