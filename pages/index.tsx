import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BeamFi Developer Docs AI Assistant - powered by Supabase and OpenAI</title>
        <meta property="og:image:width" content="1100" />
        <meta property="og:image:height" content="1100" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
          key="apple-touch-icon"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="icon16" />
        <link rel="manifest" href="/site.webmanifest" key="manifest" />
        <meta name="twitter:card" content="Beam" key="twittercard" />
        <meta name="twitter:site" content="@BeamFiApp" key="twittersite" />
        <meta name="twitter:creator" content="@BeamFiApp" key="twittercreator" />
        <meta property="og:url" content="http://beamfi.app" key="ogurl" />
        <meta property="og:title" content="Beam" key="ogtitle" />
        <meta
          property="og:description"
          content="BeamFi Developer Docs AI Assistant - powered by Supabase and OpenAI"
          key="ogdesc"
        />
        <meta
          name="description"
          content="BeamFi Developer Docs AI Assistant - powered by Supabase and OpenAI"
          key="desc"
        />
        <meta
          property="og:image"
          content="https://contentfly.app/assets/images/beamlogo-og.png"
          key="ogimage"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className="py-8 w-full flex flex-col items-center justify-center space-y-6">
          <Image src={'/beamfi-logo-dark.svg'} width="296" height="80" alt="BeamFi logo" />
          <SearchDialog />
        </div>

        <div className="py-2 w-full flex flex-col items-center justify-center space-y-2">
          <div>Powered by</div>
          <div className="py-2 w-full flex items-center justify-center space-x-6">
            <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
              <Link
                href="https://supabase.com"
                className="flex items-center justify-center"
                target="_blank"
              >
                <p className="text-base mr-2">Supabase</p>
              </Link>
            </div>
            <div className="border-l border-gray-300 w-1 h-4" />
            <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
              <Link
                href="https://openai.com"
                className="flex items-center justify-center"
                target="_blank"
              >
                <p className="text-base mr-2">OpenAI</p>
              </Link>
            </div>
            <div className="border-l border-gray-300 w-1 h-4" />
            <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
              <Link
                href="https://developer.beamfi.app"
                className="flex items-center justify-center"
                target="_blank"
              >
                <p className="text-base mr-2">BeamFi</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
