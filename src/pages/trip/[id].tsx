import { GetStaticProps, GetStaticPaths } from 'next'
import { Trip, ItineraryItem, Flight, Location } from '@/types/trip'
import Layout from '@/components/Layout'
import TripDetails from '@/components/TripDetails'

type RawItineraryItem = {
  type: string
  id: string
  startDate: string
  endDate: string
  data: Flight | Location  // Use our existing types instead of any
}

interface TripPageProps {
  trip: Trip
}

export default function TripPage({ trip }: TripPageProps) {
  return (
    <Layout>
      <div className="space-y-6">
        <TripDetails {...trip} />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<TripPageProps> = async ({ params }) => {
  const tripData = await import(`@/content/itinerary_${params?.id}.json`)
  
  // Transform the raw data to ensure proper typing
  const trip: Trip = {
    ...tripData.default,
    itinerary: tripData.default.itinerary.map((item: RawItineraryItem): ItineraryItem => ({
      ...item,
      type: item.type as 'flight' | 'stay'
    }))
  }

  return {
    props: {
      trip
    },
    revalidate: 3600
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'hawaii' } }
    ],
    fallback: false
  }
}

