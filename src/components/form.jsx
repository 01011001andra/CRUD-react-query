import React from "react";
import { useForm } from "react-hook-form";
import usePostDiaryMutate from "../lib/usePostDiaryMutate";

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const postMutation = usePostDiaryMutate();

  function onSubmit(data) {
    postMutation.mutate(data);
    reset();
  }
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label
              htmlFor="author"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="Author"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              {...register("author")}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="diary"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Diary
            </label>
            <textarea
              name="diary"
              id="diary"
              cols="30"
              placeholder="Write you diary here"
              rows="10"
              {...register("diary")}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
