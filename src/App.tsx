import { Counter } from "./counter/Counter";
import { useCounter } from "./counter/useCounter";

// 画面相当のコンポーネント
export function App() {
  // 状態
  const counter = useCounter();

  return (
    <>
      <Counter
        value={counter.value}
        increment={counter.increment}
        reset={counter.reset}
      />

      {/* Counterコンポーネント以外も状態を参照できる */}
      <p>{counter.value}</p>
    </>
  );
}
