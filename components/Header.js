import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <ul>
                <li>
                    <Link href={'/'}>Static</Link> 
                </li>
                {' | '}
                <li>
                    <Link href={'/server-side'}>Server</Link> 
                </li>
                {' | '}
                <li>
                    <Link href={'/client-side'}>Client</Link> 
                </li>
        </ul>
        <hr />
    </header>
  )
}

export default Header