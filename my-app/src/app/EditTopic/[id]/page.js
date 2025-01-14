import EditTopicForm from "@/app/components/EditTopicForm";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;

  const getTopicById = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/models/Api/topics?id=${id}`,
        { cache: "no-store" }
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
    return <div className="text-red-500 font-bold">Error: Topic not found</div>;
  }

  const { title = "", description = "" } = topic;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 font-extralight">change topic</h1>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  );
};

export default page;
