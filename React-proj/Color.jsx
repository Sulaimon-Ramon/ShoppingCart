import { useState } from "react"

export const Color = () => {
    const [color, setcolor] = useState("");
    const styles = {
        background: color,
    };
    return (
        <div>
            <h1>color Box</h1>
            <input type="text" style={styles} placeholder="Type a color" onChange={(event) => setcolor(event.target.value)} />

            <Color1/>
        </div>
    )
}

const Color1 = () => {
   const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count < 30 ? count + 1: count)}>+</button>
            <button onClick={() => setCount(count > 0 ? count - 1: count)}>-</button>
        </div>
    )
}