import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { classes } from "@/mock";
import { generate } from "geopattern";
import Link from "next/link";


export default async function Page() {
  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/classes">Turmas</BreadcrumbLink>
              </BreadcrumbItem>
              {/* <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage></BreadcrumbPage>
              </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {classes.map((c, index) => (
            <Link
              key={index}
              className="max-h-full rounded-lg transition-opacity hover:opacity-95"
              href={`/class/${c.id}`}
            >
              <div
                className="h-20 rounded-t-lg bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url("${generate(c.id).toDataUri()}")`,
                }}
              />
              <div className="flex h-40 flex-col justify-between gap-6 rounded-b-lg border-2 border-border bg-background px-3 pb-7 pt-4">
                <div className="flex flex-col">
                  <span className="mb-2 block truncate text-2xl font-bold">
                    {c.id}
                  </span>
                  <p className="line-clamp-2 text-xs text-foreground/70">
                    {c.grade}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge>{c.students} alunos</Badge>
                  <span className="text-xs text-foreground/70">
                    Última atribuição em{' '}
                    {c.lastTaskCreateTime.toLocaleString("pt-BR", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
