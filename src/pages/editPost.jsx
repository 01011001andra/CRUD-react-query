import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import useGetDiaryByIdQuery from "../lib/useGetDiaryByIdQuery";
import useUpdateDiaryMutate from "../lib/useUpdateDiaryMutate";

const EditPost = () => {
  const [idDiary, setIdDiary] = useState();

  const { id } = useParams();
  const { data } = useGetDiaryByIdQuery(id);
  const mutation = useUpdateDiaryMutate();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    mutation.mutate({
      id: idDiary,
      author: data.author,
      diary: data.diary,
    });
    reset();
  }

  useEffect(() => {
    if (data) {
      setValue("author", data.author);
      setValue("diary", data.diary);
      setIdDiary(data.id);
    }
  }, [data]);
  return (
    <div className="w-full min-h-screen py-8 bg-orange-500">
      <div className="flex flex-col w-full max-w-3xl gap-5 mx-auto">
        <h1 className="text-5xl font-bold text-center">EDIT DATA</h1>
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
          <div className="flex gap-5">
            <Link
              to="/"
              className="px-8 py-3 text-base font-semibold text-white bg-red-600 rounded-md outline-none hover:shadow-form"
            >
              Cancel
            </Link>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
