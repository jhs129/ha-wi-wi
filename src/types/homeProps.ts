import { Trip } from './trip'

export interface HomeProps {
  textContent: {
    unauthorized: {
      title: string
      subtitle: string
      passwordPlaceholder: string
      submitButton: string
    }
    authorized: {
      title: string
      description: string
    }
  }
  trips: Trip
}
