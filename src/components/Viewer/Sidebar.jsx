import {
  ChevronDown,
  ChevronLeft,
  FileText,
  FolderOpen,
  Home,
  Trash2,
  Users,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Dashboard", icon: Home, path: "/viewer/dashboard" },
  { name: "My Documents", icon: FileText, path: "/viewer/my-documents" },
  { name: "Shared With Me", icon: Users, path: "/viewer/shared-with-me" },
  { name: "My Access", icon: FolderOpen, path: "/viewer/my-access" },
  { name: "Trash", icon: Trash2, path: "/viewer/trash" },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("token");
    sessionStorage.clear();

    // If you're using cookies, clear them here as well if applicable.

    navigate("/login", { replace: true });
  };

  return (
    <aside className="sticky top-0 hidden h-screen w-[280px] shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
      {/* Logo */}
      <div className="flex h-[82px] items-center gap-3 border-b border-slate-200 px-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
          <FileText size={25} fill="currentColor" strokeWidth={1.8} />
        </div>

        <div>
          <h1 className="text-xl font-bold text-slate-950">DMS</h1>
          <p className="text-xs font-medium text-slate-500">
            Document Management System
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-5 py-6">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex h-13 items-center gap-4 rounded-lg px-4 text-sm font-semibold transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                  }`
                }
              >
                <Icon size={21} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Storage & Profile */}
      <div className="space-y-5 border-t border-slate-100 px-5 py-6">
        {/* Storage */}
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-bold text-slate-950">Storage Used</p>

          <p className="mt-3 text-sm font-medium text-slate-700">
            24.5 GB of 100 GB
          </p>

          <div className="mt-4 flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[24%] rounded-full bg-blue-600" />
            </div>

            <span className="text-sm font-medium text-slate-700">24%</span>
          </div>
        </div>

        {/* User */}
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-orange-100 text-sm font-bold text-slate-900">
              AS
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-slate-950">
                Arjun Sharma
              </p>

              <p className="text-xs font-medium text-slate-500">Viewer</p>
            </div>

            <ChevronDown size={18} className="text-slate-600" />
          </div>

          <div className="mt-3 flex items-center gap-2 pl-[60px] text-xs font-semibold text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Online
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="border-t border-slate-200 py-4">
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-4 px-8 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          <ChevronLeft size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}