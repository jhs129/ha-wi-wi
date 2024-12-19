import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/Card"

interface TripBannerProps {
  id: string
  title: string
  image: string
}

export function TripBanner({ id, title, image }: TripBannerProps) {
  return (
    <Link href={`/trip/${id}`}>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-48 w-full">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-2xl font-bold text-light font-christmas">{title}</h2>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

