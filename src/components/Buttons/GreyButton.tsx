"use client";
export const GreyButton = ({
  text,
  onClickFunction,
}: {
  text: string;
  onClickFunction: () => void;
}) => {
  return (
    <div>
      <button
        onClick={onClickFunction}
        className="bg-gray-500 px-4 py-2 text-sm font-bold text-white rounded-lg hover:bg-gray-800 "
      >
        {text}
      </button>
    </div>
  );
};
