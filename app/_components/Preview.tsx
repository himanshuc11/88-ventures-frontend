import Image from "next/image";
import { useFile } from "@/app/_providers";

function Preview() {
  const { file } = useFile();
  let src =
    "http://res.cloudinary.com/blankc/image/upload/v1700194913/88-ventures/sfk9f3todsxykklitlbh.jpg";
  if (file) {
    src = URL.createObjectURL(file);
  }

  return (
    <div className="relative max-w-full h-full flex flex-1 rounded-3xl bg-light-grey overflow-hidden">
      <Image
        unoptimized
        fill
        src={src}
        className="w-full h-full"
        alt="preview"
        style={{ objectFit: "contain", objectPosition: "left" }}
      />
    </div>
  );
}

export default Preview;
