import Image from "next/image";

function Preview() {
  return (
    <div className="relative w-full h-full flex flex-1">
      <Image
        unoptimized
        fill
        src={
          "http://res.cloudinary.com/blankc/image/upload/v1700194913/88-ventures/sfk9f3todsxykklitlbh.jpg"
        }
        className="w-full h-full"
        alt="preview"
      />
    </div>
  );
}

export default Preview;
