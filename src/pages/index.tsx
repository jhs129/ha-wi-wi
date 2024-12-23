import { useState, useEffect, useMemo } from "react";
import Layout from "../components/Layout";
import TripCard from "../components/TripCard";
import { GetStaticProps } from "next";
import { HomeProps } from "@/types/homeProps";
import { Trip, ItineraryItem, Flight, Location } from "@/types/trip";

// Type for raw JSON data
type RawItineraryItem = {
  type: string;
  id: string;
  startDate: string;
  endDate: string;
  data: Flight | Location;
};

export default function Home(props: HomeProps) {
  const { textContent, trips } = props;
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const RELEASE_DATE = useMemo(() => new Date("2024-12-25"), []);

  useEffect(() => {
    const currentDate = new Date();
    const storedAuth = sessionStorage.getItem("isAuthorized");

    if (currentDate >= RELEASE_DATE) {
      setIsAuthorized(true);
    } else if (storedAuth === "true") {
      setIsAuthorized(true);
    } else {
      // Clear auth
      sessionStorage.removeItem("isAuthorized");
    }
  }, [RELEASE_DATE]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "pine@pple") {
      setIsAuthorized(true);
      sessionStorage.setItem("isAuthorized", "true");
      setShowError(false);
    } else {
      setShowError(true);
      setPassword("");
    }
  };

  if (!isAuthorized) {
    return (
      <Layout>
        <div className="space-y-8 text-center">
          <h1 className="text-4xl font-bold text-primary font-christmas">
            {textContent.unauthorized.title}
          </h1>
          <p className="text-xl font-christmas">
            {textContent.unauthorized.subtitle}
          </p>

          <form
            onSubmit={handlePasswordSubmit}
            className="max-w-sm mx-auto space-y-4"
          >
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setShowError(false);
              }}
              className={`w-full px-4 py-2 border rounded-md ${
                showError ? "border-red-500" : ""
              }`}
              placeholder={textContent.unauthorized.passwordPlaceholder}
            />
            {showError && (
              <p className="text-red-500 text-sm">
                Incorrect password. Please try again.
              </p>
            )}
            <button
              type="submit"
              className="px-6 py-2 text-light bg-primary rounded-md hover:bg-primary/80"
            >
              {textContent.unauthorized.submitButton}
            </button>
          </form>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center text-primary font-christmas">
          {textContent.authorized.title}
        </h1>
        <div className="text-xl text-center font-christmas">
          <p>{textContent.authorized.description}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <TripCard
            id={trips.id}
            title={trips.title}
            images={trips.images}
            description={`${trips.dates.departure_date} - ${trips.dates.return_date}`}
          />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const textContent = await import("@/content/text.json");
  const tripsData = await import("@/content/itinerary_hawaii.json");

  // Ensure the imported data matches our types
  const trips: Trip = {
    ...tripsData.default,
    itinerary: tripsData.default.itinerary.map(
      (item: RawItineraryItem): ItineraryItem => ({
        ...item,
        type: item.type as "flight" | "stay", // This ensures type is correctly narrowed
      })
    ),
  };

  return {
    props: {
      textContent: textContent.default,
      trips,
    },
    revalidate: 3600,
  };
};
