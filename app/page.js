import Image from "next/image";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex bg-gray-100">
        <Sidebar />
      </main>
    </div>
  );
}
