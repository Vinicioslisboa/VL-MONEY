import { Container } from "./styles";
import arrowUpImg from "../../assets/img/entradas.svg";
import arrowDownImg from "../../assets/img/saidas.svg";
import totalImg from "../../assets/img/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={arrowUpImg} />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={arrowDownImg} />
        </header>
        <strong>R$ 500,00</strong>
      </div>
      <div className="total-background">
        <header>
          <p>Total</p>
          <img src={totalImg} />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}