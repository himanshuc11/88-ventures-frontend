import Image from "next/image";
import type { ServerProject } from "@/app/_utils/types";

type Props = ServerProject;
function Project(props: Props) {
  return (
    <div className="gap-4 p-4 rounded-lg shadow-xl">
      <Image
        className="w-full h-24"
        src={props.image}
        alt={`${props.name}'s `}
      />
      <p className="text-[#000000] text-sm">{props.name}</p>
      <time>{props.createdAt}</time>
    </div>
  );
}
