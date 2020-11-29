import React, { lazy, Suspense } from 'react';
import { Spinner } from 'reactstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Login = lazy(() => import('./view/pages/Login'));
const ProdutosGenerica = lazy(() => import('./view/pages/ProdutosGenerica'));
const ProdutosEspecifica = lazy(() => import('./view/pages/ProdutoEspecifica'));
const Venda = lazy(() => import('./view/pages/Venda'));
const Pagamento = lazy(() => import('./view/pages/Pagamento'));
const Cadastro = lazy(() => import('./view/pages/cadastro'));
const EspecificaProduto = lazy (() => import ('./view/EspecificaProduto'));


export default function Routes() {

    return (
        <BrowserRouter>
           <Suspense fallback={<div>  <Spinner className="spinner" color="primary"  style={{ width: '3rem', height: '3rem' }} /><h2 className="spinner-1">Carregando...</h2>  </div>} >
                <Switch>
                    <Route path="/" exact component={props => <Login {...props} />} />
                    <Route path="/produtos" exact component={props => <ProdutosGenerica {...props} />} />
                    <Route path="/cadastramento" exact component={props => <Cadastro {...props} />} />
                    <Route path="/produtos/:id" exact component={props => <ProdutosEspecifica {...props} />} />
                    <Route path="/venda" exact component={props => <Venda {...props} />} />
                    <Route path="/pagamento" exact component={props => <Pagamento {...props} />} />
                    <Route path="/EspecificaProduto" exact component={props => <EspecificaProduto {...props}/> }/>
                  
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

//developed by Diego 