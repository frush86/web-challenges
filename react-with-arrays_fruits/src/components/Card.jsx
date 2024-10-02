import "./Card.css";

export default function Card({ name, color }) {
  // added color prop
  return (
    <p className="card" style={{ background: color }}>
      {name}
    </p>
  ); // color prop added to style
}
