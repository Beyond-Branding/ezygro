import React, { useState, useEffect } from "react";

const ComingSoonPage = ({ onLaunch }: { onLaunch: () => void }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Set target date (30 days from now)
    const targetDate = new Date("2025-07-06T11:30:00+05:30");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        onLaunch();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main heading */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            We Are
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-6">
              Coming Soon
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Something extraordinary is on the horizon. Get ready to experience
            innovation like never before.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12 animate-slide-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-slate-300 text-sm md:text-base uppercase tracking-wider">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          
          .animate-slide-up {
            animation: slide-up 1s ease-out 0.3s both;
          }
          
          .animate-fade-in-delay {
            animation: fade-in 1s ease-out 0.6s both;
          }
          
          .animate-fade-in-delay-2 {
            animation: fade-in 1s ease-out 0.9s both;
          }
        `,
        }}
      />
    </div>
  );
};

export default ComingSoonPage;
