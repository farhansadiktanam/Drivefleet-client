"use client";

import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
import { User, LogOut, Icon } from "lucide-react";
import { authClient } from "@/lib/auth-client";
// import { useAuth } from "@/context/AuthContext";
// import toast from "react-hot-toast";

export default function ProfilePage() {
  // const { user, loading, logout } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!loading && !user) router.push("/login");
  // }, [user, loading, router]);

  // if (loading)
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="w-10 h-10 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
  //     </div>
  //   );

  // if (!user) return null;

  // const handleLogout = async () => {
  //   await logout();
  //   toast.success("Logged out!");
  //   router.push("/");
  // };

  // const initials =
  //   user.displayName
  //     ?.split(" ")
  //     .map((n) => n[0])
  //     .join("")
  //     .toUpperCase() || "U";

  // const joinDate = new Date(user.metadata.creationTime).toLocaleDateString(
  //   "en-US",
  //   { year: "numeric", month: "long" },
  // );

  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(session);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="min-h-screen bg-[#0f172a] pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto space-y-4">
        {/* ── Profile Header ── */}
        <div className="bg-[#1e293b] border border-white/5 rounded-2xl p-6">
          <div className="flex flex-wrap items-center gap-5">
            {/* Avatar */}
            <div className="relative shrink-0">
              {user.image ? (
                <Image
                  src={user?.image}
                  alt={user?.name || "User"}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-orange-500/30"
                />
              ) : (
                <div
                  className="w-20 h-20 rounded-full bg-linear-to-br
                  from-orange-500 to-orange-400 flex items-center justify-center
                  text-2xl font-bold text-white border-2 border-orange-500/30"
                >
                  {/* {initials} */}
                </div>
              )}
              {/* Online dot */}
              <div
                className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full
                bg-green-400 border-2 border-[#1e293b]"
              />
            </div>
            {/* Info */}
            <div className="flex-1">
              <h1 className="text-xl font-bold text-white mb-1">
                {user?.name || "User"}
              </h1>
              <p className="text-slate-500 text-sm mb-2">{user.email}</p>
              <span
                className="inline-block text-xs px-3 py-1 rounded-full
                bg-orange-500/10 text-orange-400 border border-orange-500/20"
              >
                ⭐ Premium Member
              </span>
            </div>
          </div>
        </div>
        ── Stats ──
        <div className="bg-[#1e293b] border border-white/5 rounded-2xl p-6">
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Total Bookings", value: "8", color: "text-orange-400" },
              { label: "Cars Listed", value: "3", color: "text-orange-400" },
              { label: "Avg Rating", value: "4.9★", color: "text-yellow-400" },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                className="bg-[#0f172a] rounded-xl p-4 text-center"
              >
                <div className={`text-2xl font-bold ${color}`}>{value}</div>
                <div className="text-slate-500 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* ── Bottom Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Account Info */}
          <div className="bg-[#1e293b] border border-white/5 rounded-2xl p-6">
            <h3
              className="text-xs font-semibold text-slate-400 uppercase
              tracking-widest mb-4"
            >
              Account Info
            </h3>
          </div>

          {/* Quick Actions */}
          <div className="bg-[#1e293b] border border-white/5 rounded-2xl p-6">
            <h3
              className="text-xs font-semibold text-slate-400 uppercase
              tracking-widest mb-4"
            >
              Quick Actions
            </h3>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl
                  border border-white/5 hover:border-red-500/30
                  hover:bg-red-500/5 text-slate-400 hover:text-red-400
                  text-sm transition-all"
            >
              <LogOut className="w-4 h-4 shrink-0" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
