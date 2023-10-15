import Image from 'next/image'
import underConstructionImage from '../assets/under_construction.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src= {underConstructionImage}
        width='auto'
        height='auto'  
        alt='Under construction message'
      >
      </Image>
    </main>
  )
}
