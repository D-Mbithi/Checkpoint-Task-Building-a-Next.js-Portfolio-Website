export default function Contact() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-slate-900">
      <div className="max-w-6xl flex items-center justify-center bg-slate-50 shadow-lg rounded p-5 md:p-10 gap-5 md:gap-10">
        <div className="flex flex-1 flex-col p-5 space-y-5">
          <h1 className="text-4xl font-bold uppercase">Get In Touch</h1>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            I am interested in full-stack engineering roles, contract opportunities, and
            collaborate projects. If you have a question or just want to say hi, feel free to drop a message or
            find me on these networks :
          </p>
          <div className="flex flex-col gap-3 pt-4">
            <a href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 text-slate-300 hover:text-white transition-all duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
              </svg>
              <span className="text-sm font-semibold">GitHub</span>
            </a>
            <a href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 text-slate-300 hover:text-white transition-all duration-200">

              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clip-rule="evenodd"></path>
              </svg>
              <span className="text-sm font-semibold">LinkedIn</span>
            </a>
            <a href="mailto:dennis@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 text-slate-300 hover:text-white transition-all duration-200">

              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-sm font-semibold">Email Me</span>
            </a>
          </div>
        </div>
        <div className="flex flex-1 bg-slate-900">
          <form action="" method="post"
            className="flex flex-col space-y-2.5 border p-5 border-slate-900 rounded-lg w-full">
            <div className="flex gap-2">
              <div className="flex flex-1 flex-col py-2.5">
                <label htmlFor="name" className="font-semibold uppercase text-sm text-slate-50">Your
                  Name</label>
                <input type="text"
                  className="bg-slate-600/50 px-2.5 py-1 rounded focus:bg-slate-200 focus:border-0 focus:text-slate-700 text-slate-200 border border-slate-400"
                  id="name" name="name" />
              </div>
              <div className="flex flex-1 flex-col py-2.5">
                <label htmlFor="email" className="font-semibold uppercase text-sm text-slate-50">Email</label>
                <input type="email"
                  className="bg-slate-600/50 px-2.5 py-1 rounded focus:bg-slate-200 focus:border-0 focus:text-slate-700 text-slate-200 border border-slate-400"
                  id="emai;" name="email" />
              </div>
            </div>
            <div className="flex flex-col w-full py-2.5">
              <label htmlFor="name" className="font-semibold uppercase text-sm text-slate-50">Subject</label>
              <input type="text"
                className="bg-slate-600/50 px-2.5 py-1 rounded focus:bg-slate-200 focus:border-0 focus:text-slate-700 text-slate-200 border border-slate-400"
                id="subject" name="subject" />
            </div>
            <div className="flex flex-col w-full py-2.5">
              <label htmlFor="name" className="font-semibold uppercase text-sm text-slate-50">Message</label>
              <textarea id="message" name="message"
                className="bg-slate-600/50 px-2.5 py-1 rounded focus:bg-slate-200 focus:border-0 focus:text-slate-700 text-slate-200 border border-slate-400" />
            </div>
            <div className="py-2.5">
              <button className="rounded bg-slate-100 text-slate-20 w-full px-10 py-4" type="submit">Send
                Message
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
