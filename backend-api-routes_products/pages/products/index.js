import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("/api/products", fetcher);

  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.category}</p>

          <p>
            Price: {product.price} {product.currency}
          </p>
        </li>
      ))}
    </ul>
  );
}
