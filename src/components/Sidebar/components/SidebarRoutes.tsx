"use client";

import { Plus, Search } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./Sidebar";
import { sidebarMenuRoutes } from "../constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function SidebarRoutes() {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem className="text-sidebar-foreground/80 hover:text-none">
            <SidebarMenuButton className="hover:text-none">
              <Plus strokeWidth={3} />
              <span className="font-semibold">Add new todo</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Search />
              <span>Search</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {sidebarMenuRoutes.map((route) => {
            const { path, name, Icon } = route;
            return (
              <SidebarMenuItem key={path}>
                <SidebarMenuButton asChild isActive={pathname === path}>
                  <Link href={path}>
                    <Icon />
                    <span>{name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
