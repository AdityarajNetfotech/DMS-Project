import {
  CalendarDays,
  CloudUpload,
  Download,
  FileText,
  Folder,
  FolderPlus,
  MoreVertical,
  ShieldCheck,
  Share2,
  Sparkles,
  Trash2,
  UploadCloud,
  Users,
} from "lucide-react";

import Viewer from "../../components/Viewer/Viewer";

const stats = [
  {
    title: "Total Documents",
    value: "1,248",
    change: "+ 18 this week",
    icon: FileText,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Folders",
    value: "84",
    change: "+ 5 this week",
    icon: Folder,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Shared Files",
    value: "216",
    change: "+ 24 this week",
    icon: Share2,
    color: "bg-violet-50 text-blue-600",
  },
  {
    title: "Recent Uploads",
    value: "39",
    change: "+ 8 this week",
    icon: CloudUpload,
    color: "bg-orange-50 text-orange-500",
  },
];

const documents = [
  {
    name: "Project Proposal.pdf",
    owner: "John Doe",
    type: "PDF",
    size: "2.4 MB",
    modified: "2 hrs ago",
    kind: "pdf",
  },
  {
    name: "Budget Report.xlsx",
    owner: "Sarah",
    type: "XLSX",
    size: "1.1 MB",
    modified: "Yesterday",
    kind: "excel",
  },
  {
    name: "Meeting Notes.docx",
    owner: "Alex",
    type: "DOCX",
    size: "850 KB",
    modified: "3 days ago",
    kind: "doc",
  },
  {
    name: "Employee Handbook.pdf",
    owner: "Emma",
    type: "PDF",
    size: "5.3 MB",
    modified: "1 week ago",
    kind: "pdf",
  },
  {
    name: "Presentation.pptx",
    owner: "David",
    type: "PPTX",
    size: "3.2 MB",
    modified: "1 week ago",
    kind: "ppt",
  },
];

const activity = [
  {
    title: "Uploaded Budget Report.xlsx",
    meta: "2 hours ago by Sarah",
    icon: UploadCloud,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Shared HR Policy.docx",
    meta: "5 hours ago by John Doe",
    icon: Share2,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Downloaded Project Proposal.pdf",
    meta: "Yesterday by You",
    icon: Download,
    color: "bg-orange-50 text-orange-500",
  },
  {
    title: "Deleted old_invoice.pdf",
    meta: "2 days ago by Michael",
    icon: Trash2,
    color: "bg-red-50 text-red-500",
  },
];

const teamMembers = [
  { name: "Sarah Johnson", role: "Admin", status: "bg-emerald-500" },
  { name: "John Doe", role: "Manager", status: "bg-emerald-500" },
  { name: "Emma Watson", role: "Reviewer", status: "bg-emerald-500" },
  { name: "Michael Brown", role: "Viewer", status: "bg-slate-400" },
];

const storageRows = [
  { label: "Documents", value: "65%", size: "65 GB", color: "bg-blue-600" },
  { label: "Images", value: "20%", size: "20 GB", color: "bg-emerald-500" },
  { label: "Videos", value: "10%", size: "10 GB", color: "bg-orange-500" },
  { label: "Others", value: "5%", size: "5 GB", color: "bg-violet-500" },
];

function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-5">
        <div
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${stat.color}`}
        >
          <Icon size={30} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">{stat.title}</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">
            {stat.value}
          </p>
          <p className="mt-2 text-sm font-semibold text-emerald-600">
            {stat.change}
          </p>
        </div>
      </div>
    </section>
  );
}

function FileBadge({ kind }) {
  const styles = {
    pdf: "bg-red-500 text-white",
    excel: "bg-emerald-500 text-white",
    doc: "bg-blue-500 text-white",
    ppt: "bg-orange-500 text-white",
  };

  const label = {
    pdf: "PDF",
    excel: "X",
    doc: "W",
    ppt: "P",
  };

  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-sm text-[8px] font-bold ${
        styles[kind] || "bg-slate-200 text-slate-700"
      }`}
    >
      {label[kind] || "F"}
    </span>
  );
}

function Panel({ title, action, children, className = "" }) {
  return (
    <section
      className={`rounded-lg border border-slate-200 bg-white p-5 shadow-sm ${className}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-950">{title}</h2>
        {action ? (
          <button className="text-sm font-semibold text-blue-700 hover:text-blue-800">
            {action}
          </button>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function RecentDocuments() {
  return (
    <Panel title="Recent Documents" action="View All">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left">
          <thead>
            <tr className="border-b border-slate-200 text-xs font-semibold text-slate-500">
              <th className="py-3 pr-3">Name</th>
              <th className="px-3 py-3">Owner</th>
              <th className="px-3 py-3">Type</th>
              <th className="px-3 py-3">Size</th>
              <th className="px-3 py-3">Modified</th>
              <th className="py-3 pl-3 text-right" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {documents.map((document) => (
              <tr key={document.name} className="text-xs font-medium">
                <td className="py-3 pr-3 text-slate-900">
                  <div className="flex items-center gap-3">
                    <FileBadge kind={document.kind} />
                    <span className="truncate">{document.name}</span>
                  </div>
                </td>
                <td className="px-3 py-3 text-slate-500">{document.owner}</td>
                <td className="px-3 py-3 text-slate-700">{document.type}</td>
                <td className="px-3 py-3 text-slate-700">{document.size}</td>
                <td className="px-3 py-3 text-slate-500">
                  {document.modified}
                </td>
                <td className="py-3 pl-3 text-right">
                  <button className="rounded-md p-1 text-slate-600 hover:bg-slate-100">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs font-medium text-slate-500">
          Showing 1 to 5 of 20 results
        </p>
        <button className="rounded-md border border-slate-200 px-4 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-50">
          View All Documents
        </button>
      </div>
    </Panel>
  );
}

function StorageOverview() {
  return (
    <Panel title="Storage Overview" className="xl:col-span-1">
      <div className="flex flex-col items-center gap-7 sm:flex-row">
        <div className="relative grid h-44 w-44 shrink-0 place-items-center rounded-full bg-[conic-gradient(#2563eb_0_65%,#10b981_65%_85%,#f59e0b_85%_95%,#8b5cf6_95%_100%)]">
          <div className="grid h-28 w-28 place-items-center rounded-full bg-white text-center shadow-inner">
            <div>
              <p className="text-2xl font-bold text-slate-950">24.5 GB</p>
              <p className="text-xs font-semibold text-slate-500">
                of 100 GB used
              </p>
            </div>
          </div>
        </div>
        <div className="w-full space-y-4">
          {storageRows.map((row) => (
            <div key={row.label} className="grid grid-cols-[1fr_auto_auto] gap-4 text-xs">
              <div className="flex items-center gap-3 font-semibold text-slate-900">
                <span className={`h-3 w-3 rounded-sm ${row.color}`} />
                {row.label}
              </div>
              <span className="font-bold text-slate-900">{row.value}</span>
              <span className="font-medium text-slate-500">{row.size}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 border-t border-slate-200 pt-4 text-center">
        <button className="text-sm font-semibold text-blue-700">
          View Storage Details
        </button>
      </div>
    </Panel>
  );
}

function QuickActions() {
  const actions = [
    { label: "Upload Document", icon: UploadCloud, color: "bg-blue-50 text-blue-600" },
    { label: "Create Folder", icon: FolderPlus, color: "bg-emerald-50 text-emerald-600" },
    { label: "Share Files", icon: Share2, color: "bg-violet-50 text-violet-600" },
    { label: "Manage Access", icon: ShieldCheck, color: "bg-orange-50 text-orange-500" },
  ];

  return (
    <Panel title="Quick Actions">
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              className={`flex min-h-[110px] flex-col items-center justify-center gap-3 rounded-lg border border-slate-200 ${action.color} text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm`}
            >
              <Icon size={34} />
              {action.label}
            </button>
          );
        })}
      </div>
    </Panel>
  );
}

function RecentActivity() {
  return (
    <Panel title="Recent Activity" action="View All">
      <div className="space-y-4">
        {activity.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex items-start gap-4">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${item.color}`}
              >
                <Icon size={17} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {item.meta}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

function StorageUsage() {
  return (
    <Panel title="Storage Usage" action="View All">
      <div className="space-y-6">
        {storageRows.map((row) => (
          <div key={row.label}>
            <div className="mb-2 flex justify-between text-xs font-semibold">
              <span className="text-slate-900">{row.label}</span>
              <span className="text-slate-500">
                {row.value} <span className="ml-8">{row.size}</span>
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full ${row.color}`}
                style={{ width: row.value }}
              />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function AIInsights() {
  return (
    <section className="rounded-lg bg-gradient-to-br from-indigo-600 to-violet-500 p-5 text-white shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <Sparkles size={22} />
        <h2 className="text-base font-bold">AI Insights</h2>
      </div>
      <div className="space-y-4 text-sm font-medium">
        <p>+ 15 duplicate documents detected</p>
        <p>+ 8 files missing metadata</p>
        <p>+ Storage will reach 90% in 20 days</p>
        <p>+ 5 inactive users this month</p>
      </div>
      <button className="mt-7 h-10 w-full rounded-lg bg-white/15 text-sm font-semibold text-white transition hover:bg-white/25">
        View All Insights
      </button>
    </section>
  );
}

function TeamMembers() {
  return (
    <Panel title="Team Members" action="View All">
      <div className="divide-y divide-slate-100">
        {teamMembers.map((member, index) => (
          <div key={member.name} className="flex items-center gap-3 py-3 first:pt-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-orange-100 text-xs font-bold text-slate-900">
              {member.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-900">
                {member.name}
              </p>
              <p className="text-xs font-medium text-slate-500">
                {member.role}
              </p>
            </div>
            <span
              className={`h-2 w-2 rounded-full ${member.status}`}
              aria-label={index < 3 ? "Online" : "Offline"}
            />
          </div>
        ))}
      </div>
    </Panel>
  );
}

export default function ViewerDashboard() {
  return (
    <Viewer>
      <div className="mx-auto max-w-[1500px] space-y-5">
        <section className="relative overflow-hidden rounded-xl bg-blue-50 p-6 shadow-sm md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(37,99,235,0.12),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.8),rgba(219,234,254,0.7))]" />
          <div className="relative grid gap-6 lg:grid-cols-[1.2fr_auto_auto] lg:items-center">
            <div className="flex items-center gap-7">
              <div className="hidden h-32 w-32 shrink-0 items-center justify-center rounded-full bg-white/70 md:flex">
                <div className="relative flex h-20 w-24 items-end justify-center rounded-xl bg-amber-400">
                  <div className="absolute -top-6 h-16 w-20 rounded-lg border border-blue-100 bg-white shadow-sm" />
                  <FileText
                    size={38}
                    className="absolute -right-2 bottom-2 rounded-full bg-blue-500 p-2 text-white"
                  />
                </div>
              </div>

              <div>
                <h1 className="text-2xl font-bold text-slate-950 md:text-3xl">
                  Welcome back, Arjun!
                </h1>
                <p className="mt-3 max-w-md text-base font-medium leading-7 text-slate-700">
                  You have 12 pending approvals and 24 new documents uploaded
                  today.
                </p>
                <button className="mt-4 h-11 rounded-lg bg-blue-600 px-6 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700">
                  View Reports
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-white/85 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-slate-600">Your Access</p>
              <div className="mt-6 flex items-center gap-5">
                <Users size={32} className="text-blue-600" />
                <div>
                  <p className="text-xl font-bold">18</p>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    Folders / Documents
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white/85 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-slate-600">Last Login</p>
              <div className="mt-6 flex items-center gap-5">
                <CalendarDays size={32} className="text-blue-600" />
                <div>
                  <p className="text-lg font-bold">May 18, 2025</p>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    10:30 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} stat={stat} />
          ))}
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.35fr_1.05fr_0.9fr]">
          <RecentDocuments />
          <StorageOverview />
          <QuickActions />
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.05fr_1.05fr_0.95fr_1.25fr]">
          <RecentActivity />
          <StorageUsage />
          <AIInsights />
          <TeamMembers />
        </section>
      </div>
    </Viewer>
  );
}
