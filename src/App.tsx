import { use } from "react";
import { Counter } from "./counter/Counter";
import { CounterContext } from "./counter/CounterContext";

// 画面相当のコンポーネント
export function App() {
  const counter = use(CounterContext);

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
