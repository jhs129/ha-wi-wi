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
        <title>Schneider Family Christmas</title>
        <meta name="description" content="Schneider Family Christmas" />
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
        <header className="bg-primary w-full mx-auto py-6 mb-8 items-center">
          <div className="container mx-auto text-center text-light flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="px-4">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Schneider Family Christmas"
                  width={125}
                  height={100}
                  className="mx-auto"
                  priority
                />
              </Link>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold font-christmas">
              Merry Christmas!
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

