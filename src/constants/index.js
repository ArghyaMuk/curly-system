import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  meta,
  TATA,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Journey",
    title: "Journey",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Gamer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "JAVA",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Programmer",
    company_name: "TATA Consultancy Services",
    icon: TATA,
    iconBg: "#383E56",
    date: "August 2022 - Present",
    points: [
      "Managing Active Directory.",
      "End-to-End Compliance",
      "Automation",
      "Networking",
    ],
  },
  {
    title: "Post-Graduation",
    company_name: "Lovely Professional University",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js",
      "Advance Java",
      "Machine Learning",
    ],
  },
  {
    title: "Graduation",
    company_name: "VIVEKANANDA MAHAVIDYALAYA",
    icon: shopify,
    iconBg: "#383E56",
    date: " July 2019 - July 2022",
    points: ["Developing Heart Stroke Prediction application", "JAVA & Python"],
  },
  {
    title: "X & XII",
    company_name: "Dwarhatta Rajeswari Institution",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - May 2019 ",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.",
    name: "Steve Jobs",
    designation: "Founder",
    company: "Apple",
    image:
      "https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg",
  },
  {
    testimonial: "If you are interested in what you do, that keeps you going.",
    name: "Stan Lee",
    designation: "Writer",
    company: "Marvel Comics",
    image:
      "https://media.wired.com/photos/5be9d68a5d7c6a7b81d79e25/master/w_2560%2Cc_limit/StanLee-610719480.jpg",
  },
  {
    testimonial:
      "When something is important enough, you do it even if the odds aren't in your favor",
    name: "Elon Musk",
    designation: "Founder",
    company: "Tesla",
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik",
  },
  {
    testimonial:
      "None can destroy iron, but its own rust can. Likewise, none can destroy a person but his own mindset can.",
    name: "Ratan Tata",
    designation: "Former Chairman",
    company: "TATA Sons",
    image:
      "https://assets.gqindia.com/photos/645e034efc79052643f24e8e/1:1/w_1080,h_1080,c_limit/Ratan-Tata.jpg",
  },
  {
    testimonial:
      "Real programmers don't comment their code. It was hard to write, it should be hard to understand.",
    name: "Anonymous",
    designation: "Anonymous",
    company: "Anonymous",
    image:
      "data:image/png;base64,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",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
