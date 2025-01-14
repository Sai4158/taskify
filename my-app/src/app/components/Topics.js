"use client";

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
    <div className="px-4 lg:px-20">
      {error && <p className="text-red-500 font-bold">{error}</p>}
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 rounded-lg shadow-lg flex justify-between gap-5 items-start bg-blue-50 max-w-2xl lg:max-w-full mx-auto lg:mx-0"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div className="text-gray-600">{t.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/EditTopic/${t._id}`}>
              <HiPencilAlt
                size={24}
                className="text-blue-500 hover:text-blue-700"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topics;
