export default function Hero() {
  return (
    <section id="hero" className="md:ml-64 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-8 py-24">
        <h3 className="mt-2 text-2xl text-slate">
          Thank you for coming to my website. Here you can learn about me, my
          projects, experince and what I do. My projects mainly revolved around
          engineering and data science.
        </h3>

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
