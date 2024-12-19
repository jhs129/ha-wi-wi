export type Location = {
  name: string
  check_in: string
  check_out: string
  location_description: string
  hotel: {
    name: string
    address: string
    additional_info?: {
      daily_resort_fee: string
      description: string
    }
  }
  images: {
    url: string
    caption: string
  }[]
}

export interface Flight {
  flight_type: string
  flight_number: string
  departure: string
  arrival: string
  airline: string
}

export type ItineraryItem = {
  type: 'flight' | 'stay'
  id: string
  startDate: string
  endDate: string
  data: Flight | Location
}

export interface Trip {
  id: string
  title: string
  dates: {
    departure_date: string
    return_date: string
  }
  description: string
  images: {
    url: string
    caption: string
  }[]
  itinerary: ItineraryItem[]
}