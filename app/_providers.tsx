"use client";
import { useContext, createContext, useState } from "react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

type FileProviderProps = {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>> | null;
};

const queryClient = new QueryClient();
const ImageContext = createContext<FileProviderProps>({
  file: null,
  setFile: null,
});

type Props = {
  children: ReactNode;
};

function Provider(props: Props) {
  const [file, setFile] = useState<File | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <ImageContext.Provider value={{ file, setFile }}>
        {props.children}
      </ImageContext.Provider>
    </QueryClientProvider>
  );
}

const useFile = () => useContext(ImageContext);

export { useFile };
export default Provider;
