"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { SidebarTrigger } from "@/components/Sidebar/components/Sidebar";
import { ViewOptions } from "@/components/ViewOptions";

export function AppHeader() {
  return (
    <header className="flex justify-between items-center w-full pb-2">
      <SidebarTrigger />
      <div className="flex gap-4 items-center">
        <ViewOptions />
        <ThemeToggle />
      </div>
    </header>
  );
}
