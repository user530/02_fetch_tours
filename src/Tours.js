import React from "react";
import Tour from "./Tour";

export default function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className="title">
        <h2>Our tours:</h2>
        <div className="underline"></div>
      </div>

      <div>
        {tours.map((tourObj) => (
          <Tour key={tourObj.id} removeTour={removeTour} {...tourObj} />
        ))}
      </div>
    </section>
  );
}
