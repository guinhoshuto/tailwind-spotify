import Image from "next/image"
import { nowPlaying } from "../../../types"

type Props = {
    nowPlaying: nowPlaying
}

export function PlayingNow({nowPlaying}: Props){
    return(
        <div className='flex items-center gap-2'>
            <Image src={nowPlaying.cover} width={56} height={56} alt="yoasobi"/>
            <div className='flex flex-col'>
            <strong className='font-normal'>{nowPlaying.song}</strong>
            <span className='text-xs text-zinc-500'>{nowPlaying.artist}</span>
            </div>
        </div>
    )
}