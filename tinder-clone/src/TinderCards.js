import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Andrew Garfield',
      url: "https://www.headcurve.com/wp-content/uploads/2017/11/Andrew_Garfield_2011.jpg"
    },
    {
      name: 'Maduka Okoye',
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftalkofnaija.com%2Fwp-content%2Fuploads%2F2019%2F08%2FMaduka-Okoye.jpg&f=1&nofb=1"
    },
    
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
    // setLastDirection(direction);
  };

  const out0fFrame=(name) => {
    console.log(name + "left the screen!");
  };

  return (
  <div className="tinderCards"> 
    <div className="tinderCards__cardContainer">
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
}

export default TinderCards;
