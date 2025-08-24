import { useState } from "react";

export interface ICounter {
  value: number;
  increment(): void;
  reset(): void;
}

// カスタムフック
export function useCounter(): ICounter {
  const [value, setValue] = useState(0);

  // ロジック
  function increment() {
    setValue((value) => value + 1);
  }

  // ロジック
  function reset() {
    setValue(() => 0);
  }

  return { value, increment, reset };
}
