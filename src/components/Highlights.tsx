import { Card } from "../../types"
import { HighlightCard } from "./HighlightCard"

type Props = {
    cards: Card[]
}

export function Highlights({cards}: Props){
    return(
        <div className='grid grid-cols-3 gap-6 mt-4'>
            {cards.map(h => (
                <HighlightCard key={h.name} card={h} />
            ))}
        </div>
    )
}