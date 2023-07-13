import React from "react";
import { Link } from "react-router-dom";

const CardTodo = ({ author, diary, deletes, update }) => {
  return (
    <div className="w-full max-w-screen-md mx-auto">
      <div className="inline-flex flex-col items-center justify-end flex-1 w-full h-full p-4 space-y-2 bg-black rounded-xl">
        <p className="w-full text-2xl font-semibold text-white">{author}</p>
        <p className="w-full pb-8 text-sm leading-tight tracking-wide text-white">
          {diary}
        </p>
        <div className="flex w-full">
          <Link
            className="inset-0 px-8 py-2 m-auto text-sm font-medium leading-normal text-center text-white bg-green-600 rounded-md"
            to={`/${update}`}
          >
            Edit
          </Link>
          <button
            className="inset-0 px-8 py-2 m-auto text-sm font-medium leading-normal text-center text-white bg-red-600 rounded-md"
            onClick={deletes}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTodo;
