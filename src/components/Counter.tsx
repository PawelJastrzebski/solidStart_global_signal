import { createSignal } from "solid-js";
import "./Counter.css";

const [count, setCount] = createSignal(0);

export default function Counter() {
  setCount(c => c + 1)
  return (
    <button class="increment" onClick={() => setCount(count() + 1)} type="button">
      Clicks: {count()}
    </button>
  );
}
