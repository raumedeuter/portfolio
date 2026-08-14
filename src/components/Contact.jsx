export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
      <p className="text-neutral-600 mb-8">
        I'm currently open to new opportunities — feel free to reach out.
      </p>

      <a
        href="mailto:mikeeben10@gmail.com"
        className="inline-block border border-neutral-900 rounded-full px-6 py-3 font-medium hover:bg-neutral-900 hover:text-white transition-colors mb-10"
      >
        Say Hello
      </a>

      <div className="flex justify-center gap-6 text-sm text-neutral-500">
        <a href="https://github.com/Raumedeuter" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">
          GitHub
        </a>
        <a href="http://www.linkedin.com/in/michael-ben-ikheloah-a3324b2a7" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">
          LinkedIn
        </a>
      </div>
    </section>
  )
}