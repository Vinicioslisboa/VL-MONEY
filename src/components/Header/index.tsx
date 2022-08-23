import { Container, Content } from "./styles";
import logoImg from "../../assets/img/logomarca.svg";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal}: HeaderProps) {
  return(
    <Container>
      <Content >
        <div className="logo">
          <a href="#">
            <img src={logoImg} alt="Logo VL" />
            <span><h2>VL MONEY</h2></span>
          </a>
        </div>
        <button 
          type="button" 
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  );
}  