export const classes = [
  {
    id: "9C",
    grade: "9º ano EF",
    students: 31,
    lastTaskCreateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
  },
  {
    id: "9A",
    grade: "9º ano EF",
    students: 27,
    lastTaskCreateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
  },
  {
    id: "3B",
    grade: "3º ano EM",
    students: 23,
    lastTaskCreateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 0),
  },
  {
    id: "3D",
    grade: "9º ano EF",
    students: 39,
    lastTaskCreateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 0),
  },
];

export const students = [
  { id: 1, name: "Ana Silva", phone: "(11) 91234-5678" },
  { id: 2, name: "Bruno Oliveira", phone: "(21) 99876-5432" },
  { id: 3, name: "Carla Mendes", phone: "(31) 98765-4321" },
  { id: 4, name: "Diego Souza", phone: "(41) 91234-5678" },
  { id: 5, name: "Elisa Ferreira", phone: "(51) 99876-5432" },
  { id: 6, name: "Fernando Lima", phone: "(61) 98765-4321" },
  { id: 7, name: "Gabriela Costa", phone: "(71) 91234-5678" },
  { id: 8, name: "Henrique Santos", phone: "(81) 99876-5432" },
  { id: 9, name: "Isabela Nunes", phone: "(91) 98765-4321" },
  { id: 10, name: "João Almeida", phone: "(31) 91234-5678" },
  { id: 11, name: "Karen Dias", phone: "(41) 99876-5432" },
  { id: 12, name: "Lucas Pereira", phone: "(51) 98765-4321" },
  { id: 13, name: "Maria Antunes", phone: "(61) 91234-5678" },
  { id: 14, name: "Natan Figueira", phone: "(71) 99876-5432" },
  { id: 15, name: "Olívia Ramos", phone: "(81) 98765-4321" },
  { id: 16, name: "Paulo Rocha", phone: "(91) 91234-5678" },
  { id: 17, name: "Queila Martins", phone: "(11) 99876-5432" },
  { id: 18, name: "Rafael Teixeira", phone: "(21) 98765-4321" },
  { id: 19, name: "Sofia Monteiro", phone: "(31) 91234-5678" },
  { id: 20, name: "Thiago Cardoso", phone: "(41) 99876-5432" },
  { id: 21, name: "Úrsula Pires", phone: "(51) 98765-4321" },
  { id: 22, name: "Victor Matos", phone: "(61) 91234-5678" },
  { id: 23, name: "Wellington Vieira", phone: "(71) 99876-5432" },
  { id: 24, name: "Xênia Carvalho", phone: "(81) 98765-4321" },
  { id: 25, name: "Yasmin Duarte", phone: "(91) 91234-5678" },
  { id: 26, name: "Zeca Barbosa", phone: "(31) 99876-5432" },
  { id: 27, name: "Alberto Cunha", phone: "(41) 98765-4321" },
  { id: 28, name: "Beatriz Lopes", phone: "(51) 91234-5678" },
  { id: 29, name: "César Amaral", phone: "(61) 99876-5432" },
  { id: 30, name: "Daniela Rezende", phone: "(71) 98765-4321" },
  { id: 31, name: "Eduardo Gomes", phone: "(81) 91234-5678" },
  { id: 32, name: "Fátima Moura", phone: "(91) 99876-5432" },
  { id: 33, name: "Guilherme Campos", phone: "(11) 98765-4321" },
  { id: 34, name: "Helena Batista", phone: "(21) 91234-5678" },
  { id: 35, name: "Igor Ribeiro", phone: "(31) 99876-5432" },
  { id: 36, name: "Júlia Farias", phone: "(41) 98765-4321" },
  { id: 37, name: "Lara Souza", phone: "(51) 91234-5678" },
  { id: 38, name: "Miguel Andrade", phone: "(61) 99876-5432" },
  { id: 39, name: "Natália Fonseca", phone: "(71) 98765-4321" },
  { id: 40, name: "Otávio Barros", phone: "(81) 91234-5678" },
];

export const tasks = [
  {
    subject: "Matemática",
    classes: ["1A", "1B"],
    createdOn: new Date(2024, 10, 1),
    expiresIn: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
    title: "Resolvendo Equações do 1º Grau",
    description:
      "Resolva os exercícios 1 a 10 da página 42 do livro. Inclua os cálculos detalhados.",
    teacher: "Carlos Mendes",
  },
  {
    subject: "História",
    classes: ["2A", "2C"],
    createdOn: new Date(2024, 10, 2),
    expiresIn: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
    title: "A Revolução Francesa",
    description:
      "Escreva um resumo de até 500 palavras sobre os principais eventos e consequências da Revolução Francesa.",
    teacher: "Ana Costa",
  },
  {
    subject: "Biologia",
    classes: ["1A", "1C", "1D"],
    createdOn: new Date(2024, 10, 3),
    expiresIn: new Date(2024, 10, 12),
    title: "Cadeias Alimentares",
    description:
      "Crie um diagrama que mostre uma cadeia alimentar completa e explique os papéis de cada organismo.",
    teacher: "João Oliveira",
  },
  {
    subject: "Português",
    classes: ["3A"],
    createdOn: new Date(2024, 10, 4),
    expiresIn: new Date(2024, 10, 15),
    title: "Redação Argumentativa",
    description:
      "Escreva uma redação argumentativa com o tema: 'A importância da leitura na era digital'.",
    teacher: "Larissa Nunes",
  },
  {
    subject: "Geografia",
    classes: ["2B", "2D"],
    createdOn: new Date(2024, 10, 5),
    expiresIn: new Date(Date.now() + 1000 * 60 * 60 * 24 * 4),
    title: "Clima e Vegetação",
    description:
      "Pesquise sobre os biomas brasileiros e crie uma tabela comparativa com as características principais de cada um.",
    teacher: "Marcos Silva",
  },
  {
    subject: "Física",
    classes: ["3A", "3B"],
    createdOn: new Date(2024, 10, 6),
    expiresIn: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
    title: "Leis de Newton",
    description:
      "Resolva os problemas propostos no arquivo enviado no grupo de WhatsApp e envie as respostas no formulário.",
    teacher: "Pedro Santos",
  },
  {
    subject: "Química",
    classes: ["1B", "1D"],
    createdOn: new Date(2024, 10, 7),
    expiresIn: new Date(2024, 10, 17),
    title: "Reações Químicas",
    description:
      "Explique os tipos de reações químicas e forneça exemplos para cada tipo em um documento PDF.",
    teacher: "Renata Almeida",
  },
  {
    subject: "Educação Física",
    classes: ["Todas as classes"],
    createdOn: new Date(2024, 10, 8),
    expiresIn: new Date(2024, 10, 15),
    title: "Atividade Física e Saúde",
    description:
      "Elabore um plano de exercícios físicos para 7 dias e escreva sobre os benefícios de cada atividade.",
    teacher: "Thiago Ramos",
  },
  {
    subject: "Inglês",
    classes: ["2A", "2C"],
    createdOn: new Date(2024, 10, 9),
    expiresIn: new Date(2024, 10, 18),
    title: "Tradução e Vocabulário",
    description:
      "Traduza o texto fornecido no PDF e elabore uma lista com 20 palavras desconhecidas e seus significados.",
    teacher: "Emily Brown",
  },
  {
    subject: "Artes",
    classes: ["1A", "1B"],
    createdOn: new Date(2024, 10, 10),
    expiresIn: new Date(2024, 10, 20),
    title: "Criação de um Cartaz",
    description:
      "Crie um cartaz artístico que represente um tema atual de sua escolha, usando técnicas de colagem.",
    teacher: "Laura Martins",
  },
  {
    subject: "Matemática",
    classes: ["2C"],
    createdOn: new Date(2024, 10, 11),
    expiresIn: new Date(2024, 10, 19),
    title: "Geometria Básica",
    description:
      "Desenhe e explique as propriedades dos triângulos e quadriláteros.",
    teacher: "Carlos Mendes",
  },
  {
    subject: "História",
    classes: ["3A"],
    createdOn: new Date(2024, 10, 12),
    expiresIn: new Date(2024, 10, 21),
    title: "Independência do Brasil",
    description:
      "Crie uma linha do tempo com os eventos que levaram à Independência do Brasil.",
    teacher: "Ana Costa",
  },
  {
    subject: "Física",
    classes: ["1A"],
    createdOn: new Date(2024, 10, 13),
    expiresIn: new Date(2024, 10, 22),
    title: "Movimento Uniforme",
    description:
      "Resolva os problemas 5 a 15 do livro de Física sobre movimento uniforme.",
    teacher: "Pedro Santos",
  },
  {
    subject: "Geografia",
    classes: ["1B", "1D"],
    createdOn: new Date(2024, 10, 14),
    expiresIn: new Date(2024, 10, 23),
    title: "Mapas e Cartografia",
    description:
      "Faça um mapa simplificado do seu bairro e identifique os principais pontos de referência.",
    teacher: "Marcos Silva",
  },
  {
    subject: "Português",
    classes: ["2B"],
    createdOn: new Date(2024, 10, 15),
    expiresIn: new Date(2024, 10, 24),
    title: "Poemas Modernistas",
    description:
      "Analise o poema 'No Meio do Caminho', de Carlos Drummond, e faça uma interpretação.",
    teacher: "Larissa Nunes",
  },
  {
    subject: "Química",
    classes: ["3C"],
    createdOn: new Date(2024, 10, 16),
    expiresIn: new Date(2024, 10, 25),
    title: "Tabelas Periódicas",
    description:
      "Elabore um resumo das propriedades dos elementos dos grupos 1 a 3 da tabela periódica.",
    teacher: "Renata Almeida",
  },
  {
    subject: "Educação Física",
    classes: ["3B"],
    createdOn: new Date(2024, 10, 17),
    expiresIn: new Date(2024, 10, 26),
    title: "Prática Esportiva",
    description:
      "Realize um relatório sobre a importância do aquecimento antes de esportes.",
    teacher: "Thiago Ramos",
  },
  {
    subject: "Inglês",
    classes: ["1C"],
    createdOn: new Date(2024, 10, 18),
    expiresIn: new Date(2024, 10, 27),
    title: "Listening Exercise",
    description:
      "Ouça o áudio disponível e escreva uma breve síntese em inglês.",
    teacher: "Emily Brown",
  },
  {
    subject: "Artes",
    classes: ["2A"],
    createdOn: new Date(2024, 10, 19),
    expiresIn: new Date(2024, 10, 28),
    title: "Expressões Visuais",
    description:
      "Desenhe uma paisagem que represente suas emoções atuais e explique sua escolha.",
    teacher: "Laura Martins",
  },
  {
    subject: "Matemática",
    classes: ["3D"],
    createdOn: new Date(2024, 10, 20),
    expiresIn: new Date(2024, 10, 29),
    title: "Funções Polinomiais",
    description:
      "Resolva os exercícios de funções quadráticas enviados no PDF.",
    teacher: "Carlos Mendes",
  },
];

export const responses = [
  {
    studentId: 1,
    content: "Resolução dos exercícios de Matemática com cálculos detalhados.",
    conclusionDate: new Date(2024, 10, 8, 14, 30), // 8 de novembro às 14h30
    grade: 9.5,
  },
  {
    studentId: 2,
    content: "Resumo da Revolução Francesa com tópicos principais destacados.",
    conclusionDate: new Date(2024, 10, 9, 16, 0), // 9 de novembro às 16h00
    grade: 8.0,
  },
  {
    studentId: 3,
    content:
      "Diagrama de cadeia alimentar com explicação dos papéis dos organismos.",
    conclusionDate: new Date(2024, 10, 10, 10, 15), // 10 de novembro às 10h15
    grade: null, // Ainda não avaliado
  },
  {
    studentId: 4,
    content:
      "Redação argumentativa: 'A importância da leitura na era digital'.",
    conclusionDate: new Date(2024, 10, 11, 18, 45), // 11 de novembro às 18h45
    grade: 7.5,
  },
  {
    studentId: 5,
    content:
      "Tabela comparativa dos biomas brasileiros com informações detalhadas.",
    conclusionDate: new Date(2024, 10, 12, 9, 0), // 12 de novembro às 09h00
    grade: 9.0,
  },
  {
    studentId: 6,
    content: "Resolução dos problemas sobre Leis de Newton.",
    conclusionDate: new Date(2024, 10, 13, 15, 20), // 13 de novembro às 15h20
    grade: null, // Ainda não avaliado
  },
  {
    studentId: 7,
    content: "Explicação dos tipos de reações químicas e exemplos.",
    conclusionDate: new Date(2024, 10, 14, 12, 35), // 14 de novembro às 12h35
    grade: 8.7,
  },
  {
    studentId: 8,
    content: "Plano de exercícios físicos e benefícios descritos.",
    conclusionDate: new Date(2024, 10, 15, 17, 50), // 15 de novembro às 17h50
    grade: 10.0,
  },
  {
    studentId: 9,
    content:
      "Tradução do texto em inglês e lista de vocabulário com significados.",
    conclusionDate: new Date(2024, 10, 16, 11, 0), // 16 de novembro às 11h00
    grade: null, // Ainda não avaliado
  },
  {
    studentId: 10,
    content: "Cartaz artístico com o tema 'Meio Ambiente'.",
    conclusionDate: new Date(2024, 10, 17, 19, 30), // 17 de novembro às 19h30
    grade: 9.8,
  },
  {
    studentId: 11,
    content:
      "Propriedades dos triângulos e quadriláteros com desenhos explicativos.",
    conclusionDate: new Date(2024, 10, 18, 14, 10), // 18 de novembro às 14h10
    grade: 7.2,
  },
  {
    studentId: 12,
    content: "Linha do tempo sobre a Independência do Brasil.",
    conclusionDate: new Date(2024, 10, 19, 13, 45), // 19 de novembro às 13h45
    grade: null, // Ainda não avaliado
  },
  {
    studentId: 13,
    content: "Problemas resolvidos sobre movimento uniforme.",
    conclusionDate: new Date(2024, 10, 20, 16, 20), // 20 de novembro às 16h20
    grade: 8.3,
  },
  {
    studentId: 14,
    content: "Mapa do bairro com pontos de referência identificados.",
    conclusionDate: new Date(2024, 10, 21, 9, 15), // 21 de novembro às 09h15
    grade: 9.0,
  },
  {
    studentId: 15,
    content: "Interpretação do poema 'No Meio do Caminho'.",
    conclusionDate: new Date(2024, 10, 22, 20, 30), // 22 de novembro às 20h30
    grade: 7.9,
  },
  {
    studentId: 16,
    content: "Resumo sobre os elementos dos grupos 1 a 3 da tabela periódica.",
    conclusionDate: new Date(2024, 10, 23, 12, 5), // 23 de novembro às 12h05
    grade: null, // Ainda não avaliado
  },
  {
    studentId: 17,
    content: "Relatório sobre a importância do aquecimento antes dos esportes.",
    conclusionDate: new Date(2024, 10, 24, 18, 50), // 24 de novembro às 18h50
    grade: 9.5,
  },
  {
    studentId: 18,
    content: "Síntese do áudio em inglês.",
    conclusionDate: new Date(2024, 10, 25, 10, 0), // 25 de novembro às 10h00
    grade: 8.0,
  },
  {
    studentId: 19,
    content: "Paisagem desenhada com explicação das emoções representadas.",
    conclusionDate: new Date(2024, 10, 26, 15, 25), // 26 de novembro às 15h25
    grade: 9.6,
  },
  {
    studentId: 20,
    content: "Exercícios resolvidos de funções quadráticas.",
    conclusionDate: new Date(2024, 10, 27, 17, 40), // 27 de novembro às 17h40
    grade: null, // Ainda não avaliado
  },
];
