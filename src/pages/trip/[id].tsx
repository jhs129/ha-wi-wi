import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import TripDetails from '../../components/TripDetails'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { trips } from '../../content/trips'

export default function TripPage() {
  const router = useRouter()
  const { id } = router.query
  const trip = trips.find(trip => trip.id === id)

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
        <Link href="/" className="inline-flex items-center text-secondary hover:underline font-christmas text-bold">
          <FaArrowLeft className="mr-2" /> Back to All Trips
        </Link>
        <TripDetails {...trip} />
      </div>
    </Layout>
  )
}

