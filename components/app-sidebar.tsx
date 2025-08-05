"use client";

import {
  IconAssembly,
  IconAutomation,
  IconBlocks,
  IconCalendarEvent,
  IconCamera,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconHelp,
  IconMicroscope,
  IconRectangularPrismPlus,
  IconSettings,
  IconTruckDelivery,
  IconUserDollar,
} from "@tabler/icons-react";
import * as React from "react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

import Logo from "@/public/logo.png";
import Image from "next/image";

const data = {
  user: {
    name: "Everson",
    email: "everson.dev.f@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/17775284?v=4",
  },
  navMain: [
    {
      title: "Painel Controle",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Produtos",
      url: "/produtos",
      icon: IconAssembly,
    },
    {
      title: "Projetos",
      url: "/projetos",
      icon: IconRectangularPrismPlus,
    },
    {
      title: "Clientes",
      url: "/clientes",
      icon: IconUserDollar,
    },
    {
      title: "Fornecedores",
      url: "/fornecedores",
      icon: IconTruckDelivery,
    },
    {
      title: "Liga Metálica",
      url: "/ligas",
      icon: IconMicroscope,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Configurações",
      url: "/config",
      icon: IconSettings,
    },
    {
      title: "Ajuda?",
      url: "/help",
      icon: IconHelp,
    },
  ],
  documents: [
    {
      name: "Pedido Blocos",
      url: "/pedidos-blocos",
      icon: IconBlocks,
    },
    {
      name: "Ordem de Produção (OP)",
      url: "/ordem-producao",
      icon: IconAutomation,
    },
    {
      name: "Agenda",
      url: "/aagenda",
      icon: IconCalendarEvent,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/dashboard">
                <Image
                  src={Logo}
                  alt="Logo Fundimar"
                  className="size-8 bg-white/80 rounded-full p-1 border-1 border-orange-600"
                />
                <span className="text-2xl font-semibold">Fundimar</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
