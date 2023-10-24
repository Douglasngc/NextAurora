import { DocIcon } from "./icons/DocIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { EmpresasIcon } from "./icons/EmpresasIcon";
import { CampIcon } from "./icons/CampIcon";
import { AtendIcon } from "./icons/AtendIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { ClienteIcon } from "./icons/ClienteIcon";
import { TicketsIcon } from "./icons/TicketsIcon";
import { QuaIcon } from "./icons/QuaIcon";
import { ChaIcon } from "./icons/ChaIcon";
import { RelatIcon } from "./icons/RelatIcon";


export const data = [
  {
    section: "Section1",
    content: [
      {
        title: "Dashboard",
        icon: <HomeIcon />,
        link: "/admin/Dash",
      },
      {
        title: "Atendimento",
        icon: <AtendIcon />,
        link: "/admin/Atendimento",
      },
      {
        title: "Empresas",
        icon: <EmpresasIcon />,
        link: "/admin/Empresas",
      },
      {
        title: "Clientes",
        icon: <ClienteIcon />,
        link: "/admin/Cientes",
      },
      {
        title: "Tickets",
        icon: <TicketsIcon />,
        link: "/admin/Tickets",
      },
      {
        title: "Campanhas", 
        icon: <CampIcon />,
        link: "/admin/Campanhas",
      },
      {
        title: "Quadros",
        icon: <QuaIcon />,
        link: "/admin/Quadros",
      },
      {
        title: "Chat interno",
        icon: <ChaIcon />,
        link: "/admin/Chat",
      },
      {
        title: "Configurações",
        icon: <SettingsIcon />,
        link: "/admin/Config",
      },
      {
        title: "Relatórios",
        icon: <RelatIcon />,
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
