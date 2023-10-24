import Link from "next/link";
import { useRouter } from "next/router";
import { data } from "./data";

const style = {
  title: "font-normal mx-4 text-sm",
  active: "font-medium bg-white border-4 border-y-white border-r-white border-l-orange-600 text-orange-600",
  inactive: "text-black",
  link: "my-1 flex h-9 w-full items-center justify-start p-5 font-thin",
};

export function SidebarItems() {
  const { pathname } = useRouter();
  return (
    <div >
      {data.map(({ section, content }) => (
        <ul className="border-b py-2 last:border-none" key={section}>
          {content.map((item) => (
            <li key={item.title}>
              <Link href={item.link}>
                <span
                  className={`${style.link}
                    ${item.link === pathname ? style.active : style.inactive}`}
                >
                  <span>{item.icon}</span>
                  <span className={style.title}>{item.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
