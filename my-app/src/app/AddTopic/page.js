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
      const res = await fetch("/models/Api/topics", {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Topic
        </h2>

        {/* Title Input */}
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter topic title"
            className="mt-2 block w-full rounded-lg border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </label>

        {/* Description Input */}
        <label className="block mb-6">
          <span className="text-gray-700 font-medium">Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter topic description"
            className="mt-2 block w-full rounded-lg border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            rows="4"
            required
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
};

export default Page;
