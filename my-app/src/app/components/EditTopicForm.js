"use client";

import React, { useState } from "react";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/models/Api/topics/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle,
          description: newDescription,
        }),
      });

      if (res.ok) {
        alert("Topic updated successfully!");
        window.location.href = "/";
      } else {
        throw new Error("Failed to update the topic.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Topic</h2>

      {/* Title Input */}
      <label className="font-medium text-gray-700">
        Title
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter topic title"
          className="mt-2 border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        />
      </label>

      {/* Description Input */}
      <label className="font-medium text-gray-700">
        Description
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Enter topic description"
          className="mt-2 border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          rows="5"
          required
        />
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md"
      >
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
