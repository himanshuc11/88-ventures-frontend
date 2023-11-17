"use client";
import useProjects from "@/app/_hooks/useProjects";
import Project from "@/app/_components/Project";
import Preview from "@/app/_components/Preview";

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
    <section className="px-7 py-5 border-primary-white flex-1 overflow-y-hidden">
      <h3 className="text-base text-text-blue">Your recent projects</h3>
      <p className="text-text-grey text-xs mt-1 mb-5">
        Select and browse your project image and start experimenting
      </p>
      <div className="flex flex-col flex-1 h-full">
        <Preview />
        <section className="flex gap-x-4 h-72">
          {!!data
            ? data.map((project) => <Project {...project} key={project.id} />)
            : null}
        </section>
      </div>
    </section>
  );
}

export default ListView;
