import logoImg from "../../assets/img/logomarca.svg"
import { Container, Content } from "./styles";

export function Header() {
  return(
    <Container>
      <Content >
        <div className="logo">
          <img src={logoImg} alt="Logo VL" />
          <span><h2>VL MONEY</h2></span>
        </div>
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
} 