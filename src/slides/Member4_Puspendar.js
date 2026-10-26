// ========================================================
// SLIDE 9: WHAT IS GREY-BOX TESTING? (MEMBER 4: PUSPENDAR)
// ========================================================
window.Slide9 = function Slide9() {
  const Icons = window.Icons;

  return (
    <div className="flex flex-col justify-between h-full p-8 md:p-12">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <span>Member 4 (Puspendar) • Slide 09</span>
          <span>/</span>
          <span>Hybrid Testing Method</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          What is Grey-Box Testing?
        </h2>
      </div>

      {/* 3 Clean Concept Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-2">
        <div className="clean-card p-5 rounded-xl border border-slate-200 bg-white">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">
            <Icons.compare className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
            Hybrid Approach
          </span>
          <h3 className="text-base font-bold text-slate-900 mt-2 mb-1">
            Combines external testing with partial internal knowledge.
          </h3>
          <p className="text-xs text-slate-500">Blends user-facing UI actions with backend architectural understanding.</p>
        </div>

        <div className="clean-card p-5 rounded-xl border border-slate-200 bg-white">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">
            <Icons.database className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
            Architectural Clues
          </span>
          <h3 className="text-base font-bold text-slate-900 mt-2 mb-1">
            May use knowledge of APIs, database structure, or security rules.
          </h3>
          <p className="text-xs text-slate-500">Tester knows API endpoints, schema tables, and role policies.</p>
        </div>

        <div className="clean-card p-5 rounded-xl border border-slate-200 bg-white">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">
            <Icons.shield className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
            Target Areas
          </span>
          <h3 className="text-base font-bold text-slate-900 mt-2 mb-1">
            Useful for integration and security testing.
          </h3>
          <p className="text-xs text-slate-500">Finds data leaks, broken permissions, and backend integration issues.</p>
        </div>
      </div>

      {/* Visual Spectrum Comparison */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-3">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            The Testing Spectrum: Where Grey-Box Fits
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-lg bg-white border border-slate-200">
            <span className="text-[10px] font-semibold text-slate-500 uppercase">Black-Box</span>
            <p className="text-xs font-bold text-slate-900 mt-0.5">Zero Code Access</p>
            <p className="text-[11px] text-slate-500">UI / Outside only</p>
          </div>
          <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
            <span className="text-[10px] font-semibold text-blue-700 uppercase">Grey-Box (Hybrid)</span>
            <p className="text-xs font-bold text-blue-900 mt-0.5">Partial Inside Knowledge</p>
            <p className="text-[11px] text-blue-600">API + Database schema</p>
          </div>
          <div className="p-3 rounded-lg bg-white border border-slate-200">
            <span className="text-[10px] font-semibold text-slate-500 uppercase">White-Box</span>
            <p className="text-xs font-bold text-slate-900 mt-0.5">Full Code Access</p>
            <p className="text-[11px] text-slate-500">All logic & branches</p>
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
          <p>• In grey-box testing, the tester does not need full code access, but knows basic things about how the backend and database work.</p>
          <p>• This helps the tester test both the mobile app screens and the backend API data at the exact same time.</p>
          <p>• It is very useful for catching hidden security leaks and database issues that normal users cannot see on the screen.</p>
        </div>
      </div>
    </div>
  );
};

// ========================================================
// SLIDE 10: GREY-BOX TESTING IN THE CASE STUDY (MEMBER 4: PUSPENDAR)
// ========================================================
window.Slide10 = function Slide10() {
  const [testResult, setTestResult] = React.useState(null);
  const Icons = window.Icons;

  const simulateAccessTest = (allowed) => {
    if (allowed) {
      setTestResult({
        type: 'fail',
        title: 'Security Alert: Unauthorized Access Permitted',
        msg: 'User A bypassed client validation and deleted User B comment! (Missing backend RLS rule).'
      });
    } else {
      setTestResult({
        type: 'pass',
        title: 'Success: Row-Level Security Enforced (403 Forbidden)',
        msg: 'Supabase checked JWT token against author_id and safely rejected User A request.'
      });
    }
  };

  const caseActions = [
    {
      id: 1,
      title: "Test access to another user's comments.",
      desc: "Simulate a scenario where User A attempts to view or delete User B's private comments.",
      icon: Icons.user
    },
    {
      id: 2,
      title: "Examine API responses and database permissions.",
      desc: "Directly monitor HTTP status codes (200 OK vs 403 Forbidden) and payload headers.",
      icon: Icons.sliders
    },
    {
      id: 3,
      title: "Check whether Row-Level Security rules prevent unauthorized access.",
      desc: "Verify that PostgreSQL RLS policies block unauthorized queries even if client UI fails.",
      icon: Icons.shield
    },
    {
      id: 4,
      title: "Investigate data-handling and security issues.",
      desc: "Ensure sensitive user tokens, email addresses, and comments are safely isolated.",
      icon: Icons.lock
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full p-8 md:p-12">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <span>Member 4 (Puspendar) • Slide 10</span>
          <span>/</span>
          <span>Security & API Case Study</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          Grey-Box Testing in the Case Study
        </h2>
      </div>

      {/* 4 Clean Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-auto py-2">
        {caseActions.map((item) => {
          const ItemIcon = item.icon;
          return (
            <div key={item.id} className="clean-card p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <ItemIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Simulation: User A attempts to access User B data */}
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-2">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Simulation: User A tries to delete User B's comment via direct API
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => simulateAccessTest(false)}
              className="px-2.5 py-1 text-xs rounded-md bg-white hover:bg-slate-100 text-emerald-700 border border-emerald-300 font-semibold transition-all shadow-xs"
            >
              Test with RLS Protected (Normal)
            </button>
            <button
              onClick={() => simulateAccessTest(true)}
              className="px-2.5 py-1 text-xs rounded-md bg-white hover:bg-slate-100 text-rose-700 border border-rose-300 font-semibold transition-all shadow-xs"
            >
              Test with RLS Missing (Flaw)
            </button>
          </div>
        </div>

        {testResult && (
          <div className={`p-2.5 rounded-lg border text-xs font-medium ${
            testResult.type === 'pass' 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}>
            <strong>{testResult.title}</strong> — {testResult.msg}
          </div>
        )}
      </div>

      {/* Key Takeaways */}
      <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 border border-slate-200">
        <div className="flex items-center gap-2 text-blue-900 text-xs font-bold uppercase tracking-wider mb-1.5">
          <Icons.layers className="w-4 h-4 text-blue-600" />
          <span>Key Takeaways</span>
        </div>
        <div className="space-y-1.5 text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
          <p>• If User A tries to delete User B's comments, grey-box testing checks whether the Supabase backend blocks this bad action.</p>
          <p>• Even if the mobile screen hides the delete button, someone could still send a direct API call, so backend rules must block it.</p>
          <p>• This shows why we must test backend security rules and cannot just rely on what looks safe on the mobile screen.</p>
        </div>
      </div>
    </div>
  );
};

// ========================================================
// SLIDE 11: COMPARISON OF ALL THREE METHODS (MEMBER 1: RAJAT)
// ========================================================
window.Slide11 = function Slide11() {
  const Icons = window.Icons;

  const comparisonData = [
    {
      method: "Black-box",
      focus: "External behaviour",
      view: "No code access (User perspective)",
      finds: "Visible UI errors, broken flows, and usability defects",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-200"
    },
    {
      method: "White-box",
      focus: "Internal code",
      view: "Full code access (Developer perspective)",
      finds: "Faulty logic branches, dead code, and memory leaks",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-200"
    },
    {
      method: "Grey-box",
      focus: "Partial internal knowledge",
      view: "Hybrid view (API & database schema)",
      finds: "Unauthorized data access, broken API permissions, and integration flaws",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full p-8 md:p-12">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <span>Member 1 (Rajat) • Slide 11</span>
          <span>/</span>
          <span>Synthesis & Comparison</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          Comparison of All Three Methods
        </h2>
      </div>

      {/* Comparison Table */}
      <div className="my-auto py-2">
        <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-700 uppercase">
              <tr>
                <th className="py-3 px-6">Method</th>
                <th className="py-3 px-6">Main Focus</th>
                <th className="py-3 px-6">Perspective / Access</th>
                <th className="py-3 px-6">What It Detects Best</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${row.badgeColor}`}>
                      {row.method}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-900 font-semibold">
                    {row.focus}
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-500 font-medium">
                    {row.view}
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-700 font-medium">
                    {row.finds}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 border border-slate-200">
        <div className="flex items-center gap-2 text-blue-900 text-xs font-bold uppercase tracking-wider mb-1.5">
          <Icons.layers className="w-4 h-4 text-blue-600" />
          <span>Key Takeaways</span>
        </div>
        <div className="space-y-1.5 text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
          <p>• Black-box testing checks the user screens, white-box testing checks the code, and grey-box testing checks the APIs and security rules.</p>
          <p>• Each testing approach has its own job and strengths, which is why real software teams use all three methods together.</p>
          <p>• Using all three methods together helps find bugs everywhere from the mobile screen down to the database.</p>
        </div>
      </div>
    </div>
  );
};

// ========================================================
// SLIDE 12: RESULTS, LIMITATIONS AND CONCLUSION (MEMBER 1: RAJAT)
// ========================================================
window.Slide12 = function Slide12() {
  const Icons = window.Icons;

  const conclusionCards = [
    {
      id: 1,
      title: "No single testing method finds every type of defect.",
      desc: "Each method is tailored to specific layers — UI for black-box, code for white-box, and API permissions for grey-box.",
      icon: Icons.shield
    },
    {
      id: 2,
      title: "Combining testing methods gives broader coverage.",
      desc: "Layering all three approaches ensures high functional reliability, code efficiency, and airtight backend security.",
      icon: Icons.compare
    },
    {
      id: 3,
      title: "The paper evaluates one demo application.",
      desc: "Case study focus is on a simplified React Native and Supabase app rather than a massive enterprise ecosystem.",
      icon: Icons.smartphone
    },
    {
      id: 4,
      title: "Its evaluation is manual and lacks quantitative performance metrics.",
      desc: "Tests were carried out manually without automated benchmarking tools, stress tests, or load metrics.",
      icon: Icons.sliders
    },
    {
      id: 5,
      title: "Future work could include automated testing and broader evaluation.",
      desc: "Integrating CI/CD pipelines, automated Jest unit tests, and performance load tools on larger apps.",
      icon: Icons.zap
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full p-8 md:p-12">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <span>Member 1 (Rajat) • Slide 12</span>
          <span>/</span>
          <span>Final Conclusion</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          Results, Limitations and Conclusion
        </h2>
      </div>

      {/* 5 Conclusion Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 my-auto py-2">
        {conclusionCards.map((card) => {
          const CardIcon = card.icon;
          return (
            <div key={card.id} className="clean-card p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <CardIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-500 font-medium leading-relaxed">
                    {card.desc}
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
          <p>• The biggest lesson is that software testing works best when all three testing methods are used together to help each other.</p>
          <p>• This research paper tested a small demo app with manual steps, so more testing on bigger apps is still needed.</p>
          <p>• In the future, teams can add automatic testing tools and speed tests to check how apps run under heavy traffic.</p>
        </div>
      </div>
    </div>
  );
};
