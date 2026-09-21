import React, { useState, useEffect } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import AnimalPost from "./AnimalPost";
import AnimalGraph from "./AnimalGraph";

const PLACEHOLDER_IMAGE_URL = '/path/to/your/placeholder-image.png'; // *** Replace if needed ***

function Animals() {
  const [allAnimals, setAllAnimals] = useState([]); // For map (filtered by coords)
  const [uniqueAnimalsForPosts, setUniqueAnimalsForPosts] = useState([]); // For posts (de-duplicated, then filtered by coords)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimalObservations = async () => {
      setLoading(true);
      setError(null);
      // iNaturalist profile: https://www.inaturalist.org/people/beauhobba
      const userId = 'beauhobba';
      const placeId = 6744; // Australia
      // Set the start date to 2024-10-31
      const startDate = '2024-10-31';
      // The end date is by default the current date if d2 is not specified, making it recent.
      const perPage = 200; // Max results per page for API v1
      const fields = 'id,observed_on_details.date,location,taxon.name,taxon.preferred_common_name,photos.url,description,uri,place_guess';
      // Note: photos=true might exclude species if the *only* observations lack photos.
      // Modified API URL to use d1 (start date) and default to recent for d2 (end date)
      const apiUrl = `https://api.inaturalist.org/v1/observations?user_id=${userId}&place_id=${placeId}&d1=${startDate}&per_page=${perPage}&order=desc&order_by=observed_on&verifiable=any&photos=true&fields=${fields}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
           const errorBody = await response.text();
           console.error("API Error Response:", errorBody);
           throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();

        // 1. Format ALL fetched observations
        const formattedAnimals = data.results.map(obs => {
            const [lat, lon] = obs.location ? obs.location.split(',').map(Number) : [null, null];
            let photoUrl = PLACEHOLDER_IMAGE_URL;
             if (obs.photos && obs.photos.length > 0 && obs.photos[0].url && typeof obs.photos[0].url === 'string') {
                 photoUrl = obs.photos[0].url.includes('/square.')
                             ? obs.photos[0].url.replace('/square.', '/medium.')
                             : obs.photos[0].url;
            } else {
                 if (obs.photos && obs.photos.length > 0) {
                     console.warn(`Observation ID ${obs.id} (${obs.taxon?.preferred_common_name || obs.taxon?.name}) has missing/invalid photo URL.`);
                 }
            }
            // Prioritize scientific name, then common name for display name
            const commonName = obs.taxon?.preferred_common_name || 'Unknown Common Name';
            const scientificName = obs.taxon?.name || 'Unknown Scientific Name';
            // Use scientific name if available, otherwise common name as primary display name
            const displayName = scientificName !== 'Unknown Scientific Name' ? scientificName : commonName;

            return {
              id: obs.id,
              animal_photo: photoUrl,
              animal_name: commonName, // Keep common name separate
              scientific_name: scientificName, // Keep scientific name separate
              display_name: displayName, // Combined/prioritized name for potential use
              description: obs.description || 'No description provided on iNaturalist.',
              latitude: lat,
              longitude: lon,
              location_name: obs.place_guess || (lat && lon ? `Lat: ${lat.toFixed(4)}, Lon: ${lon.toFixed(4)}` : 'Unknown Location'),
              date: obs.observed_on_details?.date ? new Date(obs.observed_on_details.date).toLocaleDateString() : 'Unknown Date',
              inat_url: obs.uri || '#',
            };
          });

        // 2. Prepare data for the map (Filter ALL by coordinates)
        const animalsForMap = formattedAnimals.filter(animal =>
            animal.latitude != null && animal.longitude != null
        );
        setAllAnimals(animalsForMap); // Set state for map

        // 3. De-duplicate ALL formatted animals based on scientific name (primary) or common name (fallback)
        const uniqueNames = new Set();
        const uniqueAnimalData = [];
        formattedAnimals.forEach(animal => {
            // Use scientific name for uniqueness key if available and valid
            const uniqueKey = animal.scientific_name !== 'Unknown Scientific Name'
                ? animal.scientific_name
                : animal.animal_name; // Fallback to common name if scientific is missing

            // Add the first encountered (most recent due to API order=desc) observation for each unique key
             if (!uniqueNames.has(uniqueKey) && uniqueKey !== 'Unknown Species' && uniqueKey !== 'Unknown Common Name' && uniqueKey !== 'Unknown Scientific Name') {
                  uniqueNames.add(uniqueKey);
                  uniqueAnimalData.push(animal); // Add the whole animal object
             }
        });

        // 4. Filter the DE-DUPLICATED list to ensure posts have coordinates for the modal display
        const uniqueAnimalsWithCoords = uniqueAnimalData.filter(animal =>
            animal.latitude != null && animal.longitude != null
        );
        setUniqueAnimalsForPosts(uniqueAnimalsWithCoords); // Set state for posts

      } catch (e) {
        console.error("Failed to fetch or process iNaturalist data:", e);
        setError(`Failed to load animal sightings: ${e.message}. Please check the console or try again later.`);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimalObservations();
  }, []); // Runs once on mount

  // Prepare data for AnimalGraph (using state `allAnimals` which is already filtered by coords)
  // Add common name, date, and photo to graphData and use customdata
  const graphData = allAnimals.reduce((acc, animal) => {
    // No need to filter here again, as `allAnimals` is pre-filtered
     const label = animal.scientific_name !== 'Unknown Scientific Name' ? animal.scientific_name : animal.animal_name;
     acc.animal_name_for_graph.push(label); // Use display_name for the hover title/label
     acc.latitude.push(animal.latitude);
     acc.longitude.push(animal.longitude);
     // Add custom data: [common_name, date, photo_url]
     acc.customdata.push([animal.animal_name, animal.date, animal.animal_photo]);
    return acc;
  }, { animal_name_for_graph: [], latitude: [], longitude: [], customdata: [] }); // Renamed animal_name to animal_name_for_graph to be clearer

  // Render rows using state `uniqueAnimalsForPosts` (already de-duplicated and filtered by coords)
  const renderAnimalRows = () => {
    const itemsPerRow = 3;
    const rows = [];
    for (let i = 0; i < uniqueAnimalsForPosts.length; i += itemsPerRow) {
      const chunk = uniqueAnimalsForPosts.slice(i, i + itemsPerRow);
      rows.push(
        <div className="row mb-4" key={`animal-row-${i}`}>
          {chunk.map(animal => (
            <div className="col-md-4 mb-4" key={animal.id}>
               <AnimalPost
                     // Pass necessary props down
                     animal_photo={animal.animal_photo}
                     animal_name={animal.animal_name} // Common Name
                     scientific_name={animal.scientific_name} // Scientific Name
                     description={animal.description}
                     latitude={animal.latitude}
                     longitude={animal.longitude}
                     location_name={animal.location_name}
                     date={animal.date}
                     inat_url={animal.inat_url}
               />
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  // --- JSX Structure ---
  return (
    <div>
      <div className="container" style={{ paddingBottom: '80px' }}>
        {/* Loading / Error */}
        {loading && <p>Loading animal sightings...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {/* Content Area */}
        {!loading && !error && (
          <div>
            {/* Map Section (using allAnimals data) */}
            {allAnimals.length > 0 ? ( // Check if there's map data
                 <div className="mb-5">
                     <h2 className="font-weight-light mb-3">All Sightings Map</h2>
                     <AnimalGraph
                         animal_name={graphData.animal_name_for_graph} // Pass display name for hover title
                         latitude={graphData.latitude}
                         longitude={graphData.longitude}
                         customdata={graphData.customdata} // Pass common name, date, photo
                     />
                 </div>
            ) : (
                 !loading && <p>Map data is currently unavailable.</p> // Show only if not loading
            )}

            {/* Animal Posts Section (using uniqueAnimalsForPosts data) */}
            {uniqueAnimalsForPosts.length > 0 ? (
                  <>
                     <h2 className="font-weight-light mb-4">Species Encountered (Most Recent Sighting)</h2>
                     {renderAnimalRows()}
                  </>
            ) : (
                // Show 'no sightings' only if *both* map and post data are empty after loading
                !loading && allAnimals.length === 0 && <p>No animal sightings found matching the criteria.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Animals;