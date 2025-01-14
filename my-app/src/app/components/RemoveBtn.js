"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id }) => {
  const removeTopic = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this topic?"
    );

    if (isConfirmed) {
      try {
        const res = await fetch(`/models/Api/topics?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          alert("Topic deleted successfully!");
          window.location.reload(); // Reload to reflect changes
        } else {
          throw new Error("Failed to delete the topic.");
        }
      } catch (error) {
        console.error("Error:", error.message);
        alert("Something went wrong: " + error.message);
      }
    }
  };

  return (
    <button
      onClick={removeTopic}
      className="flex items-center justify-center p-2 rounded-full bg-red-100 text-red-500 hover:bg-red-200 hover:text-red-600 transition-all duration-200 ease-in-out"
      aria-label="Delete Topic"
    >
      <HiOutlineTrash size={22} />
    </button>
  );
};

export default RemoveBtn;
