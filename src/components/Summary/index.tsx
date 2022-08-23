import { Container } from "./styles";
import arrowUpImg from "../../assets/img/entradas.svg";
import arrowDownImg from "../../assets/img/saidas.svg";
import totalImg from "../../assets/img/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    switch (transaction.type) {
      case 'deposit':
        acc.deposits += transaction.value;
        acc.total += transaction.value;
        break;
      case 'withdraw':
        acc.withdraws += transaction.value;
        acc.total -= transaction.value;
        break;
    }
      return acc;
  },{
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={arrowUpImg} />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={arrowDownImg} />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="total-background">
        <header>
          <p>Total</p>
          <img src={totalImg} />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}