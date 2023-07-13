import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetDiaryQuery = () => {
  const data = useQuery({
    queryKey: ["diary"],
    queryFn: async () => await axios.get("http://localhost:3000/diary"),
  });
  return data;
};

export default useGetDiaryQuery;
