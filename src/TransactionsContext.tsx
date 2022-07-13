import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  value: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  );

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(TransactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...TransactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
  
    setTransactions([
      ...transactions,
      transaction,
    ]);
  }

  return(
    <TransactionsContext.Provider value={{transactions, createTransaction }}>
       { children }
     </TransactionsContext.Provider>
  );
}