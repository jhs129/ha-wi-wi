import { Trip } from './trip'

type TextContent = {
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

export interface HomeProps {
  textContent: TextContent
  trips: Trip[]
}
