// ========================================================
// SLIDE 1: TITLE SLIDE (MEMBER 1: RAJAT)
// ========================================================
window.Slide1 = function Slide1({ onNext }) {
  const presentationData = window.PRESENTATION_DATA;
  const Icons = window.Icons;

  return (
    <div className="flex flex-col justify-between h-full p-8 md:p-12">
      {/* Header Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
          <Icons.layers className="w-4 h-4 text-blue-600" />
          <span>Subject: {presentationData.subject}</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium">
          <Icons.book className="w-4 h-4 text-slate-500" />
          <span>Ref: {presentationData.reference}</span>
        </div>
      </div>

      {/* Main Title */}
      <div className="my-auto py-6 max-w-4xl">
        <span className="inline-block text-xs font-semibold text-blue-700 tracking-wider uppercase bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md mb-4">
          Member 1 (Rajat) • Introduction & Case Study
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
          Difference and Application of <br />
          <span className="text-blue-600">White-Box, Black-Box,</span> and <br />
          <span className="text-blue-600">Grey-Box Testing</span>
        </h1>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-9 w-1 rounded-full bg-blue-600"></div>
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Case Study</p>
            <p className="text-lg md:text-xl font-bold text-slate-800">
              React Native / Supabase Demo App
            </p>
          </div>
        </div>
      </div>

      {/* Team Member Cards */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <Icons.users className="w-4 h-4 text-slate-600" /> Project Team Members (4)
          </p>
          <button 
            onClick={onNext}
            className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 transition-colors group"
          >
            <span>Proceed to Problem Statement</span>
            <Icons.arrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {presentationData.members.map((member) => (
            <div 
              key={member.id}
              className={`p-3.5 rounded-xl border transition-all ${
                member.id === 1 
                  ? 'border-blue-500 bg-blue-50/40 shadow-xs' 
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                  member.id === 1 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  {member.id}
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-bold text-slate-900 truncate">{member.name}</p>
                  <p className="text-[11px] text-slate-500 truncate">{member.role}</p>
                </div>
              </div>
              
              <div className="mt-2 text-[10px] font-semibold text-slate-600 bg-slate-100 py-0.5 px-2 rounded border border-slate-200 text-center uppercase tracking-wider">
                {member.id === 1 ? "● Speaking (Slides 1-3)" : member.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ========================================================
// SLIDE 2: INTRODUCTION & PROBLEM STATEMENT (MEMBER 1: RAJAT)
// ========================================================
window.Slide2 = function Slide2() {
  const [showVulnerability, setShowVulnerability] = React.useState(false);
  const Icons = window.Icons;

  const bulletPoints = [
    {
      id: 1,
      icon: Icons.shield,
      title: "Software testing helps identify defects.",
      badge: "Quality & Reliability",
      simpleNote: "Discovers bugs and software flaws before deployment."
    },
    {
      id: 2,
      icon: Icons.alert,
      title: "Applications can have functional, logical, and security issues.",
      badge: "3 Defect Types",
      simpleNote: "Functional (UI errors), Logical (bad calculations), Security (leaks)."
    },
    {
      id: 3,
      icon: Icons.sliders,
      title: "Different testing methods reveal different types of problems.",
      badge: "Method Diversity",
      simpleNote: "Black-box checks UI, White-box checks code, Grey-box tests API integration."
    },
    {
      id: 4,
      icon: Icons.compare,
      title: "The case study compares three testing approaches.",
      badge: "Benchmark Study",
      simpleNote: "Evaluated directly on a real React Native and Supabase application."
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full p-8 md:p-12">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <span>Member 1 (Rajat) • Slide 02</span>
          <span>/</span>
          <span>Problem Statement</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          Introduction and Problem Statement
        </h2>
      </div>

      {/* 4 Clean Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto py-3">
        {bulletPoints.map((item) => {
          const ItemIcon = item.icon;
          return (
            <div 
              key={item.id}
              className="clean-card p-5 rounded-xl border border-slate-200 bg-white"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <ItemIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
                    {item.badge}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 font-medium">
                    {item.simpleNote}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Simulation & Key Takeaways */}
      <div className="space-y-3">
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold ${
              showVulnerability ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
            }`}>
              <Icons.bug className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Concept Demo: Hidden Defects in Production</p>
              <p className="text-xs text-slate-500">
                {showVulnerability 
                  ? "Alert: The UI delete button appears normal, but the database allows anyone to delete other users' comments!" 
                  : "The mobile UI screen looks completely fine. Click test to check if the backend is secure."}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowVulnerability(!showVulnerability)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 transition-all shadow-xs whitespace-nowrap"
          >
            {showVulnerability ? "Reset Inspector" : "Simulate Vulnerability Scan"}
          </button>
        </div>

        {/* Clean Key Takeaways Box */}
        <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 border border-slate-200">
          <div className="flex items-center gap-2 text-blue-900 text-xs font-bold uppercase tracking-wider mb-1.5">
            <Icons.layers className="w-4 h-4 text-blue-600" />
            <span>Key Takeaways</span>
          </div>
          <div className="space-y-1.5 text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
            <p>• Even when an application looks completely fine and opens without errors, it can still have hidden bugs or security problems that users cannot see on the screen.</p>
            <p>• Different testing methods help us find different kinds of issues — black-box checks user screens, white-box checks the written code, and grey-box tests backend connections.</p>
            <p>• The whole purpose of testing is to discover and fix these hidden issues early on so that our real users never experience crashes or data leaks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================================
// SLIDE 3: APPLICATION OVERVIEW & ARCHITECTURE (MEMBER 1: RAJAT)
// ========================================================
window.Slide3 = function Slide3() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [simulating, setSimulating] = React.useState(false);
  const Icons = window.Icons;

  const runFlowAnimation = (type) => {
    if (simulating) return;
    setSimulating(true);
    setActiveStep(1);
    setTimeout(() => setActiveStep(2), 500);
    setTimeout(() => setActiveStep(3), 1000);
    setTimeout(() => setActiveStep(4), 1500);
    setTimeout(() => {
      setActiveStep(0);
      setSimulating(false);
    }, 2800);
  };

  const nodes = [
    {
      id: 1,
      name: "User",
      tech: "Mobile Client",
      role: "Interacts & clicks buttons",
      icon: Icons.user
    },
    {
      id: 2,
      name: "React Native App",
      tech: "Application Interface",
      role: "Frontend UI & Component state",
      icon: Icons.smartphone
    },
    {
      id: 3,
      name: "Supabase",
      tech: "Backend & Auth Services",
      role: "JWT Auth & API Gateways",
      icon: Icons.zap
    },
    {
      id: 4,
      name: "PostgreSQL",
      tech: "Relational Database",
      role: "Stores comments with RLS",
      icon: Icons.database
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full p-8 md:p-12">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <span>Member 1 (Rajat) • Slide 03</span>
          <span>/</span>
          <span>System Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          Application Overview & Architecture
        </h2>
      </div>

      <div className="my-auto py-2">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                System Architecture Data Flow
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">Simulate Action:</span>
              <button
                disabled={simulating}
                onClick={() => runFlowAnimation('auth')}
                className="px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-300 disabled:opacity-50 transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Icons.lock className="w-3.5 h-3.5 text-blue-600" />
                <span>Auth Login</span>
              </button>

              <button
                disabled={simulating}
                onClick={() => runFlowAnimation('comment')}
                className="px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-300 disabled:opacity-50 transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Icons.message className="w-3.5 h-3.5 text-blue-600" />
                <span>Post Comment</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
            {nodes.map((node, index) => {
              const NodeIcon = node.icon;
              const isCurrent = activeStep === node.id;

              return (
                <div key={node.id} className="relative flex flex-col items-center">
                  <div className={`w-full p-4 rounded-xl border transition-all duration-200 ${
                    isCurrent 
                      ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20 shadow-xs' 
                      : 'border-slate-200 bg-white'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold bg-slate-100 text-slate-700">
                        Step 0{node.id}
                      </span>
                      <div className={`p-1.5 rounded-md ${isCurrent ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <NodeIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 truncate">{node.name}</h4>
                    <p className="text-xs text-blue-600 font-semibold">{node.tech}</p>
                    <p className="text-[11px] text-slate-500 mt-1 leading-tight">{node.role}</p>
                  </div>

                  {index < nodes.length - 1 && (
                    <div className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-400">
                      <Icons.arrowRight className={`w-4 h-4 ${activeStep > node.id ? 'text-blue-600' : 'text-slate-300'}`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">Pipeline:</span>
              <span className="text-slate-700 font-medium">User</span>
              <span>→</span>
              <span className="text-blue-600 font-medium">React Native App</span>
              <span>→</span>
              <span className="text-blue-600 font-medium">Supabase</span>
              <span>→</span>
              <span className="text-blue-600 font-medium">PostgreSQL</span>
            </div>
            {simulating && (
              <span className="text-xs text-blue-600 font-semibold animate-pulse">
                Transmitting request across system...
              </span>
            )}
          </div>
        </div>

        {/* 2 Main Functions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
              <Icons.lock className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-slate-900">1. User Authentication</h5>
              <p className="text-xs text-slate-500">Sign-up, sign-in, and JWT session authorization via Supabase Auth.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
              <Icons.message className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-slate-900">2. Comment Management</h5>
              <p className="text-xs text-slate-500">Creating, viewing, and deleting comments with Row-Level Security checks.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 border border-slate-200">
        <div className="flex items-center gap-2 text-blue-900 text-xs font-bold uppercase tracking-wider mb-1.5">
          <Icons.layers className="w-4 h-4 text-blue-600" />
          <span>Key Takeaways</span>
        </div>
        <div className="space-y-1.5 text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
          <p>• The user taps and types on the React Native mobile screen, which acts as the frontend interface for everything the user wants to do.</p>
          <p>• When an action is taken, the app sends a request to Supabase, which checks if the user is logged in and handles the backend communication.</p>
          <p>• Supabase then safely saves and retrieves comments from the PostgreSQL database, giving us a complete application setup to test using all three methods.</p>
        </div>
      </div>
    </div>
  );
};
