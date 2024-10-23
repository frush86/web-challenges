import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(`/api/products/${id}`, fetcher);

  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <p>{data.category}</p>

      <p>
        Price: {data.price} {data.currency}
      </p>
    </>
  );
}
