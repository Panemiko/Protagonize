"use client";

import {
  BookCheckIcon,
  Command,
  LifeBuoy,
  SettingsIcon,
  UsersIcon
} from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    user: {
      name: "Tito Lucca Oliveira",
      username: "toliveira",
    },
    navMain: [
      {
        title: "Turmas",
        url: "/classes",
        icon: UsersIcon,
        isActive: true,
      },
      {
        title: "Tarefas",
        url: "/tasks",
        icon: BookCheckIcon,
        isActive: true,
        items: [
          {
            title: "Finalizadas",
            url: "/tasks#finished",
          },
          {
            title: "Pendentes",
            url: "/tasks#pending",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Suporte",
        url: "#",
        icon: LifeBuoy,
      },
      {
        title: "Configurações",
        url: "#",
        icon: SettingsIcon,
      },
    ],
  };

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="mt-1 grid flex-1 text-left text-sm leading-tight">
                  <span className="line-clamp-2 font-semibold">
                    Escola Estadual Novo Horizonte
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
