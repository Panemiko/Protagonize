import { Badge } from "@/components/ui/badge";
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
import { responses, students, tasks } from "@/mock";
import { generate } from "geopattern";
import { DeleteIcon, EditIcon, PlusIcon, StarIcon, XIcon } from "lucide-react";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const task = tasks[parseInt(params.id)];

  if (!task) {
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
                <BreadcrumbLink href="/tasks">Tarefas</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{task.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div
        className="h-40 w-full rounded-t-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${generate(task.title).toDataUri()}")`,
        }}
      />
      <div className="px-10 py-10">
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">{task.title}</span>
            <span className="text-foreground/70">
              {task.subject} ({task.teacher})
            </span>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-xs text-foreground/70">
              Até{" "}
              {task.expiresIn.toLocaleString("pt-BR", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-xs text-foreground/70">
              Atribuída em{" "}
              {task.createdOn.toLocaleString("pt-BR", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            {/* <span className="text-xs text-foreground/70">
              Última atribuição feita em{" "}
              {classe.lastTaskCreateTime.toLocaleString("pt-BR", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span> */}
            {/* <Button>
              <PlusIcon /> Adicionar tarefa
            </Button> */}
          </div>
        </div>
        <div className="mb-10">
          <p className="max-w-prose text-sm text-foreground/70">
            {task.description}
          </p>
        </div>
        <div className="mb-20 flex items-center gap-3">
          <span>Turmas atribuídas: </span>
          <div className="flex gap-2">
            {task.classes?.map((c, index) => (
              <Badge key={index}>
                {c} <XIcon className="size-3" />
              </Badge>
            ))}
            <Button variant="secondary" size="sm">
              <PlusIcon />
            </Button>
          </div>
        </div>
        <div className="mb-20 rounded-xl">
          <span className="mb-4 block text-2xl font-medium">
            Respostas ({responses.length} de {students.length} submetidas)
          </span>
          <ol className="flex flex-col gap-1 rounded-xl border border-border">
            <li className="flex w-full items-center justify-between gap-4 px-4 py-1 even:bg-accent">
              <div className="grid grid-cols-[10rem_10rem] items-center">
                <span className="font-bold">Nome</span>
                <span className="font-bold text-foreground/70">
                  Data de envio
                </span>
              </div>
              <div className="flex items-center justify-end gap-2">
                <span className="mr-4 font-bold">Menção</span>

                <Button variant="outline" size="sm" className="invisible w-24">
                  <EditIcon />
                  Alterar
                </Button>
              </div>
            </li>
            {responses
              .sort(
                (a, b) =>
                  a.conclusionDate.getTime() - b.conclusionDate.getTime(),
              )
              .map((response, index) => {
                const student = students.find(
                  (student) => student.id === response.studentId,
                );

                if (!student) {
                  return;
                }

                return (
                  <li
                    key={index}
                    className="flex w-full items-center justify-between gap-4 px-4 py-1 even:bg-accent"
                  >
                    <div className="grid grid-cols-[10rem_10rem] items-center">
                      <span className="">{student.name}</span>
                      <span className="text-sm text-foreground/70">
                        {response.conclusionDate.toLocaleString("pt-BR", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <span className="mr-4">
                        {response.grade ? (
                          <span className="text-primary font-medium">{response.grade}</span>
                        ) : (
                          <span className="text-sm text-foreground/70">
                            Não avaliado
                          </span>
                        )}
                      </span>

                      {response.grade ? (
                        <Button variant="outline" size="sm" className="w-24">
                          <EditIcon />
                          Alterar
                        </Button>
                      ) : (
                        <Button variant="default" size="sm" className="w-24">
                          <StarIcon /> Dar nota
                        </Button>
                      )}
                    </div>
                  </li>
                );
              })}
          </ol>
        </div>
        <div className="rounded-xl">
          <span className="mb-4 block text-2xl font-medium">Não enviados</span>
          <ol className="flex flex-col gap-1 rounded-xl border border-border">
            {students
              .filter(
                (student) =>
                  !responses.find(
                    (response) => response.studentId === student.id,
                  ),
              )
              .map((student, index) => {
                return (
                  <li
                    key={index}
                    className="flex w-full items-center justify-between gap-4 px-4 py-1 even:bg-accent"
                  >
                    <div className="grid grid-cols-[10rem_10rem] items-center">
                      <span className="">{student.name}</span>
                      <span className="text-sm text-foreground/70"></span>
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
                );
              })}
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
