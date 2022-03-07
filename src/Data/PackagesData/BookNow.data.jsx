import React from 'react';

function BookNowDataJSON(
  tourDetails,
  tourCode,
  packageType,
  durations,
  locations,
  packageCapacity
) {
  return {
    tourDetails: { tourDetails },
    tourCode: { tourCode },
    packageType: { packageType },
    durations: { durations },
    locations: { locations },
    packageCapacity: { packageCapacity },
  };
}

export default BookNowDataJSON;
