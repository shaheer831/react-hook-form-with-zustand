import HeroButtons from "@/Components/HeroButtons";

export default function Home() {
  return (
    <div className="h-screen text-white flex flex-col justify-center items-center gap-6">
      <h1 className="text-5xl font-bold">Home</h1>
      <HeroButtons />
    </div>
  );
}
