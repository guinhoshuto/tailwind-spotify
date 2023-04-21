import { Home as HomeIcon, Search, Library } from 'lucide-react'
import PlaylistList from './PlaylistsList'
import { Playlists } from '../../types'

type Props ={
  playlists: Playlists[]
}

export function Sidebar({playlists}: Props){
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
          <PlaylistList playlists={playlists} />
        </aside>
    )
}