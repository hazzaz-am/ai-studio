import logo from "../assets/logo.svg";
import { navLinks } from "../data/nav-links";
import { cn } from "../lib/cn";

export default function Header({ onRouteChange, route }) {

  const renderNavLinks = navLinks.map((link) => {
    return (
      <a key={link.path} className={
        cn(
          "hover:text-zinc-200 cursor-pointer transition-all",
          route === link.path && "text-zinc-200 font-medium"
        )
      } onClick={() => onRouteChange(link.path)}>
        {link.label}
      </a>
    );
  });


  return (
    <header className="flex items-center mb-12 justify-between">
      <div className="flex items-center">
        <img src={logo} className="h-10" />
      </div>
      <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
        {renderNavLinks}
      </ul>
    </header>
  );
}