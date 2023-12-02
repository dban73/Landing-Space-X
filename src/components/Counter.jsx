import { useState } from "preact/hooks";

export const Counter = () => {
  const [counter, setCount] = useState(0);

  return (
    <>
      <span class="text-yellow-300 text-xl mr-4">{counter} </span>
      <button
        class="border px-4 py-2 text-xl"
        onClick={() => setCount(counter + 1)}
      >
        +
      </button>
      <button
        class="border px-4 py-2 text-xl"
        onClick={() => setCount(counter - 1)}
      >
        -
      </button>
    </>
  );
};
