import { useState } from "react";
import "./App.css";
import Doboz2 from "./Doboz2";

function App() {
const [count, setCount] = useState(0); // kék doboz
const [redValue, setRedValue] = useState(0); // piros doboz

return (
<div className="App">
<h2>1. Feladat – Kék Doboz</h2>

<div className="blue-box">{count}</div>

<button onClick={() => setCount(count + 1)}>Növel</button>
<button onClick={() => setCount(count - 1)}>Csökkent</button>

<hr />

<h2>2. Feladat – Piros Doboz (külön komponens)</h2>
<Doboz2 value={redValue} onIncrease={() => setRedValue(redValue + 1)} />
</div>
);
}

export default App;