import { Home as HomeIcon, Search, Library } from 'lucide-react'
export function Sidebar(){
    return(
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
    )
}