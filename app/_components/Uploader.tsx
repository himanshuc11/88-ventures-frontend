import { FileUploader } from "react-drag-drop-files";
import Folder from "./Icons/Folder";

const FILE_TYPES = ["JPG", "PNG", "GIF"];

type Props = {
  setFile: (file: File) => void;
};

function Uploader(props: Props) {
  const handleChange = (file: File) => {
    props.setFile(file);
  };

  return (
    <FileUploader
      handleChange={handleChange}
      name="image"
      types={FILE_TYPES}
      multiple={false}
      classes="uploader"
    >
      <div className="border border-dashed border-middle-blue py-2.5 px-3 rounded-lg flex justify-between cursor-pointer">
        <Folder color="#B225EB" />
        <p className="text-middle-blue text-sm">Drop PNG, JPEG and GIFS</p>
      </div>
    </FileUploader>
  );
}

export default Uploader;
