import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);

      return tours;
    } catch (error) {
      setIsLoading(false);
      throw new Error(`Failed to fetch the tours`);
    }
  };

  const loadTours = () => {
    fetchTours()
      .then((toursData) => setTours(toursData))
      .catch((err) => console.log(err));
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    loadTours();
  }, []);

  if (isLoading)
    return (
      <main>
        <Loading />
      </main>
    );

  if (tours.length === 0)
    return (
      <main>
        <div className="title">
          <h2>No tours to show...</h2>
          <button
            onClick={() => {
              loadTours();
            }}
          >
            Reload tours
          </button>
        </div>
      </main>
    );

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}
