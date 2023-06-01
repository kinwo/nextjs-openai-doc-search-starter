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
        <title>Next.js OpenAI Template</title>
        <meta
          name="description"
          content="Next.js Template for building OpenAI applications with Supabase."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <SearchDialog />
        </div>

        <div className="py-8 w-full flex items-center justify-center space-x-6">
          <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
            <Link
              href="https://supabase.com"
              className="flex items-center justify-center"
              target="_blank"
            >
              <p className="text-base mr-2">Powered by Supabase</p>
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
        </div>
      </main>
    </>
  )
}
