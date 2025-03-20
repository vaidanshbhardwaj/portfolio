import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Vaidansh",
  lastName: "Bhardwaj",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Design Engineer",
  // avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vaidanshbhardwaj",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://in.linkedin.com/in/vaidansh",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/vaidansh23",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:vaidanshbhardwaj@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Generalist, Resourceful and always a Work in Progress.</>,
  subline: (
    <>
      I'm, <InlineCode>Vaidansh</InlineCode>, creative expert with experience in
      UI/UX Design, Front-End Development, Content Writing, Video Editing,
      Graphic Design, and AI technologies.
      <br />
      <br />
      ** This website is still being modified, checkout the about me section to
      checkout my work experience or checkout the case study below**
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from Mumbai, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: false,
    title: "Introduction",
    description: (
      <>
        Selene is a Jakarta-based design engineer with a passion for
        transforming complex challenges into simple, elegant design solutions.
        Her work spans digital interfaces, interactive experiences, and the
        convergence of design and technology.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Reneazy",
        timeframe: "July 2024 - March 2025",
        role: "Founding Designer & Developer",
        achievements: [
          <>
            Designed and developed company website using modern web
            tools/frameworks
          </>,
          <>
            Created logos, graphics, and marketing materials for brand identity
          </>,
          <>Handled client interactions and website design refinement</>,
        ],
        images: [
          {
            src: "/images/reneazybefore.png",
            alt: "Reneazy website design",
            width: 16,
            height: 9,
          },
          {
            src: "/images/reneazyafter.png",
            alt: "Reneazy branding",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Cyblinc",
        timeframe: "January 2024 - June 2024",
        role: "UI/UX Designer & Front-End Developer",
        achievements: [
          <>Designed no-scroll minimal website following 3-color palette</>,
          <>Created various homepage mockups</>,
        ],
        images: [
          {
            src: "/images/landingpage.png",
            alt: "Cyblinc design",
            width: 16,
            height: 11,
          },
          {
            src: "/images/landingpage-3.png",
            alt: "Cyblinc layout",
            width: 16,
            height: 11,
          },
          {
            src: "/images/landingpage-1.png",
            alt: "Cyblinc layout",
            width: 16,
            height: 11,
          },
          {
            src: "/images/landingpage-2.png",
            alt: "Cyblinc layout",
            width: 16,
            height: 11,
          },
          {
            src: "/images/landingpage-4.png",
            alt: "Cyblinc layout",
            width: 16,
            height: 7,
          },
        ],
      },
      {
        company: "KubeSimplify",
        timeframe: "March 2022 - March 2024",
        role: "Core Team Member & Ambassador",
        achievements: [
          <>Worked on website redesign with new UI/tech standards</>,
          <>Created technical blogs, visual guides, and Twitter threads</>,
          <>Managed social media and graphic design publishing</>,
          <>Compiled first community e-book</>,
        ],
        images: [], // Empty array instead of [{}]
      },
      {
        company: "MatrixLeaf",
        timeframe: "December 2023",
        role: "Content Writer",
        achievements: [
          <>Created written content about Front-End Development</>,
        ],
        images: [], // Empty array instead of [{}]
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Jigyasa University, Dehradun",
        description: <>Btech CSE</>,
      },
      {
        name: "Ramsheth Thakur Public School, Kharghar Navi Mumbai",
        description: <>High School and Junior College</>,
      },
      {
        name: "Jindal Vidya Mandir, Bellary, Karnataka",
        description: <>Primary Education</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
      },
      {
        title: "Next.js",
      },
      {
        title: "TypeScript",
      },
      {
        title: "Tailwind CSS",
      },
      {
        title: "Adobe Premiere Pro",
      },
    ],
  },
};

// const blog = {
//   label: "Blog",
//   title: "Blogs i wrote as a KubeSimplify Ambassador",
//   description: `Read what ${person.name} has been up to recently`,
//   // Create new blog posts by adding a new .mdx file to app/blog/posts
//   // All posts will be listed on the /blog route
// };

const blog = {
  label: "Blog",
  title: "Blogs I Wrote as a KubeSimplify Ambassador",
  description: `Read what ${person.name} has been up to recently`,
  posts: [
    {
      title:
        "Introduction to CI/CD and CI/CD Pipeline ($1000 Writeathon Winner)",
      url: "https://blog.kubesimplify.com/introduction-to-cicd-and-cicd-pipeline",
      date: "2023-03-15",
      excerpt:
        "My award-winning guide to modern CI/CD pipelines and their implementation",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1652007130723/pD3mV2_HY.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    },
    {
      title: "Linux Boot Process Simplified",
      url: "https://blog.kubesimplify.com/linux-boot-process-simplified",
      date: "2023-04-02",
      excerpt: "Deep dive into the Linux boot sequence from BIOS to user space",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1656721249571/Him5RiJ40.png",
    },
    {
      title: "Starting Your DevOps Journey as a Windows User",
      url: "https://blog.kubesimplify.com/starting-your-devops-journey-as-a-windows-user",
      date: "2023-05-19",
      excerpt:
        "Practical guide for Windows users transitioning to DevOps workflows",
      image:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1649179112257/fD09s4AqP.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    },
  ],
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
