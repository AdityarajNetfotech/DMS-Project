
import { useState } from "react";
import {
  Shield,
  Download,
  UserCog,
  History,
  MoreVertical,
  Plus,
} from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5004";

export default function UserManagementContent() {
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [users, setUsers] = useState([
    {
      name: "Sarah Jenkins",
      email: "s.jenkins@enterprise.com",
      role: "Manager",
      status: "Active",
      login: "2 mins ago",
    },
    {
      name: "Lydia Northrop",
      email: "l.north@enterprise.com",
      role: "Viewer",
      status: "Inactive",
      login: "3 days ago",
    },
    {
      name: "Robert Kim",
      email: "r.kim@enterprise.com",
      role: "Manager",
      status: "Locked",
      login: "Never",
    },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    tenantSlug: "",
    role: "MANAGER",
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Inactive":
        return "bg-yellow-100 text-yellow-700";
      case "Locked":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "Manager":
        return "bg-blue-100 text-blue-700";
      case "Viewer":
        return "bg-gray-100 text-gray-700";
      case "Tenant Admin":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredUsers = users.filter((user) => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !normalizedSearch ||
      user.name.toLowerCase().includes(normalizedSearch) ||
      user.email.toLowerCase().includes(normalizedSearch) ||
      user.role.toLowerCase().includes(normalizedSearch) ||
      user.status.toLowerCase().includes(normalizedSearch);

    const matchesRole = roleFilter === "All Roles" || user.role === roleFilter;
    const matchesStatus = statusFilter === "All Status" || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.tenantSlug) {
      setStatusMessage("Please fill in the name, email, password, and tenant slug.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/users/${encodeURIComponent(formData.tenantSlug)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to create user");
      }

      setUsers((current) => [
        {
          name: formData.name,
          email: formData.email,
          role: formData.role === "MANAGER" ? "Manager" : "Viewer",
          status: "Active",
          login: "Just created",
        },
        ...current,
      ]);
      setStatusMessage(`Created ${formData.role === "MANAGER" ? "Manager" : "Viewer"} successfully.`);
      setFormData({
        name: "",
        email: "",
        password: "",
        tenantSlug: "",
        role: "MANAGER",
      });
      setShowForm(false);
    } catch (error) {
      setStatusMessage(error.message || "Unable to create user");
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F7FB] p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[#0A1F44]">User Management</h1>
          <p className="text-gray-500 mt-2">
            Create manager and viewer accounts for your tenant from the admin area.
          </p>
        </div>

        <button
          onClick={() => setShowForm((current) => !current)}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#0B2C87] px-6 py-3 text-white hover:bg-[#07236f]"
        >
          <Plus size={18} />
          {showForm ? "Hide Form" : "Invite User"}
        </button>
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4">
          <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
            <Shield className="text-[#0B2C87]" />
          </div>

          <div>
            <h3 className="font-semibold text-lg">Tenant Admin Access</h3>
            <p className="text-gray-500 text-sm mt-1">
              Add manager and viewer users for a tenant without leaving the admin console.
            </p>
          </div>
        </div>

        <button
          onClick={() => setMfaEnabled(!mfaEnabled)}
          className={`w-14 h-8 rounded-full relative transition ${
            mfaEnabled ? "bg-blue-700" : "bg-gray-300"
          }`}
        >
          <div
            className={`absolute top-1 w-6 h-6 bg-white rounded-full transition ${
              mfaEnabled ? "left-7" : "left-1"
            }`}
          />
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl p-6 shadow-sm mt-8 border border-blue-100">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#0A1F44]">Create Manager or Viewer</h3>
              <p className="text-gray-500 text-sm mt-1">
                Tenant admins can create either a manager or a viewer account for the selected tenant.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none"
                placeholder="manager@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Temporary password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none"
                placeholder="Enter password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tenant slug</label>
              <input
                type="text"
                name="tenantSlug"
                value={formData.tenantSlug}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none"
                placeholder="acme-tenant"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl px-4 py-2 outline-none"
              >
                <option value="MANAGER">Manager</option>
                <option value="VIEWER">Viewer</option>
              </select>
            </div>

            <div className="md:col-span-2 flex items-center gap-3">
              <button
                type="submit"
                className="bg-[#0B2C87] text-white px-5 py-3 rounded-xl hover:bg-[#07236f]"
              >
                Create User
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="border border-gray-300 px-5 py-3 rounded-xl"
              >
                Cancel
              </button>
            </div>
          </form>

          {statusMessage && (
            <p className="mt-4 text-sm text-blue-700">{statusMessage}</p>
          )}
        </div>
      )}

      <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex flex-col gap-4 p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-2 outline-none sm:w-64"
            />

            <select
              value={roleFilter}
              onChange={(event) => setRoleFilter(event.target.value)}
              className="rounded-xl border border-gray-300 px-4 py-2"
            >
              <option value="All Roles">All Roles</option>
              <option value="Manager">Manager</option>
              <option value="Viewer">Viewer</option>
              <option value="Tenant Admin">Tenant Admin</option>
            </select>

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="rounded-xl border border-gray-300 px-4 py-2"
            >
              <option value="All Status">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Locked">Locked</option>
            </select>
          </div>

          <button className="flex items-center gap-2 rounded-xl border px-4 py-2">
            <Download size={18} />
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 text-sm text-gray-500">
              <tr>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Role</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Last Login</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={`${user.email}-${index}`} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="flex items-center gap-3 px-6 py-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                      {user.name.charAt(0)}
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </td>

                  <td className="px-6 py-5 text-gray-600">{user.email}</td>

                  <td className="px-6 py-5">
                    <span className={`rounded-full px-3 py-1 text-sm font-medium ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <span className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-gray-600">{user.login}</td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-4 text-gray-500">
                      <UserCog size={18} className="cursor-pointer" />
                      <History size={18} className="cursor-pointer" />
                      <MoreVertical size={18} className="cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="6" className="border-t border-gray-100 px-6 py-10 text-center text-gray-500">
                    No users found for the selected filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 border-t border-gray-100 p-4">
          <button className="h-10 w-10 rounded-lg border">{'<'}</button>
          <button className="h-10 w-10 rounded-lg bg-[#0B2C87] text-white">1</button>
          <button className="h-10 w-10 rounded-lg border">2</button>
          <button className="h-10 w-10 rounded-lg border">3</button>
          <button className="h-10 w-10 rounded-lg border">{'>'}</button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Invite External Collaborators</h3>
          <p className="text-gray-500 mt-2">Generate secure links for temporary access.</p>
          <button className="mt-5 bg-[#0B2C87] text-white px-5 py-3 rounded-xl">
            Generate Invite Link
          </button>
        </div>

        <div className="bg-[#071C4D] text-white rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Usage Insights</h3>
          <div className="mt-6">
            <p className="text-gray-300">Active Seats</p>
            <h2 className="text-4xl font-bold mt-1">24/50</h2>
          </div>
          <div className="mt-6">
            <p className="text-gray-300">48% license usage</p>
          </div>
          <button className="mt-6 bg-white text-[#071C4D] px-5 py-3 rounded-xl font-medium">
            Review Billing
          </button>
        </div>
      </div>
    </div>
  );
}
