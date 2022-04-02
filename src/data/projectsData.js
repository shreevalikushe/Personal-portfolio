import myntra from "../assets/png/myntra.png";
import codecov from "../assets/png/codecov.png";
import makemytrip from "../assets/png/makemytrip.png";
export const projectsData = [
  {
    id: 1,
    projectName: "MakeMyTrip - Clone",
    projectDesc: [
      `A Full stack-MERN project mimicing the user flow and behaviour of MakeMyTrip.com.`,
      [
        "Flight and Hotel pages with multiple features",
        "User Authentication",
        "Redux integration",
      ],
    ],
    tags: ["React", "Redux", "MongoDB", "Express"],
    code: "https://github.com/shreevalikushe/Make-my-trip-clone",
    demo: "https://make-my-trip-clone.vercel.app/",
    image: makemytrip,
  },
  {
    id: 2,
    projectName: "Myntra - Clone",
    projectDesc: [
      `All round Frontend integrated clone mimicing the user flow and behaviour of Myntra.com.`,
      [
        "4 product pages with sorting and filters",
        "Redux integration",
        "Cart page features",
      ],
    ],
    tags: ["React", "Redux", "MaterialUI"],
    code: "https://github.com/shreevalikushe/myntra_clone",
    demo: "https://myntra-clone-gilt.vercel.app/",
    image: myntra,
  },
  {
    id: 3,
    projectName: "BBC News - Clone",
    projectDesc: [
      `A visual replica of BBC News with user authentication, news search and language translation feature.`,
      [
        "Responsive landing page",
        "User authentication",
        "Translate news in 5+ languages",
      ],
    ],
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    code: "https://github.com/shreevalikushe/BBC_Clone",
    demo: "https://bbc-news-clone-website.netlify.app/",
    image:
      "https://user-images.githubusercontent.com/74674737/146935382-82a4f03d-3f02-4afc-aa02-43c0a21bff1d.png",
  },
  {
    id: 4,
    projectName: "Codecov - Clone",
    projectDesc: [
      `A clone of Codecov.io website using HTML, CSS and JS. Codecov is the leading, dedicated code coverage solution.`,
      ["Built Landing page and Resources page", "Website responsiveness"],
    ],
    tags: ["HTML", "CSS", "Javascript"],
    code: "https://github.com/shreevalikushe/Codecov_Clone",
    demo: "https://codecov-clone-website.netlify.app/",
    image: codecov,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
