import { useMemo, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  Filter,
  Grid2X2,
  List,
  MoreVertical,
  Search,
  Star,
  UploadCloud,
} from "lucide-react";

import Viewer from "../../components/Viewer/Viewer";

const documents = [
  {
    name: "Project Proposal.pdf",
    folder: "Projects/2025",
    meta: "2.4 MB • 2 hours ago",
    type: "PDF",
    color: "bg-red-600",
    favorite: false,
  },
  {
    name: "Meeting Notes.docx",
    folder: "Meetings/Team",
    meta: "850 KB • Yesterday",
    type: "W",
    color: "bg-blue-600",
    favorite: false,
  },
  {
    name: "Budget Report.xlsx",
    folder: "Finance/Reports",
    meta: "1.1 MB • 2 days ago",
    type: "X",
    color: "bg-emerald-600",
    favorite: false,
  },
  {
    name: "Company Policy.pdf",
    folder: "HR/Policies",
    meta: "1.8 MB • 3 days ago",
    type: "PDF",
    color: "bg-red-600",
    favorite: true,
  },
  {
    name: "Product Overview.pptx",
    folder: "Presentations",
    meta: "3.2 MB • 4 days ago",
    type: "P",
    color: "bg-orange-500",
    favorite: false,
  },
  {
    name: "Assets.zip",
    folder: "Marketing/Assets",
    meta: "24 MB • 5 days ago",
    type: "ZIP",
    color: "bg-violet-600",
    favorite: false,
  },
  {
    name: "Invoice_2025.pdf",
    folder: "Finance/Invoices",
    meta: "620 KB • 1 week ago",
    type: "PDF",
    color: "bg-red-600",
    favorite: false,
  },
  {
    name: "Sales Data.xlsx",
    folder: "Sales/Reports",
    meta: "2.6 MB • 1 week ago",
    type: "X",
    color: "bg-emerald-600",
    favorite: false,
  },
  {
    name: "Client Agreement.docx",
    folder: "Legal/Contracts",
    meta: "1.3 MB • 1 week ago",
    type: "W",
    color: "bg-blue-600",
    favorite: false,
  },
  {
    name: "User Guide.pdf",
    folder: "IT/Documentation",
    meta: "4.7 MB • 2 weeks ago",
    type: "PDF",
    color: "bg-red-600",
    favorite: false,
  },
];

function SelectButton({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="flex h-11 min-w-[140px] items-center justify-between rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 outline-none transition hover:bg-slate-50"
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
    <div className="relative flex h-20 w-16 items-center justify-center rounded-md border border-slate-200 bg-slate-50 shadow-sm">
      <span className="absolute right-0 top-0 h-0 w-0 border-l-[16px] border-t-[16px] border-l-slate-200 border-t-white" />
      <span
        className={`flex h-11 min-w-11 items-center justify-center rounded ${color} px-2 text-base font-bold text-white shadow-sm`}
      >
        {type}
      </span>
    </div>
  );
}

function DocumentCard({ document }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex justify-end">
        <button
          className={`rounded-md p-1 transition hover:bg-slate-100 ${
            document.favorite ? "text-amber-500" : "text-slate-400"
          }`}
          aria-label={`Favorite ${document.name}`}
        >
          <Star
            size={21}
            fill={document.favorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="-mt-2 flex justify-center">
        <FileIcon type={document.type} color={document.color} />
      </div>

      <div className="mt-6">
        <h2 className="truncate text-base font-bold text-slate-950">
          {document.name}
        </h2>
        <p className="mt-2 truncate text-sm font-medium text-slate-500">
          {document.folder}
        </p>
        <p className="mt-3 text-sm font-medium text-slate-700">
          {document.meta}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button
          className="inline-flex h-9 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          aria-label={`Preview ${document.name}`}
        >
          <Eye size={18} />
        </button>
        <button
          className="inline-flex h-9 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100"
          aria-label={`Download ${document.name}`}
        >
          <Download size={18} />
        </button>
        <button
          className="inline-flex h-9 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100"
          aria-label={`Open actions for ${document.name}`}
        >
          <MoreVertical size={19} />
        </button>
      </div>
    </article>
  );
}

export default function MyDocument() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [folderFilter, setFolderFilter] = useState("All Folders");
  const [dateFilter, setDateFilter] = useState("Date Modified");

  const typeOptions = ["All Types", "PDF", "DOCX", "XLSX", "PPTX", "ZIP"];
  const folderOptions = [
    "All Folders",
    "Projects/2025",
    "Meetings/Team",
    "Finance/Reports",
    "HR/Policies",
    "Presentations",
    "Marketing/Assets",
    "Finance/Invoices",
    "Sales/Reports",
    "Legal/Contracts",
    "IT/Documentation",
  ];
  const dateOptions = ["Date Modified", "Newest", "Oldest"];

  const filteredDocuments = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return documents.filter((document) => {
      const matchesSearch =
        !query ||
        [document.name, document.folder, document.meta, document.type]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesType =
        typeFilter === "All Types" || document.type === typeFilter;
      const matchesFolder =
        folderFilter === "All Folders" || document.folder === folderFilter;
      const matchesDate =
        dateFilter === "Date Modified" ||
        (dateFilter === "Newest" && document.meta.includes("hours ago")) ||
        (dateFilter === "Oldest" && document.meta.includes("weeks ago"));

      return matchesSearch && matchesType && matchesFolder && matchesDate;
    });
  }, [searchTerm, typeFilter, folderFilter, dateFilter]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setTypeFilter("All Types");
    setFolderFilter("All Folders");
    setDateFilter("Date Modified");
  };

  return (
    <Viewer>
      <div className="mx-auto max-w-[1500px] space-y-7">
        <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-normal text-slate-950 md:text-3xl">
              My Documents
            </h1>
            <p className="mt-3 text-base font-medium text-slate-500">
              View and manage documents you have access to.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button className="inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700">
              <UploadCloud size={19} />
              Upload Document
            </button>
            <button className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-blue-700 transition hover:bg-blue-100">
              <Grid2X2 size={21} />
            </button>
            <button className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50">
              <List size={21} />
            </button>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-200 p-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-1 flex-col gap-4 md:flex-row md:flex-wrap">
              <label className="relative block md:w-[310px]">
                <Search
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search in my documents..."
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <SelectButton
                label="Type"
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value)}
                options={typeOptions}
              />
              <SelectButton
                label="Folder"
                value={folderFilter}
                onChange={(event) => setFolderFilter(event.target.value)}
                options={folderOptions}
              />
              <SelectButton
                label="Date"
                value={dateFilter}
                onChange={(event) => setDateFilter(event.target.value)}
                options={dateOptions}
              />

              <button className="inline-flex h-11 items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
                <Filter size={18} />
                Filters
              </button>
            </div>

            <button
              type="button"
              onClick={handleClearFilters}
              className="h-11 rounded-lg border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Clear
            </button>
          </div>

          <div className="p-5">
            <p className="mb-5 text-sm font-bold text-slate-800">
              Documents ({filteredDocuments.length})
            </p>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
              {filteredDocuments.map((document) => (
                <DocumentCard key={document.name} document={document} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-slate-100 px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
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
