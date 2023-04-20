import { Play, Shuffle, SkipBack, SkipForward, Repeat } from 'lucide-react'

export function PlayerControls(){
    return(
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
    )
}