import React, { useState } from "react";

function ListingCard(listings, onRemoveListing) {
  const [ favorite, setFavoriteButton ] = useState(false)

  function favoriteButton() {
    favorite ? setFavoriteButton(false) : setFavoriteButton(true);
    console.log('Was clicked')
  }


  function deleteButton() {
    fetch(`http://localhost:6001/listings/${listings.id}`, {
      method: 'DELETE'
    }).then((resp) => {
      if (resp.ok) {
        onRemoveListing(listings.id)
      } else { 
        throw Error('Something went')
      }
      }
    )}
  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listings.image} alt={listings.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={favoriteButton}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={favoriteButton}>☆</button>
        )}
        <strong>{listings.description}</strong>
        <span> · {listings.location}</span>
        <button className="emoji-button delete" onClick={deleteButton}>🗑</button>
        
      </div>
    </li>
  );
}

export default ListingCard;
