import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
import TenantHeader from "../components/TenantHeader";
import TenantStats from "../components/TenantStats";
import DocumentActivity from "../components/DocumentActivity";
import FeatureCards from "../components/FeatureCards";
import SecurityProfile from "../components/SecurityProfile";
// import RegionCard from "../components/RegionCard";
import AuditTable from "../components/AuditTable";

export default function TenantDetails() {
  return (
    <div className="flex min-h-screen bg-[#F7F8FC]">
      <Sidebar />

      <div className="flex-1">
        <TopNavbar />

        <div className="p-6">
          <TenantHeader />

          <div className="grid grid-cols-12 gap-5 mt-5">
            <div className="col-span-9 space-y-5">
              <TenantStats />
              <DocumentActivity />
              <FeatureCards />
              <AuditTable />
            </div>

            <div className="col-span-3 space-y-5">
              <SecurityProfile />
              {/* <RegionCard /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}