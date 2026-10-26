// ========================================================
// SLIDE 7: WHAT IS WHITE-BOX TESTING? (MEMBER 3: SAHIL KUMAR)
// ========================================================
window.Slide7 = function Slide7() {
  const [selectedBranch, setSelectedBranch] = React.useState('if_true');
  const Icons = window.Icons;

  return (
    <div className="flex flex-col justify-between h-full p-8 md:p-12">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <span>Member 3 (Sahil Kumar) • Slide 07</span>
          <span>/</span>
          <span>Code Logic Testing</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          What is White-Box Testing?
        </h2>
      </div>

      {/* 3 Clean Concept Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-2">
        <div className="clean-card p-5 rounded-xl border border-slate-200 bg-white">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">
            <Icons.layers className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
            Internal Inspection
          </span>
          <h3 className="text-base font-bold text-slate-900 mt-2 mb-1">
            Examines internal source code and logic.
          </h3>
          <p className="text-xs text-slate-500">Tester looks directly inside functions, algorithms, and statements.</p>
        </div>

        <div className="clean-card p-5 rounded-xl border border-slate-200 bg-white">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">
            <Icons.sliders className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
            Execution Paths
          </span>
          <h3 className="text-base font-bold text-slate-900 mt-2 mb-1">
            Checks conditions, branches, and execution paths.
          </h3>
          <p className="text-xs text-slate-500">Tests every if-else statement, loop, and logical condition.</p>
        </div>

        <div className="clean-card p-5 rounded-xl border border-slate-200 bg-white">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">
            <Icons.book className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
            Full Knowledge
          </span>
          <h3 className="text-base font-bold text-slate-900 mt-2 mb-1">
            Requires knowledge of the program's implementation.
          </h3>
          <p className="text-xs text-slate-500">Tester must understand the programming language and structure.</p>
        </div>
      </div>

      {/* Interactive Code Logic Inspector */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-3">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Interactive Logic Inspection: Transparent "White Box"
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedBranch('if_true')}
              className={`px-2.5 py-1 text-xs rounded-md border font-medium transition-all ${
                selectedBranch === 'if_true' 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs' 
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              Test Branch A (Authorized)
            </button>
            <button
              onClick={() => setSelectedBranch('if_false')}
              className={`px-2.5 py-1 text-xs rounded-md border font-medium transition-all ${
                selectedBranch === 'if_false' 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs' 
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              Test Branch B (Unauthorized)
            </button>
          </div>
        </div>

        {/* Clean Code Viewer Box */}
        <div className="p-3.5 rounded-xl bg-slate-900 font-mono text-xs text-slate-200 border border-slate-800">
          <div className="text-slate-500">// White-box tester inspects deleteComment() execution branch</div>
          <div className="mt-1">
            <span className="text-purple-400">function</span> <span className="text-blue-300">deleteComment</span>(commentId, userId) &#123;
          </div>
          <div className={`pl-4 py-0.5 rounded transition-colors ${selectedBranch === 'if_true' ? 'bg-blue-900/40 text-blue-300 font-semibold' : ''}`}>
            &nbsp;&nbsp;<span className="text-purple-400">if</span> (comment.author_id === userId) &#123; <span className="text-emerald-400">// Path Covered: Authorized delete allowed</span>
          </div>
          <div className={`pl-4 py-0.5 rounded transition-colors ${selectedBranch === 'if_false' ? 'bg-rose-900/40 text-rose-300 font-semibold' : ''}`}>
            &nbsp;&nbsp;&#125; <span className="text-purple-400">else</span> &#123; <span className="text-rose-400">// Path Covered: Block unauthorized delete</span>
          </div>
          <div>&nbsp;&nbsp;&#125;</div>
          <div>&#125;</div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 border border-slate-200">
        <div className="flex items-center gap-2 text-blue-900 text-xs font-bold uppercase tracking-wider mb-1.5">
          <Icons.layers className="w-4 h-4 text-blue-600" />
          <span>Key Takeaways</span>
        </div>
        <div className="space-y-1.5 text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
          <p>• Unlike black-box testing where the code is invisible, white-box testing looks directly into the inner source code to see exactly how functions work behind the scenes.</p>
          <p>• The tester inspects every logical condition, loop, and if-else branch to verify that all possible paths in the software execute correctly and safely.</p>
          <p>• By examining the internal program logic, a tester can easily identify faulty calculations, missing validation checks, and unused functions that never get called.</p>
        </div>
      </div>
    </div>
  );
};

// ========================================================
// SLIDE 8: WHITE-BOX TESTING IN THE CASE STUDY (MEMBER 3: SAHIL KUMAR)
// ========================================================
window.Slide8 = function Slide8() {
  const Icons = window.Icons;

  const casePoints = [
    {
      id: 1,
      title: "Examine comment-handling functions.",
      badge: "CRUD Logic",
      icon: Icons.message,
      desc: "Inspect functions that create, fetch, and delete comments to ensure they handle parameters properly."
    },
    {
      id: 2,
      title: "Check authentication and authorization logic.",
      badge: "Security Logic",
      icon: Icons.lock,
      desc: "Verify that the code checks the logged-in user's identity before allowing them to delete or edit a comment."
    },
    {
      id: 3,
      title: "Inspect database operations and connections.",
      badge: "Database Layer",
      icon: Icons.database,
      desc: "Ensure Supabase queries are properly structured and database connections are safely handled and isolated."
    },
    {
      id: 4,
      title: "Identify unused functions and internal defects.",
      badge: "Code Quality",
      icon: Icons.bug,
      desc: "Locate dead code, leftover test functions, and unhandled error cases that black-box testing cannot see."
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full p-8 md:p-12">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <span>Member 3 (Sahil Kumar) • Slide 08</span>
          <span>/</span>
          <span>Case Study Application</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          White-Box Testing in the Case Study
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto py-3">
        {casePoints.map((item) => {
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
                  <p className="mt-1 text-xs text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Key Takeaways */}
      <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 border border-slate-200">
        <div className="flex items-center gap-2 text-blue-900 text-xs font-bold uppercase tracking-wider mb-1.5">
          <Icons.layers className="w-4 h-4 text-blue-600" />
          <span>Key Takeaways</span>
        </div>
        <div className="space-y-1.5 text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
          <p>• In our React Native and Supabase case study, the tester inspects the actual code to make sure a comment can only be deleted by the person who created it.</p>
          <p>• By reading through the code directly, white-box testing uncovers hidden bugs like unisolated database queries that might slow down the database or cause memory issues.</p>
          <p>• It also identifies dead code and unused functions left behind by developers, helping clean up and secure the application before release.</p>
        </div>
      </div>
    </div>
  );
};
