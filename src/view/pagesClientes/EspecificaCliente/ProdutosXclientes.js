import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BiArrowToLeft, BiArrowToRight, BiLeftArrowAlt, BiReceipt, BiRightArrowAlt } from 'react-icons/bi';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { GrMoney } from 'react-icons/gr';
import { ImPrinter } from 'react-icons/im';
import { RiDatabase2Fill } from 'react-icons/ri';
import { Col, Input, Table } from 'reactstrap';


export default function ProdutosXclientes() {
    return (
        <>
            <div className="border p-3 d-flex justify-content-left">
                <BiArrowToLeft className="descricao-clicando mt-1 ml-1" size={19}></BiArrowToLeft>
                <BiLeftArrowAlt className="descricao-clicando mt-1 ml-1" size={19}></BiLeftArrowAlt>
                <BiRightArrowAlt className="descricao-clicando mt-1 ml-1" size={19}></BiRightArrowAlt>
                <BiArrowToRight className="descricao-clicando mt-1 ml-1" size={19}></BiArrowToRight>
                <FiPlusCircle className="descricao-clicando ml-5" size={25}></FiPlusCircle>
                <FiMinusCircle className="descricao-clicando ml-2" size={25}></FiMinusCircle>
                <GrMoney className="descricao-clicando ml-2" size={25}></GrMoney>
                <AiOutlineArrowDown className="descricao-clicando ml-2" size={25}></AiOutlineArrowDown>
                <AiOutlineArrowDown className="descricao-clicando ml-2" size={25}></AiOutlineArrowDown>
                <AiOutlineArrowDown className="descricao-clicando ml-2" size={25}></AiOutlineArrowDown>
                <BiReceipt className="descricao-clicando ml-2" size={25}></BiReceipt>
                <Col className="ml-2" sm={3}>
                    <Input className="input-grupo"></Input>
                </Col>
                <ImPrinter className="descricao-clicando ml-2 mt-1" size={25}></ImPrinter>
                <RiDatabase2Fill className="descricao-clicando ml-2 " size={25}></RiDatabase2Fill>
            </div>
            <Table striped responsive>

                <thead>
                    <tr>
                        <th scope="col" className="id">ID Produto</th>
                        <th scope="col" className="codigo">Código</th>
                        <th scope="col" className="descricao2">Produto</th>
                        <th scope="col" className="unidade">Preço</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td >2</td>
                        <td>20°</td>
                        <td>20°</td>
                        <td>R$</td>

                    </tr>
                    <tr>

                        <td >2</td>
                        <td>20°</td>
                        <td>20°</td>
                        <td>R$</td>

                    </tr>
                </tbody>
            </Table>
        </>
    );
}