import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Sparkles, ChevronDown, GraduationCap, Briefcase, Trophy, LineChart, Medal, Zap, FileDown } from 'lucide-react';
import profileImage from './assets/personal-image.jpg';

const App = () => {
  // --- CURSOR GLOW LOGIC ---
  const cursorRef = useRef(null);

  useEffect(() => {
    const updateCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(56, 189, 248, 0.15), transparent 80%)`;
      }
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCF6] text-slate-800 font-sans selection:bg-sky-200 relative overflow-hidden font-['Inter']">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Aura Blobs */}
        <div className="absolute top-0 left-[-10%] w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        
        {/* Grid & Particles */}
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] mask-image-b-0"></div>
        
        {/* Cursor Glow */}
        <div 
          ref={cursorRef}
          className="absolute inset-0 z-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px at 50% 50%, rgba(56, 189, 248, 0.15), transparent 80%)`
          }}
        ></div>
      </div>

      {/* MAIN CONTAINER */}
      <main className="relative z-10">

        {/* 1. HERO SECTION (Updated to Full Screen) */}
        {/* min-h-screen ensures this takes up 100% of the viewport height */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-sky-100 backdrop-blur-sm text-sky-600 text-sm font-medium animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Open to Work
            </div>
            
            <h1 className="text-6xl md:text-9xl font-extrabold tracking-tight font-['Outfit'] leading-tight">
              Hi, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600">
                Zhi Hao.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              I craft intelligent digital systems using <span className="font-semibold text-slate-800">Python AI agents</span> and <span className="font-semibold text-slate-800">React</span>.
            </p>
            
            {/* BUTTON GROUP (Now with 3 buttons) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 items-center">
              
              {/* 1. Primary Button */}
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 hover:scale-105 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2">
                View My Work
              </a>
              
              {/* 2. Secondary Button (Contact) */}
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-sm border border-white text-slate-900 rounded-full font-bold hover:bg-white transition-all shadow-sm flex items-center justify-center gap-2">
                Contact Me
              </a>

              {/* 3. NEW: Resume Button (Outlined with Icon) */}
              <a 
                href="/ChyeZhiHao_Resume.pdf"  // <-- IMPORTANT: Path to your resume file
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all shadow-sm flex items-center justify-center gap-2 group"
              >
                <FileDown size={20} className="group-hover:animate-bounce" />
                Download CV
              </a>
            </div>
          </div>

          {/* Scroll Indicator at bottom of screen */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
            <ChevronDown size={32} />
          </div>
        </section>

        {/* CONTENT CONTAINER (Below Fold) */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col gap-32 pb-20">

          {/* 2. ABOUT ME (Glassmorphism with 3D Coin Flip) */}
          <section id="about" className="scroll-mt-20 pt-20">
            <div className="bg-white/40 backdrop-blur-md border border-white/50 p-8 md:p-12 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-500 flex flex-col md:flex-row items-center gap-10">
              
              {/* --- 3D COIN FLIP CONTAINER --- */}
              <div className="shrink-0 relative group w-40 h-40 md:w-48 md:h-48 [perspective:1000px]">
                {/* The blurred glow behind the coin */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-500"></div>
                
                {/* The Rotating Coin */}
                <div className="relative w-full h-full rounded-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* === FRONT FACE (The Placeholder) === */}
                  <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-sky-50 to-indigo-50 border-4 border-white flex items-center justify-center [backface-visibility:hidden] shadow-sm">
                    {/* Icon shown before hover */}
                    <img 
                      src="https://api.dicebear.com/9.x/notionists/svg?seed=Edmund&backgroundColor=e0f2fe" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* === BACK FACE (The Image - Revealed on Hover) === */}
                  <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden border-4 border-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <img 
                      src={profileImage}   /* <--- CHANGE THIS LINE (Remove the "https://..." URL) */
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* ----------------------------------------- */}

              <div className="text-center md:text-left space-y-4 flex-1">
                <h2 className="text-3xl font-bold font-['Outfit'] text-slate-900">About Me</h2>
                <p className="text-slate-700 leading-relaxed text-lg">
                  I'm a developer who doesn't just write code—I solve problems. Specializing in the intersection of <span className="text-sky-600 font-semibold">AI automation</span> and <span className="text-sky-600 font-semibold">web interfaces</span>, I build tools that feel like magic.
                </p>
              </div>
            </div>
          </section>
        
        {/* 2.4. WORK EXPERIENCE (Internship) */}
        <section id="experience" className="space-y-10">
          <h2 className="text-3xl font-bold font-['Outfit'] text-slate-900 text-center md:text-left">Work Experience</h2>
          
          <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12 pb-4">
            
            {/* Experience Item 1 */}
            <div className="relative pl-8 md:pl-12">
              {/* Timeline Dot (Purple for Work) */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#FDFCF6] shadow-sm"></div>
              
              {/* Content Card */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start bg-white/60 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-xl shrink-0">
                  <Briefcase size={24} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold tracking-wider text-purple-600 uppercase bg-purple-50 px-2 py-1 rounded-md">
                    Sep 2022 - Feb 2023
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">PLIC Supplier Management Intern</h3>
                  <p className="text-slate-700 font-medium">ASM ASSEMBLY SYSTEMS SINGAPORE PTE. LTD.</p>
                  
                  {/* Bullet points for responsibilities */}
                  <ul className="text-sm text-slate-600 pt-3 list-disc ml-4 space-y-1">
                    <li>Automated reporting processes with Excel VBA, improving data accuracy and reducing manual entry time by 40%.</li>
                    <li>Conducted data-driven quality checks using measurement jigs and metrology tools</li>
                    <li>Collaborated cross-functionally to support supplier performance monitoring and KPI tracking.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>    


        {/* 2.5. MY JOURNEY (Education Timeline) */}
        <section id="journey" className="space-y-10">
          <h2 className="text-3xl font-bold font-['Outfit'] text-slate-900 text-center md:text-left">My Journey</h2>
          
          <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12 pb-4">
            
            {/* Timeline Item 1: University */}
            <div className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 bg-sky-500 rounded-full border-4 border-[#FDFCF6] shadow-sm"></div>
              
              {/* Content Card */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start bg-white/60 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="p-3 bg-sky-100 text-sky-600 rounded-xl shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold tracking-wider text-sky-600 uppercase bg-sky-50 px-2 py-1 rounded-md">2025 - 2028</span>
                  <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">Singapore Institute of Technology</h3>
                  <p className="text-slate-700 font-medium">Bachelor of Science in Applied Computing (FinTech)</p>
                  <p className="text-sm text-slate-500 pt-2">
                    Specializing in financial systems, blockchain technologies, and software engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 2: Polytechnic */}
            <div className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 bg-slate-300 rounded-full border-4 border-[#FDFCF6] shadow-sm"></div>
              
              {/* Content Card */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start bg-white/60 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all opacity-90 hover:opacity-100">
                <div className="p-3 bg-slate-100 text-slate-500 rounded-xl shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold tracking-wider text-slate-500 uppercase bg-slate-100 px-2 py-1 rounded-md">2020 - 2023</span>
                  <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">Singapore Polytechnic</h3>
                  <p className="text-slate-700 font-medium">Diploma in Mechatronics and Robotics Engineering</p>
                  <p className="text-sm text-slate-500 pt-2">
                      Developed strong analytical and problem-solving skills through robotics, control systems, and automation projects.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

          {/* 3. SKILLS */}
          <section id="skills" className="space-y-8">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Sparkles className="text-sky-500" />
              <h2 className="text-3xl font-bold font-['Outfit'] text-slate-900">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                "Excel VBA", "C", "Python", "Phidata Agents", "Postman", 'Supabase',
                "Groq LLM", "FastAPI", "Vercel", "Git", "Render", "Docker"
              ].map((skill) => (
                <span key={skill} className="px-5 py-3 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl text-slate-700 font-medium hover:scale-110 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-all cursor-default shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>

        {/* 4. HONORS & ACHIEVEMENTS (The Trophy Case) */}
        <section id="achievements" className="space-y-10">
          <h2 className="text-3xl font-bold font-['Outfit'] text-slate-900 text-center md:text-left flex items-center gap-3 justify-center md:justify-start">
            <Trophy className="text-amber-500" size={32} />
            Honors & Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SingHacks (Gold) */}
            <div className="group relative bg-white/60 backdrop-blur-md border border-white/50 p-8 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-400 to-orange-500"></div>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
                  <Trophy size={14} className="fill-amber-700" />
                  3rd Place Winner
                </div>
                <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900">SingHacks 2025</h3>
                <p className="text-slate-600">
                  Built a trustworthy AI agent system on Hedera Hashgraph using ERC-8004 & X402 standards.
                </p>
                <div className="pt-2 flex gap-3 text-slate-400">
                  <a href="#" target="_blank" rel="noreferrer"><Github size={20} className="hover:text-slate-900 transition" /></a>
                  <a href="https://agents-of-sit-dev.vercel.app" target="_blank" rel="noreferrer"><ExternalLink size={20} className="hover:text-slate-900 transition" /></a>
                </div>
              </div>
            </div>

            {/* CFA Challenge (Platinum) */}
            <div className="group relative bg-white/60 backdrop-blur-md border border-white/50 p-8 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-slate-400 to-slate-600"></div>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider">
                  <Medal size={14} />
                  Top 10% Global
                </div>
                <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900">CFA Institute Investing Challenge</h3>
                <p className="text-slate-600">
                  Ranked in top 10% worldwide. Simulated investment bank analyst role making high-conviction trading decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. HACKATHON JOURNEY (Participation) */}
        <section id="hackathons" className="space-y-10 pt-12">
          <h2 className="text-3xl font-bold font-['Outfit'] text-slate-900 text-center md:text-left flex items-center gap-3 justify-center md:justify-start">
            <Zap className="text-pink-500" size={32} />
            Hackathon Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* TEMPLATE: Fill this in with your other Hackathon */}
            <div className="group relative bg-white/60 backdrop-blur-md border border-white/50 p-8 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Pink Gradient for Passion/Energy */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-500 to-rose-500"></div>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
                  Finalist / Participant
                </div>
                <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900">Hedera Hello Future</h3>
                <p className="text-slate-600">
                  Built an agentic e-commerce system where AI agents discover, list, and manage products using ERC-8004 & X402 on Hedera.
                </p>
                <p className="text-slate-600">
                  Enabled secure, verifiable payments and on-chain coordination between agents for trustworthy automation.
                </p>
                <div className="pt-2 flex gap-3 text-slate-400">
                  <a href="#" target="_blank" rel="noreferrer"><Github size={20} className="hover:text-slate-900 transition" /></a>
                  <a href="https://ezbiz-merchant.vercel.app/chat" target="_blank" rel="noreferrer"><ExternalLink size={20} className="hover:text-slate-900 transition" /></a>
                </div>
              </div>
            </div>

             {/* You can add another card here if you have more hackathons */}
             <div className="group relative bg-white/60 backdrop-blur-md border border-white/50 p-8 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Pink Gradient for Passion/Energy */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-500 to-rose-500"></div>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
                  Finalist / Participant
                </div>
                <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900">NUS CatalystX 2025</h3>
                <p className="text-slate-600">
                    Proposed concept of Everflow, an offline-resilient payment caching system.
                    Implementing RSA-based encryption to ensure transaction integrity during network outages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SELECTED PROJECTS (School & Engineering) */}
        <section id="projects" className="space-y-10 pt-12">
          <h2 className="text-3xl font-bold font-['Outfit'] text-slate-900 text-center md:text-left">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Stock Analysis (FinTech) */}
            <ProjectCard 
              title="Stock Market Analysis"
              desc="Automated technical analysis tool using Pandas & NumPy to detect trend streaks, generate SMA indicators, and visualize daily returns."
              tags={["Python", "Pandas", "NumPy", "yfinance"]}
              color="from-emerald-400 to-teal-500"
            />

            {/* Class Management (Systems) */}
            <ProjectCard 
              title="Class Management System"
              desc="A robust C application for managing dynamic datasets. Implemented custom data structures, input sanitization, and file I/O from scratch."
              tags={["C Language", "Algorithms", "File I/O"]}
              color="from-slate-500 to-slate-400"
            />
          </div>
        </section>

          {/* 7. FOOTER */}
          <footer id="contact" className="relative pt-12">
             {/* Simple Divider Line instead of Wave for cleaner look inside container */}
             <div className="h-px w-full bg-slate-200 mb-12"></div>
            <div className="text-center space-y-8 relative z-10">
              <h2 className="text-4xl font-bold font-['Outfit'] text-slate-900">Keep in touch with me!</h2>
              <div className="flex justify-center gap-6">
              
                {/* 1. EMAIL (Opens default mail app) */}
                <SocialLink 
                  href="mailto:desmondchye321@gmail.com" 
                  icon={<Mail size={24} />} 
                />

                {/* 2. LINKEDIN */}
                <SocialLink 
                  href="https://www.linkedin.com/in/chye-zhi-hao/" 
                  icon={<Linkedin size={24} />} 
                />

                {/* 3. GITHUB */}
                <SocialLink 
                  href="https://github.com/BrownBOBAsushi" 
                  icon={<Github size={24} />} 
                />
              
            </div>
              <p className="text-sm text-slate-400 font-medium">© 2025 Chye Zhi Hao. Designed with <span className="text-red-400">♥</span></p>
            </div>
          </footer>

        </div>
      </main>
    </div>
  );
};

/* --- HELPER COMPONENTS --- */
const ProjectCard = ({ title, desc, tags, color }) => (
  <div className="group relative bg-white/60 backdrop-blur-md border border-white/50 p-8 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${color}`}></div>
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900">{title}</h3>
      <div className="flex gap-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
        <Github size={20} className="hover:text-slate-900 cursor-pointer" />
        <ExternalLink size={20} className="hover:text-slate-900 cursor-pointer" />
      </div>
    </div>
    <p className="text-slate-600 mb-6 text-lg">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-lg">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a href={href} className="p-4 bg-white text-slate-600 rounded-full shadow-md hover:shadow-lg hover:text-sky-500 hover:-translate-y-1 transition-all">
    {icon}
  </a>
);

export default App;