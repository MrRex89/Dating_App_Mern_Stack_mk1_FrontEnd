import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./DatingCards.css";
import axios from './axios';

const DatingCards = () => {
  // Array of people with Unsplash images
  const [people, setPeople] = useState([]);

  // This is a hook..
  useEffect(() => {
    async function fetchData() {
      try {
        // Using the full path with baseURL already set in axios.js
        const req = await axios.get("http://localhost:8001/dating/cards");  // Full path
        console.log(req.data); // Log the data to confirm it’s being retrieved
        setPeople(req.data);   // Update the state with the response data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Handles swiping events
  const swiped = (direction, nameToDelete) => {
    console.log("You swiped " + direction + " on " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default DatingCards;
