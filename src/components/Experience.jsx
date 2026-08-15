import { useState } from 'react'
import { Briefcase } from 'lucide-react'

const experience = [
  {
    role: 'NYSC — Software Developer / Cybersecurity Analyst',
    company: 'Pyrich Group Limited',
    period: 'Dec 2025 — Present',
    description:
      'Serving my National Youth Service at the organization that shaped my early career, continuing work on government and client platforms.',
  },
  {
    role: 'Software Development Intern',
    company: 'Pyrich Group Limited',
    period: 'Mar 2024 — Sep 2024',
    description:
      'Contributed to the frontend of the Labour Market Information System (LMIS), supported the NSITF Enterprise Business Suite, and documented NIWA user manuals.',
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
    period: 'Jul 2023 — Oct 2023',
    description:
      'Provided infrastructure support — Veritas Backup Exec, Windows Server, VMware — and assisted with EBS module testing during NSITF promotion exams.',
  },
  {
    role: 'Software Development Intern (Remote)',
    company: 'Pyrich Group Limited',
    period: 'Jul 2022 — Oct 2022',
    description:
      'First internship — completed responsive web design certification projects, registered MDA codes on the FCC portal, and critiqued UI/UX for the NELEX project.',
  },
]

const certifications = [
  { name: 'Certified in Cybersecurity (CC)', issuer: 'ISC²' },
  { name: 'ISO 27001 Foundation — Information Security Management', issuer: 'ISO/IEC' },
  { name: 'Technical & GRC Cybersecurity', issuer: 'Hagital Consulting' },
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp' },
  { name: 'Linux Operating System', issuer: 'Great Learning' },
]

const skillCategories = {
  Development: [
    { name: 'JavaScript', icon: '/icons/js.png' },
    { name: 'React', icon: '/icons/react.png' },
    { name: 'Node.js', icon: '/icons/node.png' },
    {name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
    { name: 'TypeScript', icon: '/icons/ts-logo.svg' },
    { name: 'HTML', icon: '/icons/html.png' },
    { name: 'CSS', icon: '/icons/css.png' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
  ],
  Cybersecurity: [
    { name: 'Kali Linux', icon: '/icons/kali-dragon-icon.svg' },
    { name: 'Wireshark', icon: '/icons/wireshark.svg' },
    { name: 'Nmap', icon: '/icons/nmap.svg' },
    { name: 'Burp Suite', icon: '/icons/burpsuite.png' },
    { name: 'Metasploit', icon: '/icons/metasploit-og.png' },
    { name: 'Linux', icon: '/icons/linux.png'}
  ],
  Tools: [
    { name: 'Git', icon: '/icons/git.png' },
    { name: 'GitHub', icon: '/icons/github.svg' },
    { name: 'Vercel', icon: '/icons/vercel-icon-light.svg' },
    { name: 'Vite', icon: '/icons/vite.svg' },
    { name: 'VMware', icon: '/icons/vmware-logo-grey.svg' },
  ],
  Electronics: [
    { name: 'Arduino', icon: '/icons/arduino.png' },
    { name: 'Altium Circuit Maker', icon: '/icons/altium-circuitmaker.svg' },
    { name: 'Matlab', icon: '/icons/matlab.png' },
    // add your real capstone tools here
  ],
}

export default function Experience() {
  const categories = Object.keys(skillCategories)
  const [activeTab, setActiveTab] = useState(categories[0])

  return (
    <section id="experience" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-bold mb-8">Experience</h2>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-200" />

        <div className="space-y-16">
          {experience.map((job, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={job.role}
                className={`relative flex ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} flex-col items-center gap-6`}
              >
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center z-10">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>

                <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                  <h3 className="font-semibold">{job.role}</h3>
                  <p className="text-sm text-neutral-500 mb-1">{job.company}</p>
                  <p className="text-neutral-600 text-sm">{job.description}</p>
                </div>

                <div className={`w-full sm:w-1/2 flex items-center ${isEven ? 'sm:pl-12 sm:justify-start' : 'sm:pr-12 sm:justify-end'}`}>
                  <span className="text-sm text-neutral-500">{job.period}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-8 mt-24">Skills</h2>

      <div className="flex gap-2 mb-8 border-b border-neutral-200 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
              activeTab === category
                ? 'border-neutral-900 text-neutral-900'
                : 'border-transparent text-neutral-400 hover:text-neutral-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

    <div className="grid grid-cols-4 sm:grid-cols-6 gap-x-6 gap-y-10 mb-24">
  {skillCategories[activeTab].map((skill) => (
    <div key={skill.name} className="flex flex-col items-center gap-3 text-center">
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-12 h-12 sm:w-14 sm:h-14 grayscale hover:grayscale-0 transition-all duration-300"
      />
      <span className="text-xs text-neutral-600">{skill.name}</span>
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