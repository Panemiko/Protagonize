import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar";
import { type ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </div>
  );
}
