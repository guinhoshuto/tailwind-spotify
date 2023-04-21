import Image from "next/image"
import { Card } from "../../types"
import { Play } from 'lucide-react'

type Props ={
    card: Card
}

export function HighlightCard({card}: Props){
    return(
        <a className='rounded bg-white/5 overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
            <Image src={card.thumbnail} width={104} height={104} alt="album"/>
            <strong>{card.name}</strong>
            <button className=' w-12 h-12 pl-1 flex justify-center items-center p-2 rounded-full bg-green-400 text-black mr-8 ml-auto invisible group-hover:visible'><Play /></button>
        </a>
    )
}