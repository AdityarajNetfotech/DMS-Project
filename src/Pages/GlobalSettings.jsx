import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

import SettingsHeader from "../settings/SettingsHeader";
import SettingsTabs from "../settings/SettingsTabs";
import GeneralConfigCard from "../settings/GeneralConfigCard";
import SecurityCard from "../settings/SecurityCard";
import FileSettingsCard from "../settings/FileSettingsCard";
import EmailSMTPCard from "../settings/EmailSMTPCard";
export default function GlobalSettings() {
  return (
    <div className="flex min-h-screen bg-[#F7F8FC]">
      <Sidebar />

      <div className="flex-1">
        <TopNavbar />

        <div className="p-6">
          <SettingsHeader />

          <div className="mt-6 flex gap-8"dx2>
            <SettingsTabs />

            <div className="flex-1 space-y-6">
              <GeneralConfigCard />
              <SecurityCard />
              <FileSettingsCard />
              <EmailSMTPCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}