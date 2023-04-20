import Image from "next/image"

export function PlayingNow(){
    return(
        <div className='flex items-center gap-2'>
            <Image src='/yoasobi.jpg' width={56} height={56} alt="yoasobi"/>
            <div className='flex flex-col'>
            <strong className='font-normal'>たぶん</strong>
            <span className='text-xs text-zinc-500'>YOASOBI</span>
            </div>
        </div>
    )
}