"use client";
import FileSaver from "file-saver";

const Button = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <button
      onClick={() => FileSaver.saveAs(imageUrl, imageUrl)}
      className="btn mt-2 flex-1"
    >
      Download
    </button>
  );
};

export default Button;
