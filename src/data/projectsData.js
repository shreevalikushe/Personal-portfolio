import myntra from "../assets/png/myntra.png";

export const projectsData = [
  {
    id: 1,
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
    demo:
      "https://www.linkedin.com/posts/shreevali-kushe-350965149_project-collaboration-javascript-activity-6864988917955919873-HSyf/",
    image:
      "https://user-images.githubusercontent.com/74674737/146935382-82a4f03d-3f02-4afc-aa02-43c0a21bff1d.png",
  },
  {
    id: 2,
    projectName: "Myntra - Clone",
    projectDesc: [
      `All round Frontend integrated clone mimicing the user flow and and behaviour of Myntra.com.`,
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
