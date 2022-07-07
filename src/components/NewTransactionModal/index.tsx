import Modal from "react-modal";
import { Container, NewTransactionType, RadioBox } from "./styles";
import closeImg from "../../assets/img/close.svg";
import entradaImg from "../../assets/img/entradas.svg";
import saidaImg from "../../assets/img/saidas.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
      <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button 
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container>
          <h2>Cadastrar Transação</h2>

          <input 
            placeholder="Título" 
          />
          
          <input 
            placeholder="Preço"
            type="number" 
          />

          <NewTransactionType>
            <RadioBox
              type="button"
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={entradaImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
            activeColor="red"
            >
              <img src={saidaImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </NewTransactionType>

          <input 
            placeholder="Categoria" 
          />

          <button 
            type="submit"
          >
            Cadastrar
          </button>
        </Container>
      </Modal>
  );
}