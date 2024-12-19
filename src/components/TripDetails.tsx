import { FaPlane, FaHotel } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRef, useCallback } from "react";
import { Location, Flight, ItineraryItem } from "@/types/trip";
import type { RefCallback } from 'react'

type TripDetailsProps = {
  id: string
  title: string
  dates: {
    departure_date: string
    return_date: string
  }
  itinerary: ItineraryItem[]
  images: { url: string; caption: string }[]
}

export default function TripDetails({
  title,
  dates,
  itinerary,
  images,
}: TripDetailsProps) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    autoplay: false,
    adaptiveHeight: true
  };

  const locationSliders = useRef<(Slider | null)[]>([]);

  const setSliderRef = useCallback((index: number): RefCallback<Slider> => (el) => {
    locationSliders.current[index] = el;
  }, []);

  return (
    <div className="space-y-8">
      <div className="relative w-full h-[400px]">
        <Image
          src={images[0].url}
          alt={title}
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2">
            <h1 className="text-4xl font-bold text-light font-christmas">
              {title}
            </h1>
            <div className="text-light">
              {dates.departure_date} - {dates.return_date}
            </div>
          </div>
        </div>
      </div>

      {itinerary.map((item, index) => (
        <div key={item.id} className="bg-light rounded-lg shadow-md p-6">
          {item.type === 'stay' ? (
            // Location Card
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold flex items-center font-christmas">
                  <FaHotel className="mr-2" /> {(item.data as Location).name}
                </h2>
                <div className="text-sm text-gray-600">
                  {item.startDate} - {item.endDate}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  {(item.data as Location).images?.length > 0 && (
                    <div className="relative">
                      <Slider {...sliderSettings} ref={setSliderRef(index)}>
                        {(item.data as Location).images.map((image, imageIndex) => (
                          <div key={imageIndex}>
                            <div className="relative h-[300px] w-full">
                              <Image
                                src={image.url}
                                alt={image.caption}
                                fill
                                className="object-cover rounded-lg"
                              />
                            </div>
                            <p className="text-center text-gray-700 text-sm mt-2">
                              {image.caption}
                            </p>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  )}
                </div>
                <div className="md:w-1/2">
               
                  <p>
                    <strong>Hotel:</strong> {(item.data as Location).hotel.name}
                  </p>
                  <p>
                    <strong>Address:</strong> {(item.data as Location).hotel.address}
                  </p>
                  <p></p>
                  <p className="my-4">
                     {(item.data as Location).location_description}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Flight Card
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold flex items-center font-christmas">
                  <FaPlane className="mr-2" /> {(item.data as Flight).flight_type}
                </h2>
                <div className="text-sm text-gray-600">
                  {item.startDate}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p><strong>Airline:</strong> {(item.data as Flight).airline}</p>
                <p><strong>Flight Number:</strong> {(item.data as Flight).flight_number}</p>
                <p><strong>Departure:</strong> {(item.data as Flight).departure}</p>
                <p><strong>Arrival:</strong> {(item.data as Flight).arrival}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
