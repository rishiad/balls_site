import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  <div className="isolate bg-[url('/hero.png')] bg-cover h-screen ">
  <main className='h-screen bg-slate-400 bg-opacity-20'>
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">Bowls Past Presidents Association of SA</h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          </div>
        </div>
      </div>
      
    </div>
  </main>
</div>
    </>
  )
}
