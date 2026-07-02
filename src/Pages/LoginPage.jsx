import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight, Building2, Users, User, BarChart3, ClipboardList } from "lucide-react";
 
const DEMO_PROFILES = [
  {
    role: "Company Admin",
    email: "admin@dms.com",
    icon: Building2,
    iconBg: "bg-emerald-600",
    cardBg: "bg-emerald-50",
    cardBorder: "border-emerald-100",
    textColor: "text-emerald-700",
  },
  {
    role: "Manager",
    email: "manager@dms.com",
    icon: Users,
    iconBg: "bg-purple-600",
    cardBg: "bg-purple-50",
    cardBorder: "border-purple-100",
    textColor: "text-purple-700",
  },
  {
    role: "Viewer",
    email: "Viewer@dms.com",
    icon: User,
    iconBg: "bg-orange-500",
    cardBg: "bg-orange-50",
    cardBorder: "border-orange-100",
    textColor: "text-orange-700",
  },
];
 
export default function DMSSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 
  const handleQuickLogin = (profileEmail, profileRole) => {
    setEmail(profileEmail);
    setPassword("demopassword");

    if (profileRole === "Company Admin") {
      navigate("/admin/user-management");
    }
    if(profileRole === "Manager") {
      navigate("/manager/dashboard");
    }
    if(profileRole === "Viewer") {
      navigate("/viewer/dashboard");
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your auth logic.
    console.log("Sign in with", { email, password });
  };
 
  return (
<div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center px-4 py-12">
      {/* Decorative dot grids */}
<div
        className="hidden md:block absolute top-40 left-10 w-36 h-36 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #93c5fd 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />
<div
        className="hidden md:block absolute bottom-24 right-10 w-40 h-40 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #93c5fd 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />
 
      {/* Decorative wave at bottom */}
<div className="absolute bottom-0 left-0 right-0 pointer-events-none">
<svg
          viewBox="0 0 1440 200"
          className="w-full h-32 md:h-40"
          preserveAspectRatio="none"
>
<path
            d="M0,120 C240,180 480,60 720,90 C960,120 1200,180 1440,110 L1440,200 L0,200 Z"
            fill="#bfdbfe"
            opacity="0.7"
          />
</svg>
</div>
 
      <div className="relative z-10 w-full max-w-xl">
        {/* Header */}
<div className="text-center mb-8">
<div className="flex items-center justify-center gap-3 mb-1">
<div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
<svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none">
<path
                  d="M4 8c0-1.1.9-2 2-2h3l1.5 1.5H18a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
                  fill="currentColor"
                />
<path
                  d="M10 8l2 2 2-2"
                  stroke="#2563eb"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
</svg>
</div>
<div className="text-left">
<h1 className="text-4xl font-extrabold text-slate-900 leading-none">
                DMS
</h1>
<p className="text-sm text-slate-500 mt-1">
                Document Management System
</p>
</div>
</div>
<p className="text-blue-700 mt-4 text-base">
            Secure. Organized. Accessible.
<br />
            All Your Documents, One Place.
</p>
</div>
 
        {/* Card */}
<div className="bg-white rounded-2xl shadow-xl shadow-blue-900/10 border border-slate-100 p-8 sm:p-10">
<h2 className="text-2xl font-bold text-slate-900">Sign In</h2>
<p className="text-slate-500 text-sm mt-1 mb-6">
            Enter your details or select a quick-login profile below
</p>
 
          <form onSubmit={handleSubmit} className="space-y-5">
<div>
<label className="block text-sm font-semibold text-slate-800 mb-1.5">
                Email Address
</label>
<div className="relative">
<Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
<input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-slate-800 placeholder:text-slate-400 transition"
                />
</div>
</div>
 
            <div>
<label className="block text-sm font-semibold text-slate-800 mb-1.5">
                Password
</label>
<div className="relative">
<Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
<input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-slate-800 placeholder:text-slate-400 transition"
                />
</div>
</div>
 
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition"
>
              Sign In to Account
<ArrowRight className="w-5 h-5" />
</button>
</form>
 
          {/* Divider */}
<div className="flex items-center gap-3 my-7">
<div className="h-px flex-1 bg-slate-200" />
<span className="text-xs font-semibold tracking-wider text-slate-400">
              QUICK DEMO ACCESS
</span>
<div className="h-px flex-1 bg-slate-200" />
</div>
 
          {/* Demo profiles */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DEMO_PROFILES.map((profile) => {
              const Icon = profile.icon;
              return (
<button
                  key={profile.role}
                  type="button"
                  onClick={() => handleQuickLogin(profile.email, profile.role)}
                  className={`flex items-center gap-3 p-3 rounded-xl border ${profile.cardBg} ${profile.cardBorder} hover:shadow-md hover:-translate-y-0.5 transition text-left`}
>
<span
                    className={`w-10 h-10 shrink-0 rounded-full ${profile.iconBg} flex items-center justify-center`}
>
<Icon className="w-5 h-5 text-white" />
</span>
<span className="min-w-0">
<span className={`block font-semibold text-sm ${profile.textColor}`}>
                      {profile.role}
</span>
<span className="block text-xs text-slate-500 truncate">
                      {profile.email}
</span>
</span>
</button>
              );
            })}
</div>
 
          <p className="text-center text-sm text-slate-500 mt-7">
            Need a new company or user profile?{" "}
<a href="#" className="text-blue-600 font-semibold hover:underline">
              Register here
</a>
</p>
</div>
</div>
</div>
  );
}