import { Briefcase } from 'lucide-react'

const experience = [
    {
    role: 'Computer Engineer Student',
    company: 'Afe Babalola University',
    period: 'Sep 2020 — October 2025',
    description:
      'Pursuing a degree in Computer Engineering, focusing on software development, cybersecurity, and hardware integration.',
  },
    {
    role: 'Software Development Intern',
    company: 'Pyrich Group Limited',
    period: 'Jul 2022 — Oct 2022',
    description:
      'First industrial training internship — completed responsive web design certification projects, registered MDA codes on the FCC portal, and critiqued UI/UX for the NELEX project.',
  },
 {
    role: 'Software Development/Technical Support Intern',
    company: 'P2E Technologies',
    period: 'Jul 2023 — Oct 2023',
    description:
      'Provided infrastructure support — Veritas Backup Exec, Windows Server, VMware — and assisted with EBS module testing during NSITF promotion exams.',
  },
    {
    role: 'Cybersecurity Intern (Remote)',
    company: 'Hagital Consulting',
    period: 'Jan 2024 — Jun 2024',
    description:
      'Ran ethical hacking simulations and vulnerability assessments using Burp Suite, Metasploit, Wireshark, and Nmap.',
  },
  {
    role: 'Software Development Intern',
    company: 'Pyrich Group Limited',
    period: 'Mar 2024 — Sep 2024',
    description:
      'Contributed to the frontend of the Labour Market Information System (LMIS), supported the NSITF Enterprise Business Suite, and documented NIWA user manuals.',
  },
    {
    role: 'NYSC — Software Developer / Cybersecurity Analyst',
    company: 'Pyrich Group Limited',
    period: 'Dec 2025 — Present',
    description:
      'Serving my National Youth Service at the organization that shaped my early career, continuing work on government and client platforms.',
  },
]

const skills = {
  Development: ['JavaScript (ES6+)', 'React', 'Node.js', 'TypeScript', 'Next.js', 'SQL (PostgreSQL)'],
  Cybersecurity: ['Vulnerability Scanning', 'Penetration Testing', 'GRC Frameworks', 'Nmap'],
  Tools: ['Git/GitHub', 'Vercel', 'Vite', 'VMware', 'MS Azure DevOps'],
}
const certifications = [
  { name: 'Certified in Cybersecurity (CC)', issuer: 'ISC²' },
  { name: 'ISO 27001 Foundation — Information Security Management', issuer: 'ISO/IEC' },
  { name: 'Technical & GRC Cybersecurity', issuer: 'Hagital Consulting' },
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp' },
  { name: 'Linux Operating System', issuer: 'Great Learning' },
]
export default function Experience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-bold mb-8">Experience</h2>

   <div className="relative max-w-3xl mx-auto">
  {/* center line */}
  <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-200" />

  <div className="space-y-16">
    {experience.map((job, index) => {
      const isEven = index % 2 === 0
      return (
        <div
          key={job.role}
          className={`relative flex ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} flex-col items-center gap-6`}
        >
          {/* icon marker, centered on the line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center z-10">
            <Briefcase className="w-5 h-5 text-white" />
          </div>

          {/* content — takes one side */}
          <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
            <h3 className="font-semibold">{job.role}</h3>
            <p className="text-sm text-neutral-500 mb-1">{job.company} · {job.period}</p>
            <p className="text-neutral-600 text-sm">{job.description}</p>
          </div>

          {/* date side — was the empty spacer before */}
      <div className={`w-full sm:w-1/2 flex items-center ${isEven ? 'sm:pl-12 sm:justify-start' : 'sm:pr-12 sm:justify-end'}`}>
        <span className="text-sm text-neutral-500">{job.period}</span>
      </div>
    </div>
      )
    })}
  </div>
</div>

      <h2 className="text-2xl font-bold mb-8">Skills</h2>
      <div className="grid sm:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-semibold mb-3 text-sm text-neutral-500 uppercase tracking-wide">
              {category}
            </h3>
            <ul className="space-y-1 text-sm text-neutral-700">
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

        ))}
      </div>

      <h2 className="text-2xl font-bold mb-8">Certifications</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {certifications.map((cert) => (
          <div key={cert.name}>
            <h3 className="font-semibold mb-1 text-sm text-neutral-500 uppercase tracking-wide">
              {cert.name}
            </h3>
            <p className="text-sm text-neutral-700">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}