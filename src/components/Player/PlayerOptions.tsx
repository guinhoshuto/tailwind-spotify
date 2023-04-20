import { Volume, Maximize2, Mic2, LayoutList, Laptop2 } from 'lucide-react'
export function PlayerOptions(){
    return(
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
    )
}