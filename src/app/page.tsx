import Image from 'next/image'
import { Home as HomeIcon, Search, Library } from 'lucide-react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-64 bg-zinc-950 p-6'>
          <nav className='space-y-5'>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'><HomeIcon />Home</a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'><Search />Search</a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'><Library />Your Library</a>
          </nav>
        </aside>
        <main className='flex-1 p-6'></main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6"></footer>
    </div>
  )
}
