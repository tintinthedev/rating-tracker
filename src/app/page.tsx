import Header from "@/components/Header";
import AnimatedTitle from "@/components/AnimatedTitle";
import InputAndChart from "@/components/InputAndChart";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4 min-w-full">
        <AnimatedTitle />
        <InputAndChart />
      </main>
    </div>
  );
}
