import { useCounter } from "./useCounter";

// コンポーネント
export function Counter() {
  // 状態
  const { value, increment, reset } = useCounter();

  // ビュー
  return (
    <>
      <p>{value}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
