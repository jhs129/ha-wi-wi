import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import TripDetails from '../../components/TripDetails'
import Link from 'next/link'
import tripsData from '@/content/trips.json'

export default function TripPage() {
  const router = useRouter()
  const { id } = router.query
  const trip = tripsData.find(trip => trip.id === id)

  if (!trip) {
    return (
      <Layout>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Trip not found</h1>
          <Link href="/" className="text-secondary hover:underline font-christmas text-bold">
            Return to homepage
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="space-y-6">
        <TripDetails {...trip} />
      </div>
    </Layout>
  )
}

