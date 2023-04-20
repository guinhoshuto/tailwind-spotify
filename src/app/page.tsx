import Image from 'next/image'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Volume, Maximize2, Play, Shuffle, Mic2, LayoutList, Laptop2, SkipBack, SkipForward, Repeat } from 'lucide-react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-64 bg-zinc-950 p-6'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'><HomeIcon />ホーム</a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'><Search />検索</a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'><Library />マイライブラリ</a>
          </nav>
          <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>平成ポップヒストリー</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This Is 菅田将暉 </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>まどろみの中で</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This Is 米津玄師</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>ストロボ</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>YOASOBI「アイドル」</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>夜に駆ける </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>たぶん</a>
          </nav>
        </aside>
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
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-2'>
          <Image src='/yoasobi.jpg' width={56} height={56} alt="yoasobi"/>
          <div className='flex flex-col'>
            <strong className='font-normal'>たぶん</strong>
            <span className='text-xs text-zinc-500'>YOASOBI</span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-6'>
            <Shuffle className='text-zinc-200' size={20}/>
            <SkipBack className='text-zinc-200' size={20}/>
            <button className='w-10 h-10 pl-1 flex justify-center items-center p-2 rounded-full bg-white text-black ml-auto'><Play /></button>
            <SkipForward className='text-zinc-200' size={20}/> 
            <Repeat className='text-zinc-200' size={20}/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:52</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:53</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20} className='text-zinc-400'/>
          <LayoutList size={20} className='text-zinc-400'/>
          <Laptop2 size={20} className='text-zinc-400'/>
          <div className='flex items-center gap-2'>
            <Volume size={20} className='text-zinc-400'/>
            <div className='h-1 rounded-full w-16 bg-zinc-600'>
              <div className='bg-zinc-200 w-4 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20} className='text-zinc-400'/>
        </div>
      </footer>
    </div>
  )
}
