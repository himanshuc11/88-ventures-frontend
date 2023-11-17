import { useMutation, useQueryClient } from "@tanstack/react-query";

async function insertProject(file: File, name: string) {
  const url = `${process.env.NEXT_PUBLIC_ENDPOINT}/upload`;

  const formData = new FormData();
  formData.append("image", file);
  formData.append("name", name);

  const config = {
    method: "post",
    body: formData,
  };

  const res = await fetch(url, config);
  const parsedData = await res.json();
  return parsedData;
}

type Data = {
  file: File;
  name: string;
};

function useAddProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Data) => insertProject(data.file, data.name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}

export default useAddProject;
