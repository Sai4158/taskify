"use client";

import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please enter title and description");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/models/Api/topics", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        alert("Topic added successfully");
        setTitle("");
        setDescription("");
      } else {
        throw new Error("Failed to add topic");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-80">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Topic Title"
          className="border border-slate-500 px-8 py-2"
        />

        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Topic description"
          className="border border-slate-500 px-8 py-2"
        />

        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-4"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
};

export default Page;
