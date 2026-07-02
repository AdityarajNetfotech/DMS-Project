import {
  LayoutDashboard,
  FolderOpen,
  FolderTree,
  Share2,
  Clock3,
  Trash2,
  ShieldCheck,
  Activity,
  User,
  LogOut,
  Menu,
  Search,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/manager/dashboard",
  },
  {
    name: "My Documents",
    icon: FolderOpen,
    path: "/manager/my-documents",
  },
  {
    name: "Folder Explorer",
    icon: FolderTree,
    path: "/manager/folder-explorer",
  },
  {
    name: "Search & Filters",
    icon: Search,
    path: "/manager/search-filters",
  },
  {
    name: "Shared with Me",
    icon: Share2,
    path: "/manager/shared-with-me",
  },
  {
    name: "Recent Documents",
    icon: Clock3,
    path: "/manager/recent-documents",
  },
  {
    name: "Trash",
    icon: Trash2,
    path: "/manager/trash",
  },
];

const accessItems = [
  {
    name: "Permissions",
    icon: ShieldCheck,
    path: "/manager/permissions",
  },
  {
    name: "Activity Logs",
    icon: Activity,
    path: "/manager/activity-logs",
  },
];

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-[250px] bg-white border-r border-slate-200 flex-col h-screen sticky top-0">
        {/* Logo */}
        <div className="px-6 py-5 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              D
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                AdminNexus
              </h2>

              <p className="text-xs text-slate-500">
                Document Management
              </p>
            </div>
          </div>
        </div>

        {/* Main Menu */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100"
                    }`
                  }
                >
                  <Icon size={18} />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Access Control */}
          <div className="mt-8">
            <p className="px-3 mb-3 text-xs uppercase text-slate-400 font-semibold">
              Access Control
            </p>

            <nav className="space-y-1">
              {accessItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-600 hover:bg-slate-100"
                      }`
                    }
                  >
                    <Icon size={18} />
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t p-3 space-y-1">
          <NavLink
            to="/manager/profile-settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            <User size={18} />
            Profile Settings
          </NavLink>

          <button
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50"
            onClick={() => {
              window.location.href = "http://localhost:5173/login";
            }}
            type="button"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            D
          </div>

          <span className="font-semibold">
            AdminNexus
          </span>
        </div>

        <button className="p-2 rounded-lg hover:bg-slate-100">
          <Menu size={22} />
        </button>
      </div>
    </>
  );
}
