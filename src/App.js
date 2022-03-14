import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount+1)
  const decrement2 = () => setCount(previousCount => previousCount-1)

  const reset = () => setCount(0)
  const reset2 = () => setCount(previousCount => 0)

  const double = () => setCount(count*2)
  const double2 = () => setCount(previousCount => previousCount*2)

  const devide = () => setCount(previousCount => {
    return previousCount % 3 === 0 ? previousCount / 3 : previousCount;
  })

  return (
    <>
        <div>count: {count}</div>
        <div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
        <div>
            <button onClick={increment2}>+1</button>
            <button onClick={decrement2}>-1</button>
        </div>
        <div>
            <button onClick={reset}>Reset</button>
            <button onClick={reset2}>Reset</button>
        </div>
        <div>
            <button onClick={double}>*2</button>
            <button onClick={double2}>*2</button>
        </div>
        <div>
            <button onClick={devide}>3の場合数だけ割った数を出す</button>
        </div>
    </>
  )
}

export default App
