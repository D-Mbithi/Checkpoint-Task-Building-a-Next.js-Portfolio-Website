import Link from "next/link";

const capabilities = [
    {
        title: "Frontend Engineering",
        description: "Crafting highly responsive, accessible, and interactive user interfaces using React, Next.js, and modern CSS frameworks like Tailwind.",
        icon:
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
    },
    {
        title: "Backend & Systems",
        description: "Designing robust API architectures, databases, and microservices with Node.js, Express, Postgres, and MongoDB.",
        icon:
            <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
    },
    {
        title: "DevOps & Cloud",
        description: "Managing deployments, Docker containerization, CI/CD automation pipelines, and cloud services for scalable systems.",
        icon:
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
    },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 space-y-5 bg-slate-900">
        <small className="border border-emerald-500 rounded-full px-2 py-1 text-[12px] text-light text-slate-100">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new opportunities
        </small>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-100">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Dennis Mbithi
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-bold tracking-tight text-slate-200">
            Full-Stack Software Engineer
        </p>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-400 leading-relaxed">
            I design and build high-performance, visually stunning web applications with robust backends and clean architectures. Specializing in modern technologies like React, Next.js, and Node.js.
        </p>
        <ul className="my-5 flex items-center justify-center gap-x-4">
            <Link href="/projects" className="bg-slate-100 rounded py-2 px-8 text-slate-900">Review my work</Link>
            <Link href="/contacts" className="border border-slate-100 rounded py-2 px-8 text-slate-100">Get in Touch</Link>
        </ul>

        <div className="flex max-w-2/3 gap-5 py-10">
            { capabilities.map((capability, capabilityIndex) => (
                <div key={capabilityIndex} className="flex flex-col space-y-2.5 rounded-2xl border border-slate-200 p-5">
                    <span className="text-2xl text-slate-100">{ capability.icon }</span>
                    <h3 className="text-2xl capitalize text-slate-100 leading-2 font-mono font-semibold my-4">{capability.title}</h3>
                    <p className="text-slate-500 text-sm text-light">{ capability.description }</p>
                </div>
                ))
            }
        </div>
    </div>
  );
}
