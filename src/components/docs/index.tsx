import { Snippet } from "./Snippet";
import { FileIcon, FolderIcon, JSXIcon } from "./Icons";

export function Docs() {
  return (
    <div className="max-w-full py-8 text-black">
      <h2 className="mb-10 text-3xl font-medium">Documentação</h2>
     

      <section
        className="mb-16 px-3 py-8 md:px-8"
        style={{ backgroundColor: "rgb(146 151 179 / 13%)" }}
      >
        <h2 className="mb-3 text-2xl font-medium">Estrutura de arquivos</h2>
        <div className="pl-2">
          <div className="mb-3 flex pl-5">
            <FolderIcon className="h-6 w-6" />
            <span className="pl-2">dashboard</span>
          </div>
          <div className="mb-3 flex pl-11">
            <FolderIcon />
            <span className="pl-2">sidebar</span>
          </div>
          <div className="mb-3 flex pl-16">
            <FolderIcon />
            <span className="pl-2">icons</span>
          </div>
          <div className="mb-3 flex pl-16">
            <JSXIcon />
            <span className="pl-2">data.tsx</span>
          </div>
          <div className="mb-3 flex pl-16">
            <JSXIcon />
            <span className="pl-2">Sidebar.tsx</span>
          </div>
          
          <div className="mb-3 flex pl-16">
            <JSXIcon />
            <span className="pl-2">SidebarItems.tsx</span>
          </div>
          <div className="mb-3 flex pl-11">
            <JSXIcon />
            <span className="pl-2">Layout.tsx</span>
          </div>
         
          <div className="mb-3 flex pl-11">
            <JSXIcon />
            <span className="pl-2">Provider.tsx</span>
          </div>
          <div className="mb-3 flex pl-11">
            <JSXIcon />
            <span className="pl-2">TopBar.tsx</span>
          </div>
          <div className="mb-3 flex pl-11">
            <FileIcon className="h-6 w-6" />
            <span className="pl-2">style.module.css</span>
          </div>
        </div>
      </section>

      <section
        className="mb-16 px-3 py-8 md:px-8"
        style={{ backgroundColor: "rgb(146 151 179 / 13%)" }}
      >
        <h2 className="text-2xl font-medium">Estrutura de pastas</h2>

        <div className="mb-8 mt-4">
          <div className="flex">
            <FolderIcon /> <strong className="px-1">sidebar</strong>
          </div>
          <div className="mt-4 flex flex-wrap pl-6 md:flex-nowrap">
            <FolderIcon className="h-7 w-7" />
            <span className="px-2 font-medium">icons</span> :
            
          </div>
          <div className="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
            <JSXIcon /> <span className="px-2 font-medium">data.tsx</span> :
            <p className="pl-1">
              Arquivo para listar e linkar os icones da sidebar as devidas rotas
            </p>
          </div>
          <div className="mt-8 flex flex-wrap pl-8">
            <div className="md:w-4/12">
              <Snippet />
            </div>
            <ul className="pt-8 md:pl-4 md:pt-20">
              <li className="mb-2">
                <span className="px-1">section :</span> Nome da seção (caso adicione mais seções aparecerá um divider  )
              </li>
              <li className="mb-2">
                <span className="px-1">title :</span> Nome da label
              </li>
              <li className="mb-2">
                <span className="px-1">icon :</span> icone usado
                <strong className="px-1">icons</strong> pasta de origem do icone
                
              </li>
            </ul>
          </div>
          <div className="mt-10 flex flex-wrap pl-6 md:flex-nowrap">
            <JSXIcon /> <span className="px-2 font-medium">Sidebar.tsx</span> :
            <p className="pl-1">Base da sidebar.</p>
            <p className="pl-1">
              contém <strong>SidebarHeader</strong> e{" "}
              <strong>SidebarItems</strong> components.
            </p>
          </div>
          
          <div className="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
            <JSXIcon />{" "}
            <span className="px-2 font-medium">SidebarItems.tsx</span> :
            <p className="pl-1">
              Gera os items da sidebar,linkando as rotas
              <strong className="px-1">data.tsx</strong>
            </p>
          </div>
        </div>

        <div>
          <div className="mt-8 flex flex-wrap md:flex-nowrap">
            <JSXIcon /> <span className="px-1 font-medium">Layout.tsx :</span>{" "}
            contém o 
            <strong className="px-1">DashboardLayout</strong>
           mostra o layout da página
          </div>
        </div>

       

        <div>
          <div className="mt-8 flex flex-wrap md:flex-nowrap">
            <JSXIcon /> <span className="px-1 font-medium">Provider.tsx :</span>{" "}
            contém <strong className="px-1">DashboardProvider</strong>{" "}
            Componente onde fica a lógica do app
          </div>
        </div>

        <div>
          <div className="mt-8 flex flex-wrap md:flex-nowrap">
            <JSXIcon /> <span className="px-1 font-medium">TopBar.tsx :</span>
            Falta fazer o togglebutton
          </div>
        </div>

        <div className="mt-8 flex flex-wrap md:flex-nowrap">
          <FileIcon className="h-5 w-5  md:h-7" />
          <span className="px-1 font-medium">style.module.css</span> :
          <p className="pl-1">
            deixei a scroball invisivel aq
          </p>
        </div>
      </section>

      <section
        className="mb-16 px-3 py-8 md:px-8"
        style={{ backgroundColor: "rgb(146 151 179 / 13%)" }}
      >
        <h2 className="text-2xl font-medium">Export</h2>
        <p className="mt-4">
          As there is no vendor lock-in, if you already have a dashboard, you
          can copy the
          <strong className="px-1">dashboard</strong>folder into your project
        </p>
        <div className="mt-8">
          <ul className="mt-4 list-disc pl-6">
            <li className="mb-3">
              Add your routes in the
              <strong className="px-1">dashboard/sidebar/data.tsx</strong>
              file
            </li>
            <li className="mb-3">
              Replace your layout by the
              <strong className="px-1">DashboardLayout</strong>component
            </li>
          </ul>
        </div>
      </section>

      <section
        className="mb-16 px-3 py-8 md:px-8"
        style={{ backgroundColor: "rgb(146 151 179 / 13%)" }}
      >
        <h2 className="text-2xl font-medium">Customization</h2>
        <p className="mt-5">
          You can customize everything according to your preferences if it
          doesn't suit you. What we have done is just provide a solid structure
          for better scalability and readability of the code.
        </p>
        <p className="mt-5">
          The sidebar scrollbar is hidden by default but you can still scroll
          with the keyboards if you have several sidebar-items. You can always
          change its style in the
          <strong className="px-1">style.module.css</strong>file.
        </p>
        <p className="mt-5">
          In the <strong> dashboard/Layout.tsx</strong> file,
          <strong className="pl-1">Sidebar</strong> component has as prop
          <strong className="pl-1">mobileOrientation</strong>, which indicates
          the orientation of the sidebar on small devices (viewport {"<"}{" "}
          1024px).
        </p>
        <p className="pt-5">That prop can have two possible values :</p>
        <ul className="mt-4 list-disc pl-6">
          <li className="mb-3">
            <strong>start :</strong> sidebar will be aligned to the left
          </li>
          <li>
            <strong>end :</strong> sidebar will be aligned to the right
          </li>
        </ul>
      </section>
    </div>
  );
}
