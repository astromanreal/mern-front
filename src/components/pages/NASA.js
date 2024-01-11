import React, { useEffect, useState } from "react";
import { ExploreCard } from "./Explore";

export default function NASA() {
  return (
    <>
      <ImageByRover />
      {/* <h1>Astronomy picture of the day (Daily updated)</h1> */}
      {/* <NASAAPOD /> */}
    </>
  );
}

export function NASAAPOD() {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const apiKey = "3mfMZAipFHkmUHWqaGfCZI00BJM1gb8V49gBOcfq"; // Replace with your NASA API key
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setApodData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {apodData ? (
        <>
          <ExploreCard
            title={apodData.title}
            img={apodData.url}
            desc={apodData.explanation}
          />
          <p>{apodData.explanation}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export function ImageByRover() {
  const [roverPhotos, setRoverPhotos] = useState([]);
  const roverName = "spirit"; // Replace with the rover name of your choice
  const apiKey = "3mfMZAipFHkmUHWqaGfCZI00BJM1gb8V49gBOcfq"; // Replace with your NASA API key

  useEffect(() => {
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRoverPhotos(data.photos))
      .catch((error) => console.error("Error fetching data:", error));
  }, [roverName, apiKey]);
  return (
    <>
      <h2>Mars Rover Photos</h2>
      <div className="photo-container">
        {roverPhotos.map((photo) => (
          <img
            key={photo.id}
            src={photo.img_src}
            alt={`Mars Rover Photo ${photo.id}`}
            className="rover-photo"
          />
        ))}
      </div>
    </>
  );
}

export function NASAMarsRover() {
  const [roverPhotos, setRoverPhotos] = useState([]);
  const roverName = "curiosity"; // Replace with the rover you want (e.g., 'perseverance', 'spirit')

  useEffect(() => {
    const apiKey = "3mfMZAipFHkmUHWqaGfCZI00BJM1gb8V49gBOcfq"; // Replace with your NASA API key
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRoverPhotos(data.photos))
      .catch((error) => console.error("Error fetching data:", error));
  }, [roverName]);
  return (
    <>
      <main>
        <header className="TempleDetailsGallery-header">
          <h1>Mars Rover Photos</h1>
        </header>
        <div className="grid-wrapper">
          {roverPhotos.map((photo) => (
            <img
              alt={`Mars Rover Photo ${photo.id}`}
              className="image"
              src={photo.img_src}
            />
          ))}
        </div>
      </main>
    </>
  );
}
