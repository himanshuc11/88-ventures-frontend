import { FileUploader } from "react-drag-drop-files";
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
    />
  );
}

export default Uploader;
