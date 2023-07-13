import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useDeleteDiaryMutate = () => {
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`http://localhost:3000/diary/${id}`);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["diary"] }),
  });

  return mutation;
};

export default useDeleteDiaryMutate;
