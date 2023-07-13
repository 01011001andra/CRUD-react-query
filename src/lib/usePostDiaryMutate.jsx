import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const usePostDiaryMutate = () => {
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: async (body) => {
      await axios.post("http://localhost:3000/diary", body);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["diary"] }),
  });

  return mutation;
};

export default usePostDiaryMutate;
