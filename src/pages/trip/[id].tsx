import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import TripDetails from '../../components/TripDetails'
import Link from 'next/link'
import itineraryData from '@/content/itinerary_hawaii.json'

export default function TripPage() {
  const router = useRouter()
  const { id } = router.query
  
  // For now we only have one itinerary, so we can just check if the ID matches
  const trip = id === itineraryData.id ? itineraryData : null

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

