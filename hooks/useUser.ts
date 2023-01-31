import { useQuery } from "@tanstack/react-query";

function fetcher(url: string) {
  return fetch(url).then((res) => res.json());
}

export default function useUser() {
  const { data, isLoading, error } = useQuery(["me"], () =>
    fetcher("/api/user/me")
  );
  return {
    products: data,
    isLoading,
    isError: !!error,
  };
}
