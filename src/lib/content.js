// Tüm site metinleri ve proje verileri burada.
// Yeni proje eklemek için `projects` dizisine bir nesne eklemen yeterli.

export const profile = {
  name: "Habibe Çınar",
  email: "habibenurcinar@gmail.com",
  location: "İstanbul, Türkiye",
  linkedin: "https://www.linkedin.com/in/habibecinar/",
  github: "https://github.com/habibecinar",
};

export const skills = [
  { group: "frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery"] },
  { group: "backend", items: ["Node.js", "Express", "C#", ".NET", "ASP.NET MVC", "PHP", "REST API"] },
  { group: "data", items: ["MySQL", "MongoDB", "Mongoose"] },
  { group: "tools", items: ["Git", "GitHub", "Shopier", "Vercel", "Scrum"] },
];

// image: public/projects/ klasörüne ekran görüntüsü koyup yolunu yazabilirsin, ör. "/projects/kaeya.jpg"
export const projects = [
  {
    id: "kaeya",
    name: "Kaeya Beauty",
    featured: true,
    year: "2026",
    tech: ["Next.js", "React", "Node.js", "ASP.NET MVC", "Shopier"],
    live: "https://www.kaeyalab.com/",
    github: null, // repo gizli
    image: "/projects/kaeyalab.png",
    palette: ["#F1CDBF", "#B5654A"],
  },
  {
    id: "moneyguard",
    name: "MoneyGuard",
    year: "2025",
    tech: ["React", "React Hook Form", "Chart.js", "REST API"],
    live: "https://lnkd.in/gRFjbqtA",
    github: "https://github.com/Project-Kodexa/MoneyGuard",
    image: "/projects/money.jpeg",
    palette: ["#E8DDF2", "#6B4E8F"],
  },
  {
    id: "taskhive",
    name: "TaskHive",
    year: "2025",
    tech: ["React", "Node.js", "Express", "Mongoose", "CSS Modules"],
    live: "https://taskpro-frontend.onrender.com/",
    github: "https://github.com/TaskHive-TaskPro/TaskPro",
    image: "/projects/taskpro.jpeg",
    palette: ["#F6E7C1", "#A47A1E"],
  },
  {
    id: "cinemania",
    name: "Cinemania",
    year: "2025",
    tech: ["JavaScript", "REST API", "DOM"],
    live: "https://cinemania-js-team-d-project.github.io/Cinemania-JS-Team-D/",
    github: "https://github.com/CINEMANIA-JS-TEAM-D-PROJECT/Cinemania-JS-Team-D",
    image: "/projects/cinemania.jpeg",
    palette: ["#DCE6F2", "#2E5A87"],
  },
  {
    id: "greenharvest",
    name: "GreenHarvest",
    year: "2024",
    tech: ["HTML", "CSS"],
    live: "https://greenharvest-project.github.io/GreennHarvest/",
    github: "https://github.com/GreenHarvest-Project/GreennHarvest",
    image: "/projects/green.jpeg",
    palette: ["#DDEBD9", "#3F7A4A"],
  },
];

export const dict = {
  tr: {
    nav: { about: "Hakkımda", projects: "Projeler", contact: "İletişim" },
    hero: {
      hello: "Merhaba, ben",
      role: "Full Stack Developer",
      intro:
        "Kullanıcı odaklı, ölçeklenebilir web uygulamaları geliştiriyorum. Tasarımdan ödeme entegrasyonuna kadar uçtan uca ürünler ortaya çıkarmayı seviyorum.",
      ctaProjects: "Projelerimi gör",
      ctaContact: "İletişime geç",
      available: "Yeni projelere açığım",
    },
    about: {
      title: "Hakkımda",
      p1: "İstanbul'da yaşayan bir Full Stack Developer'ım. GoIT'te Full Stack Developer programını, Anadolu Üniversitesi'nde Web Tasarımı ve Kodlama bölümünü tamamladım.",
      p2: "Takım projelerinde Scrum Master olarak çalıştım; son olarak bir cilt bakım markası için e-ticaret sitesini tek başıma tasarlayıp geliştirdim. Teknolojiyi günlük hayatı kolaylaştıran çözümler üretmek için kullanmaktan keyif alıyorum.",
      skillsTitle: "Yetenekler",
      groups: { frontend: "Frontend", backend: "Backend", data: "Veritabanı", tools: "Araçlar" },
      stats: [
        { value: "5+", label: "Canlı proje" },
        { value: "TR / EN", label: "Dil" },
        { value: "2023–", label: "Geliştirme" },
      ],
    },
    projects: {
      title: "Projeler",
      subtitle: "Bireysel ve takım halinde geliştirdiğim seçili işler.",
      featured: "Öne çıkan",
      live: "Canlı demo",
      code: "Kod",
      private: "Gizli repo",
      items: {
        kaeya: "Bir cilt bakım markası için tek başıma geliştirdiğim iki dilli e-ticaret sitesi. Cilt analizi ve ürün önerisi, Shopier ile güvenli ödeme, sepet, blog ve kullanıcı girişi içeriyor.",
        moneyguard: "Gelir-gider takibi, grafiklerle aylık istatistikler ve canlı döviz kurları sunan kişisel finans uygulaması.",
        taskhive: "Kart yönetimi ve responsive tasarımıyla öne çıkan full stack görev yönetim uygulaması.",
        cinemania: "TMDB API ile film arama, favori kütüphanesi ve açık/koyu tema içeren film keşif uygulaması.",
        greenharvest: "Scrum Master olarak yönettiğim, W3C standartlarına uygun responsive HTML5 arayüzü.",
      },
    },
    contact: {
      title: "İletişim",
      subtitle: "Bir proje, iş fırsatı ya da sadece merhaba demek için bana yazabilirsin.",
      name: "Adın",
      email: "E-posta adresin",
      message: "Mesajın",
      send: "Gönder",
      sending: "Gönderiliyor…",
      success: "Teşekkürler! Mesajın bana ulaştı.",
      error: "Bir sorun oldu. Lütfen doğrudan e-posta gönder.",
      or: "ya da doğrudan",
    },
    footer: "Next.js ve Tailwind CSS ile geliştirildi.",
  },
  en: {
    nav: { about: "About", projects: "Projects", contact: "Contact" },
    hero: {
      hello: "Hi, I'm",
      role: "Full Stack Developer",
      intro:
        "I build scalable, user-centric web applications. I love shipping products end-to-end, from design to payment integration.",
      ctaProjects: "View my work",
      ctaContact: "Get in touch",
      available: "Open to new opportunities",
    },
    about: {
      title: "About",
      p1: "I'm a Full Stack Developer based in Istanbul. I completed the Full Stack Developer program at GoIT and studied Web Design and Coding at Anadolu University.",
      p2: "I've worked as Scrum Master on team projects, and most recently designed and built an e-commerce site for a skincare brand on my own. I enjoy using technology to create solutions that make everyday life simpler.",
      skillsTitle: "Skills",
      groups: { frontend: "Frontend", backend: "Backend", data: "Database", tools: "Tools" },
      stats: [
        { value: "5+", label: "Live projects" },
        { value: "TR / EN", label: "Languages" },
        { value: "2023–", label: "Building" },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Selected work, built solo and with teams.",
      featured: "Featured",
      live: "Live demo",
      code: "Code",
      private: "Private repo",
      items: {
        kaeya: "A bilingual e-commerce site I built solo for a skincare brand, with skin analysis and product recommendations, secure Shopier checkout, cart, blog and user login.",
        moneyguard: "A personal finance app with income/expense tracking, monthly stats with charts and live exchange rates.",
        taskhive: "A full stack task management app focused on card management and responsive design.",
        cinemania: "A movie discovery app with TMDB-powered search, a favorites library and a dark/light theme.",
        greenharvest: "A responsive, W3C-validated HTML5 interface built by a team I led as Scrum Master.",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project, an opportunity, or just want to say hi? Drop me a message.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send",
      sending: "Sending…",
      success: "Thank you! Your message has been sent.",
      error: "Something went wrong. Please email me directly.",
      or: "or email me directly at",
    },
    footer: "Built with Next.js and Tailwind CSS.",
  },
};
