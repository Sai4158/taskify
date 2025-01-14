import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

// Fetches topic information from the API
const getTopic = async () => {
  try {
    const res = await fetch("http://localhost:3000/models/Api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    return res.json();
  } catch (error) {
    console.log("Error fetching topics:", error);
    return [];
  }
};

const Topics = async () => {
  const topics = await getTopic();

  return (
    <div>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start mx-28"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/EditTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topics;
