export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end pb-[15vh] px-6 max-w-3xl mx-auto scroll-mt-20"
    >
      <p className="text-lg text-neutral-500 mb-2">Hello, I'm</p>
      <h1 className="text-5xl font-bold mb-2">Michael Ben-Ikheloah</h1>
      <h2 className="text-2xl text-neutral-500 mb-6">
        Computer Engineer | Software Developer | Cybersecurity Enthusiast
      </h2>
      <p className="text-neutral-600 leading-relaxed">
        I build full-stack web applications and secure systems — from
        government-grade platforms to client sites and personal projects — with
        a growing focus on clean, thoughtful frontend engineering.
      </p>
      <div className="flex flex-wrap gap-4 mt-6">
        <a
          href="#projects"
          className="inline-block bg-neutral-900 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
        >
          View My Work
        </a>
        <a
          href="/resume.pdf"
          download
          className="inline-block border border-neutral-900 rounded-full px-6 py-3 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
