interface ContentProps {
  title: string;
}
import { Pagination } from "./Pagination";
import { EditIcon } from "./icons2/EditIcon";
import { TrashIcon } from "./icons2/TrashIcon";
export function Content(props: ContentProps) {
  return (
    <div className="mt-2">
      <div className="container mt-10 border">
        <div className="py-4">
          <div className="py-4">
            <div className="max-w-full overflow-x-auto rounded-lg">
              <table className="w-full leading-normal text-black">
                <thead>
                  <tr>

                    <th
                      scope="col"
                      className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    >
                      Empresas
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    >
                      Código Externo
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    >
                     Ações
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    />
                  </tr>
                </thead>
                <tbody className="text-black">
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">

                        </div>
                        <div className="ml-0">
                          <p className="whitespace-nowrap">Jean marc</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">Admin</p>
                    </td>


                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 flex space-x-0 hover:text-indigo-900"
                      >
                        <EditIcon />
                        <TrashIcon />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">

                        </div>
                        <div className="ml-0">
                          <p className="whitespace-nowrap">Marcus coco</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">Designer</p>
                    </td>


                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 flex space-x-0 hover:text-indigo-900"
                      >
                        <EditIcon />
                        <TrashIcon />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">

                        </div>
                        <div className="ml-0">
                          <p className="whitespace-nowrap">Eric marc</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">Developer</p>
                    </td>

                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 flex space-x-0 hover:text-indigo-900"
                      >
                        <EditIcon />
                        <TrashIcon />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">

                        </div>
                        <div className="ml-0">
                          <p className="whitespace-nowrap">Julien Huger</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">User</p>
                    </td>

                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 flex space-x-0 hover:text-indigo-900"
                      >
                        <EditIcon />
                        <TrashIcon />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">

                        </div>
                        <div className="ml-0">
                          <p className="whitespace-nowrap">Jean marc</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">Admin</p>
                    </td>

                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 flex space-x-0 hover:text-indigo-900"
                      >
                        <EditIcon />
                        <TrashIcon />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">

                        </div>
                        <div className="ml-0">
                          <p className="whitespace-nowrap">Marcus coco</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">Designer</p>
                    </td>

                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 flex space-x-0 hover:text-indigo-900"
                      >
                        <EditIcon />
                        <TrashIcon />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">

                        </div>
                        <div className="ml-0">
                          <p className="whitespace-nowrap">Eric marc</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">Developer</p>
                    </td>

                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 flex space-x-0 hover:text-indigo-900"
                      >
                        <EditIcon />
                        <TrashIcon />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">

                        </div>
                        <div className="ml-0">
                          <p className="whitespace-nowrap">Julien Huger</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">User</p>
                    </td>
                    
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 flex space-x-0 hover:text-indigo-900"
                      >
                        <EditIcon />
                        <TrashIcon /> 
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
             <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
