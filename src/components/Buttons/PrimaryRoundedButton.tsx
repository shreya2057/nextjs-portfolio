export const PrimaryRoundedButton = ({
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
        className="bg-amber-600 px-4 py-3 text-white rounded-lg hover:bg-amber-500 "
      >
        {text}
      </button>
    </div>
  );
};
