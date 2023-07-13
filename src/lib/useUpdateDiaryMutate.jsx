import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useUpdateDiaryMutate = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Mutations
  const mutation = useMutation({
    mutationFn: async (body) => {
      console.log(body);
      await axios.put(`http://localhost:3000/diary/${body.id}`, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["diary"] });
      navigate("/");
    },
  });

  return mutation;
};

export default useUpdateDiaryMutate;
