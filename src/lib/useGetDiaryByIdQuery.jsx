import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetDiaryByIdQuery = (id) => {
  const data = useQuery(["diary", id], async () => {
    const res = await axios.get(`http://localhost:3000/diary/${id}`);
    return res.data;
  });
  return data;
};

export default useGetDiaryByIdQuery;
