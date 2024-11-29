import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { tasks } from "@/mock";
import { DeleteIcon, EditIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function Page({ params }: { params: { modo: string } }) {
  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/tasks">Tarefas</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      {/* <div
        className="h-40 w-full rounded-t-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${generate(classe.id).toDataUri()}")`,
        }}
      /> */}
      <div className="px-10 py-10">
        <div>
          <div className="flex items-center justify-between pb-20">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">Tarefas</span>
            </div>
            <div>
              <Button>
                <PlusIcon />
                Adicionar tarefa
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-20 flex flex-col gap-3" id="pending">
          <span className="text-2xl font-medium">
            A seguir (
            {tasks.filter((task) => task.expiresIn > new Date()).length})
          </span>
          <ol className="flex flex-col rounded-xl border border-border">
            {tasks
              .filter((task) => task.expiresIn > new Date())
              .sort((a, b) => a.expiresIn.getTime() - b.expiresIn.getTime())
              .map((task, index) => (
                <li key={index}>
                  <Link
                    className="flex w-full items-center justify-between gap-4 border-b border-b-border px-4 py-3 transition-colors hover:bg-accent"
                    href={`/task/${tasks.indexOf(task)}`}
                  >
                    <div className="grid grid-cols-[40rem_10rem]">
                      <div className="flex flex-col gap-1">
                        <span className="truncate text-lg font-medium">
                          {task.title}
                        </span>
                        <div className="flex items-center gap-3">
                          <Badge>{task.subject}</Badge>
                          <span className="text-sm text-foreground/70">
                            {task.teacher}
                          </span>
                          <span className="text-xs text-foreground/70">
                            Termina em{" "}
                            {task.expiresIn.toLocaleString("pt-BR", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="secondary" size="icon">
                        <EditIcon />
                      </Button>
                      <Button variant="destructive" size="icon">
                        <DeleteIcon />
                      </Button>
                    </div>
                  </Link>
                </li>
              ))}
          </ol>
        </div>
        <div className="flex flex-col gap-3" id="finished">
          <span className="text-2xl font-medium">Concluídas</span>
          <ol className="flex flex-col rounded-xl border border-border">
            {tasks
              .filter((task) => task.expiresIn <= new Date())
              .sort((a, b) => a.expiresIn.getTime() - b.expiresIn.getTime())
              .map((task, index) => (
                <li key={index}>
                  <Link
                    href={`/task/${tasks.indexOf(task)}`}
                    className="flex w-full items-center justify-between gap-4 border-b border-b-border px-4 py-3 transition-colors hover:bg-accent"
                  >
                    <div className="grid grid-cols-[40rem_10rem]">
                      <div className="flex flex-col gap-1">
                        <span className="truncate text-lg font-medium">
                          {task.title}
                        </span>
                        <div className="flex items-center gap-3">
                          <Badge>{task.subject}</Badge>
                          <span className="text-sm text-foreground/70">
                            {task.teacher}
                          </span>
                          <span className="text-xs text-foreground/70">
                            Termina em{" "}
                            {task.expiresIn.toLocaleString("pt-BR", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="secondary" size="icon">
                        <EditIcon />
                      </Button>
                      <Button variant="destructive" size="icon">
                        <DeleteIcon />
                      </Button>
                    </div>
                  </Link>
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
                  <span className="mb-2 block truncate text-2xl font-medium">
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
