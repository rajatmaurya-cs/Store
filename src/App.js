// Main App Controller - Clean & Professional Presentation UI
window.App = function App() {
  const { useState, useEffect } = React;
  const Icons = window.Icons;
  const PRESENTATION_DATA = window.PRESENTATION_DATA;

  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 12;
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSecondsElapsed(sec => sec + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(s => s + 1);
      if (!isTimerRunning) setIsTimerRunning(true);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(s => s - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentSpeaker = currentSlide <= 3 
    ? { name: "Rajat", role: "Member 1 (Intro & Architecture)" }
    : currentSlide <= 6 
      ? { name: "Priyanshu Tewatiya", role: "Member 2 (Black-Box Testing)" }
      : currentSlide <= 8
        ? { name: "Sahil Kumar", role: "Member 3 (White-Box Testing)" }
        : currentSlide <= 10
          ? { name: "Puspendar Chauhan", role: "Member 4 (Grey-Box Testing)" }
          : { name: "Rajat", role: "Member 1 (Comparison & Conclusion)" };

  return (
    <div className="min-h-screen flex flex-col justify-between p-3 md:p-6 bg-slate-50 text-slate-900 select-none">
      {/* Top Professional Header */}
      <header className="bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center justify-between mb-4 shadow-sm z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-wider">
            SE
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900 tracking-tight">Software Engineering</span>
              <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                React Native / Supabase
              </span>
            </div>
            <p className="text-xs text-slate-600 font-medium mt-0.5">
              Speaker: <strong className="text-blue-600 font-semibold">{currentSpeaker.name}</strong> • <span className="text-slate-500">{currentSpeaker.role}</span>
            </p>
          </div>
        </div>

        {/* Slide Navigation Tabs & Controls */}
        <div className="flex items-center gap-2">
          {/* Timer */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
            <button 
              onClick={() => setIsTimerRunning(!isTimerRunning)} 
              className="text-slate-600 hover:text-blue-600 transition-colors"
              title={isTimerRunning ? "Pause Timer" : "Start Timer"}
            >
              {isTimerRunning ? <Icons.pause /> : <Icons.play />}
            </button>
            <span className="font-semibold">{formatTimer(secondsElapsed)}</span>
            <button 
              onClick={() => { setSecondsElapsed(0); setIsTimerRunning(false); }} 
              className="text-slate-400 hover:text-rose-600 transition-colors ml-1"
              title="Reset Timer"
            >
              <Icons.rotate />
            </button>
          </div>

          {/* Clean Segmented Tab Buttons */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 overflow-x-auto max-w-[540px]">
            {PRESENTATION_DATA.slideTabs.map((s) => (
              <button
                key={s.num}
                onClick={() => setCurrentSlide(s.num)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all whitespace-nowrap ${
                  currentSlide === s.num
                    ? 'bg-white text-slate-900 shadow-sm font-bold border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
            title="Fullscreen (F)"
          >
            <Icons.maximize />
          </button>
        </div>
      </header>

      {/* Main Slide Presentation Stage (Clean White Canvas) */}
      <main className="flex-1 slide-container rounded-2xl relative z-10 flex flex-col justify-center overflow-hidden min-h-[580px] bg-white">
        {currentSlide === 1 && <window.Slide1 onNext={nextSlide} />}
        {currentSlide === 2 && <window.Slide2 />}
        {currentSlide === 3 && <window.Slide3 />}
        {currentSlide === 4 && <window.Slide4 />}
        {currentSlide === 5 && <window.Slide5 />}
        {currentSlide === 6 && <window.Slide6 />}
        {currentSlide === 7 && <window.Slide7 />}
        {currentSlide === 8 && <window.Slide8 />}
        {currentSlide === 9 && <window.Slide9 />}
        {currentSlide === 10 && <window.Slide10 />}
        {currentSlide === 11 && <window.Slide11 />}
        {currentSlide === 12 && <window.Slide12 />}
      </main>

      {/* Clean Bottom Footer */}
      <footer className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 z-20">
        <div className="w-full sm:w-1/3 flex items-center gap-3">
          <span className="font-medium text-slate-600 text-xs">
            Slide {currentSlide} of {totalSlides}
          </span>
          <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
          <span>Navigate using</span>
          <kbd className="px-1.5 py-0.5 rounded bg-white text-slate-700 border border-slate-300 shadow-xs font-sans text-[11px]">←</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-white text-slate-700 border border-slate-300 shadow-xs font-sans text-[11px]">→</kbd>
          <span>or</span>
          <kbd className="px-1.5 py-0.5 rounded bg-white text-slate-700 border border-slate-300 shadow-xs font-sans text-[11px]">Space</kbd>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="px-4 py-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-medium flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs"
          >
            <Icons.arrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <span>{currentSlide === totalSlides ? "Presentation Complete ✓" : (currentSlide === 3 ? "Next: Member 2 →" : (currentSlide === 6 ? "Next: Member 3 →" : (currentSlide === 8 ? "Next: Member 4 →" : (currentSlide === 10 ? "Next: Rajat (Conclusion) →" : "Next Slide"))))}</span>
            <Icons.arrowRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
};
