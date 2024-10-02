import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" },
    { id: 3, name: "Cherry", color: "Red" },
    { id: 4, name: "Mango", color: "Orange" },
    { id: 5, name: "Orange", color: "Orange" },
  ];

  return fruits.map((fruit) => {
    return (
      <Card
        key={fruit.id}
        id={fruit.id}
        name={fruit.name}
        color={fruit.color}
      />
    );
  });
}
