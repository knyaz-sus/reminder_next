"use client";

import { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { getUserById } from "@/features/auth/api/getUserById";
import { SidebarProvider } from "@/context/SideBarProvider";
import { AppSidebar } from "@/components/Sidebar/components/AppSidebar";
import { AppHeader } from "../../components/AppHeader";

export default function AppLayout({ children }: { children: ReactNode }) {
  const { authUser, isAuthLoading } = useAuth();
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserById(authUser?.id),
    enabled: !!authUser && !isAuthLoading,
    refetchOnWindowFocus: false,
  });
  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <div
        className="flex flex-auto flex-col 
                   min-h-screen pl-6 pt-3 pb-3 pr-6"
      >
        <AppHeader />
        <main className="flex justify-center">
          <div className="flex flex-col flex-auto max-w-3xl">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
