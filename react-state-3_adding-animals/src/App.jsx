import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid"; // import uid for id generation

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);
  // creates variable animal and a function setAnimal to update animal

  function handleAddAnimal(newAnimal) {
    // function will add an animal to the animals array
    setAnimals([...animals, { id: uid(), ...newAnimal }]);
    //... animals creates copy of the animal array
    //id: uid creates new id
    //...newAnimal unpacks all properties from the newAnimal object
    console.log(newAnimal);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
