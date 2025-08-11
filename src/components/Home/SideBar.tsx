import React from "react";

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-sm block hover:text-accent transition"
  >
    {children}
  </a>
);
export default function Sidebar({
  onToggleTheme,
  dark,
}: {
  onToggleTheme: () => void;
  dark: boolean;
}) {
  return (
    <aside className="fixed top-0 left-0 w-1/2 h-screen flex items-center justify-center p-8">
      <div className="max-w-sm text-center">
        <h1 className="text-3xl font-bold text-white">Brittany Chiang</h1>
        <p className="mt-2 text-slate">Front End Engineer</p>

        <nav className="mt-8 space-y-2">
          <a href="#about" className="block hover:text-accent">
            About
          </a>
          <a href="#experience" className="block hover:text-accent">
            Experience
          </a>
          <a href="#projects" className="block hover:text-accent">
            Projects
          </a>
        </nav>

        <div className="mt-8 space-y-2">
          <SocialLink href="https://github.com">GitHub</SocialLink>
          <SocialLink href="https://linkedin.com">LinkedIn</SocialLink>
          <SocialLink href="https://codepen.io">CodePen</SocialLink>
        </div>

        <button
          onClick={onToggleTheme}
          className="mt-6 inline-block px-3 py-2 rounded border border-slate text-sm hover:border-accent"
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </aside>
  );
}
