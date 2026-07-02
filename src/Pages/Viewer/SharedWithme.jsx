import { useMemo, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  FileText,
  Filter,
  Folder,
  MoreVertical,
  Search,
  Users,
  Clock3,
} from "lucide-react";

import Viewer from "../../components/Viewer/Viewer";

const stats = [
  {
    title: "Folders",
    value: "12",
    subtitle: "Shared folders",
    icon: Folder,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Documents",
    value: "36",
    subtitle: "Shared documents",
    icon: FileText,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Shared By",
    value: "18",
    subtitle: "People",
    icon: Users,
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "Recently Shared",
    value: "8",
    subtitle: "In last 7 days",
    icon: Clock3,
    color: "bg-orange-50 text-orange-500",
  },
];

const sharedDocuments = [
  {
    name: "Q1 Financial Report.pdf",
    type: "PDF",
    typeColor: "bg-red-50 text-red-600",
    iconColor: "bg-red-600",
    sharedBy: "Sarah Johnson",
    initials: "SJ",
    folder: "Finance/Reports",
    date: "May 18, 2025",
    time: "10:30 AM",
  },
  {
    name: "Team Meeting Notes.docx",
    type: "DOCX",
    typeColor: "bg-blue-50 text-blue-600",
    iconColor: "bg-blue-600",
    sharedBy: "Michael Brown",
    initials: "MB",
    folder: "Meetings/Team",
    date: "May 17, 2025",
    time: "03:45 PM",
  },
  {
    name: "Employee Handbook.pdf",
    type: "PDF",
    typeColor: "bg-red-50 text-red-600",
    iconColor: "bg-red-600",
    sharedBy: "HR Team",
    initials: "HR",
    folder: "HR/Policies",
    date: "May 16, 2025",
    time: "11:20 AM",
  },
  {
    name: "Architecture Diagram.pptx",
    type: "PPTX",
    typeColor: "bg-orange-50 text-orange-600",
    iconColor: "bg-orange-500",
    sharedBy: "David Lee",
    initials: "DL",
    folder: "Projects/Design",
    date: "May 15, 2025",
    time: "02:10 PM",
  },
  {
    name: "Sales Data.xlsx",
    type: "XLSX",
    typeColor: "bg-emerald-50 text-emerald-600",
    iconColor: "bg-emerald-600",
    sharedBy: "Sales Team",
    initials: "ST",
    folder: "Sales/Reports",
    date: "May 14, 2025",
    time: "09:30 AM",
  },
  {
    name: "Brand Guidelines.pdf",
    type: "PDF",
    typeColor: "bg-red-50 text-red-600",
    iconColor: "bg-red-600",
    sharedBy: "Marketing Team",
    initials: "MT",
    folder: "Marketing",
    date: "May 13, 2025",
    time: "04:15 PM",
  },
];

function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-5">
        <div
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${stat.color}`}
        >
          <Icon size={31} />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-600">{stat.title}</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">
            {stat.value}
          </p>
          <p className="mt-1 text-sm font-medium text-slate-500">
            {stat.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

function SelectButton({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="flex h-11 min-w-[150px] items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none transition hover:bg-slate-50"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function FileIcon({ type, color }) {
  return (
    <span
      className={`relative inline-flex h-7 w-6 shrink-0 items-end justify-center rounded-sm ${color} pb-1 text-[8px] font-bold text-white shadow-sm`}
    >
      <span className="absolute right-0 top-0 h-0 w-0 border-l-[7px] border-t-[7px] border-l-white/35 border-t-white" />
      {type === "PPTX" ? "P" : type === "XLSX" ? "X" : type === "DOCX" ? "W" : "PDF"}
    </span>
  );
}

function Avatar({ initials }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-orange-100 text-xs font-bold text-slate-800">
      {initials}
    </span>
  );
}

export default function SharedWithme() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [ownerFilter, setOwnerFilter] = useState("All Owners");
  const [dateFilter, setDateFilter] = useState("Date Shared");

  const typeOptions = ["All Types", "PDF", "DOCX", "PPTX", "XLSX"];
  const ownerOptions = ["All Owners", "Sarah Johnson", "Michael Brown", "HR Team", "David Lee", "Sales Team", "Marketing Team"];
  const dateOptions = ["Date Shared", "Newest", "Oldest"];

  const filteredDocuments = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return sharedDocuments.filter((document) => {
      const matchesSearch =
        !query ||
        [document.name, document.sharedBy, document.folder, document.type]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesType =
        typeFilter === "All Types" || document.type === typeFilter;
      const matchesOwner =
        ownerFilter === "All Owners" || document.sharedBy === ownerFilter;
      const matchesDate =
        dateFilter === "Date Shared" ||
        (dateFilter === "Newest" && document.date.includes("May 18")) ||
        (dateFilter === "Oldest" && document.date.includes("May 13"));

      return matchesSearch && matchesType && matchesOwner && matchesDate;
    });
  }, [searchTerm, typeFilter, ownerFilter, dateFilter]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setTypeFilter("All Types");
    setOwnerFilter("All Owners");
    setDateFilter("Date Shared");
  };

  return (
    <Viewer>
      <div className="mx-auto max-w-[1500px] space-y-7">
        <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-normal text-slate-950 md:text-3xl">
              Shared With Me
            </h1>
            <p className="mt-3 text-base font-medium text-slate-500">
              Documents and folders that have been shared with you.
            </p>
          </div>

          <button className="inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-blue-300 bg-white px-6 text-sm font-bold text-blue-700 shadow-sm transition hover:bg-blue-50">
            <Download size={18} />
            Export List
          </button>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} stat={stat} />
          ))}
        </section>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-200 p-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-1 flex-col gap-4 md:flex-row md:flex-wrap">
              <label className="relative block md:w-[320px]">
                <Search
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search shared documents..."
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <SelectButton
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value)}
                options={typeOptions}
              />
              <SelectButton
                value={ownerFilter}
                onChange={(event) => setOwnerFilter(event.target.value)}
                options={ownerOptions}
              />
              <SelectButton
                value={dateFilter}
                onChange={(event) => setDateFilter(event.target.value)}
                options={dateOptions}
              />

              <button className="inline-flex h-11 items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
                <Filter size={18} />
                Filters
              </button>
            </div>

            <button
              type="button"
              onClick={handleClearFilters}
              className="h-11 px-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
            >
              Clear All
            </button>
          </div>

          <div className="overflow-x-auto px-5">
            <table className="w-full min-w-[1080px] table-fixed text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm font-semibold text-slate-500">
                  <th className="w-[24%] py-5 pr-5">Name</th>
                  <th className="w-[10%] px-5 py-5">Type</th>
                  <th className="w-[17%] px-5 py-5">Shared By</th>
                  <th className="w-[17%] px-5 py-5">Folder</th>
                  <th className="w-[13%] px-5 py-5">Shared On</th>
                  <th className="w-[12%] px-5 py-5">Permissions</th>
                  <th className="w-[7%] py-5 pl-5 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {filteredDocuments.map((document) => (
                  <tr
                    key={document.name}
                    className="text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                  >
                    <td className="py-5 pr-5">
                      <div className="flex items-center gap-5">
                        <FileIcon
                          type={document.type}
                          color={document.iconColor}
                        />
                        <span className="truncate">{document.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-5">
                      <span
                        className={`rounded-lg px-3 py-1 text-xs font-bold ${document.typeColor}`}
                      >
                        {document.type}
                      </span>
                    </td>
                    <td className="px-5 py-5">
                      <div className="flex items-center gap-3">
                        <Avatar initials={document.initials} />
                        <span className="truncate">{document.sharedBy}</span>
                      </div>
                    </td>
                    <td className="px-5 py-5">{document.folder}</td>
                    <td className="px-5 py-5">
                      <p>{document.date}</p>
                      <p className="mt-1 text-slate-500">{document.time}</p>
                    </td>
                    <td className="px-5 py-5">
                      <span className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                        View Only
                      </span>
                    </td>
                    <td className="py-5 pl-5">
                      <div className="flex items-center justify-end gap-4 text-slate-700">
                        <button className="rounded-md p-1 transition hover:bg-slate-100 hover:text-blue-700">
                          <Eye size={18} />
                        </button>
                        <button className="rounded-md p-1 transition hover:bg-slate-100 hover:text-blue-700">
                          <Download size={18} />
                        </button>
                        <button className="rounded-md p-1 transition hover:bg-slate-100">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-slate-500">
              Showing 1 to {filteredDocuments.length} of {filteredDocuments.length} results
            </p>

            <div className="flex items-center gap-3">
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50">
                <ChevronLeft size={19} />
              </button>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-sm font-bold text-blue-700">
                1
              </button>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-900 transition hover:bg-slate-50">
                2
              </button>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-900 transition hover:bg-slate-50">
                3
              </button>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-900">
                ...
              </button>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-900 transition hover:bg-slate-50">
                8
              </button>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50">
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </Viewer>
  );
}
