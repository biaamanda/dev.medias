import { NAVBAR_ITEMS } from "@/config/navbar";
import { NavLink } from "./nav-link";

export function MobileNavbar() {
  return (
    <nav className="w-full h-16 bg-background/50 md:hidden backdrop-blur-xl fixed bottom-0 z-10 flex justify-around">
      {NAVBAR_ITEMS.map(({ href, icon, title }) => (
        <NavLink key={href} href={href}>
          {icon}
          <span>{title}</span>
        </NavLink>
      ))}
    </nav>
  );
}
