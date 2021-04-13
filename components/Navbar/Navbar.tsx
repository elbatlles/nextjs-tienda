import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <menu className=" flex m-0 text-white menu justify-end mb-2 pb-2 pt-2 p-9 ">
        <Link  href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>Cesta</a>
        </Link>
      </menu>
    </nav>
  )
}
