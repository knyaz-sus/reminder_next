import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/Sidebar/components/Sidebar";
import { UserRow } from "@/types/schema";
import { SidebarRoutes } from "./SidebarRoutes";
import { SidebarProjects } from "./SidebarProjects";
import { SidebarUserMenu } from "./SidebarUserMenu";

export function AppSidebar({ user }: { user?: UserRow }) {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarUserMenu user={user} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarRoutes />
        <SidebarProjects/>
      </SidebarContent>
    </Sidebar>
  );
}
