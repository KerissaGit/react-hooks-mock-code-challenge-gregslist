import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(resp => resp.json())
      .then(data => setListings(data))
  }, [])

  

  // const renderListings = listings.map(({id, description, image, location}) => (
  //   <ListingCard 
  //     key={id}
  //     id={id}
  //     description={description}
  //     image={image}
  //     location={location}
  //     />
  //   ))}

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard 
            key={listing.id}
            id={listing.id}
            description={listing.description}
            image={listing.image}
            location={listing.location}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;