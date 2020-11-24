
import React from 'react'
import { Col, Row, Table,Input } from 'reactstrap';
// OLHA SINCERAMENTE EU NÃO SEI NEM POR ONDE COMEÇAR, 
// EU ESTAVA PENSANDO EM IMPLEMENTAR UM OUTRO ESTILO E OUTRO FORMATO
// NO CASO SERIA DE NOTA FISCAL NF-E, SÓ QUE A FACULDADE / TRABALJO NÃO ME PERMITIU TEMPO DISPONIVEL PARA ISSO
// ENTÃO EU PAREI... DEIXEI AKI DISPONIVEL CASO VC QUERIA BRINCAR COM ALGUMA COISA... 
// MAS CREIO EU QUE ESTA 40% PRONTO, NÃO ESPERE MUITA COISA NÃO KKKK

export default function VisaoGenerica() {

    return (
        <>
            <row>
                <label className="ml-1">Consulta por campo</label>



            </row>
            <div>
                <Row>

                    <input className="ml-3" type="radio"></input>
                    <label className="ml-1">Nome</label>
                    <input className="ml-2" type="radio"></input>
                    <label className="ml-1">CNPJ</label>
                    <input className="ml-2" type="radio"></input>
                    <label className="ml-1">CPF</label>
                    <input className="ml-2" type="radio"></input>
                    <label className="ml-1">Tel.</label>
                    <input className="ml-2" type="radio"></input>
                    <label className="ml-1">Bairro</label>
                    <input className="ml-2" type="radio"></input>
                    <label className="ml-1">Cidade</label>
                    <input className="ml-2" type="radio"></input>
                    <label className="ml-1">Estado</label>
                    <input className="ml-2" type="radio"></input>
                    <label className="ml-1">E-mail</label>
                   
                    <input className="ml-2" type="radio"></input>
                    <label className="ml-1">Fantasia</label>
                   
                    <input className="ml-2" type="radio"></input>
                    <label className="ml-1">Identificador</label>
                    <label className="ml-1">-</label>
                    <label>-</label>

                </Row>
                <div>
                    <Row>
                        <Col className="mt-1" sm={4}>
                            <Input className="input-grupo" placeholder="input pesquisa"></Input>
                        </Col>
                        
                        <Col sm={2} className="border">
                            <Row>
                                <label className="font-weight-bold ml-3">Tipo Pesquisa</label>
                            </Row>
                            <input  className="ml-1" type="radio"></input>
                            <label className="ml-1">Começa</label>
                            <input  className="ml-1" type="radio"></input>
                            <label className="ml-1">Contém</label>
                        </Col>
                       
                        <Col sm={2} className="border">
                            <Row>
                                <label className="font-weight-bold ml-3">Situação</label>
                            </Row>
                            <input  className="ml-1" type="radio"></input>
                            <label className="ml-1">Todos</label>
                            <input className="ml-1" type="radio"></input>
                            <label className="ml-1">Ativos</label>
                            <Row>
                                <input className="ml-3" type="radio"></input>
                                <label className="ml-1">Inativos</label>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Table hover size="sm"  responsive className="table-bordered">
                    <thead>
                        <tr  className="d-flex">
                           
                            <th className="col-1">Código </th>
                            <th   className="col-2">Fantasia</th>
                            <th   className="col-3">razão Social</th>
                            <th  className="col-2">Contato</th>
                            <th  className="col-2">CPNJ</th>
                            <th  className="col-2">CPF</th>
                            <th  className="col-3">Inscrição estadual</th>
                            <th  className="col-2">Logadouro</th>
                            <th  className="col-1">Numero</th>
                            <th  className="col-1">Andar</th>
                            <th  className="col-2">Complemento</th>
                            <th  className="col-2">Bairro</th>
                            <th  className="col-2">CEP</th>
                            <th  className="col-2">Cidade</th>
                            <th  className="col-1">UF</th>
                            <th  className="col-2">Fone</th>
                            <th  className="col-2">Email</th>
                            <th  className="col-2">vendedor</th>
                            <th  className="col-1">Situação</th>

                        </tr>
                    </thead>
                    <tbody>
                    <tr  className="d-flex">
                           
                            <td className="col-1">Código </td>
                            <td   className="col-2">Fantasia</td>
                            <td   className="col-3">razão Social</td>
                            <td  className="col-2">Contato</td>
                            <td  className="col-2">CPNJ</td>
                            <td  className="col-2">CPF</td>
                            <td  className="col-3">Inscrição estadual</td>
                            <td  className="col-2">Logadouro</td>
                            <td  className="col-1">Numero</td>
                            <td  className="col-1">Andar</td>
                            <td  className="col-2">Complemento</td>
                            <td  className="col-2">Bairro</td>
                            <td  className="col-2">CEP</td>
                            <td  className="col-2">Cidade</td>
                            <td  className="col-1">UF</td>
                            <td  className="col-2">Fone</td>
                            <td  className="col-2">Fax</td>
                            <td  className="col-2">Obs</td>
                            <td  className="col-1">Situação</td>

                        </tr>
                        <tr  className="d-flex">
                           
                            <td className="col-1">Código </td>
                            <td   className="col-2">Fantasia</td>
                            <td   className="col-3">razão Social</td>
                            <td  className="col-2">Contato</td> 
                            <td  className="col-2">CPNJ</td>
                            <td  className="col-2">CPF</td>
                            <td  className="col-3">Inscrição estadual</td>
                            <td  className="col-2">Logadouro</td>
                            <td  className="col-1">Numero</td>
                            <td  className="col-1">Andar</td>
                            <td  className="col-2">Complemento</td>
                            <td  className="col-2">Bairro</td>
                            <td  className="col-2">CEP</td>
                            <td  className="col-2">Cidade</td>
                            <td  className="col-1">UF</td>
                            <td  className="col-2">Fone</td>
                            <td  className="col-2">Fax</td> 
                            <td  className="col-2">Obs</td>
                            <td  className="col-1">Situação</td>

                        </tr>
                        <tr  className="d-flex">
                            
                            <td className="col-1">Código </td>
                            <td   className="col-2">Fantasia</td>
                            <td   className="col-3">razão Social</td>
                            <td  className="col-2">Contato</td>
                            <td  className="col-2">CPNJ</td>
                            <td  className="col-2">CPF</td>
                            <td  className="col-3">Inscrição estadual</td>
                            <td  className="col-2">Logadouro</td>
                            <td  className="col-1">Numero</td>
                            <td  className="col-1">Andar</td>
                            <td  className="col-2">Complemento</td>
                            <td  className="col-2">Bairro</td>
                            <td  className="col-2">CEP</td>
                            <td  className="col-2">Cidade</td>
                            <td  className="col-1">UF</td>
                            <td  className="col-2">Fone</td>
                            <td  className="col-2">Fax</td>   
                            <td  className="col-2">Obs</td>
                            <td  className="col-1">Situação</td>

                        </tr>
                        <tr  className="d-flex">
                            
                            <td className="col-1">Código </td>
                            <td   className="col-2">Fantasia</td>
                            <td   className="col-3">razão Social</td>
                            <td  className="col-2">Contato</td>  
                            <td  className="col-2">CPNJ</td>
                            <td  className="col-2">CPF</td>
                            <td  className="col-3">Inscrição estadual</td>
                            <td  className="col-2">Logadouro</td>
                            <td  className="col-1">Numero</td>
                            <td  className="col-1">Andar</td>
                            <td  className="col-2">Complemento</td>
                            <td  className="col-2">Bairro</td>
                            <td  className="col-2">CEP</td>
                            <td  className="col-2">Cidade</td>
                            <td  className="col-1">UF</td>
                            <td  className="col-2">Fone</td>
                            <td  className="col-2">Fax</td>
                           
                            <td  className="col-2">Obs</td>
                            <td  className="col-1">Situação</td>

                        </tr>
                        <tr  className="d-flex">
                            
                            <td className="col-1">Código </td>
                            <td   className="col-2">Fantasia</td>
                            <td   className="col-3">razão Social</td>
                            <td  className="col-2">Contato</td>  
                            <td  className="col-2">CPNJ</td>
                            <td  className="col-2">CPF</td>
                            <td  className="col-3">Inscrição estadual</td>
                            <td  className="col-2">Logadouro</td>
                            <td  className="col-1">Numero</td>
                            <td  className="col-1">Andar</td>
                            <td  className="col-2">Complemento</td>
                            <td  className="col-2">Bairro</td>
                            <td  className="col-2">CEP</td>
                            <td  className="col-2">Cidade</td>
                            <td  className="col-1">UF</td>
                            <td  className="col-2">Fone</td>
                            <td  className="col-2">Fax</td>     
                            <td  className="col-2">Obs</td>
                            <td  className="col-1">Situação</td>

                        </tr>
                        <tr  className="d-flex">
                           
                            <td className="col-1">Código </td>
                            <td   className="col-2">Fantasia</td>
                            <td   className="col-3">razão Social</td>
                            <td  className="col-2">Contato</td>    
                            <td  className="col-2">CPNJ</td>
                            <td  className="col-2">CPF</td>
                            <td  className="col-3">Inscrição estadual</td>
                            <td  className="col-2">Logadouro</td>
                            <td  className="col-1">Numero</td>
                            <td  className="col-1">Andar</td>
                            <td  className="col-2">Complemento</td>
                            <td  className="col-2">Bairro</td>
                            <td  className="col-2">CEP</td>
                            <td  className="col-2">Cidade</td>
                            <td  className="col-1">UF</td>
                            <td  className="col-2">Fone</td>
                            <td  className="col-2">Fax</td>
                          
                            <td  className="col-2">Obs</td>
                            <td  className="col-1">Situação</td>

                        </tr>
                        <tr  className="d-flex">
                            
                            <td className="col-1">Código </td>
                            <td   className="col-2">Fantasia</td>
                            <td   className="col-3">razão Social</td>
                            <td  className="col-2">Contato</td>           
                            <td  className="col-2">CPNJ</td>
                            <td  className="col-2">CPF</td>
                            <td  className="col-3">Inscrição estadual</td>
                            <td  className="col-2">Logadouro</td>
                            <td  className="col-1">Numero</td>
                            <td  className="col-1">Andar</td>
                            <td  className="col-2">Complemento</td>
                            <td  className="col-2">Bairro</td>
                            <td  className="col-2">CEP</td>
                            <td  className="col-2">Cidade</td>
                            <td  className="col-1">UF</td>
                            <td  className="col-2">Fone</td>
                            <td  className="col-2">Fax</td>   
                            <td  className="col-2">Obs</td>
                            <td  className="col-1">Situação</td>

                        </tr>
                        <tr  className="d-flex">
                            
                            <td className="col-1">Código </td>
                            <td   className="col-2">Fantasia</td>
                            <td   className="col-3">razão Social</td>
                            <td  className="col-2">Contato</td>
                            <td  className="col-2">CPNJ</td>
                            <td  className="col-2">CPF</td>
                            <td  className="col-3">Inscrição estadual</td>
                            <td  className="col-2">Logadouro</td>
                            <td  className="col-1">Numero</td>
                            <td  className="col-1">Andar</td>
                            <td  className="col-2">Complemento</td>
                            <td  className="col-2">Bairro</td>
                            <td  className="col-2">CEP</td>
                            <td  className="col-2">Cidade</td>
                            <td  className="col-1">UF</td>
                            <td  className="col-2">Fone</td>
                            <td  className="col-2">Fax</td>                    
                            <td  className="col-2">Obs</td>
                            <td  className="col-1">Situação</td>

                        </tr>
                        
                    </tbody>
                </Table>
            </div>
        </>
    );
}