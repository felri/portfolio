
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";

export const PROJECTS = [
  {
    title: "Legible Data",
    link: "https://dadoslegiveis.lol/",
    description: [
      "Project in aimed  at helping you understand how Brazilian deputies are spending public money. We have four charts that show the data in different ways.",
    ],
  },
  {
    title: "Doom, a decentralised Zoom",
    link: "https://blog.holochain.org/developers-developers-developers-developers/#doom-a-decentralised-zoom",
    description: [
      "Doom mashes together two peer-to-peer technologies. Holochain handles the ‘signalling’, or the ‘making the connection’ part and the other is called WebRTC, and your computer already supports it — it’s built right into your browser. So once Holochain handles signalling and makes the introduction between my computer and yours, our web browsers take over and stream our video directly to each other.",
    ],
  },
];

export const JOBS = [
  {
    title: "Senior Software Engineer",
    company: "Routable",
    link: "https://routable.com",
    period: "Jun 2022 - Jan 2023",
    description: [
      "Developed and maintained a high-traffic web app that handled thousands of international money transfers, utilizing React and Redux to create a seamless user experience.",
      "Implemented a thorough unit testing strategy, resulting in a stable and reliable application.",
      "Collaborated with cross-functional teams to ensure the project was delivered on time and met the desired specifications.",
      "Utilized best practices, including continuous integration and delivery, to ensure the highest quality product for our users.",
    ],
  },
  {
    title: "React Native Engineer",
    company: "BairesDev",
    link: "https://www.bairesdev.com/",
    period: "Sep 2021 - Jun 2022 ",
    description: [
      "Worked on the development of a chat app, including the implementation of dark mode and the conversion of 20+ screens from class components to functional components.",
      "Implemented unit tests covering 80% of code.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Jexo",
    link: "https://jexo.io/",
    period: "Mar 2021 - Sep 2021",
    description: [
      "Solo developed a React plugin for the Jira ecosystem and a Jira plugin for a poker planning game using GraphQL subscriptions to handle changes between peers.",
      "Implemented unit tests covering 80% of code.",
      "Added new features to the Jexo platform, including a new UI for the Jira plugin and new features for the poker planning game.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Vivo",
    link: "https://www.vivo.com.br/",
    period: "Aug 2020 - Sep 2021",
    description: [
      "Built React and vanilla JavaScript web apps and Node BFF services.",
      "Implemented unit tests with Jest and Stryker and component tests with Ruby and Cucumber.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Santri",
    link: "https://www.santri.com.br/",
    period: "May 2018 - Feb 2019",
    description: [
      "Developed Vue.js apps.",
      "Developed new endpoints with Springboot.",
      "Created end-to-end tests using Cypress.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Life Health",
    period: "Jan 2017 - May 2018",
    description: [
      "Developed ecommerces in PHP and Vue.js.",
      "Implemented a CI/CD pipeline.",
      "Created unit tests with PHPUnit and Jest.",
    ],
  },
];

export const LINKS = [
  {
    icon: <GithubOutlined />,
    link: "https://github.com/felri",
  },
  {
    icon: <LinkedinOutlined />,
    link: "https://www.linkedin.com/in/frcm/",
  },
  {
    icon: <MailOutlined />,
    copyToClipboard: true,
    link: "felipercmelo@gmail.com",
  },
  {
    icon: <FilePdfOutlined />,
    link: "felipe-melo-cv.pdf",
  },
]
