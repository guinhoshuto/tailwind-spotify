import { Footer } from '@/components/Footer'
import { Inter } from 'next/font/google'
import { Main } from '@/components/Main'
import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  )
}
