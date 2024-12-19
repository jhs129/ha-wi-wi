import { useState, useEffect, useMemo } from 'react'
import Layout from '../components/Layout'
import TripCard from '../components/TripCard'
import { GetStaticProps } from 'next'
import { HomeProps } from '../types/homeProps'

export default function Home(props: HomeProps) {
  const { textContent, trips } = props
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [password, setPassword] = useState('')
  
  const RELEASE_DATE = useMemo(() => new Date('2024-12-25'), [])
  
  useEffect(() => {
    const currentDate = new Date()
    const storedAuth = localStorage.getItem('isAuthorized')
    const authExpiration = localStorage.getItem('authExpiration')
    
    if (currentDate >= RELEASE_DATE) {
      setIsAuthorized(true)
    } else if (storedAuth === 'true' && authExpiration && new Date(authExpiration) > currentDate) {
      setIsAuthorized(true)
    } else {
      // Clear expired auth
      localStorage.removeItem('isAuthorized')
      localStorage.removeItem('authExpiration')
    }
  }, [RELEASE_DATE])

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'doop') {
      setIsAuthorized(true)
      localStorage.setItem('isAuthorized', 'true')
      
      // Set expiration 24 hours from now
      const expiration = new Date()
      expiration.setHours(expiration.getHours() + 24)
      localStorage.setItem('authExpiration', expiration.toISOString())
    }
  }

  if (!isAuthorized) {
    return (
      <Layout>
        <div className="space-y-8 text-center">
          <h1 className="text-4xl font-bold text-primary font-christmas">
            {textContent.unauthorized.title}
          </h1>
          <p className="text-xl font-christmas">
            {textContent.unauthorized.subtitle}
          </p>
          
          <form onSubmit={handlePasswordSubmit} className="max-w-sm mx-auto space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder={textContent.unauthorized.passwordPlaceholder}
            />
            <button
              type="submit"
              className="px-6 py-2 text-light bg-primary rounded-md hover:bg-primary/80"
            >
              {textContent.unauthorized.submitButton}
            </button>
          </form>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center text-primary font-christmas">
          {textContent.authorized.title}
        </h1>
        <div className="text-xl text-center font-christmas">
          <p>
            {textContent.authorized.description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {trips.map((trip) => (
            <TripCard 
              key={trip.id} 
              id={trip.id}
              title={trip.title}
              image={trip.image}
              description={trip.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const textContent = await import('@/content/text.json')
  const trips = await import('@/content/trips.json')

  return {
    props: {
      textContent: textContent.default,
      trips: trips.default
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

