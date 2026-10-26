// ========================================================
// SLIDE 4: WHAT IS BLACK-BOX TESTING? (MEMBER 2: PRIYANSHU)
// ========================================================
window.Slide4 = function Slide4() {
  const [boxInput, setBoxInput] = React.useState({ label: 'Valid credentials', output: 'User logged in (Token generated)' });
  const Icons = window.Icons;

  const testScenarios = [
    { label: 'Valid credentials', output: 'User logged in (Token generated)' },
    { label: 'Post new comment', output: 'Comment appears in list' },
    { label: 'Wrong password', output: 'Error: Invalid login credentials' }
  ];

  return (
    <div className="flex flex-col justify-between h-full p-8 md:p-12">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <span>Member 2 (Priyanshu) • Slide 04</span>
          <span>/</span>
          <span>Testing Method</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          What is Black-Box Testing?
        </h2>
      </div>

      {/* 3 Clean Concept Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-2">
        <div className="clean-card p-5 rounded-xl border border-slate-200 bg-white">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">
            <Icons.shield className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
            No Code Access
          </span>
          <h3 className="text-base font-bold text-slate-900 mt-2 mb-1">
            Tests application functionality without examining internal source code.
          </h3>
          <p className="text-xs text-slate-500">Internal code structure remains completely unknown to the tester.</p>
        </div>

        <div className="clean-card p-5 rounded-xl border border-slate-200 bg-white">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">
            <Icons.sliders className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
            Inputs & Outputs
          </span>
          <h3 className="text-base font-bold text-slate-900 mt-2 mb-1">
            Focuses on inputs and outputs.
          </h3>
          <p className="text-xs text-slate-500">Provide input, observe output, and check if it behaves as expected.</p>
        </div>

        <div className="clean-card p-5 rounded-xl border border-slate-200 bg-white">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold mb-3">
            <Icons.compare className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
            Expected Behavior
          </span>
          <h3 className="text-base font-bold text-slate-900 mt-2 mb-1">
            Checks whether the application behaves as expected.
          </h3>
          <p className="text-xs text-slate-500">Matches user experience against defined functional requirements.</p>
        </div>
      </div>

      {/* Interactive Demonstration */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-3">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Interactive Model: Testing the "Black Box"
          </span>
          <span className="text-xs text-slate-500">Select an input:</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          <div className="space-y-1.5">
            <p className="text-xs font-semibold text-slate-700">1. User Input</p>
            <div className="flex flex-wrap gap-1.5">
              {testScenarios.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setBoxInput(item)}
                  className={`px-2.5 py-1 text-xs rounded-md border font-medium transition-all ${
                    boxInput.label === item.label
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800 text-white text-center border border-slate-700">
            <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Opaque System</div>
            <div className="text-xs font-bold mt-0.5">Black Box (Internal Code Hidden)</div>
            <div className="text-[10px] text-slate-400">Tester cannot inspect backend logic</div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200">
            <p className="text-xs font-semibold text-slate-700">2. Observed Output</p>
            <p className="text-xs font-bold text-slate-900 mt-1">
              {boxInput.output}
            </p>
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
          <p>• In black-box testing, a tester uses the app just like a normal everyday user, typing in data and checking what appears on the screen without looking at any backend code.</p>
          <p>• The whole focus is simply on inputs and outputs, meaning we give the app some information and check whether the result matches what we expected.</p>
          <p>• The tester does not need to know how the programming code is written inside because the inner system is treated like a closed box that cannot be seen.</p>
        </div>
      </div>
    </div>
  );
};

// ========================================================
// SLIDE 5: BLACK-BOX TESTING IN THE CASE STUDY (MEMBER 2: PRIYANSHU)
// ========================================================
window.Slide5 = function Slide5() {
  const Icons = window.Icons;

  const caseTests = [
    {
      id: 1,
      title: 'Test user registration and login.',
      desc: 'Verify that valid users can sign up and log into their accounts smoothly.',
      icon: Icons.user
    },
    {
      id: 2,
      title: 'Create a comment and verify that it appears.',
      desc: 'Type comment text, tap submit, and check that it instantly appears in the feed.',
      icon: Icons.message
    },
    {
      id: 3,
      title: 'Delete a comment and check that it disappears.',
      desc: 'Tap delete icon and confirm that the comment is removed from the screen.',
      icon: Icons.alert
    },
    {
      id: 4,
      title: 'Test invalid inputs and error messages.',
      desc: 'Enter blank fields or invalid passwords and ensure helpful error alerts show.',
      icon: Icons.shield
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full p-8 md:p-12">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <span>Member 2 (Priyanshu) • Slide 05</span>
          <span>/</span>
          <span>Case Study Application</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          Black-Box Testing in the Case Study
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto py-3">
        {caseTests.map((t) => {
          const ActionIcon = t.icon;
          return (
            <div key={t.id} className="clean-card p-5 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <ActionIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
                    Test Scenario 0{t.id}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1.5 leading-snug">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 font-medium">
                    {t.desc}
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
          <p>• In our demo app, the tester tests real actions on the mobile screen, like typing an email to log in and seeing if the home screen opens up successfully.</p>
          <p>• For comments, the tester adds a new comment to see if it immediately shows up in the list, and taps delete to confirm it gets removed from the view.</p>
          <p>• These tests help us confirm that the main features work properly for normal users without needing to open up or edit the application code.</p>
        </div>
      </div>
    </div>
  );
};

// ========================================================
// SLIDE 6: BLACK-BOX TEST CASES & FINDINGS (MEMBER 2: PRIYANSHU)
// ========================================================
window.Slide6 = function Slide6() {
  const Icons = window.Icons;

  const tableData = [
    { test: 'Valid login', expected: 'User signs in', status: 'Passed' },
    { test: 'Create comment', expected: 'Comment appears', status: 'Passed' },
    { test: 'Delete comment', expected: 'Comment disappears', status: 'Passed' },
    { test: 'Invalid login', expected: 'Error or rejection', status: 'Passed' }
  ];

  return (
    <div className="flex flex-col justify-between h-full p-8 md:p-12">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          <span>Member 2 (Priyanshu) • Slide 06</span>
          <span>/</span>
          <span>Test Matrix & Findings</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          Black-Box Test Cases and Findings
        </h2>
      </div>

      {/* Clean Light Table */}
      <div className="my-auto py-2">
        <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-700 uppercase">
              <tr>
                <th className="py-3 px-6">Test</th>
                <th className="py-3 px-6">Expected Result</th>
                <th className="py-3 px-6 text-right">Observation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-6 font-semibold text-slate-900">
                    {row.test}
                  </td>
                  <td className="py-3.5 px-6 text-slate-600">
                    {row.expected}
                  </td>
                  <td className="py-3.5 px-6 text-right">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      ✓ {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Limitation Box */}
        <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 font-bold">
            <Icons.alert className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            <strong>Key Finding:</strong> Black-box testing validates what works on the UI, but it cannot detect internal vulnerabilities like unhandled exceptions, unused functions, or insecure database configurations.
          </p>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-600 border border-slate-200">
        <div className="flex items-center gap-2 text-blue-900 text-xs font-bold uppercase tracking-wider mb-1.5">
          <Icons.layers className="w-4 h-4 text-blue-600" />
          <span>Key Takeaways</span>
        </div>
        <div className="space-y-1.5 text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
          <p>• Black-box testing is great for finding buttons that do not work, incorrect error alerts, and design problems that any normal user would see.</p>
          <p>• All our standard user actions like signing in, adding comments, and deleting comments passed their checks and behaved exactly as expected.</p>
          <p>• However, black-box testing cannot see hidden problems inside the code, such as unused functions or security loopholes in the backend database.</p>
        </div>
      </div>
    </div>
  );
};
