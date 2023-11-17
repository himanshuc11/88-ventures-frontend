import Header from "@/app/_components/Header";
import Sidebar from "@/app/_components/Sidebar";
import ProjectForm from "@/app/_components/ProjectForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white flex-1">
      <Header />
      <section className="flex flex-1 w-full">
        <Sidebar />
        <ProjectForm />
      </section>
    </main>
  );
}
