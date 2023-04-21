import Image from "next/image";
import { Card } from "../../types";

type Props = {
    Card: Card
}

export function SquareCards({Card}: Props){
    return(
        <a className='bg-white/5 p-5 rounded-md hover:bg-white/10 flex flex-col gap-2'>
            <Image src={Card.thumbnail} className='w-full' width={120} height={120} alt="capa do album"/>
            <strong>{Card.name}</strong>
            <span className='text-sm text-zinc-500'>{Card.description}</span>
        </a>
    )
}