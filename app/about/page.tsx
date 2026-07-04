export default function About() {
    return (
        <div className="flex flex-col items-center justify-center w-full bg-slate-900 p-20 min-h-screen">
            <div className="max-w-6xl mx-auto space-y-5">
                <div className="flex flex-col w-full">
                    <h1 className="text-4xl  text-slate-200 font-semibold mb-4">About Me</h1>
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                        I am a software engineer passionate about creating elegant code and exceptional web experiences. With a background in web technologies and software design, I love solving complex engineering problems and translating user needs into clean, interactive applications. Outside of programming, I stay up to date on browser standards, experiment with emerging web frameworks, and contribute to open-source code. I enjoy building things that scale, are fast, and feel responsive to the touch.
                    </p>
                </div>
                <div className="flex flex-col w-full mt-10">
                    <h2 className="text-2xl text-slate-300 mb-5 font-bold">Technical Skills</h2>
                    <div className="flex gap-x-4 w-full *:flex-wrap mt-4">
                        <div className="space-y-2 bg-slate-50/10 p-4 rounded-lg border border-slate-50/20 w-full md:w-1/3">
                            <h3 className="text-slate-200 text-xl font-light mb-2">Frontend</h3>
                            <ul className="space-y-1">
                                <li className="border-s border-slate-300 text-slate-50 px-4 py-1 text-sm">React</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">Next.js</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">TypeScript</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">Tailwind CSS</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">Redux Toolkit</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">HTML5/CSS3</li>
                            </ul>
                        </div>
                        <div className="space-y-2 bg-slate-50/10 p-4 rounded-lg border border-slate-50/20 w-full md:w-1/3">
                            <h3 className="text-slate-300 text-xl font-light mb-2">Backend & DBs</h3>
                            <ul className="space-y-1">
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">Node.js</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">Express</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">PostgresSQL</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">MongoDB</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">REST APIs</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">GraphQL</li>
                            </ul>
                        </div>
                        <div className="space-y-2 bg-slate-50/10 p-4 rounded-lg border border-slate-50/20 w-full md:w-1/3">
                            <h3 className="text-slate-300 text-xl font-light mb-2">DevOps & Tools</h3>
                            <ul className="space-y-1">
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">Git & GitHub</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">Docker</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">AWS (S3/EC2)</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">CI/CD (GitHub Actions)</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">Vercel</li>
                                <li className="border-s border-slate-100 text-slate-50 px-4 py-1 text-sm">Linux Systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="text-2xl text-slate-300">Timeline</h2>
                    <div className="space-y-8 border-l border-slate-800 pl-6 ml-4">
                        <div className="relative group">
                            <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-zinc-900 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors duration-200"></div>
                            <div className="space-y-1">
                                <span className="text-xs font-semibold text-indigo-400">2025 - Present</span>
                                <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors duration-200">Software Engineering Student</h3>
                                <h4 className="text-sm font-semibold text-slate-400">GoMyCode</h4>
                                <p className="text-sm text-slate-400 leading-relaxed mt-2">Intensive training in data structures, algorithms, databases, full-stack JavaScript frameworks, and DevOps practices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}