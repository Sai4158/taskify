"use client"; // Enabling client-side rendering

import React, { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch("/models/Api/topics", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }
        const data = await res.json();
        setTopics(data);
      } catch (err) {
        console.error("Error fetching topics:", err.message);
        setError("Error loading topics.");
      }
    };

    fetchTopics();
  }, []);

  return (
    <div className="px-4 md:px-10 py-8 max-w-5xl mx-auto">
      {error && (
        <p className="text-red-500 font-bold text-center mb-4">{error}</p>
      )}
      {!topics.length && !error && (
        <p className="text-gray-600 text-center">No topics found.</p>
      )}
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-5 border border-gray-300 bg-white shadow-sm rounded-lg hover:shadow-md transition-all duration-300 my-4 flex justify-between items-start gap-4"
        >
          <div>
            <h2 className="font-extrabold text-xl text-gray-800">{t.title}</h2>
            <p className="text-gray-600 mt-2">{t.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <RemoveBtn id={t._id} />
            <Link
              href={`/EditTopic/${t._id}`}
              className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all"
            >
              <HiPencilAlt size={20} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topics;
