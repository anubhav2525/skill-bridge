"use client";
import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar/sidebar";
import { GalleryVerticalEnd, LifeBuoy, Send } from "lucide-react";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import Link from "next/link";

const AdminSidebar = [
  {
    title: "GENERAL",
    url: "#",
    items: [
      {
        title: "Visit Site",
        url: "/",
      },
      {
        title: "Dashboard",
        url: "/dashboard",
      },
    ],
  },
  {
    title: "CONTENT",
    url: "#",
    items: [
      {
        title: "Blogs",
        url: "/blogs",
      },

      {
        title: "Courses",
        url: "/courses",
      },
      {
        title: "Categories",
        url: "/categories",
      },
      {
        title: "Enrollments",
        url: "/enrollments",
      },
      {
        title: "Users",
        url: "/users",
      },
    ],
  },
  {
    title: "REPORTS",
    url: "#",
    items: [
      { title: "Contact Queries", url: "/contact-queries" },
      {
        title: "Settings",
        url: "/settings",
      },
    ],
  },
];

const LearnerSidebar = [
  {
    title: "GENERAL",
    url: "#",
    items: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Dashboard",
        url: "/dashboard",
      },
    ],
  },
  {
    title: "CONTENT",
    url: "#",
    items: [
      {
        title: "Programmes",
        url: "/programmes",
      },
      {
        title: "Tasks & Assignments",
        url: "/tasks-assignments",
      },
      { title: "Quizzes", url: "/quizzes" },
    ],
  },
];
const TrainerSidebar = [
  {
    title: "GENERAL",
    url: "#",
    items: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Dashboard",
        url: "/dashboard",
      },
    ],
  },
  {
    title: "CONTENT",
    url: "#",
    items: [
      {
        title: "Programmes",
        url: "/programmes",
      },
      {
        title: "Tasks & Assignments",
        url: "/tasks-assignments",
      },
      { title: "Quizzes", url: "/quizzes" },
    ],
  },
];

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const [role, setRole] = useState("ADMIN");
  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navSecondary: [
      {
        title: "Support",
        url: "#",
        icon: LifeBuoy,
      },
      {
        title: "Feedback",
        url: "#",
        icon: Send,
      },
    ],
    navMain:
      role === "ADMIN"
        ? AdminSidebar
        : role === "LEARNER"
        ? LearnerSidebar
        : TrainerSidebar,
  };
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Skill Bridge</span>
                  <span className="">{role}</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <NavSecondary items={data.navSecondary} className="mt-auto" />
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
