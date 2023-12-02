import React from 'react';
import useCurrentLocation from './useCurrentLocation';

const LocationComponent = () => {
  const { location, loading, error, getLocation } = useCurrentLocation();

  const handleGetLocation = () => {
    getLocation();
  };

  return (
    <div>
      <h2>Current Location</h2>
      <button onClick={handleGetLocation}>Get Location</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
};

export default LocationComponent;