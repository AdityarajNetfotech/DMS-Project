import { Routes, Route } from 'react-router-dom'
// import LoginPage from './Pages/LoginPage'
// import LandingPage from './components/LandingPage/landingpage';
import LoginPage from './Pages/LoginPage'
import Dashboard from "./Pages/Dashboard";
import TenantManagement from "./Pages/TenantManagement";
import SystemHealth from "./Pages/SystemHealth";
import TenantDetails from "./Pages/TenantDetails";
import GlobalConfig from "./Pages/GlobalConfig";
import GlobalSettings from "./Pages/GlobalSettings";
import UserManagement from "./Pages/Admin/UserManagement";
import WorkspaceConfiguration from "./Pages/Admin/WorkspaceConfiguration";
import AccessSecurity from "./Pages/Admin/AccessSecurity";
import StorageReporting from "./Pages/Admin/StorageReporting";
import Settings from "./Pages/Admin/Settings";
import HelpCenter from "./Pages/Admin/HelpCenter";
import Dashboards from "./Pages/Manager/Dashboards";
import MyDocuments from "./Pages/Manager/Mydocument";
import FolderExployer from "./Pages/Manager/Folder_Exployer";
import UploadDocument from "./Pages/Manager/UploadDocument";
import Documentversionhistory from "./Pages/Manager/Documentversionhistory";
import Searchandfilter from "./Pages/Manager/searchandfilter";
import Permission from "./Pages/Manager/Permission";
import Activitylogs from "./Pages/Manager/Activitylogs";
import ProfileSettings from "./Pages/Manager/ProfileSettings";
import Trash from "./Pages/Manager/Trash";
import SharedWithMe from "./Pages/Manager/SharedWithMe";
import RecentDocuments from "./Pages/Manager/RecentDocuments";
import ViewerDashboard from "./Pages/Viewer/Dashboard";
import ViewerMyDocument from "./Pages/Viewer/MyDocument";
import ViewerSharedWithMe from "./Pages/Viewer/SharedWithme";
import SearchResults from "./Pages/Viewer/SearchResult";
import ViewerTrash from "./Pages/Viewer/Trash";
import Profilepage from "./Pages/Viewer/Profilepage";
// import SearchResult from "./Pages/Viewer/SearchPage";
// import SharedWithMe from "./Pages/Manager/SharedWithMe";
import SharedWithme from "./Pages/Viewer/SharedWithme";
import LandingPage from "./components/LandingPage/landingpage";
  
function App() {
  return (
    <Routes>
      
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/landing" element={<LandingPage />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tenants" element={<TenantManagement />} />
      <Route path="/system-health" element={<SystemHealth />} />
      <Route path="/tenantsdetails" element={<TenantDetails />} />
      <Route path="/global-config" element={<GlobalConfig />} />
      <Route path="/global-settings" element={<GlobalSettings />} />

      {/* Admin Routes */}
      <Route path="/admin/user-management" element={<UserManagement />} />
      <Route path="/admin/workspace-configuration" element={<WorkspaceConfiguration />} />
      <Route path="/admin/access-security" element={<AccessSecurity />} />
      <Route path="/admin/storage-reporting" element={<StorageReporting />} />
      <Route path="/admin/settings" element={<Settings />} />
      <Route path="/admin/help-center" element={<HelpCenter />} />

      {/* Manager Routes */}
      <Route path="/manager/dashboard" element={<Dashboards />} />
      <Route path="/manager/my-documents" element={<MyDocuments />} />
      <Route path="/documents" element={<MyDocuments />} />
      <Route path="/manager/folder-explorer" element={<FolderExployer />} />
      <Route path="/folders" element={<FolderExployer />} />
      <Route path="/manager/upload-document" element={<UploadDocument />} />
      <Route path="/upload-document" element={<UploadDocument />} />
      <Route path="/manager/document-version-history" element={<Documentversionhistory />} />
      <Route path="/document-version-history" element={<Documentversionhistory />} />
      <Route path="/manager/search-filters" element={<Searchandfilter />} />
      <Route path="/search" element={<Searchandfilter />} />
      <Route path="/manager/shared-with-me" element={<SharedWithMe />} />
      <Route path="/shared" element={<SharedWithMe />} />
      <Route path="/manager/recent-documents" element={<RecentDocuments />} />
      <Route path="/recent-documents" element={<RecentDocuments />} />
      <Route path="/manager/permissions" element={<Permission />} />
      <Route path="/permissions" element={<Permission />} />
      <Route path="/manager/activity-logs" element={<Activitylogs />} />
      <Route path="/logs" element={<Activitylogs />} />
      <Route path="/manager/trash" element={<Trash />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="/manager/profile-settings" element={<ProfileSettings />} />
      <Route path="/profile" element={<ProfileSettings />} />

      {/* Viewer Routes */}
      <Route path="/viewer/dashboard" element={<ViewerDashboard />} />
      <Route path="/viewer/my-documents" element={<ViewerMyDocument />} />
      <Route path="/viewer/shared-with-me" element={<ViewerSharedWithMe />} />
      <Route path="/viewer/my-access" element={<SearchResults />} />
      <Route path="/viewer/profile" element={<Profilepage />} />
      <Route path="/viewer/recent" element={<SharedWithme />} />
      <Route path="/viewer/trash" element={<ViewerTrash />} />
      {/* <Route path="/viewer/favorites" element={<ViewerDashboard />} />
      <Route path="/viewer/trash" element={<ViewerDashboard />} /> */}

    </Routes>
  )
}

export default App
