import React from "react";

const MyInfo = () => {
  const HelloWorld = {
    _id: "127.0.0.1",
    name: "Piyush Malu",
    developer: true,
    technologies: ["ts", "go", "react", "C++", "Python", "..."],
    interests: ["Fullstack", "Frontend", "Backend", "..."],
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-violet-500/30 shadow-[0_0_40px_rgba(124,58,237,0.2)]">
      {/* Window chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e] border-b border-violet-500/20">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-slate-500 font-mono">hello_world.js</span>
      </div>

      {/* Code content */}
      <div className="relative bg-[#13131f] p-5">
        <div className="absolute top-[1.35rem] left-[1.1rem] blinking-rectangle rounded-sm" />
        <pre className="font-mono text-sm leading-7 text-slate-400 overflow-x-auto">
          <span className="text-violet-300">const </span>
          <span className="text-sky-300">HelloWorld</span>
          <span className="text-slate-300"> = </span>
          <span className="text-slate-300">{"{\n  "}</span>
          <span className="text-emerald-400">"_id"</span>
          <span className="text-slate-300">: </span>
          <span className="text-amber-300">"{HelloWorld._id}"</span>
          <span className="text-slate-300">,{"\n  "}</span>
          <span className="text-emerald-400">"name"</span>
          <span className="text-slate-300">: </span>
          <span className="text-amber-300">"{HelloWorld.name}"</span>
          <span className="text-slate-300">,{"\n  "}</span>
          <span className="text-emerald-400">"developer"</span>
          <span className="text-slate-300">: </span>
          <span className="text-violet-300">{HelloWorld.developer.toString()}</span>
          <span className="text-slate-300">,{"\n  "}</span>
          <span className="text-emerald-400">"technologies"</span>
          <span className="text-slate-300">: [</span>
          {HelloWorld.technologies.map((tech, i) => (
            <span key={i} className="text-amber-300">
              "{tech}"{i < HelloWorld.technologies.length - 1 ? ", " : ""}
            </span>
          ))}
          <span className="text-slate-300">],{"\n  "}</span>
          <span className="text-emerald-400">"interests"</span>
          <span className="text-slate-300">: [</span>
          {HelloWorld.interests.map((interest, i) => (
            <span key={i} className="text-amber-300">
              "{interest}"{i < HelloWorld.interests.length - 1 ? ", " : ""}
            </span>
          ))}
          <span className="text-slate-300">],{"\n"}</span>
          <span className="text-slate-300">{"}"}</span>
        </pre>
      </div>
    </div>
  );
};

export default MyInfo;
