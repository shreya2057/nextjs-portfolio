export const PrimaryButton = ({
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
        className="bg-amber-600 px-4 py-1.5 text-sm text-white hover:bg-amber-500 "
      >
        {text}
      </button>
    </div>
  );
};
