import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Row,Input, Col, Button, } from 'reactstrap';

// OLHA SINCERAMENTE EU NÃO SEI NEM POR ONDE COMEÇAR, 
// EU ESTAVA PENSANDO EM IMPLEMENTAR UM OUTRO ESTILO E OUTRO FORMATO
// NO CASO SERIA DE NOTA FISCAL NF-E, SÓ QUE A FACULDADE / TRABALJO NÃO ME PERMITIU TEMPO DISPONIVEL PARA ISSO
// ENTÃO EU PAREI... DEIXEI AKI DISPONIVEL CASO VC QUERIA BRINCAR COM ALGUMA COISA... 
// MAS CREIO EU QUE ESTA 40% PRONTO, NÃO ESPERE MUITA COISA NÃO KKKK

export default function Transporte() {
    return (
        <div>
            <Row className="mt-1">
                <label className=" font-weight-bold ml-3 mt-1" >Cliente</label>
            </Row>
            <Row className="mt-2 ml-2 mr-2" >

                <Col sm={2}>
                    <label className="mt-1 ml-1 mr-1">Código:</label>
                    <Input className="input-grupo"></Input>
                </Col>
                <Col sm={3}>
                    <label className="mt-1 ml-1 mr-1">Fantasia:</label>
                    <Input className="input-grupo"></Input>
                </Col>
                <Col sm={4}>
                    <label className="mt-1 ml-1 mr-1">Razão Social:</label>
                    <Input className="input-grupo"></Input>
                </Col>
            </Row>
            <hr className="ml-2 mr-2"></hr>
            <Row>
                <label className=" font-weight-bold ml-3 mt-1" >Transportador</label>
            </Row>
            <Row className="mt-2 ml-2 mr-2">
                <Col sm={2}>
                    <label className="ml-1">Identificador:</label>
                    <Input className="input-grupo" ></Input>

                </Col>
                <AiOutlineArrowDown className=" mt-4" size={30} />


            </Row>
            <Row className="mt-2 ml-2 mr-2">
                <Col sm={5}>
                    <label>Razão social:</label>
                    <Input className="input-grupo"></Input>
                </Col>
                <Col sm={5}>
                    <label>Endereço:</label>
                    <Input className="input-grupo"></Input>
                </Col>
                <Col sm={1}>
                    <label>UF:</label>
                    <Input className="input-grupo"></Input>
                </Col>
            </Row>
            <Row className="mt-2 ml-2 mr-2">
                <Col sm={5}>
                    <label>CNPJ:</label>
                    <Input className="input-grupo"></Input>
                </Col>
                <Col sm={5}>
                    <label>CPF:</label>
                    <Input className="input-grupo"></Input>
                </Col>
            </Row>
            <Row className="mt-2 ml-2 mr-2">
                <Col sm={5}>
                    <label>Insc estadual:</label>
                    <Input className="input-grupo"></Input>
                </Col>
                <Col  >
                    <Button className="mt-4">Alterar</Button>
                    <Button className="ml-1 mt-4">Salvar</Button>
                    <Button className="ml-1 mt-4">Cancelar</Button>
                    <Button className="ml-1 mt-4">Excluir</Button>
                </Col>
            </Row>

        </div>
    );
}