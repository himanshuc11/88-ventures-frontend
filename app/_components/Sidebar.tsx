import Folder from "./Icons/Folder";

function Sidebar() {
  return (
    <aside className="px-7 py-5 border-r border-primary-white">
      <section className="inline-block">
        <div className="flex flex-col items-center rounded-lg bg-light-blue p-2">
          <Folder color="#B225EB" />
          <p className="text-middle-blue">Project</p>
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;
