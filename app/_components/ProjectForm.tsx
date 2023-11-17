function ProjectForm() {
  return (
    <aside className="px-7 py-5 border-r border-primary-white max-w-[330px]">
      <h3 className="text-text-blue text-base">Start a new Project</h3>
      <p className="text-text-grey text-xs mt-1 mb-5">
        Select and browse your product image and start experimenting
      </p>

      <label htmlFor="step1" className="text-light-grey text-xs">
        Step 1<span className="text-[#b91c1c]">*</span>
      </label>
      <input
        id="step1"
        placeholder="Your Project name"
        className="text-light-grey w-full rounded-lg py-2.5 px-3 border border-primary-white"
      />

      <label htmlFor="step2" className="text-light-grey text-xs">
        Step 2<span className="text-[#b91c1c]">*</span>
      </label>
      <input
        id="step2"
        placeholder="Your Project name"
        className="text-light-grey w-full rounded-lg py-2.5 px-3 border border-primary-white"
      />
    </aside>
  );
}

export default ProjectForm;
