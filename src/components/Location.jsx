import React, { useState, useEffect } from 'react';

function Location() {
  const [locationName, setLocationName] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        )
          .then((response) => response.json())
          .then((data) => {
            setLocationName(data.display_name);
          })
          .catch((error) => {
            setError(error.message);
          });
      },
      (error) => {
        setError(error.message);
      }
    );
  }, []);

  return (
    <div>
      {locationName ? (
        <p> Current location: {locationName}</p>
      ) : (
        <p>Please wait...</p>
      )}
      {error ? <p>error: {error}</p> : null}
    </div>
  );
}

export default Location;
