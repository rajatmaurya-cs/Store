## 📁 Project Structure (Modular per Member)

The project is cleanly separated by files for each member:

```
SE/
├── index.html                   # Clean entry point
├── offline.html                 # 100% offline backup
├── serve.py                     # Optional 1-click preview server
└── src/
    ├── App.js                   # Presentation Controller & Navigation
    ├── data/
    │   └── presentationData.js  # Presentation metadata & member info
    ├── components/
    │   └── Icons.js             # SVG icons
    └── slides/
        ├── Member1_Rajat.js     # Slides 1, 2, 3 (Intro & Architecture)
        ├── Member2_Priyanshu.js # Slides 4, 5, 6 (Black-Box Testing)
        ├── Member3_Sahil.js     # Prepared for Member 3 (White-Box)
        └── Member4_Puspendar.js # Prepared for Member 4 (Grey-Box)
```

Now each member has their own dedicated slide file, making it very easy to edit, debug, and expand.

---

## 🚀 How to Open the Presentation

You have two instant options:

### Option 1: Direct Double Click (Fastest)
- Double click [`index.html`](file:///Users/rajatmaurya/Downloads/SE/index.html) in your file manager or browser.
- Or open terminal in this folder and run:
  ```bash
  open index.html
  ```

### Option 2: Local Web Server
- Run the included python server:
  ```bash
  python3 serve.py
  ```
- Opens automatically at `http://localhost:3000/index.html`.

*(Note: We have also included [`offline.html`](file:///Users/rajatmaurya/Downloads/SE/offline.html) which works 100% offline with zero internet needed, perfect if classroom Wi-Fi is down).*

---

## 🎯 Member 1 Presentation Points (Short & Easy)

### Slide 1: Title Slide
* **On Screen:** Title, Case Study badge, 4 team members, Subject & IJISE reference.
* **To Say:**
  > • Good morning everyone, we are presenting White-Box, Black-Box, and Grey-Box testing.  
  > • Our case study is a full-stack React Native and Supabase app.  
  > • I am Rajat, presenting Member 1's section.

### Slide 2: Introduction & Problem Statement
* **On Screen:** 4 core bullet cards + interactive scan.
* **Key Takeaways:**
  > • An app can look fine outside, but still have hidden bugs and security leaks.  
  > • Black-box tests UI, White-box tests code, and Grey-box tests API integration.  
  > • Testing finds and fixes defects before real users face problems.

### Slide 3: Application Overview & Architecture
* **On Screen:** Interactive pipeline (`User → React Native App → Supabase → PostgreSQL`) + Main functions.
* **Key Takeaways:**
  > • User taps the React Native mobile app.  
  > • App talks to Supabase for login and API calls.  
  > • Supabase saves and fetches data from PostgreSQL database.

---

## 🎯 Member 2 Presentation Points (Priyanshu Tewatiya)

### Slide 4: What is Black-Box Testing?
* **On Screen:** 3 core concept cards + live interactive black-box model simulator.
  - Tests application functionality without examining internal source code.
  - Focuses on inputs and outputs.
  - Checks whether the application behaves as expected.
* **Key Takeaways:**
  > • A tester uses the application like an ordinary user.  
  > • They provide inputs and check results without needing to know internal code.  
  > • Tests external behavior and user-facing features.

### Slide 5: Black-Box Testing in the Case Study
* **On Screen:** 4 test action cards.
  - Test user registration and login.
  - Create a comment and verify that it appears.
  - Delete a comment and check that it disappears.
  - Test invalid inputs and error messages.
* **Key Takeaways:**
  > • The tester checks observable results on the mobile screen.  
  > • For example, after creating a comment, verify that it appears in the list.  
  > • These are illustrative test cases showing practical testing in our demo app.

### Slide 6: Black-Box Test Cases & Findings
* **On Screen:** Clean Test Matrix Table + Key Finding box.
  | Test | Expected Result | Status |
  |---|---|---|
  | Valid login | User signs in | ✓ Passed |
  | Create comment | Comment appears | ✓ Passed |
  | Delete comment | Comment disappears | ✓ Passed |
  | Invalid login | Error or rejection | ✓ Passed |
* **Key Takeaways:**
  > • Black-box testing is great for finding buttons that do not work, incorrect error alerts, and design problems that any normal user would see.  
  > • All our standard user actions like signing in, adding comments, and deleting comments passed their checks and behaved exactly as expected.  
  > • However, black-box testing cannot see hidden problems inside the code, such as unused functions or security loopholes in the backend database.

---

## 🎯 Member 3 Presentation Points (Sahil Kumar)

### Slide 7: What is White-Box Testing?
* **On Screen:** 3 core concept cards + live interactive branch visualizer.
  - Examines internal source code and logic.
  - Checks conditions, branches, and execution paths.
  - Requires knowledge of the program's implementation.
* **Key Takeaways:**
  > • Unlike black-box testing where the code is invisible, white-box testing looks directly into the inner source code to see exactly how functions work behind the scenes.  
  > • The tester inspects every logical condition, loop, and if-else branch to verify that all possible paths in the software execute correctly and safely.  
  > • By examining the internal program logic, a tester can easily identify faulty calculations, missing validation checks, and unused functions that never get called.

### Slide 8: White-Box Testing in the Case Study
* **On Screen:** 4 area inspection cards.
  - Examine comment-handling functions.
  - Check authentication and authorization logic.
  - Inspect database operations and connections.
  - Identify unused functions and internal defects.
* **Key Takeaways:**
  > • In our React Native and Supabase case study, the tester inspects the actual code to make sure a comment can only be deleted by the person who created it.  
  > • By reading through the code directly, white-box testing uncovers hidden bugs like unisolated database queries that might slow down the database or cause memory issues.  
  > • It also identifies dead code and unused functions left behind by developers, helping clean up and secure the application before release.

---

## 🎯 Member 4 Presentation Points (Puspendar Chauhan)

### Slide 9: What is Grey-Box Testing?
* **On Screen:** 3 core concept cards + Visual Spectrum Comparison.
  - Combines external testing with partial internal knowledge.
  - May use knowledge of APIs, database structure, or security rules.
  - Useful for integration and security testing.
* **Key Takeaways:**
  > • In grey-box testing, the tester does not need to read every single line of code, but they know important design details like API routes and database tables.  
  > • Having this partial knowledge allows the tester to craft smarter test cases that target backend data exchange and user permissions instead of just clicking buttons.  
  > • This technique is especially powerful for catching security flaws and integration errors that look completely normal on the user interface but fail behind the scenes.

### Slide 10: Grey-Box Testing in the Case Study
* **On Screen:** 4 test action cards + Interactive RLS Simulation (User A attempts to delete User B's comment).
  - Test access to another user's comments.
  - Examine API responses and database permissions.
  - Check whether Row-Level Security rules prevent unauthorized access.
  - Investigate data-handling and security issues.
* **Key Takeaways:**
  > • If User A tries to delete a comment created by User B, the tester uses grey-box testing to check if the backend API correctly blocks the unauthorized attempt.  
  > • Even if the mobile app UI does not show a delete button, a malicious user could still make a direct API call, so testing must verify that the database rules reject it.  
  > • This clearly proves that software testing cannot rely only on the visible user interface and must verify backend security permissions directly.

### Slide 11: Comparison of All Three Methods
* **On Screen:** Comparison Table across Black-Box, White-Box, and Grey-Box.
  | Method | Main Focus | Perspective | What It Detects Best |
  |---|---|---|---|
  | Black-box | External behaviour | No code access | Visible UI defects & user workflows |
  | White-box | Internal code | Full code access | Logic branches, dead code, memory leaks |
  | Grey-box | Partial internal knowledge | Hybrid view (API & schema) | Unauthorized access & integration security |
* **Key Takeaways:**
  > • Black-box testing ensures the app runs smoothly and looks right for users, while white-box testing verifies that the inner lines of code are written cleanly and without errors.  
  > • Grey-box testing fills the gap in between by testing APIs and database rules using partial knowledge of the system design.  
  > • Each testing method has its own unique strengths, which is why engineering teams use all three together rather than picking just one.

### Slide 12: Results, Limitations and Conclusion
* **On Screen:** 5 takeaway cards + Thank You / Q&A Card.
  - No single testing method finds every type of defect.
  - Combining testing methods gives broader coverage.
  - The paper evaluates one demo application.
  - Its evaluation is manual and lacks quantitative performance metrics.
  - Future work could include automated testing and broader evaluation.
* **Key Takeaways:**
  > • The biggest takeaway is that overall software quality improves most when black-box, white-box, and grey-box testing are combined together to support each other.  
  > • Because this research study evaluated a single demo app with manual testing, the results should be taken as a helpful guide rather than a universal rule for every company.  
  > • In future projects, adding automated tests and measuring system performance under heavy load would provide even deeper insights into software reliability.  
  > *(End by thanking the audience and opening the floor for questions).*

---

## ⌨️ Controls & Shortcuts
- `→` or `Space` : Next slide
- `←` : Previous slide
- `F` : Toggle Fullscreen mode
- Top bar has a live presentation timer (start/pause/reset) to keep track of speech time.
