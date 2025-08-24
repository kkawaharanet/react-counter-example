import { useState } from "react";

// コンポーネント
export function Counter() {
  // 状態
  const [value, setValue] = useState(0);

  // ロジック
  function increment() {
    setValue((value) => value + 1);
  }

  // ロジック
  function reset() {
    setValue(() => 0);
  }

  // ビュー
  return (
    <>
      <p>{value}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
