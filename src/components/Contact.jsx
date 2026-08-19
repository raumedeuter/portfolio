const socials = [
  { name: 'GitHub', url: 'https://github.com/Raumedeuter', icon: '/icons/social/github.svg' },
  { name: 'LinkedIn', url: 'http://www.linkedin.com/in/michael-ben-ikheloah-a3324b2a7', icon: '/icons/social/linkedin.svg' },
  { name: 'Instagram', url: 'https://instagram.com/YOUR_HANDLE', icon: '/icons/social/instagram.svg' }, // add your real handle
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-32 text-center scroll-mt-20">
      <p className="text-sm text-neutral-500 mb-3 uppercase tracking-widest">Get In Touch</p>
      <h2 className="text-3xl sm:text-5xl font-bold mb-6">
        Feel <span className="text-accent">free</span> to reach out.
      </h2>
      <p className="text-neutral-600 mb-10 max-w-md mx-auto">
        I'm currently open to new opportunities and would love to collaborate.
      </p>

      <a
        href="mailto:mikeeben10@gmail.com"
        className="group inline-flex items-center gap-2 text-lg font-medium border-b-2 border-neutral-900 pb-1 hover:border-accent hover:text-accent transition-colors mb-16"
      >
        mikeeben10@gmail.com
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>

      <div className="flex justify-center gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center transition-all hover:border-accent hover:-translate-y-1"
          >
            <img
              src={social.icon}
              alt={social.name}
              className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all"
            />
          </a>
        ))}
      </div>
    </section>
  )
}