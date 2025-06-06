export default function WelcomeMessage({ title, emoji }) {
  return (
    <h2 className="text-4xl font-bold mb-8">{title}
      <span className="text-2xl">{emoji}</span>
    </h2>
  );
}