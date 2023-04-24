"use client";
import React, { useState } from "react";
import UserInputs from "./UserInputs";
import ImagePreview from "./ImagePreview";
import FileSaver from "file-saver";
import { useRouter } from "next/navigation";

const InputPanel = () => {
  const router = useRouter();
  const [userInputs, setUserInputs] = useState({
    title: "",
    tag: "",
    description: "",
  });

  const [userInputCache, setUserInputCache] = useState({
    title: "",
    tag: "",
    description: "",
  });

  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      userInputs.title === "" ||
      userInputs.description === "" ||
      userInputs.tag === ""
    )
      return alert("Please enter all the fields");

    setIsLoading(true);

    try {
      const data = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userInputs }),
      });
      const { imageUrl } = await data.json();
      setImageUrl(imageUrl);
    } catch (error) {
      alert((error as { message: string }).message);
    } finally {
      setIsLoading(false);
    }
    setUserInputCache({ ...userInputs });
    setUserInputs({ title: "", tag: "", description: "" });
  };

  const handleShareImage = async () => {
    setIsLoading(true);
    try {
      const data = await fetch("/api/sharepost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userInputCache, imageUrl }),
      });
      const { url } = await data.json();
    } catch (error) {
      alert((error as { message: string }).message);
    } finally {
      setIsLoading(false);
    }
    router.push("/share");
  };

  const handleDownloadImage = (e: any) => {
    FileSaver.saveAs(imageUrl, imageUrl);
  };

  return (
    <div className="mt-40">
      {/* User Inputs */}

      <UserInputs
        handleSubmit={handleSubmit}
        userInputs={userInputs}
        setUserInputs={setUserInputs}
        isLoading={isLoading}
      />

      {/* Image Preview */}

      <ImagePreview imageUrl={imageUrl} isLoading={isLoading} />

      {/* Buttons Sharing and Download */}

      {imageUrl !== "" && (
        <div className="flex gap-2 mt-2">
          <button
            disabled={imageUrl === ""}
            className="btn flex-1 disabled:cursor-not-allowed"
            onClick={handleShareImage}
          >
            {isLoading ? "Sharing....." : "Share"}
          </button>
          <button
            disabled={imageUrl === ""}
            className="btn flex-1 disabled:cursor-not-allowed"
            onClick={handleDownloadImage}
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default InputPanel;
