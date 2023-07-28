import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'

import './index.scss'

function App() {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div className="mt-10">DevDays</div>
      <Header />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
