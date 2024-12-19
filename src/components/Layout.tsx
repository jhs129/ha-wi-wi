import Head from 'next/head'
import Snowfall from 'react-snowfall'
import Image from 'next/image'
import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Boopmas.org | A Very Boopadoop Christmas</title>
        <meta name="description" content="A special gift of three weekend trips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col relative bg-slate-200">
        <Snowfall 
          color="white"
          snowflakeCount={200}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 1000
          }}
        />
        <header className="bg-primary py-6 mb-8">
          <div className="container mx-auto text-center text-light md:flex md:items-center lg:gap-16">
            <div className="px-4">
              <Link href="/">
                <Image
                  src="/images/boopmas.png"
                  alt="Boopmas.org"
                  width={125}
                  height={100}
                  className="mx-auto md:mx-0"
                  priority
                />
              </Link>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold mb-2 font-christmas md:block">
              Merry Christmas Boopadoop!
            </h1>
          </div>
        </header>
        <main className="px-4 pb-8 flex-grow">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
        <footer className="bg-primary text-foreground-alt text-center py-4 font-christmas">
          <p>&copy; 2024 Doop Christmas LLC. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

