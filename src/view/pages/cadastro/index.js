import React, { useState } from 'react';
import { Button, Col } from 'reactstrap';
import './style.css'
import axios from 'axios'
import image from '../../assets/Campos.png'

import { useHistory } from 'react-router-dom'



export default function Login() {

    //#region constantes e funções
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const history = useHistory();


    async function handlerSubmitLogin(e) {// eu sei não validei pela minha API... tambem cara 500 PROVAS PRA FAZER SEM TEMPO IRMAO

        e.preventDefault();
        
        if(email === "" && senha === "" && nome === ""){
        return alert("deve-se preencher todos os campos para realizar um novo cadastro!");
        }
       
       let dados = {
            "nomeU": nome,
            "emailU": email,
            "senhaU": senha       
       } 
       debugger

    let  req = await axios(`http://localhost:4000/usuario`, {
        method: 'POST',
        data: dados
    });

    if(req.data.message === "usuario cadastrado com sucesso!"){
        alert("novo usuario cadastrado!");
        return history.push('/');
    }
        
    }

    //#endregion

    return (
        <div className="container-login">
            <Col sm={12} md={8} lg={6} className="form"    >
              
                <form onSubmit={handlerSubmitLogin}>
                    <label className="label"  >Nome</label>
                    <input
                        className="input"
                        autoFocus
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        placeholder="Digite seu Nome..." />
                        <label className="label"  >Email</label>
                    <input
                        className="input"
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
                        placeholder="Digite uma Senha..." />
                    <Button type="submit" className="botao">Cadastrar</Button>
                  
                </form>
            </Col>
            <Col sm={12} md={8} lg={6}   >
                <img className="img" src={image} alt="" />
            </Col>
        </div>
    )
}


//developed by Diego 