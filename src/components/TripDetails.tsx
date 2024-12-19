import { FaPlane, FaHotel } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRef, useCallback } from "react";
import { Location, Flight } from "@/types/trip";
import type { RefCallback } from 'react'

type TripDetailsProps = {
  id: string
  title: string
  dates: {
    departure_date: string
    return_date: string
  }
  locations: Location[]
  flights: Flight[]
  images: { url: string; caption: string }[]
}

export default function TripDetails({
  title,
  dates,
  locations,
  flights,
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
  };

  const locationSliders = useRef<(Slider | null)[]>([]);

  const handleSlideClick = useCallback((sliderIndex: number) => {
    const slider = locationSliders.current[sliderIndex];
    if (slider) {
      slider.slickNext();
    }
  }, []);

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

      {locations.map((location, index) => (
        <div key={location.name + index} className="bg-light rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold flex items-center font-christmas">
              <FaHotel className="mr-2" /> {location.name}
            </h2>
            <div className="text-sm text-gray-600">
              {location.check_in} - {location.check_out}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <Slider 
                {...sliderSettings}
                ref={setSliderRef(index)}
              >
                {location.images.map((image) => (
                  <div 
                    key={image.url} 
                    className="relative h-[300px]"
                    onClick={() => handleSlideClick(index)}
                  >
                    <Image
                      src={image.url}
                      alt={image.caption}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="md:w-1/2">
              <p>
                <strong>Hotel:</strong> {location.hotel.name}
              </p>
              <p>
                <strong>Address:</strong> {location.hotel.address}
              </p>
              <p>
                <strong>Resort Fee:</strong> {location.hotel.additional_info.daily_resort_fee}
              </p>
              <p>
                <strong>Description:</strong> {location.hotel.additional_info.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-light rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center font-christmas">
          <FaPlane className="mr-2" /> Flight Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flights.map((flight, index) => (
            <div 
              key={`${flight.flight_type}-${flight.flight_number || index}`} 
              className="border-b pb-4 last:border-b-0"
            >
              <h3 className="text-xl font-medium mb-2">{flight.flight_type}</h3>
              <p><strong>Departure:</strong> {flight.departure}</p>
              <p><strong>Arrival:</strong> {flight.arrival}</p>
              <p><strong>Airline:</strong> {flight.airline}</p>
              <p><strong>Flight Number:</strong> {flight.flight_number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
