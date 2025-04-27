import AppSidebar from "@/components/ui/sidebar/app-sidebar";
import SiteHeader  from "@/components/ui/sidebar/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar/sidebar";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="w-full ">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default PrivateLayout;
