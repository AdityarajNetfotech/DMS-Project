// src/components/Sidebar.jsx

import {
  Users,
  Settings2,
  Shield,
  BarChart3,
  Settings,
  CircleHelp,
  X,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar({
  isOpen = false,
  onClose = () => {},
}) {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: <Users size={20} />,
      label: "User Management",
      path: "/admin/user-management",
    },
    {
      icon: <Settings2 size={20} />,
      label: "Workspace Configuration",
      path: "/admin/workspace-configuration",
    },
    {
      icon: <Shield size={20} />,
      label: "Access & Security",
      path: "/admin/access-security",
    },
    {
      icon: <BarChart3 size={20} />,
      label: "Storage & Reporting",
      path: "/admin/storage-reporting",
    },
    {
      icon: <Settings size={20} />,
      label: "Settings",
      path: "/admin/settings",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
  className={`fixed top-0 left-0 z-50 h-screen w-80 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } lg:translate-x-0`}
>
        {/* Header */}
        <div className="flex h-20 items-center justify-between border-b border-gray-200 px-7">
          <h1 className="text-2xl font-bold text-[#072B86]">
            AdminNexus
          </h1>

          <button
            type="button"
            aria-label="Close sidebar"
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {/* Tenant Info */}
        <div className="border-b border-gray-200 px-6 py-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Tenant Admin
          </h2>

          <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">
            Enterprise Tier
          </p>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex w-full items-center gap-4 rounded-xl px-5 py-4 transition-all duration-200 ${
                  isActive
                    ? "bg-[#072B86] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#072B86]"
                }`
              }
            >
              {item.icon}

              <span className="text-[15px] font-medium">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4">
          <NavLink
            to="/admin/help-center"
            onClick={onClose}
            className={({ isActive }) =>
              `flex w-full items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-[#072B86] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100 hover:text-[#072B86]"
              }`
            }
          >
            <CircleHelp size={20} />
            <span className="font-medium">Help Center</span>
          </NavLink>

          <button
            type="button"
            onClick={() => {
              // Clear auth data if required
              localStorage.removeItem("token");
              sessionStorage.clear();

              navigate("/login");
            }}
            className="mt-3 flex w-full items-center gap-4 rounded-xl px-4 py-3 text-red-600 transition-all duration-200 hover:bg-red-50 hover:text-red-700"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}