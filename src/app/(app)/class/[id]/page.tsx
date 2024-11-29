import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { classes, students } from "@/mock";
import { generate } from "geopattern";
import { DeleteIcon, EditIcon, PlusIcon } from "lucide-react";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const classe = classes.find((c) => c.id === params.id);

  if (!classe) {
    return notFound();
  }

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
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{classe?.id}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div
        className="h-40 w-full rounded-t-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${generate(classe.id).toDataUri()}")`,
        }}
      />
      <div className="px-10 py-10">
        <div className="flex items-center justify-between pb-20">
          <div className="flex items-center gap-4">
            <span className="text-5xl font-bold">{classe.id}</span>
            <span className="text-xl text-foreground/70">{classe.grade}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-foreground/70">
              Última atribuição feita em{" "}
              {classe.lastTaskCreateTime.toLocaleString("pt-BR", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <Button>
              <PlusIcon /> Adicionar tarefa
            </Button>
          </div>
        </div>
        <div className="rounded-xl">
          <span className="mb-4 block text-2xl font-medium">
            Alunos ({classe.students})
          </span>
          <ol className="flex flex-col gap-1 rounded-xl border border-border">
            {students.map((student, index) => (
              <li
                key={index}
                className="flex w-full items-center justify-between gap-4 px-4 py-1 even:bg-accent"
              >
                <div className="grid grid-cols-[16rem_10rem]">
                  <span className="text-lg">{student.name}</span>
                  <span className="text-foreground/70">{student.phone}</span>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="secondary" size="icon">
                    <EditIcon />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <DeleteIcon />
                  </Button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
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
                    Última atribuição em{" "}
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
      </div> */}
    </div>
  );
}
