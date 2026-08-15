export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Michael Ben-Ikheloah</p>
        <div className="flex gap-6">
          <a href="https://github.com/Raumedeuter" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">
            GitHub
          </a>
          <a href="http://www.linkedin.com/in/michael-ben-ikheloah-a3324b2a7" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}