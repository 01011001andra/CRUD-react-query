import React from "react";

const Loading = () => {
  return (
    <div class="flex items-center justify-center ">
      <div
        style={{ borderTopColor: "transparent" }}
        class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
      ></div>
      <p class="ml-2 text-white">Loading...</p>
    </div>
  );
};

export default Loading;
