import React from 'react'
import { Table } from 'reactstrap';

export default function VisualizarPedidos() {
    return (

        <>

            <Table striped responsive>

                <thead>
                    <tr>
                        <th scope="col" className="input">ID Pedido</th>
                        <th scope="col" className="id">Valor Total Liquido </th>
                        <th scope="col" className="codigo">Data Do Pedido</th>
                        <th scope="col" className="descricao2">Descrição Froma de Pagamento</th>
                        <th scope="col" className="unidade">Tipo Operação</th>
                        <th scope="col" className="saldo">Nome Vendedor </th>
                        <th scope="col" className="saldo">Qtde</th>
                        <th scope="col" className="saldo">Desconto </th>
                        <th scope="col" className="saldo">Documento</th>
                        <th scope="col" className="saldo">N Nota Fiscal</th>
                        <th scope="col" className="saldo">Valor Total Da nota</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td >2</td>
                        <td>20°</td>
                        <td>20°</td>
                        <td>R$</td>
                        <td>Real</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.000,00</td>

                    </tr>
                    <tr>

                        <td >2</td>
                        <td>20°</td>
                        <td>20°</td>
                        <td>R$</td>
                        <td>Real</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.000,00</td>
                        <td>R$ 1.000,00</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}