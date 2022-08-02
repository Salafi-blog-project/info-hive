import "./App.css";
import Card from "./constants/components/cards/card";
import image1 from "./assets/room_card.svg";
import { useState } from "react";
import HeroSection from "./constants/components/hero/hero";

function App() {
  const [cards, setCard] = useState([
    {
      id: 1,
      name: " Design tools",
      date: "AUGust 13, 2021",
      title:
        "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
      subtitle:
        "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    },
    {
      name: " Design tools",
      date: "AUGust 13, 2021",
      title:
        "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
      subtitle:
        "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    },
    {
      name: " Design tools",
      date: "AUGust 13, 2021",
      title:
        "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
      subtitle:
        "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
    },
  ]);

  return (
    <div>
      <HeroSection />
      <div>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            img1={image1}
            subtitle={card.subtitle}
            title={card.title}
            date={card.date}
            name={card.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
