import { useState } from "react";
import { ChevronDown, Eye, EyeOff } from "lucide-react";

import MainLayout from "../../layout/MainLayout";

function Field({ label, value, type = "text" }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-900">{label}</span>
      <input
        type={type}
        defaultValue={value}
        className="mt-2 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </label>
  );
}

function PasswordField({ label, placeholder, hint }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="block">
      <span className="text-sm font-semibold text-slate-900">{label}</span>
      <div className="relative mt-2">
        <input
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 pr-12 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        <button
          type="button"
          aria-label={isVisible ? "Hide password" : "Show password"}
          onClick={() => setIsVisible((visible) => !visible)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
        >
          {isVisible ? <EyeOff size={19} /> : <Eye size={19} />}
        </button>
      </div>
      {hint ? (
        <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-slate-500">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
export default function Profilepage() {
  const [activeTab, setActiveTab] = useState("profile");
  const isProfileTab = activeTab === "profile";

  return (
    <MainLayout>
      <div className="space-y-6">
        <section>
          <h1 className="text-2xl font-bold tracking-normal text-slate-950 md:text-3xl">
            7. Profile Settings
          </h1>
          <p className="mt-3 text-base text-slate-500">
            Update your profile information and security settings.
          </p>
        </section>

        <section className="border-b border-slate-200">
          <div className="flex gap-8 px-1">
            <button
              type="button"
              onClick={() => setActiveTab("profile")}
              className={`relative pb-4 text-sm transition ${
                isProfileTab
                  ? "font-bold text-blue-700"
                  : "font-semibold text-slate-500 hover:text-slate-900"
              }`}
            >
              Profile Information
              {isProfileTab ? (
                <span className="absolute inset-x-0 bottom-[-1px] h-0.5 rounded-full bg-blue-700" />
              ) : null}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("password")}
              className={`relative pb-4 text-sm transition ${
                !isProfileTab
                  ? "font-bold text-blue-700"
                  : "font-semibold text-slate-500 hover:text-slate-900"
              }`}
            >
              Change Password
              {!isProfileTab ? (
                <span className="absolute inset-x-0 bottom-[-1px] h-0.5 rounded-full bg-blue-700" />
              ) : null}
            </button>
          </div>
        </section>

        {isProfileTab ? (
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_0.95fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-7">
              <h2 className="text-xl font-bold text-slate-950">
                Profile Information
              </h2>

              <div className="mt-6 space-y-5">
                <Field label="Full Name" value="Manager" />
                <Field label="Email" value="manager@company.com" type="email" />
                <Field label="Phone" value="+1 (555) 123-4567" type="tel" />

                <label className="block">
                  <span className="text-sm font-semibold text-slate-900">
                    Department
                  </span>
                  <button className="mt-2 flex h-12 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-4 text-left text-sm font-medium text-slate-900 transition hover:bg-slate-50">
                    Operations
                    <ChevronDown size={19} className="text-slate-500" />
                  </button>
                </label>
              </div>

              <button className="mt-7 inline-flex h-13 min-w-[225px] items-center justify-center rounded-lg bg-blue-700 px-8 text-base font-bold text-white shadow-sm transition hover:bg-blue-800">
                Save Changes
              </button>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-7">
              <h2 className="text-xl font-bold text-slate-950">
                Profile Picture
              </h2>

              <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
                <div className="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-slate-100 to-slate-300">
                  <span className="text-7xl font-bold text-slate-500">M</span>
                  <div className="absolute -bottom-9 h-24 w-36 rounded-[50%] bg-slate-500/60" />
                </div>

                <button className="mt-10 inline-flex h-13 min-w-[205px] items-center justify-center rounded-lg bg-blue-700 px-8 text-base font-bold text-white shadow-sm transition hover:bg-blue-800">
                  Change Picture
                </button>

                <p className="mt-5 text-sm font-medium text-slate-500">
                  PNG, JPG or GIF. Max size 3MB
                </p>
              </div>
            </div>
          </section>
        ) : (
          <section className="max-w-5xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-bold text-slate-950">
              Change Password
            </h2>
            <p className="mt-3 text-base text-slate-500">
              Update your password to keep your account secure.
            </p>

            <div className="mt-9 space-y-8">
              <PasswordField
                label="Current Password"
                placeholder="Enter current password"
              />
              <PasswordField
                label="New Password"
                placeholder="Enter new password"
                hint="Password must be at least 8 characters long and include uppercase, lowercase, number and special character."
              />
              <PasswordField
                label="Confirm New Password"
                placeholder="Confirm new password"
              />
            </div>

            <button className="mt-8 inline-flex h-13 min-w-[215px] items-center justify-center rounded-lg bg-blue-700 px-8 text-base font-bold text-white shadow-sm transition hover:bg-blue-800">
              Update Password
            </button>
          </section>
        )}
      </div>
    </MainLayout>
  );
}
