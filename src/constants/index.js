const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "GitHub Contributions" },
  { value: 10, suffix: "+", label: "Personal/Academic Projects" },
  { value: 5, suffix: "+", label: "Certifications/Workshops" },
];

const logoIconsList = [
  {
    imgPath: "/images/node.png",
  },
  {
    imgPath: "/images/git.svg",
  },
  {
    imgPath: "/images/react.png",
  },
  {
    imgPath: "/images/three.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/three.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/python.svg",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "During my DevOps internship, I got hands-on experience with cloud automation and CI/CD tools. It helped me understand how real-world deployment pipelines work and how to make them more efficient.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "DevOps Engineer (Intern) — itW",
    date: "June 2, 2025 - July 2, 2025",
    responsibilities: [
      "Worked on automating deployment pipelines using GitHub Actions and Terraform.",
      "Connected AWS services for testing, build, and deployment workflows.",
      "Explored Docker, Trivy, and tfsec for security and containerization tasks.",
    ],
  },
  {
    review:
      "My MERN Stack internship was where I learned how to bring ideas to life on the web. I got to work on both frontend and backend parts of real projects and improved my teamwork and coding skills.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "MERN Stack Developer (Intern) — Codebeat",
    date: "June 25, 2024 - July 25, 2024",
    responsibilities: [
      "Built full-stack applications using MongoDB, Express.js, React, and Node.js.",
      "Created APIs, handled CRUD operations, and improved page responsiveness.",
      "Collaborated with mentors to debug, optimize, and structure clean code.",
    ],
  },
  {
    review:
      "My Cloud Learner phase helped me understand the basics of cloud computing and how services like AWS support modern web and DevOps workflows.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo1.png",
    title: "Cloud Learner — itW",
    date: "August 9, 2023 - September 5, 2023",
    responsibilities: [
      "Explored AWS core services like EC2, S3, IAM, and VPC setups.",
      "Deployed small projects and learned how cloud infrastructure works.",
      "Gained confidence with basic cloud networking and cost management concepts.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo1.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/rs6_arjit/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/omm.swain.35175",
  },
  {
    name: "gt",
    imgPath: "/images/git.png",
    url:"https://github.com/Arjit-dev",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url:"https://www.linkedin.com/in/m-arjit/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};