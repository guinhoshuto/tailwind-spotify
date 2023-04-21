import { PlayingNow } from "./Player/PlayingNow"
import { PlayerControls } from "./Player/PlayerControsl"
import { PlayerOptions } from "./Player/PlayerOptions"

import { nowPlaying } from '../../types'

type Props = {
    nowPlaying: nowPlaying
}

export function Footer({nowPlaying}: Props){
    return (
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <PlayingNow nowPlaying={nowPlaying}/>
        <PlayerControls />
        <PlayerOptions />
      </footer>

    )
}