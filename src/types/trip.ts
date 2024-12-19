export type Trip = {
  id: string
  title: string
  image: string
  description: string
  flights: {
    outbound: {
      departure: string
      arrival: string
      airline: string
      flightNumber: string
    }
    return: {
      departure: string
      arrival: string
      airline: string
      flightNumber: string
    }
  }
  hotel: {
    name: string
    link: string
    address: string
    description: string
    images: string[]
  }
  activities: Array<{
    text: string
    image: string
  }>
} 