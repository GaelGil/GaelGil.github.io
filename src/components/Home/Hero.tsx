export default function Hero() {
  return (
    <section id="hero" className="md:ml-64  flex items-center">
      <div className="max-w-3xl mx-auto px-8 py-24">
        <h3 className="mt-2 text-2xl text-slate"></h3>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-5 py-3 border rounded border-accent hover:bg-accent/10"
          >
            View projects
          </a>
          <a
            href="#about"
            className="px-5 py-3 border rounded border-accent hover:bg-accent/10"
          >
            About
          </a>
        </div>
      </div>
    </section>
  );
}
