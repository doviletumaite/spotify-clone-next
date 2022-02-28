import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Spotify Next</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        {/* sidebar */}
        <Sidebar/>
        {/* center */}
      </main>
      <div>
        {/* player */}
      </div>
    </div>
  )
}

export default Home
