import React from 'react'

function Header({count}) {
  return (
    <header className="text-5xl font-bold p-5 bg-blue-500 text-white flex">
      <div className="flex-grow">Header</div>
      <div>{count}</div>
    </header>
  )
}

export default Header
