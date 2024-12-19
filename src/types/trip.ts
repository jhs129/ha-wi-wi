export type Location = {
  name: string
  check_in: string
  check_out: string
  hotel: {
    name: string
    address: string
    additional_info: {
      daily_resort_fee: string
      description: string
    }
  }
  images: Array<{
    url: string
    caption: string
  }>
}

export type Flight = {
  flight_type: string
  flight_number: string
  departure: string
  arrival: string
  airline: string
}

export type Trip = {
  id: string
  title: string
  dates: {
    departure_date: string
    return_date: string
  }
  locations: Location[]
  flights: Flight[]
} 