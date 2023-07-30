import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

function App() {
  const [itemCount, setItemCount] = useState(0)

  function handleCartClick() {
    setItemCount(itemCount + 1)
  }

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div className="mt-10">Product</div>
      <button
        className="px-5 py-2 bg-green-500 text-white rounded-xl"
        onClick={handleCartClick}
      >
        Add to cart
      </button>
      <div>Cart count is {itemCount}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
