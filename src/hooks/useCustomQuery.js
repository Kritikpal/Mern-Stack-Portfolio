import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useCustomQuery(apiurl, queryKey, method = "get", body = {}) {
  const {
    data: data,
    isLoading,
    error,
  } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      if (method === "get") {
        const response = await axios.get(apiurl);
        return response.data.data;
      } else {
        const response = await axios.post(apiurl, body);
        return response.data.data;
      }
    },
  });
  return {
    data: data,
    isLoading,
    error,
  };
}

export { useCustomQuery };
