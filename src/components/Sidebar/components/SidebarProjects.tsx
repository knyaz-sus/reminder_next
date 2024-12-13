"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/Collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
} from "./Sidebar";
import { ChevronDown, Plus } from "lucide-react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "@/api/fetchProjects";
import { useAuth } from "@/features/auth/hooks/useAuth";

export function SidebarProjects() {
  const { authUser } = useAuth();
  const { data: projects, isError } = useQuery({
    queryKey: ["user-projects"],
    queryFn: () => fetchProjects(authUser?.id),
  });

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <Collapsible defaultOpen className="group/collapsible">
          <div
            className="flex justify-between items-center gap-2
          w-full rounded-md p-1 overflow-hidden outline-none 
          text-sidebar-foreground/80 text-left text-sm font-semibold
          hover:bg-sidebar-accent"
          >
            <Link className="flex-auto" href="/app">
              My projects
            </Link>
            <button className="[&>svg]:size-4 [&>svg]:shrink-0 p-1 hover:text-sidebar-foreground">
              <Plus strokeWidth={3} />
            </button>
            <CollapsibleTrigger className="[&>svg]:size-4 [&>svg]:shrink-0 p-1">
              <ChevronDown
                strokeWidth={3}
                className="ml-auto transition-transform 
            group-data-[state=open]/collapsible:rotate-180
            hover:text-sidebar-foreground"
              />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            {isError && "Can't get projects."}
            {!projects || projects.length === 0
              ? "You don't have any projects yet."
              : projects.map((project) => (
                  <SidebarMenuButton key={project.id}>
                    {project.name}
                  </SidebarMenuButton>
                ))}
          </CollapsibleContent>
        </Collapsible>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
