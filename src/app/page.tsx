import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-3'>
            <button className='p-1 rounded-full bg-black/40'><ChevronLeft /></button>
            <button className='p-1 rounded-full bg-black/40'><ChevronRight /></button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>こんばんは</h1>
          <div className='grid grid-cols-3 gap-6 mt-4'>
            <a className='rounded bg-white/5 overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/yoasobi.jpg" width={104} height={104} alt="album"/>
              <strong>YOASOBI</strong>
              <button className=' w-12 h-12 pl-1 flex justify-center items-center p-2 rounded-full bg-green-400 text-black mr-8 ml-auto invisible group-hover:visible'><Play /></button>
            </a>
            <a className='rounded bg-white/5 overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/yoasobi.jpg" width={104} height={104} alt="album"/>
              <strong>YOASOBI</strong>
              <button className=' w-12 h-12 pl-1 flex justify-center items-center p-2 rounded-full bg-green-400 text-black mr-8 ml-auto invisible group-hover:visible'><Play /></button>
            </a>
            <a className='rounded bg-white/5 overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/yoasobi.jpg" width={104} height={104} alt="album"/>
              <strong>YOASOBI</strong>
              <button className=' w-12 h-12 pl-1 flex justify-center items-center p-2 rounded-full bg-green-400 text-black mr-8 ml-auto invisible group-hover:visible'><Play /></button>
            </a>
            <a className='rounded bg-white/5 overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/yoasobi.jpg" width={104} height={104} alt="album"/>
              <strong>YOASOBI</strong>
              <button className=' w-12 h-12 pl-1 flex justify-center items-center p-2 rounded-full bg-green-400 text-black mr-8 ml-auto invisible group-hover:visible'><Play /></button>
            </a>
            <a className='rounded bg-white/5 overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/yoasobi.jpg" width={104} height={104} alt="album"/>
              <strong>YOASOBI</strong>
              <button className=' w-12 h-12 pl-1 flex justify-center items-center p-2 rounded-full bg-green-400 text-black mr-8 ml-auto invisible group-hover:visible'><Play /></button>
            </a>
            <a className='rounded bg-white/5 overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/yoasobi.jpg" width={104} height={104} alt="album"/>
              <strong>YOASOBI</strong>
              <button className=' w-12 h-12 pl-1 flex justify-center items-center p-2 rounded-full bg-green-400 text-black mr-8 ml-auto invisible group-hover:visible'><Play /></button>
            </a>
          </div>
          <h2 className='font-semibold text-2xl mt-10'>あなたへのおすすめ</h2> 
          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a className='bg-white/5 p-5 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src='/yoasobi.jpg' className='w-full' width={120} height={120} alt="capa do album"/>
              <strong>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>a, b, c, d, e</span>
            </a>
            <a className='bg-white/5 p-5 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src='/yoasobi.jpg' className='w-full' width={120} height={120} alt="capa do album"/>
              <strong>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>a, b, c, d, e</span>
            </a>
            <a className='bg-white/5 p-5 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src='/yoasobi.jpg' className='w-full' width={120} height={120} alt="capa do album"/>
              <strong>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>a, b, c, d, e</span>
            </a>
            <a className='bg-white/5 p-5 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src='/yoasobi.jpg' className='w-full' width={120} height={120} alt="capa do album"/>
              <strong>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>a, b, c, d, e</span>
            </a>
            <a className='bg-white/5 p-5 rounded-md hover:bg-white/10 flex flex-col gap-2'>
              <Image src='/yoasobi.jpg' className='w-full' width={120} height={120} alt="capa do album"/>
              <strong>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>a, b, c, d, e</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
