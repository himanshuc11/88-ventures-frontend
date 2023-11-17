import Image from "next/image";
import { useFile } from "@/app/_providers";

type Props = {
  url: string;
};

function Preview(props: Props) {
  const { file } = useFile();
  let src = props.url;
  if (file) {
    src = URL.createObjectURL(file);
  }

  return (
    <div className="relative max-w-full h-full flex flex-1 rounded-3xl bg-light-grey overflow-hidden">
      {src ? (
        <Image
          unoptimized
          fill
          src={src}
          className="w-full h-full"
          alt="preview"
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          <h1 className="text-[#000000] text-lg font-semibold">
            No Preview Image to show
          </h1>
        </div>
      )}
    </div>
  );
}

export default Preview;
