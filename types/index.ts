export interface nowPlaying {
    cover: string
    song: string
    artist: string
}

export interface Card{
    thumbnail: string
    name: string
    description?: string
}

export interface Playlists{
    name: string
    url: string
}