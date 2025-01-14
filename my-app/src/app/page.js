import Topics from "./components/Topics";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-transparent">
      <div className="w-full max-w-36xl p-4">
        <Topics />
      </div>
    </div>
  );
}
