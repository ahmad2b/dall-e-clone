import React from "react";

const UserInputs = ({
  handleSubmit,
  userInputs,
  setUserInputs,
  isLoading,
}: userInputsProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-openAI_Primary p-6 flex flex-col space-y-3 rounded-lg"
    >
      <div className="flex items-center space-x-3">
        <input
          type="text"
          className="input"
          placeholder="Enter Title....."
          value={userInputs.title}
          onChange={(e) =>
            setUserInputs({ ...userInputs, title: e.target.value })
          }
        />
        <input
          type="text"
          className="input"
          placeholder="#AI #openai"
          value={userInputs.tag}
          onChange={(e) =>
            setUserInputs({ ...userInputs, tag: e.target.value })
          }
        />
      </div>
      <input
        type="text"
        className="input"
        placeholder="Enter Description"
        value={userInputs.description}
        onChange={(e) =>
          setUserInputs({ ...userInputs, description: e.target.value })
        }
      />
      <button className="btn flex-1">
        {isLoading ? "Generating..." : "Generate"}
      </button>
    </form>
  );
};

export default UserInputs;
