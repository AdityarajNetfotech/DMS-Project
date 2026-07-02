// import {
//   Search,
//   Bell,
//   Settings,
//   Plus,
//   Calendar,
//   Filter,
//   MoreVertical,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// const tenants = [
//   {
//     name: "Globex Corp",
//     company: "Globex International",
//     users: "1,240",
//     storage: "3.9 TB / 5 TB",
//     percent: 78,
//     status: "ACTIVE",
//     created: "Oct 12, 2023",
//   },
//   {
//     name: "Initech",
//     company: "Initech Software LLC",
//     users: "450",
//     storage: "640 GB / 2 TB",
//     percent: 32,
//     status: "ACTIVE",
//     created: "Jan 04, 2024",
//   },
//   {
//     name: "Soylent Corp",
//     company: "Soylent Industries",
//     users: "89",
//     storage: "920 GB / 1 TB",
//     percent: 92,
//     status: "WARNING",
//     created: "Nov 28, 2023",
//   },
//   {
//     name: "Umbrella Corp",
//     company: "Umbrella Pharmaceuticals",
//     users: "0",
//     storage: "0 GB / 10 TB",
//     percent: 0,
//     status: "SUSPENDED",
//     created: "Feb 15, 2024",
//   },
//   {
//     name: "Wayland-Yutani",
//     company: "The Company",
//     users: "5,600",
//     storage: "22 TB / 50 TB",
//     percent: 45,
//     status: "ACTIVE",
//     created: "Aug 02, 2023",
//   },
//   {
//     name: "Stark Industries",
//     company: "SI Global",
//     users: "2,100",
//     storage: "6.1 TB / 10 TB",
//     percent: 61,
//     status: "ACTIVE",
//     created: "Dec 19, 2023",
//   },
//   {
//     name: "Hooli",
//     company: "Hooli.xyz",
//     users: "3,405",
//     storage: "4.2 TB / 20 TB",
//     percent: 21,
//     status: "ACTIVE",
//     created: "Jan 22, 2024",
//   },
//   {
//     name: "Wayne Enterprises",
//     company: "Wayne Corp",
//     users: "720",
//     storage: "1.2 TB / 10 TB",
//     percent: 12,
//     status: "ACTIVE",
//     created: "Sep 30, 2023",
//   },
// ];

// const statusStyles = {
//   ACTIVE:
//     "bg-green-50 text-green-700 border border-green-200",
//   WARNING:
//     "bg-amber-50 text-amber-700 border border-amber-200",
//   SUSPENDED:
//     "bg-slate-100 text-slate-700 border border-slate-200",
// };

// export default function TenantManagement() {
//   return (
//     <main className="flex-1 overflow-y-auto">
//       {/* Top Navigation */}
//       <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
//         <div className="h-16 px-8 flex items-center justify-between">
//           <div className="flex items-center gap-8">
//             <div className="relative">
//               <Search
//                 size={18}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//               />

//               <input
//                 type="text"
//                 placeholder="Search tenants..."
//                 className="w-80 h-11 pl-11 pr-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
//               />
//             </div>

//             <nav className="hidden md:flex items-center gap-8">
//               <button className="text-slate-600 font-medium">
//                 Dashboard
//               </button>

//               <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-5 pt-5">
//                 Tenants
//               </button>

//               <button className="text-slate-600 font-medium">
//                 Security
//               </button>

//               <button className="text-slate-600 font-medium">
//                 Audit
//               </button>
//             </nav>
//           </div>

//           <div className="flex items-center gap-5">
//             <Bell
//               size={20}
//               className="text-slate-600 cursor-pointer"
//             />

//             <Settings
//               size={20}
//               className="text-slate-600 cursor-pointer"
//             />

//             <img
//               src="https://i.pravatar.cc/100?img=12"
//               alt=""
//               className="w-10 h-10 rounded-full border"
//             />
//           </div>
//         </div>
//       </header>

//       {/* Page */}
//       <div className="p-8">
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
//           <div>
//             <p className="text-sm text-slate-500 mb-3">
//               Platform / Tenants
//             </p>

//             <h1 className="text-4xl font-bold text-slate-900">
//               Tenants
//             </h1>

//             <p className="mt-2 text-slate-500">
//               Manage 34 total active tenant environments and
//               storage quotas.
//             </p>
//           </div>

//           <button className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center gap-2 shadow-sm">
//             <Plus size={18} />
//             Create Tenant
//           </button>
//         </div>

//         {/* Filters */}
//         <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm mb-6">
//           <div className="flex flex-col lg:flex-row justify-between gap-4">
//             <div className="flex flex-wrap gap-4">
//               <select className="h-11 px-4 rounded-xl border border-slate-200 bg-white">
//                 <option>All Statuses</option>
//               </select>

//               <button className="h-11 px-4 rounded-xl border border-slate-200 flex items-center gap-2">
//                 <Calendar size={16} />
//                 Jan 1, 2024 - Now
//               </button>
//             </div>

//             <div className="flex gap-4">
//               <button className="text-blue-600 font-medium">
//                 Clear Filters
//               </button>

//               <button className="h-11 px-4 rounded-xl bg-slate-100 flex items-center gap-2">
//                 <Filter size={16} />
//                 More Filters
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1100px]">
//               <thead className="bg-slate-50 border-b">
//                 <tr>
//                   <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-500">
//                     TENANT NAME
//                   </th>

//                   <th className="text-left text-xs font-semibold tracking-wider text-slate-500">
//                     COMPANY
//                   </th>

//                   <th className="text-left text-xs font-semibold tracking-wider text-slate-500">
//                     USERS
//                   </th>

//                   <th className="text-left text-xs font-semibold tracking-wider text-slate-500">
//                     STORAGE USED
//                   </th>

//                   <th className="text-left text-xs font-semibold tracking-wider text-slate-500">
//                     STATUS
//                   </th>

//                   <th className="text-left text-xs font-semibold tracking-wider text-slate-500">
//                     CREATED
//                   </th>

//                   <th className="text-left text-xs font-semibold tracking-wider text-slate-500">
//                     ACTIONS
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {tenants.map((tenant, index) => (
//                   <tr
//                     key={index}
//                     className="border-b hover:bg-slate-50 transition-colors"
//                   >
//                     <td className="px-6 py-5">
//                       <div className="flex items-center gap-4">
//                         <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-semibold">
//                           {tenant.name.charAt(0)}
//                         </div>

//                         <span className="font-semibold text-slate-800">
//                           {tenant.name}
//                         </span>
//                       </div>
//                     </td>

//                     <td className="text-slate-600">
//                       {tenant.company}
//                     </td>

//                     <td>{tenant.users}</td>

//                     <td className="w-80">
//                       <div>
//                         <div className="flex justify-between text-sm text-slate-500 mb-2">
//                           <span>{tenant.percent}%</span>
//                           <span>{tenant.storage}</span>
//                         </div>

//                         <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
//                           <div
//                             className={`h-full rounded-full ${
//                               tenant.percent > 85
//                                 ? "bg-red-500"
//                                 : "bg-blue-600"
//                             }`}
//                             style={{
//                               width: `${tenant.percent}%`,
//                             }}
//                           />
//                         </div>
//                       </div>
//                     </td>

//                     <td>
//                       <span
//                         className={`px-3 py-1 text-xs rounded-full font-semibold ${statusStyles[tenant.status]}`}
//                       >
//                         {tenant.status}
//                       </span>
//                     </td>

//                     <td className="text-slate-500">
//                       {tenant.created}
//                     </td>

//                     <td>
//                       <button className="p-2 rounded-lg hover:bg-slate-100">
//                         <MoreVertical size={18} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Footer */}
//           <div className="flex items-center justify-between px-6 py-4">
//             <p className="text-sm text-slate-500">
//               Showing 8 of 34 tenants
//             </p>

//             <div className="flex items-center gap-2">
//               <button className="h-9 w-9 border rounded-lg flex items-center justify-center">
//                 <ChevronLeft size={16} />
//               </button>

//               <button className="h-9 w-9 bg-blue-600 text-white rounded-lg">
//                 1
//               </button>

//               <button className="h-9 w-9 border rounded-lg">
//                 2
//               </button>

//               <button className="h-9 w-9 border rounded-lg">
//                 3
//               </button>

//               <button className="h-9 w-9 border rounded-lg flex items-center justify-center">
//                 <ChevronRight size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }




import Sidebar from "../components/Sidebar";
import {
  Search,
  Bell,
  Settings,
  Plus,
  Calendar,
  Filter,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const tenants = [
  {
    name: "Globex Corp",
    company: "Globex International",
    users: "1,240",
    storage: "3.9 TB / 5 TB",
    percent: 78,
    status: "ACTIVE",
    created: "Oct 12, 2023",
  },
  {
    name: "Initech",
    company: "Initech Software LLC",
    users: "450",
    storage: "640 GB / 2 TB",
    percent: 32,
    status: "ACTIVE",
    created: "Jan 04, 2024",
  },
  {
    name: "Soylent Corp",
    company: "Soylent Industries",
    users: "89",
    storage: "920 GB / 1 TB",
    percent: 92,
    status: "WARNING",
    created: "Nov 28, 2023",
  },
  {
    name: "Umbrella Corp",
    company: "Umbrella Pharmaceuticals",
    users: "0",
    storage: "0 GB / 10 TB",
    percent: 0,
    status: "SUSPENDED",
    created: "Feb 15, 2024",
  },
  {
    name: "Wayland-Yutani",
    company: "The Company",
    users: "5,600",
    storage: "22 TB / 50 TB",
    percent: 45,
    status: "ACTIVE",
    created: "Aug 02, 2023",
  },
];

const statusColors = {
  ACTIVE:
    "bg-emerald-50 text-emerald-700 border border-emerald-200",
  WARNING:
    "bg-amber-50 text-amber-700 border border-amber-200",
  SUSPENDED:
    "bg-slate-100 text-slate-700 border border-[#EEF2F7] shadow-[0_1px_3px_rgba(15,23,42,0.04)]",
};

export default function TenantManagement() {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        {/* Top Navbar */}
        <header className="sticky top-0 z-50 bg-white border-b border-[#EEF2F7]">
          <div className="h-16 px-8 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search tenants..."
                  className="w-80 h-11 pl-11 pr-4 rounded-xl border border-[#EEF2F7] shadow-[0_1px_3px_rgba(15,23,42,0.04)]  bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <nav className="hidden lg:flex gap-8">
                <button className="text-slate-600 font-medium">
                  Dashboard
                </button>

                <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-5 pt-5">
                  Tenants
                </button>

                <button className="text-slate-600 font-medium">
                  Security
                </button>

                <button className="text-slate-600 font-medium">
                  Audit
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-5">
              <button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center">
                <Bell size={18} />
              </button>

              <button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center">
                <Settings size={18} />
              </button>

              <img
                src="https://i.pravatar.cc/150?img=12"
                alt=""
                className="w-10 h-10 rounded-full border border-[#EEF2F7] shadow-[0_1px_3px_rgba(15,23,42,0.04)]"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
            <div>
              <p className="text-sm text-slate-500 mb-2">
                Platform / Tenant Management
              </p>

              <h1 className="bg-gradient-to-br from-[#3B82F6] to-[#2563EB]shadow-sm">
                Tenants
              </h1>

              <p className="mt-2 text-slate-500">
                Manage active tenant environments and monitor
                storage utilization.
              </p>
            </div>

            <button className="h-12 px-6 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_4px_12px_rgba(37,99,235,0.25)] text-white font-medium flex items-center gap-2 shadow-sm">
              <Plus size={18} />
              Create Tenant
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <div className="bg-white border border-[#EEF2F7] shadow-[0_1px_3px_rgba(15,23,42,0.04)] rounded-2xl p-6">
              <p className="text-slate-500 text-sm">
                Total Tenants
              </p>
              <h2 className="text-3xl font-bold mt-2">34</h2>
            </div>

            <div className="bg-white border border-[#EEF2F7] shadow-[0_1px_3px_rgba(15,23,42,0.04)] rounded-2xl p-6">
              <p className="text-slate-500 text-sm">
                Active Tenants
              </p>
              <h2 className="text-3xl font-bold mt-2 text-emerald-600">
                31
              </h2>
            </div>

            <div className="bg-white border border-[#EEF2F7] shadow-[0_1px_3px_rgba(15,23,42,0.04)] rounded-2xl p-6">
              <p className="text-slate-500 text-sm">
                Storage Consumed
              </p>
              <h2 className="text-3xl font-bold mt-2">
                42.8 TB
              </h2>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white border border-[#EEF2F7] shadow-[0_1px_3px_rgba(15,23,42,0.04)] rounded-2xl p-5 mb-6">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                <select className="h-11 px-4 rounded-xl border border-[#EEF2F7] shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
                  <option>All Statuses</option>
                </select>

                <button className="h-11 px-4 rounded-xl border border-[#EEF2F7] shadow-[0_1px_3px_rgba(15,23,42,0.04)] flex items-center gap-2">
                  <Calendar size={16} />
                  Jan 2024 - Now
                </button>
              </div>

              <div className="flex gap-3">
                <button className="text-blue-600 font-medium">
                  Clear Filters
                </button>

                <button className="h-11 px-4 rounded-xl bg-slate-100 flex items-center gap-2">
                  <Filter size={16} />
                  More Filters
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border border-[#EEF2F7] shadow-[0_1px_3px_rgba(15,23,42,0.04)] rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead className="bg-slate-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                      Tenant
                    </th>

                    <th className="text-left text-xs font-semibold text-slate-500 uppercase">
                      Company
                    </th>

                    <th className="text-left text-xs font-semibold text-slate-500 uppercase">
                      Users
                    </th>

                    <th className="text-left text-xs font-semibold text-slate-500 uppercase">
                      Storage
                    </th>

                    <th className="text-left text-xs font-semibold text-slate-500 uppercase">
                      Status
                    </th>

                    <th className="text-left text-xs font-semibold text-slate-500 uppercase">
                      Created
                    </th>

                    <th className="text-left text-xs font-semibold text-slate-500 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {tenants.map((tenant, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#F1F5F9] hover:bg-[#FAFBFC] transition-all duration-200"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold">
                            {tenant.name.charAt(0)}
                          </div>

                          <span className="font-semibold text-slate-800">
                            {tenant.name}
                          </span>
                        </div>
                      </td>

                      <td>{tenant.company}</td>

                      <td>{tenant.users}</td>

                      <td className="w-80">
                        <div>
                          <div className="flex justify-between text-sm mb-2 text-slate-500">
                            <span>{tenant.percent}%</span>
                            <span>{tenant.storage}</span>
                          </div>

                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                tenant.percent > 85
                                  ? "bg-red-500"
                                  : "bg-blue-600"
                              }`}
                              style={{
                                width: `${tenant.percent}%`,
                              }}
                            />
                          </div>
                        </div>
                      </td>

                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[tenant.status]}`}
                        >
                          {tenant.status}
                        </span>
                      </td>

                      <td className="text-slate-500">
                        {tenant.created}
                      </td>

                      <td>
                        <button className="w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-5 border-t">
              <p className="text-sm text-slate-500">
                Showing 5 of 34 tenants
              </p>

              <div className="flex items-center gap-2">
                <button className="w-9 h-9 ring-1 ring-[#EEF2F7] rounded-xl bg-white flex items-center justify-center">
                  <ChevronLeft size={16} />
                </button>

                <button className="w-9 h-9 bg-blue-600 text-white rounded-lg">
                  1
                </button>

                <button className="w-9 h-9 ring-1 ring-[#EEF2F7] rounded-xl bg-white flex items-center justify-center">
                  2
                </button>

                <button className="w-9 h-9 ring-1 ring-[#EEF2F7] rounded-xl bg-white flex items-center justify-center">
                  3
                </button>

                <button className="w-9 h-9 ring-1 ring-[#EEF2F7] rounded-xl bg-white flex items-center justify-center">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}