import { useRef } from "react";

import MainLayout from "../../layout/MainLayout";

import PageHeader from "../../components/Manager/PageHeader";
import StatCard from "../../components/Manager/StatCard";
import DocumentTable from "../../components/Manager/DocumentTable";
import StorageOverview from "../../components/Manager/StorageOverview";
import QuickActions from "../../components/Manager/QuickActions";
import RecentActivity from "../../components/Manager/Recent_Activity_Timeline";
import TeamMembers from "../../components/Manager/Team_Members";
import WelcomeBanner from "../../components/Manager/WelcomeBanner";
import StorageUsage from "../../components/Manager/StorageUsage";
import NotificationPanel from "../../components/Manager/NotificationPanel";
import AIInsights from "../../components/Manager/AIInsights";

import {
  FileText,
  FolderOpen,
  Share2,
  Upload,
} from "lucide-react";

export default function Dashboard() {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const documents = [
    {
      name: "Project Proposal.pdf",
      owner: "John Doe",
      type: "PDF",
      size: "2.4 MB",
      modified: "2 hrs ago",
    },
    {
      name: "Budget Report.xlsx",
      owner: "Sarah",
      type: "XLSX",
      size: "1.1 MB",
      modified: "Yesterday",
    },
    {
      name: "Meeting Notes.docx",
      owner: "Alex",
      type: "DOCX",
      size: "850 KB",
      modified: "3 days ago",
    },
    {
      name: "Employee Handbook.pdf",
      owner: "Emma",
      type: "PDF",
      size: "5.3 MB",
      modified: "1 week ago",
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          aria-label="Upload document"
        />

        {/* Welcome Banner */}
        <WelcomeBanner />

        {/* Header */}
        <PageHeader
          title="Dashboard"
          subtitle="Welcome back. Here's an overview of your workspace."
          buttonText="Upload Document"
          icon={Upload}
          onButtonClick={handleUploadClick}
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <StatCard
            title="Total Documents"
            value="1,248"
            icon={FileText}
            color="bg-blue-600"
          />

          <StatCard
            title="Folders"
            value="84"
            icon={FolderOpen}
            color="bg-emerald-600"
          />

          <StatCard
            title="Shared Files"
            value="216"
            icon={Share2}
            color="bg-purple-600"
          />

          <StatCard
            title="Recent Uploads"
            value="39"
            icon={Upload}
            color="bg-orange-500"
          />
        </div>

        {/* Table + Storage */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <DocumentTable
              title="Recent Documents"
              data={documents}
            />
          </div>

          <StorageOverview />
        </div>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <QuickActions />
          <RecentActivity />
          <TeamMembers />
        </div>

        {/* Extra Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StorageUsage />
          <NotificationPanel />
          <AIInsights />
          <TeamMembers />
        </div>
      </div>
    </MainLayout>
  );
}
