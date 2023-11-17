"use client";
import useProjects from "@/app/_hooks/useProjects";

function ListView() {
  const { data, error } = useProjects();

  if (error) {
    return (
      <h1 className="text-text-blue">
        Could not load data {JSON.stringify(error)}
      </h1>
    );
  }

  return (
    <section className="px-7 py-5 border-primary-white flex-1">
      <h3 className="text-base text-text-blue">Your recent projects</h3>
      <p className="text-text-grey text-xs mt-1 mb-5">
        Select and browse your project image and start experimenting
      </p>
    </section>
  );
}

export default ListView;
