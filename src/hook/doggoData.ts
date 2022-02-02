import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const json = await result.json();
  return json;
}

export function doggoData() {
  return useQuery(["doggo"], fetchData);
}
