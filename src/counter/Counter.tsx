import { type ICounter } from "./useCounter";

// コンポーネント
export function Counter({ value, increment, reset }: ICounter) {
  // ビュー
  return (
    <>
      <p>{value}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
