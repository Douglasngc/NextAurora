import { DocIcon } from "./icons/DocIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { TaskIcon } from "./icons/TaskIcon";
import { ReportIcon } from "./icons/ReportIcon";
import { ProjectIcon } from "./icons/ProjectIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { CalendarIcon } from "./icons/CalendarIcon";
import { TimeManageIcon } from "./icons/TimeManageIcon";

export const data = [
  {
    section: "Section1",
    content: [
      {
        title: "Dashboard",
        icon: <HomeIcon />,
        link: "/",
      },
      {
        title: "Atendimento",
        icon: <ProjectIcon />,
        link: "/admin/projects",
      },
      {
        title: "Empresas",
        icon: <TaskIcon />,
        link: "/admin/tasks",
      },
      {
        title: "Clientes",
        icon: <CalendarIcon />,
        link: "/admin/calendar",
      },
      {
        title: "Tickets",
        icon: <TimeManageIcon />,
        link: "/admin/time-manage",
      },
      {
        title: "Campanhas",
        icon: <ReportIcon />,
        link: "/admin/reports",
      },
      {
        title: "Quadros",
        icon: <SettingsIcon />,
        link: "/admin/settings",
      },
      {
        title: "Chat interno",
        icon: <SettingsIcon />,
        link: "/admin/settings",
      },
      {
        title: "Configurações",
        icon: <SettingsIcon />,
        link: "/admin/settings",
      },
      {
        title: "Relatórios",
        icon: <SettingsIcon />,
        link: "/admin/settings",
      },
      {
        title: "Documentation",
        icon: <DocIcon />,
        link: "/admin/documentation",
      },
    ],
  },


];
