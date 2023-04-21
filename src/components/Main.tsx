import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ForYou } from "./ForYou"
import { Highlights } from "./Highlights"

import { Card } from "../../types"

type Props = {
    highlights: Card[],
    cards: Card[]
}

export function Main({highlights, cards}: Props){
    return(
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-3'>
            <button className='p-1 rounded-full bg-black/40'><ChevronLeft /></button>
            <button className='p-1 rounded-full bg-black/40'><ChevronRight /></button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>こんばんは</h1>
          <Highlights cards={highlights} />
          <h2 className='font-semibold text-2xl mt-10'>あなたへのおすすめ</h2> 
          <ForYou cards={cards}/>
        </main>

    )
}