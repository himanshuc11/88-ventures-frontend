import { useQuery } from "@tanstack/react-query";
import type { ServerProject } from "../_utils/types";

async function getProjects() {
  const url = `${process.env.NEXT_PUBLIC_ENDPOINT}/`;
  const config = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await fetch(url, config);
  const parsedData = (await data.json()) as ServerProject[];
  return parsedData;
}

export default function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
}
