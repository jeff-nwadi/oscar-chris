
import { Navbar } from './Navbar'
import Image from 'next/image'

import Man from "@/public/images/Man.png"

export const Hero = () => {
  return (
    <div className='bg-hero-bg h-screen text-text'>
        <Navbar/>
        <main className='flex justify-center items-center py-12'>
            <div>
                <div>
                    <h2>Osacr Christopher</h2>
                    <h1>Digital</h1>
                </div>
                <div>
                    <Image
                      src={Man}
                      alt="Avatar"
                      width={100}
                      height={100}
                    />
                </div>
            </div>
        </main>
    </div>
  )
}
