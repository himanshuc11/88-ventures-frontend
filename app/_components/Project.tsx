import Image from "next/image";
import type { ServerProject } from "@/app/_utils/types";
import { format } from "date-fns";

type Props = ServerProject & {
  setImage: (img: string) => void;
};

function Project(props: Props) {
  if (!props) return null;

  const dateObj = new Date(props.createdAt);
  const handleClick = () => props.setImage(props.image);

  return (
    <div
      className="gap-4 p-4 rounded-lg shadow-xl w-52 h-52 cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-full h-28 flex justify-center relative">
        <Image unoptimized src={props.image} alt={`${props.name}'s `} fill />
      </div>
      <div className="pt-4">
        <p className="text-[#000000] text-sm mb-2">{props.name}</p>
        <time className="text-xs text-text-grey">
          {format(dateObj, "d MMMM")}
        </time>
      </div>
    </div>
  );
}

export default Project;
