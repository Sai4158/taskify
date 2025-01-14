"use client";

import React, { useState } from "react";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/models/Api/topics/${id}`, {
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
      className="flex flex-col gap-4 max-w-2xl mx-auto"
    >
      {/* Title Input */}
      <label className="font-bold text-lg">
        Title
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter topic title"
          className="border border-gray-400 px-4 py-2 w-full mt-1"
          required
        />
      </label>

      {/* Description Input */}
      <label className="font-bold text-lg">
        Description
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Enter topic description"
          className="border border-gray-400 px-4 py-2 w-full mt-1"
          rows="5"
          required
        />
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white font-bold py-2 px-4 hover:bg-blue-700"
      >
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
