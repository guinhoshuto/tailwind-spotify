import { Footer } from '@/components/Footer'
import { Inter } from 'next/font/google'
import { Main } from '@/components/Main'
import { Sidebar } from '@/components/Sidebar'


const inter = Inter({ subsets: ['latin'] })

const nowPlaying = {
  cover: '/yoasobi.jpg',
  song: 'たぶん',
  artist: 'YOASOBI'
}

const cards = [
  {
    thumbnail: '/yoasobi.jpg',
    name: 'Daily Mix 1',
    description: 'a, b, c, d, e'
  },
  {
    thumbnail: '/yoasobi.jpg',
    name: 'Daily Mix 1',
    description: 'a, b, c, d, e'
  },
  {
    thumbnail: '/yoasobi.jpg',
    name: 'Daily Mix 1',
    description: 'a, b, c, d, e'
  },
  {
    thumbnail: '/yoasobi.jpg',
    name: 'Daily Mix 1',
    description: 'a, b, c, d, e'
  },
  {
    thumbnail: '/yoasobi.jpg',
    name: 'Daily Mix 5',
    description: 'a, b, c, d, e'
  },
]

const highlights = [
  {
    thumbnail: '/yoasobi.jpg',
    name: 'YOASOBI',
  },
  {
    thumbnail: '/yoasobi.jpg',
    name: 'Daily Mix 5',
  },
  {
    thumbnail: '/yoasobi.jpg',
    name: 'Daily Mix 5',
  },
  {
    thumbnail: '/yoasobi.jpg',
    name: 'Daily Mix 5',
  },
  {
    thumbnail: '/yoasobi.jpg',
    name: 'Daily Mix 5',
  },
  {
    thumbnail: '/yoasobi.jpg',
    name: 'Daily Mix 5',
  },
]

const Playlists = [
  {
    name: '平成ポップヒストリー',
    url: 'https://spotify.com'
  },
  {
    name: 'This Is 菅田将暉',
    url: 'https://spotify.com'
  },
  {
    name: 'まどろみの中で',
    url: 'https://spotify.com'
  },
  {
    name: 'This Is 米津玄師',
    url: 'https://spotify.com'
  },
  {
    name: 'ストロボ',
    url: 'https://spotify.com'
  },
  {
    name: 'YOASOBI「アイドル」',
    url: 'https://spotify.com'
  },
  {
    name: '夜に駆ける',
    url: 'https://spotify.com'
  },
  {
    name: 'たぶん',
    url: 'https://spotify.com'
  },
]

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar playlists={Playlists}/>
        <Main cards={cards} highlights={highlights}/>
      </div>
      <Footer nowPlaying={nowPlaying}/>
    </div>
  )
}
