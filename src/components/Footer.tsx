import { PlayingNow } from "./Player/PlayingNow"
import { PlayerControls } from "./Player/PlayerControsl"
import { PlayerOptions } from "./Player/PlayerOptions"

export function Footer(){
    return (
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <PlayingNow />
        <PlayerControls />
        <PlayerOptions />
      </footer>

    )
}