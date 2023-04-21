import { Card } from "../../types"
import { SquareCards } from "./SquareCards"

type Props = {
    cards: Card[]
}

export function ForYou({cards}: Props){
    return(
          <div className='grid grid-cols-5 gap-4 mt-4'>
            {cards.map(c => (<SquareCards key={c.name} Card={c}/>))}
          </div>
    )
}