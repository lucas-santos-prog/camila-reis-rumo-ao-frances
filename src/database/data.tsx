import {
  Plane,
  GraduationCap,
  Heart,
  Globe,
  BookOpen,
  Users,
  LucideProps,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Costa",
    role: "Aprovada no DELF B2",
    content:
      "A Camila me ajudou a conquistar minha certificação DELF B2 em apenas 8 meses. O método dela é direto, organizado e focado no que realmente importa. Recomendo demais!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rafael Oliveira",
    role: "Viagem para Paris",
    content:
      "Comecei do zero e em 6 meses já conseguia me comunicar bem em francês durante minha viagem pela França. A Camila torna o aprendizado leve e eficiente.",
    rating: 5,
  },
  {
    id: 3,
    name: "Juliana Santos",
    role: "Intercâmbio no Canadá",
    content:
      "Precisava do francês para meu intercâmbio em Montreal. As aulas online da Camila foram perfeitas — práticas, com foco em conversação e gramática. Cheguei preparada!",
    rating: 5,
  },
  {
    id: 4,
    name: "Pedro Almeida",
    role: "Estudante de Relações Internacionais",
    content:
      "O francês era um diferencial que eu precisava no meu currículo. A Camila me levou do zero ao intermediário com aulas objetivas e um plano de estudos personalizado.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ana Beatriz Lima",
    role: "Apaixonada pela cultura francesa",
    content:
      "Sempre sonhei em falar francês e a Camila realizou esse sonho. Ela explica gramática de um jeito que faz sentido e as aulas passam voando. Melhor investimento!",
    rating: 5,
  },
  {
    id: 6,
    name: "Lucas Ferreira",
    role: "Aprovado no DALF C1",
    content:
      "Já tinha um nível intermediário, mas precisava do C1 para imigração. A Camila estruturou um plano focado e intenso. Resultado: aprovado de primeira!",
    rating: 5,
  },
];

export type Plans = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  ctaLabel: string;
  badge?: string;
};

export const plans: Plans[] = [
  {
    name: "Aula Avulsa",
    price: "R$ 80",
    period: "/aula",
    description: "Ideal para quem quer experimentar ou tem horários flexíveis.",
    features: [
      "1 aula de 60 minutos",
      "Material didático incluso",
      "Acompanhamento individual",
      "Agendamento flexível",
    ],
    highlight: false,
    ctaLabel: "Agendar Aula",
  },
  {
    name: "Plano Mensal",
    price: "R$ 280",
    period: "/mês",
    description:
      "4 aulas por mês com acompanhamento contínuo e progresso garantido.",
    features: [
      "4 aulas de 60 minutos",
      "Material didático exclusivo",
      "Plano de estudos personalizado",
      "Suporte via WhatsApp",
      "Exercícios semanais",
    ],
    highlight: true,
    ctaLabel: "Começar Agora",
    badge: "Mais Popular",
  },
  {
    name: "Plano Trimestral",
    price: "R$ 720",
    period: "/trimestre",
    description: "O melhor custo-benefício. Compromisso com a fluência.",
    features: [
      "12 aulas de 60 minutos",
      "Material didático exclusivo",
      "Plano de estudos avançado",
      "Suporte prioritário",
      "Simulados de certificação",
      "Economia de R$ 120",
    ],
    highlight: false,
    ctaLabel: "Garantir Vaga",
  },
];

export type Faqs = { q: string; a: string };

export const faqs: Faqs[] = [
  {
    q: "Preciso ter algum conhecimento prévio de francês?",
    a: "Não! O método Rumo ao Francês é desenhado para levar você do zero ao intermediário. Recebemos muitos alunos que nunca tiveram contato com a língua.",
  },
  {
    q: "As aulas são ao vivo ou gravadas?",
    a: "Todas as aulas são ao vivo e individuais, via chamada de vídeo. Assim, consigo adaptar cada aula ao seu ritmo e objetivos.",
  },
  {
    q: "O método funciona para quem quer passar no DELF/DALF?",
    a: "Sim! Temos um plano de estudos específico para preparação de certificações. Vários alunos já foram aprovados no DELF B2 e DALF C1 com nosso método.",
  },
  {
    q: "Quanto tempo leva para alcançar o nível intermediário?",
    a: "Com dedicação e aulas regulares, nossa promessa é levar você do zero ao intermediário em 6 meses. O ritmo pode variar conforme sua disponibilidade de estudo.",
  },
  {
    q: "Como faço para agendar minha primeira aula?",
    a: "Basta clicar em qualquer botão 'Agendar Aula Grátis' aqui no site. Você será redirecionada ao WhatsApp com uma mensagem pronta. Simples assim!",
  },
  {
    q: "Qual o valor das aulas?",
    a: "Temos planos a partir de R$ 80 por aula avulsa, com pacotes mensais e trimestrais com descontos. A primeira aula é gratuita para você conhecer o método.",
  },
];

export type NavItem = {
  label: string;
  href: string;
};

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Método", href: "#metodo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Investimento", href: "#investimento" },
  { label: "Contato", href: "#contato" },
];

export const highlights: string[] = [
  "Mais de 100 alunos transformados",
  "Aulas 100% online — de qualquer lugar do Brasil",
  "Método objetivo com foco em gramática e prática",
  "Do zero ao intermediário em 6 meses",
  "Preparação para DELF, DALF e DILF",
];

export type BenefitType = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
};

export const benefits = [
  {
    icon: Plane,
    title: "Viagens",
    description:
      "Comunique-se com confiança em Paris, Montreal, Bruxelas e todos os países francófonos.",
  },
  {
    icon: GraduationCap,
    title: "Certificações",
    description:
      "Prepare-se para as provas DELF, DALF e DILF com um método focado em resultados.",
  },
  {
    icon: Globe,
    title: "Carreira Internacional",
    description:
      "O francês é a 5ª língua mais falada no mundo e um diferencial competitivo no mercado de trabalho.",
  },
  {
    icon: BookOpen,
    title: "Gramática Objetiva",
    description:
      "Aprenda gramática de forma clara e contextualizada, sem enrolação.",
  },
  {
    icon: Heart,
    title: "Paixão pela Língua",
    description:
      "Descubra a beleza do francês em aulas dinâmicas que vão além do idioma.",
  },
  {
    icon: Users,
    title: "Aulas Personalizadas",
    description:
      "Cada aluno recebe um plano de estudos adaptado aos seus objetivos e ritmo.",
  },
];

export const WHATSAPP_CTA =
  "https://wa.me/5511984599581?text=Olá%20Camila!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20francês.";

export const WHATSAPP_CTA_HERO =
  "https://wa.me/5511984599581?text=Olá%20Camila!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20método%20Rumo%20ao%20Francês.";
