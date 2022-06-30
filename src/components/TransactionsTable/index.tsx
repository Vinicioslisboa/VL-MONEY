import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className="deposit">R$ 12.000</td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.200</td>
            <td>Contas</td>
            <td>05/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}