import { cn } from "../../lib/cn";

export default function RatioButton({ value, active, ...rest }) {
  return (
    <button
      className={
        cn(
          "bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors cursor-pointer",
          active && "bg-zinc-800 text-white"
        )
      }
      {...rest}
    >
      {value}
    </button>
  );
}