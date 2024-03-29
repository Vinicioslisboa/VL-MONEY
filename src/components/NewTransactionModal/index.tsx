import Modal from "react-modal";
import { Container, NewTransactionType, RadioBox } from "./styles";
import closeImg from "../../assets/img/close.svg";
import entradaImg from "../../assets/img/entradas.svg";
import saidaImg from "../../assets/img/saidas.svg";
import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleNewTransaction(event: FormEvent) {
    event.preventDefault();

   await createTransaction({
      title,
      value,
      type,
      category
    });
    
    setTitle('');
    setValue(0);
    setType('deposit');
    setCategory('');
    onRequestClose();
  }

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

        <Container onSubmit={handleNewTransaction}>
          <h2>Cadastrar Transação</h2>

          <input 
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          
          <input 
            placeholder="Preço"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
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
            value={category}
            onChange={(event) => setCategory(event.target.value)}
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

