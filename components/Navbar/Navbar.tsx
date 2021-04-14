import React, { useContext } from 'react'
import Link from 'next/link'
import AppContext from 'context/AppContext';

export default function Navbar() {
  const { state} = useContext(AppContext);
  return (
    <nav>
      <menu className=" flex m-0 text-white menu justify-end mb-2 pb-2 pt-2 p-9 ">
        <Link  href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>{state.cart.length} Cesta</a>
        </Link>
      </menu>
    </nav>
  )
}
