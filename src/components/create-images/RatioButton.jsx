export default function RatioButton({ value, ...rest }) {
  return (
    <button
      className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors cursor-pointer"
      {...rest}
    >
      {value}
    </button>
  );
}