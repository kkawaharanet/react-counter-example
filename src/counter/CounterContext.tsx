import { createContext } from "react";
import { useCounter, type ICounter } from "./useCounter";

const defaultCounter: ICounter = {
  value: 0,
  increment: () => {
    throw new Error("Not implemented");
  },
  reset: () => {
    throw new Error("Not implemented");
  },
};

// コンテクスト
export const CounterContext = createContext(defaultCounter);

// コンテクストプロバイダ
export function CounterProvider({ children }: { children: React.ReactNode }) {
  // 状態
  const counter = useCounter();

  return <CounterContext value={counter}>{children}</CounterContext>;
}
