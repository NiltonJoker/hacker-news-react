
import { FC, ReactNode } from 'react'
import { Navbar } from '../ui'
import './Layout.css'

interface Props {
  children: ReactNode
}

export const Layout:FC<Props> = ({ children }) => {

  return (
    <div className='hacker__container'>
      <Navbar/>

      <main className='hacker__main'>
        { children }
      </main>
    </div>
  )
}
