import { Playlists } from "../../types"

type Props = {
    playlists: Playlists[]
}

export default function PlaylistList({playlists}: Props){
    return(
        <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
            {playlists.map(p => (
                <a key={p.name} href={p.url} className='text-sm text-zinc-400 hover:text-zinc-100'>
                    {p.name}
                </a>
            ))}
        </nav>
    )
}