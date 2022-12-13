import React, { useState } from "react";

export default function Tour({ id, image, name, info, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h3>{name}</h3>
          <h4 className="tour-price">Price: ${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}

          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? `Show less` : `Read more`}
          </button>
        </p>

        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          Not interested
        </button>
      </footer>
    </article>
  );
}
