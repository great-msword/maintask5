import React from "react";
import "./App.css";

const dramas = [
  {
    title: "Lamborghini",
    description: "To some, cars are just metal and rubber; to others, they are love stories on wheels.",
    image: "/cars/lam1.jpg",
    url: 'https://www.lamborghini.com/en-en/models/temerario',
  },
  {
    title: "BMW",
    description: "Driving a car isn't just about getting from A to B, it's about the joy of the ride.",
    image: "/cars/bmw.jpg",
    url: 'https://www.bmw.in/en/all-models.html?tl=grp-wdpl-bcom-mix-mn-.-nscf-.-.-&detail=X_THE-BMW-X1',
  },
  {
    title: "Bugatti",
    description: "A car is not just a mode of transport, it's a statement of style.",
    image: "/cars/bg.jpg",
    url: 'https://www.bugatti.com/the-bugatti-models/w16-mistral-the-ultimate-roadster/',
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Dream CarZ</h1>
      </header>
      <main className="main">
        {dramas.map((drama, index) => (
          <div className="drama-card" key={index}>
            <img src={drama.image} alt={drama.title} className="drama-image" />
            <a href={drama.url} target="_blank" rel="noopener noreferrer">
            <h2>{drama.title}</h2>
            </a>
            <p>{drama.description}</p>
          </div>
        ))}
      </main>
      <h2>About</h2>
      <p>A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo. There are around one billion cars in use worldwide. </p>
      <h2>History</h2>
      <p>In 1649, Hans Hautsch of Nuremberg built a clockwork-driven carriage. The first steam-powered vehicle was designed by Ferdinand Verbiest, a Flemish member of a Jesuit mission in China around 1672. It was a 65-centimetre-long (26 in) scale-model toy for the Kangxi Emperor that was unable to carry a driver or a passenger. It is not known with certainty if Verbiest's model was successfully built or run.</p>
      <h2>Popularity</h2>
      <p>Global Growth: EV sales have surged due to environmental concerns, government incentives, and advancements in battery technology.
         Popular EV Models: Tesla (Model 3, Model Y), BYD, Hyundai Ioniq, and Rivian are leading the market.
         Key Markets: Europe and China are the largest markets, while the U.S. is catching up.
      </p>
    </div>
  );
}

export default App;
