export default function FormControl({
  type = "text",
  id,
  label,
  placeholder,
  ...rest
}) {
  return (
    <div>
      <label for={id} className="block text-sm font-medium text-zinc-700 mb-1" >{label}</label>
      <input type={type} id={id} {...rest}
        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        placeholder={placeholder} />
    </div>
  );
}