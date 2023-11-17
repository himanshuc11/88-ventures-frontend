"use client";
import { useState } from "react";
import Uploader from "@/app/_components/Uploader";

function ProjectForm() {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <aside className="px-7 py-5 border-r border-primary-white max-w-[350px]">
      <h3 className="text-text-blue text-base">Start a new Project</h3>
      <p className="text-text-grey text-xs mt-1 mb-5">
        Select and browse your product image and start experimenting
      </p>

      <label htmlFor="step1" className="text-light-grey text-xs">
        Step 1<span className="text-[#b91c1c]">*</span>
      </label>
      <input
        value={name}
        id="step1"
        placeholder="Your Project name"
        className="text-light-grey w-full rounded-lg py-2.5 px-3 border border-primary-white"
        onChange={handleNameChange}
      />

      <label htmlFor="step2" className="text-light-grey text-xs block mt-5">
        Step 2<span className="text-[#b91c1c]">*</span>
      </label>
      <Uploader setFile={setFile} />

      <button className="rounded-lg py-2.5 px-3 text-white bg-bold-blue mt-8">
        Create new project
      </button>
    </aside>
  );
}

export default ProjectForm;
