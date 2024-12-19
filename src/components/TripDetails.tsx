import { FaPlane, FaHotel, FaListUl } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRef } from "react";

interface FlightInfo {
  departure: string;
  arrival: string;
  airline: string;
  flightNumber: string;
}

interface HotelInfo {
  name: string;
  address: string;
  description: string;
  link: string;
  images: string[];
  price: string;
}

interface ActivityInfo {
  text: string;
  image: string;
}

interface TripDetailsProps {
  title: string;
  image: string;
  flights: {
    outbound: FlightInfo;
    return: FlightInfo;
    price: string;
  };
  hotel: HotelInfo;
  activities: ActivityInfo[];
}

export default function TripDetails({
  title,
  image,
  flights,
  hotel,
  activities,
}: TripDetailsProps) {
  const totalPrice =
    (parseFloat(flights.price) || 0) + (parseFloat(hotel.price) || 0);

  const formatPrice = (price: string) => {
    return parseFloat(price || "0").toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
  };

  const hotelSlider = useRef<Slider | null>(null);
  const activitiesSlider = useRef<Slider | null>(null);

  return (
    <div className="space-y-8">
      <div className="relative w-full h-[400px]">
        <Image
          src={image}
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
            <div className="hiddentext-2xl font-bold text-light whitespace-nowra hidden">
              Total: $
              {totalPrice.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold flex items-center font-christmas">
            <FaHotel className="mr-2" /> Hotel
          </h2>
          <div className="text-xl font-semibold text-primary hidden">
            ${formatPrice(hotel.price)}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            {hotel.images.length > 1 ? (
              <Slider 
                {...sliderSettings} 
                ref={hotelSlider}
              >
                {hotel.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative h-[300px] cursor-pointer"
                    onClick={() => hotelSlider.current?.slickNext()}
                  >
                    <Image
                      src={image}
                      alt={`${hotel.name} - Image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={hotel.images[0]}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <div className="md:w-1/2">
            <p>
              <strong>Name:</strong>{" "}
              <a
                href={hotel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary underline"
              >
                {hotel.name}
              </a>
            </p>
            <p>
              <strong>Address:</strong> {hotel.address}
            </p>
            <p>
              <strong>Description:</strong> {hotel.description}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-light rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold flex items-center font-christmas">
            <FaPlane className="mr-2" /> Flight Information
          </h2>
          <div className="text-xl font-semibold text-primary hidden">
            ${formatPrice(flights.price)}
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24">
          <div>
            <h3 className="text-xl font-medium mb-2">Outbound Flight</h3>
            <p>
              <strong>Departure:</strong> {flights.outbound.departure}
            </p>
            <p>
              <strong>Arrival:</strong> {flights.outbound.arrival}
            </p>
            <p>
              <strong>Airline:</strong> {flights.outbound.airline}
            </p>
            <p>
              <strong>Flight Number:</strong> {flights.outbound.flightNumber}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Return Flight</h3>
            <p>
              <strong>Departure:</strong> {flights.return.departure}
            </p>
            <p>
              <strong>Arrival:</strong> {flights.return.arrival}
            </p>
            <p>
              <strong>Airline:</strong> {flights.return.airline}
            </p>
            <p>
              <strong>Flight Number:</strong> {flights.return.flightNumber}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-light rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center font-christmas">
          <FaListUl className="mr-2" /> Key Activities
        </h2>
        <div className="max-w-3xl mx-auto lg:max-w-full">
          <Slider {...sliderSettings} ref={activitiesSlider}>
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="px-2 cursor-pointer"
                onClick={() => activitiesSlider.current?.slickNext()}
              >
                <div className="relative aspect-w-16 aspect-h-9 mb-4 h-[300px]">
                  <Image
                    src={activity.image}
                    alt={activity.text}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-center text-lg">{activity.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
