import React from "react";
import Image from "next/image";
import myProjects from "@/data/Projects";

export default function Projects() {
    return (
        <div className="min-h-screen w-full pt-20 bg-slate-900">
            <div className="max-w-6xl mx-auto w-full pt-10">
                <div className="mb-12">
                    <h1 className="text-4xl text-slate-100 font-bold mb-4">My Work</h1>
                    <p className="text-slate-200 w-1/2">A showcase of systems and client applications I have designed, built, and launched. These projects demonstrate my expertise in frontend design systems, server architecture, and database integrations.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {myProjects.map((project) => (
                        <div key={project.title} className="flex h-full flex-col bg-slate-700 p-2 rounded-2xl">
                            <Image
                                className="rounded-xl w-full h-48 object-cover mb-4"
                                alt={project.title}
                                src={project.image}
                                width={400}
                                height={300}
                            />
                            <div className="flex flex-1 flex-col">
                                <h3 className="text-xl text-slate-200 font-bold mb-2">{project.title}</h3>
                                <p className="text-slate-300 text-sm font-light mb-3">{project.description}</p>
                                <ul className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <li key={tag} className="px-3 py-1 bg-slate-300 rounded-full text-[12px] text-slate-700">{tag}</li>
                                    ))}
                                </ul>
                                <div className="mt-auto flex gap-3 pt-6">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-slate-800 text-slate-200 rounded-xl hover:bg-slate-900 transition-colors duration-200">View Live</a>
                                    <a href={project.git} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-slate-200 text-slate-900 rounded-xl hover:bg-slate-100 transition-colors duration-200">Source Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
