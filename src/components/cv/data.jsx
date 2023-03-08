
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";

export const PROJECTS = [
  {
    title: "Penguins!",
    link: "https://felri.github.io/penguins/",
    description: [
      "Do you like penguins? Do you like scatter plots?",
    ],
  },
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
    title: "Senior Frontend Developer",
    company: "BovControl",
    link: "https://platform.bovcontrol.com/",
    period: "Feb 2020 - Aug 2020",
    description: [
      "Develop and maintain multiple dashboards using React, providing users with real-time data insights and analytics.",
      "Built a React Native app using an offline-first architecture, allowing users to access data even without internet connection.",
      "Implemented CI/CD pipeline with fastlane, enabling automatic and efficient builds, testing, and deployment of applications.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Jaime Camara",
    link: "https://www.gjccorp.com.br/",
    period: "Feb 2019 - Jun 2020",
    description: [
      "Designed and developed React web and React Native mobile applications for various clients.",
      "Implemented CI/CD using fastlane for efficient and reliable software delivery.",
      "Conducted end-to-end testing using Cypress and Detox for React and React Native apps.",
      "Deployed applications to both the Play Store and App Store.",
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
