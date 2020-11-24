import React, { useState } from 'react';
import { Button, Col } from 'reactstrap';
import './style.css'

import image from '../../assets/Campos.png'

import { useHistory } from 'react-router-dom'



export default function Login() {

    //#region constantes e funções
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();


    async function handlerSubmitLogin(e) {
        
        e.preventDefault();
        
        if(email === "adm@adm" && senha === "adm"){
        return  history.push('/Produtos');
        }
        return alert("senha incorreta");
        
    }

    //#endregion

    return (
        <div className="container-login">
            <Col sm={12} md={8} lg={6} className="form"    >
              
                <form onSubmit={handlerSubmitLogin}>
                    <label className="label"  >Email</label>
                    <input
                        className="input"
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Digite seu Email..." />
                    <label className="label"  >Senha</label>
                    <input
                        className="input"
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        placeholder="Digite sua Senha..." />
                    <Button type="submit" className="botao">Entrar</Button>
                  
                </form>
            </Col>
            <Col sm={12} md={8} lg={6}   >
                <img className="img" src={image} alt="" />
            </Col>
        </div>
    )
}


//developed by Diego 