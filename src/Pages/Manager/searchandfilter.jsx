import { useMemo, useState } from "react";

import {
  ArrowUpDown,
  Bookmark,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Eye,
  FileSpreadsheet,
  FileText,
  Filter,
  Folder,
  MoreVertical,
  Presentation,
  Search,
  SlidersHorizontal,
  Tag,
  UserRound,
} from "lucide-react";

import MainLayout from "../../layout/MainLayout";

const defaultFilters = {
  documentType: "All Types",
  uploadedBy: "All Users",
  dateRange: "Any Time",
  tag: "All Tags",
  fileSize: "Any Size",
  accessLevel: "Any Access Level",
  department: "Any Department",
  dateModified: "Any Time",
  owner: "Any Owner",
  hasVersion: "Any",
  shared: "Any",
};

const filterButtons = [
  {
    key: "documentType",
    label: "Document Type",
    icon: FileText,
    options: ["All Types", "PDF", "Excel", "Word", "PowerPoint"],
  },
  {
    key: "uploadedBy",
    label: "Uploaded By",
    icon: UserRound,
    options: [
      "All Users",
      "Manager",
      "John Doe",
      "Jane Smith",
      "Robert Brown",
      "Sarah Wilson",
    ],
  },
  {
    key: "dateRange",
    label: "Date Range",
    icon: Calendar,
    options: ["Any Time", "Last 7 Days", "Last 30 Days", "Older"],
  },
  {
    key: "tag",
    label: "Tags",
    icon: Tag,
    options: ["All Tags", "Finance", "Report", "Budget", "Audit", "Summary"],
  },
];

const moreFilters = [
  {
    key: "fileSize",
    label: "File Size",
    options: ["Any Size", "Under 2 MB", "2 MB and Above"],
  },
  {
    key: "accessLevel",
    label: "Access Level",
    options: ["Any Access Level", "Private", "Department", "Public"],
  },
  {
    key: "department",
    label: "Department",
    options: ["Any Department", "Finance", "HR", "Audit", "Operations"],
  },
  {
    key: "dateModified",
    label: "Date Modified",
    options: ["Any Time", "Last 7 Days", "Last 30 Days", "Older"],
  },
  {
    key: "owner",
    label: "Owner",
    options: [
      "Any Owner",
      "Manager",
      "John Doe",
      "Jane Smith",
      "Robert Brown",
      "Sarah Wilson",
    ],
  },
  { key: "hasVersion", label: "Has Version", options: ["Any", "Yes", "No"] },
  { key: "shared", label: "Shared", options: ["Any", "Yes", "No"] },
];

const results = [
  {
    name: "Q2 Financial Report.xlsx",
    owner: "Manager",
    avatar: "M",
    modified: "May 16, 2025 10:30 AM",
    size: "2.4 MB",
    type: "Excel",
    location: "Project Alpha / Reports",
    kind: "excel",
    tags: ["Finance", "Report"],
    accessLevel: "Department",
    department: "Finance",
    hasVersion: true,
    shared: true,
    starred: true,
  },
  {
    name: "Annual Financial Report.pdf",
    owner: "Manager",
    avatar: "M",
    modified: "May 15, 2025 02:15 PM",
    size: "2.2 MB",
    type: "PDF",
    location: "Finance / Reports",
    kind: "pdf",
    tags: ["Finance", "Report"],
    accessLevel: "Public",
    department: "Finance",
    hasVersion: true,
    shared: true,
    starred: false,
  },
  {
    name: "Financial Summary 2024.xlsx",
    owner: "Manager",
    avatar: "M",
    modified: "May 14, 2025 11:05 AM",
    size: "1.8 MB",
    type: "Excel",
    location: "HR Documents / Reports",
    kind: "excel",
    tags: ["Finance", "Summary"],
    accessLevel: "Department",
    department: "HR",
    hasVersion: false,
    shared: false,
    starred: false,
  },
  {
    name: "Financial Analysis.docx",
    owner: "John Doe",
    avatar: "J",
    modified: "May 13, 2025 04:20 PM",
    size: "1.6 MB",
    type: "Word",
    location: "Project Alpha / Finance",
    kind: "word",
    tags: ["Finance"],
    accessLevel: "Private",
    department: "Finance",
    hasVersion: true,
    shared: false,
    starred: true,
  },
  {
    name: "Q1 Financial Report.pdf",
    owner: "Jane Smith",
    avatar: "J",
    modified: "May 12, 2025 09:25 AM",
    size: "1.9 MB",
    type: "PDF",
    location: "Finance / Q1 Reports",
    kind: "pdf",
    tags: ["Finance", "Report"],
    accessLevel: "Department",
    department: "Finance",
    hasVersion: true,
    shared: true,
    starred: false,
  },
  {
    name: "Financial Overview.pptx",
    owner: "Manager",
    avatar: "M",
    modified: "May 11, 2025 03:10 PM",
    size: "3.1 MB",
    type: "PowerPoint",
    location: "Project Alpha / Presentations",
    kind: "powerpoint",
    tags: ["Finance", "Summary"],
    accessLevel: "Public",
    department: "Operations",
    hasVersion: false,
    shared: true,
    starred: false,
  },
  {
    name: "Budget vs Actual.xlsx",
    owner: "Robert Brown",
    avatar: "R",
    modified: "May 10, 2025 10:45 AM",
    size: "2.0 MB",
    type: "Excel",
    location: "Finance / Budget",
    kind: "excel",
    tags: ["Finance", "Budget"],
    accessLevel: "Private",
    department: "Finance",
    hasVersion: false,
    shared: false,
    starred: true,
  },
  {
    name: "Audit Financial Report.pdf",
    owner: "Sarah Wilson",
    avatar: "S",
    modified: "May 9, 2025 02:40 PM",
    size: "2.3 MB",
    type: "PDF",
    location: "Audit / Reports",
    kind: "pdf",
    tags: ["Finance", "Audit", "Report"],
    accessLevel: "Department",
    department: "Audit",
    hasVersion: true,
    shared: true,
    starred: false,
  },
];

const iconClass = {
  excel: "bg-emerald-100 text-emerald-600",
  pdf: "bg-red-100 text-red-600",
  word: "bg-blue-100 text-blue-700",
  powerpoint: "bg-orange-100 text-orange-600",
};

function DropdownButton({ label, icon: Icon, active, isOpen, onClick, children }) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onClick}
        className={`inline-flex h-11 items-center justify-between gap-3 rounded-lg border px-4 text-sm font-semibold transition ${
          active
            ? "border-blue-600 bg-blue-50 text-blue-700"
            : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
        }`}
      >
        <span className="flex items-center gap-3">
          {Icon ? <Icon size={18} /> : null}
          {label}
        </span>
        <ChevronDown size={17} className={`transition ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </button>

      {isOpen ? (
        <div className="absolute z-20 mt-2 w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}

function SelectBox({ label, value, options, onChange }) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-900">{label}</label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-left text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function ResultIcon({ kind }) {
  const className = `flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
    iconClass[kind] || "bg-slate-100 text-slate-500"
  }`;

  if (kind === "excel") {
    return (
      <div className={className}>
        <FileSpreadsheet size={18} />
      </div>
    );
  }

  if (kind === "powerpoint") {
    return (
      <div className={className}>
        <Presentation size={18} />
      </div>
    );
  }

  return (
    <div className={className}>
      <FileText size={18} />
    </div>
  );
}

function Avatar({ value }) {
  const isManager = value === "M";

  return (
    <span
      className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
        isManager ? "bg-blue-700 text-white" : "bg-slate-200 text-slate-700"
      }`}
    >
      {value}
    </span>
  );
}

export default function Searchandfilter() {
  const [searchTerm, setSearchTerm] = useState("financial report");
  const [filters, setFilters] = useState(defaultFilters);
  const [openFilter, setOpenFilter] = useState(null);
  const [showMoreFilters, setShowMoreFilters] = useState(true);
  const [starredOnly, setStarredOnly] = useState(false);
  const [sortBy, setSortBy] = useState("Relevance");

  const filteredResults = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    const selectedDateFilter =
      filters.dateRange !== defaultFilters.dateRange
        ? filters.dateRange
        : filters.dateModified !== defaultFilters.dateModified
          ? filters.dateModified
          : "Any Time";

    const parseDate = (value) => Date.parse(value);

    const matchesDate = (value) => {
      if (selectedDateFilter === "Any Time" || selectedDateFilter === "Any") {
        return true;
      }

      const referenceDate = new Date("2025-05-16T12:00:00");
      const resultDate = parseDate(value);
      if (Number.isNaN(resultDate)) return true;

      const differenceInDays = Math.round((referenceDate - resultDate) / (1000 * 60 * 60 * 24));

      if (selectedDateFilter === "Last 7 Days") return differenceInDays <= 7;
      if (selectedDateFilter === "Last 30 Days") return differenceInDays <= 30;
      return differenceInDays > 30;
    };

    const matchesSize = (size) => {
      const sizeNumber = Number.parseFloat(size);
      if (filters.fileSize === "Any Size") return true;
      if (filters.fileSize === "Under 2 MB") return sizeNumber < 2;
      return sizeNumber >= 2;
    };

    const matchesVersion = (hasVersion) => {
      if (filters.hasVersion === "Any") return true;
      return filters.hasVersion === "Yes" ? hasVersion : !hasVersion;
    };

    const matchesShared = (shared) => {
      if (filters.shared === "Any") return true;
      return filters.shared === "Yes" ? shared : !shared;
    };

    return results
      .filter((result) => {
        const searchableText = [result.name, result.owner, result.location, result.type, ...result.tags]
          .join(" ")
          .toLowerCase();

        return (
          (!query || searchableText.includes(query)) &&
          (filters.documentType === "All Types" || result.type === filters.documentType) &&
          (filters.uploadedBy === "All Users" || result.owner === filters.uploadedBy) &&
          matchesDate(result.modified) &&
          (filters.tag === "All Tags" || result.tags.includes(filters.tag)) &&
          matchesSize(result.size) &&
          (filters.accessLevel === "Any Access Level" || result.accessLevel === filters.accessLevel) &&
          (filters.department === "Any Department" || result.department === filters.department) &&
          (filters.owner === "Any Owner" || result.owner === filters.owner) &&
          matchesVersion(result.hasVersion) &&
          matchesShared(result.shared) &&
          (!starredOnly || result.starred)
        );
      })
      .sort((left, right) => {
        if (sortBy === "Newest") {
          return parseDate(right.modified) - parseDate(left.modified);
        }
        if (sortBy === "Oldest") {
          return parseDate(left.modified) - parseDate(right.modified);
        }
        if (sortBy === "Name") {
          return left.name.localeCompare(right.name);
        }
        return 0;
      });
  }, [filters, searchTerm, starredOnly, sortBy]);

  const handleReset = () => {
    setSearchTerm("");
    setFilters(defaultFilters);
    setOpenFilter(null);
    setStarredOnly(false);
    setSortBy("Relevance");
  };

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
    setOpenFilter(null);
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <section>
          <h1 className="text-3xl font-bold tracking-normal text-slate-950">
            Search & Filters
          </h1>
          <p className="mt-3 text-base text-slate-500">
            Find documents quickly with advanced filters.
          </p>
        </section>

        <section className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="relative block sm:w-[500px]">
              <Search
                size={19}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search documents..."
                className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </label>

            <button
              type="button"
              onClick={() => setSearchTerm((current) => current.trim())}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
            >
              <Search size={17} />
              Search
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Clear
            </button>
          </div>

          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
            <Bookmark size={18} />
            Save Search
          </button>
        </section>

        <section className="flex flex-wrap gap-4">
          {filterButtons.map((filter) => (
            <DropdownButton
              key={filter.key}
              label={filter.label}
              icon={filter.icon}
              active={filters[filter.key] !== defaultFilters[filter.key]}
              isOpen={openFilter === filter.key}
              onClick={() => setOpenFilter((current) => (current === filter.key ? null : filter.key))}
            >
              <div className="space-y-1">
                {filter.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleFilterChange(filter.key, option)}
                    className={`block w-full rounded-md px-3 py-2 text-left text-sm font-medium transition ${
                      filters[filter.key] === option
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </DropdownButton>
          ))}

          <button
            type="button"
            onClick={() => setShowMoreFilters((current) => !current)}
            className={`inline-flex h-11 items-center justify-between gap-3 rounded-lg border px-4 text-sm font-semibold transition ${
              showMoreFilters
                ? "border-blue-600 bg-blue-50 text-blue-700"
                : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
            }`}
          >
            <span className="flex items-center gap-3">
              <Filter size={18} />
              More Filters
            </span>
            <ChevronDown size={17} className={`transition ${showMoreFilters ? "rotate-180" : "rotate-0"}`} />
          </button>
        </section>

        {showMoreFilters ? (
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-3 text-sm font-bold text-blue-700">
                <SlidersHorizontal size={18} />
                More Filters
              </h2>
              <ChevronUp size={18} className="text-blue-700" />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {moreFilters.map((filter) => (
                <SelectBox
                  key={filter.key}
                  label={filter.label}
                  value={filters[filter.key]}
                  options={filter.options}
                  onChange={(value) => setFilters((current) => ({ ...current, [filter.key]: value }))}
                />
              ))}

              <div className="flex items-center gap-3 pt-7">
                <button
                  type="button"
                  onClick={() => setStarredOnly((current) => !current)}
                  className={`relative h-6 w-11 rounded-full transition ${starredOnly ? "bg-blue-700" : "bg-slate-400 hover:bg-slate-500"}`}
                  aria-label="Toggle starred only"
                >
                  <span className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${starredOnly ? "left-6" : "left-1"}`} />
                </button>
                <span className="text-sm font-semibold text-slate-900">
                  Starred Only
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowMoreFilters(false)}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setShowMoreFilters(false)}
                className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-700 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                Apply Filters
              </button>
            </div>
          </section>
        ) : null}

        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Showing {filteredResults.length ? 1 : 0} to {filteredResults.length} of {filteredResults.length} results{searchTerm ? ` for “${searchTerm}”` : ""}
          </p>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="h-10 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 outline-none"
          >
            <option value="Relevance">Sort by: Relevance</option>
            <option value="Newest">Sort by: Newest</option>
            <option value="Oldest">Sort by: Oldest</option>
            <option value="Name">Sort by: Name</option>
          </select>
        </section>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] table-fixed text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm font-semibold text-slate-500">
                  <th className="w-[24%] px-6 py-4">
                    <span className="inline-flex items-center gap-2">
                      Name <ArrowUpDown size={15} />
                    </span>
                  </th>
                  <th className="w-[14%] px-5 py-4">Uploaded By</th>
                  <th className="w-[17%] px-5 py-4">
                    <span className="inline-flex items-center gap-2">
                      Last Modified <ArrowUpDown size={15} />
                    </span>
                  </th>
                  <th className="w-[9%] px-5 py-4">Size</th>
                  <th className="w-[11%] px-5 py-4">Type</th>
                  <th className="w-[20%] px-5 py-4">Location</th>
                  <th className="w-[5%] px-5 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {filteredResults.map((result) => (
                  <tr
                    key={result.name}
                    className="text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <ResultIcon kind={result.kind} />
                        <span className="truncate">{result.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar value={result.avatar} />
                        <span className="truncate">{result.owner}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">{result.modified}</td>
                    <td className="px-5 py-4">{result.size}</td>
                    <td className="px-5 py-4">{result.type}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <Folder size={18} className="shrink-0 text-slate-700" />
                        <span className="truncate">{result.location}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-800 transition hover:bg-slate-100"
                          aria-label={`Preview ${result.name}`}
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-800 transition hover:bg-slate-100"
                          aria-label={`Open actions for ${result.name}`}
                        >
                          <MoreVertical size={19} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Showing {filteredResults.length ? 1 : 0} to {filteredResults.length} of {filteredResults.length} results
            </p>

            <div className="flex items-center gap-3">
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:bg-slate-50"
                aria-label="Previous page"
              >
                <ChevronLeft size={19} />
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-semibold transition ${
                    page === 1
                      ? "border-blue-700 bg-blue-700 text-white"
                      : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                  }`}
                  aria-label={`Page ${page}`}
                >
                  {page}
                </button>
              ))}
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50"
                aria-label="Next page"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
