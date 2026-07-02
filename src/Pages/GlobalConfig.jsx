import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
// import FeatureHeader from "../components/globalConfig/FeatureHeader";
import FeatureHeader from "../globalConfig/FeatureHeader";
import FeatureGrid from "../globalConfig/FeatureGrid";
import PlatformVelocity from "../globalConfig/PlatformVelocity";
import BottomActionBar from "../globalConfig/BottomActionBar";

export default function GlobalConfig() {
  return (
    <div className="flex bg-[#F6F7FC] min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <TopNavbar />

        <div className="px-8 py-6">
          <FeatureHeader />

          <div className="mt-6">
            <FeatureGrid />
          </div>

          <BottomActionBar />
        </div>
      </div>
    </div>
  );
}