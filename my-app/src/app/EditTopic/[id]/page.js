import EditTopicForm from "@/app/components/EditTopicForm";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;

  const getTopicById = async () => {
    try {
      const res = await fetch(
        `https://taskify123.vercel.app/models/Api/topics?id=${id}`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch the topic");
      }
      return res.json();
    } catch (error) {
      console.log("Error fetching topic:", error);
      return null;
    }
  };

  const topic = await getTopicById();

  if (!topic) {
    return (
      <div className="text-red-500 font-bold text-center mt-10 animate-pulse">
        Error: Topic not found
      </div>
    );
  }

  const { title = "", description = "" } = topic;

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-lg animate-fadeIn">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 tracking-widest">
        Edit Topic
      </h1>
      <div className="transition-transform duration-300 hover:scale-105">
        <EditTopicForm id={id} title={title} description={description} />
      </div>
    </div>
  );
};

export default page;
