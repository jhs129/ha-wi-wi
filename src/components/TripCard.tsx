import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface TripCardProps {
  id: string
  title: string
  description: string
  images: {
    url: string
    caption: string
  }[]
}

export default function TripCard({ id, title, description, images }: TripCardProps) {
  const [isUnwrapped, setIsUnwrapped] = useState(false)

  const handleUnwrap = () => {
    setIsUnwrapped(true)
  }

  if (!isUnwrapped) {
    return (
      <div 
        onClick={handleUnwrap}
        className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border cursor-pointer"
      >
        <div className="relative h-48">
          <Image
            src="/images/present-2.png"
            alt="Wrapped Present"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="p-4 text-center">
          <p className="text-lg font-semibold text-primary font-christmas">Click to unwrap your surprise!</p>
        </div>
      </div>
    )
  }

  return (
    <Link href={`/trip/${id}`} className="block">
      <div className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border">
        <div className="relative h-48">
          <Image
            src={images[0].url}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 font-raleway">
          <h2 className="text-2xl font-semibold mb-2 text-primary font-christmas">{title}</h2>
          <p className="text-foreground mb-2 text-xl">{description}</p>
        </div>
      </div>
    </Link>
  )
}

