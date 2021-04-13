import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '@components/Navbar/Navbar'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className=" pt-0">
        <header className=" bg-green-500  ">
        
           <Navbar />
           
        </header>
       
        <h1 className="font-bold text-center mt-4">{title} </h1>
        <div className="p-9">
        {children}
        </div>
        
        <footer>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer>
        </div>
    </div>
)

export default Layout