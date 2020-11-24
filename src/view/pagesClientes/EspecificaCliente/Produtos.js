import React from 'react'
import { AiOutlinePrinter } from 'react-icons/ai';
import { BiArrowToLeft, BiArrowToRight, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { Col, Input, Table } from 'reactstrap';



export default function Produtos() {
    return (
        <div>
            <div className="border p-3 d-flex justify-content-center">
                <BiArrowToLeft className="descricao-clicando mt-1 ml-1" size={19}></BiArrowToLeft>
                <BiLeftArrowAlt className="descricao-clicando mt-1 ml-1" size={19}></BiLeftArrowAlt>
                <BiRightArrowAlt className="descricao-clicando mt-1 ml-1" size={19}></BiRightArrowAlt>
                <BiArrowToRight className="descricao-clicando mt-1 ml-1" size={19}></BiArrowToRight>
                <Col className="float-right" sm={3}>
                    <Input className="input-grupo"></Input>
                </Col>
                <AiOutlinePrinter className="descricao-clicando" size={30} />

            </div>
            <Table striped responsive>

                <thead>
                    <tr>

                        <th scope="col" className="id">N° Pedido</th>
                        <th scope="col" className="codigo">EAN13</th>
                        <th scope="col" className="descricao2">Código</th>
                        <th scope="col" className="unidade">Produto</th>
                        <th scope="col" className="saldo">Dt. Ult. Compra</th>
                        <th scope="col" className="saldo">Qtde.</th>
                        <th scope="col" className="saldo">Vr. Unit.</th>
                        <th scope="col" className="saldo">Valor Pedido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1000</td>
                        <td >2</td>
                        <td>20°</td>
                        <td>20°</td>
                        <td>R$</td>
                        <td>Real</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.000,00</td>

                    </tr>
                    <tr>
                        <td>1000</td>
                        <td >2</td>
                        <td>20°</td>
                        <td>20°</td>
                        <td>R$</td>
                        <td>Real</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.000,00</td>

                    </tr>
                </tbody>
            </Table>
        </div>
    );
}