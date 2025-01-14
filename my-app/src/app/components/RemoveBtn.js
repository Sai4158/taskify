"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id }) => {
  const removeTopic = async () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");

    if (isConfirmed) {
      try {
        const res = await fetch(
          `http://localhost:3000/models/Api/topics?id=${id}`,
          {
            method: "DELETE",
          }
        );

        if (res.ok) {
          alert("Topic deleted successfully");
          window.location.reload(); // Reload to reflect changes
        } else {
          throw new Error("Failed to delete the topic");
        }
      } catch (error) {
        console.error("Error:", error.message);
        alert("Something went wrong: " + error.message);
      }
    }
  };

  return (
    // increased the size of the button
    <button onClick={removeTopic} className="text-red-400 hover:text-red-600">
      <HiOutlineTrash size={26} />
    </button>
  );
};

export default RemoveBtn;
