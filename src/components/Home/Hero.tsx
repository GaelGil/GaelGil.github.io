export default function Hero() {
  return (
    <section id="hero" className="md:ml-64 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-8 py-24">
        <p className="text-accent font-mono mb-4">Hi, my name is</p>
        <h3 className="mt-2 text-2xl text-slate">
          My name is Gael Gil, an aspiring data scientist, I have a BS in
          Applied Math and Computer Science Minor from San Jose State
          University. My technical interests include math, deep learning, and
          computer vision. I’ve had the opportunity to gain hands on experience
          through leadership roles like serving as the technical workshop lead
          at the responsible computing club at San Jose state, creating
          workshops on technical topics such as large language models, diffusion
          models, python; and software engineering internships at large
          companies. Outside of technical things some of my interests are
          soccer, sneakers, horror movies!
        </h3>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-5 py-3 border rounded border-accent hover:bg-accent/10"
          >
            View projects
          </a>
        </div>
      </div>
    </section>
  );
}
