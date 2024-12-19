import { useState, useEffect, useMemo } from 'react'
import Layout from '../components/Layout'
import TripCard from '../components/TripCard'
import { trips } from '../content/trips'

export default function Home() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [password, setPassword] = useState('')
  
  const RELEASE_DATE = useMemo(() => new Date('2024-12-25'), [])
  
  useEffect(() => {
    const currentDate = new Date()
    const storedAuth = localStorage.getItem('isAuthorized') === 'true'
    
    if (currentDate >= RELEASE_DATE || storedAuth) {
      setIsAuthorized(true)
    }
  }, [RELEASE_DATE])

  const calculateTotalPrice = (trip: typeof trips[0]): number => {
    const flightPrice = parseFloat(trip.flights.price) || 0
    const hotelPrice = parseFloat(trip.hotel.price) || 0
    return flightPrice + hotelPrice
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'doop') {
      setIsAuthorized(true)
      localStorage.setItem('isAuthorized', 'true')
    }
  }

  if (!isAuthorized) {
    return (
      <Layout>
        <div className="space-y-8 text-center">
          <h1 className="text-4xl font-bold text-primary font-christmas">
         Silly Boopadoop, go back to sleep! Santa is not here yet! 🎅
          </h1>
          <p className="text-xl font-christmas">Come back on Christmas Day or enter the double secret password:</p>
          
          <form onSubmit={handlePasswordSubmit} className="max-w-sm mx-auto space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter password"
            />
            <button
              type="submit"
              className="px-6 py-2 text-light bg-primary rounded-md hover:bg-primary/80"
            >
              Submit
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
          Ok, it&apos;s time for the pressence!
        </h1>
        <div className="text-xl text-center font-christmas">
          <p>Open each gift with that glint in your eye,
          pick perfect present, and get ready to fly!
          Three choices of badulting with your favorite guy!</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {trips.map((trip) => (
            <TripCard 
              key={trip.id} 
              id={trip.id}
              title={trip.title}
              image={trip.image}
              description={trip.description}
              totalPrice={calculateTotalPrice(trip)}
            />
          ))}
        </div>
        <div className="text-center mt-4 hidden">placeholder text here</div>
      </div>
    </Layout>
  )
}

