import React from "react";
import useGetDiaryQuery from "../lib/useGetDiaryQuery";
import TodoForm from "../components/form";
import CardDiary from "../components/cardDiary";
import Loading from "../components/loading";
import useDeleteDiaryMutate from "../lib/useDeleteDiaryMutate";
import useGetDiaryByIdQuery from "../lib/useGetDiaryByIdQuery";

const Home = () => {
  const { data, isLoading, isError } = useGetDiaryQuery();
  const deleteMutation = useDeleteDiaryMutate();

  let empty = (
    <h1 className="text-xl font-bold text-center text-white animate-pulse">
      Tidak ada diary
    </h1>
  );

  function handleGetDataById(id) {
    console.log(id);
  }

  return (
    <div className="w-full min-h-screen bg-orange-500">
      <div className="flex flex-col w-full max-w-3xl mx-auto">
        <TodoForm />
        <div className="flex flex-col w-full h-full gap-5">
          {isLoading && <Loading />}
          {data?.data.length === 0 && empty}
          {data?.data.map((item) => {
            return (
              <CardDiary
                key={item.id}
                diary={item.diary}
                author={item.author}
                deletes={() => {
                  deleteMutation.mutate(item.id);
                }}
                update={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
