import Navbar from './navbar'
import Sidebar from './sidebar'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight: ['500'] })

export default function Layout({ children }) {
  return (
    <>
        <div className={`min-h-screen ${inter.className}`}>
            <Navbar />
            <div className='flex flex-row'>
                <Sidebar />
                <main className='flex-1 bg-white'>{children}</main>
            </div>

        </div>
      
      
    </>
  )
}