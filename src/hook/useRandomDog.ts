import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch(
    `https://api.nomics.com/v1/currencies/ticker?key=c5775281de2a20b8b9075ba4777533c1047baf5b&interval=1d,30d,365d&convert=EUR&per-page=50&page=1%22`
  );
  const json = await result.json();
  return json;
}

export function useRandomDog() {
  return useQuery(["doggo"], fetchData);
}
