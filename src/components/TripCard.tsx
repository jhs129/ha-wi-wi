import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface TripCardProps {
  id: string
  title: string
  image: string
  description: string
  totalPrice: number
}

export default function TripCard({ id, title, image, description, totalPrice }: TripCardProps) {
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
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 font-raleway">
          <h2 className="text-2xl font-semibold mb-2 text-primary font-christmas">{title}</h2>
          <p className="text-foreground mb-2 text-xl">{description}</p>
          <p className="text-lg font-semibold text-secondary hidden">
            ${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </Link>
  )
}

