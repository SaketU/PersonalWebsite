import { instagram, linkedin } from "../assets";
import ObjectDetection from "../assets/ObjectDetectionCover.png";
import WebsiteCover from "../assets/WebsiteCover.png";
import storytunescover from "../assets/storytunescover.jpg";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "work-experience", title: "Work Experience" },
  { id: "activities", title: "Activities" },
  { id: "resume", title: "Resume" },
  { id: "contact", title: "Contact" },
];

export const events = [
  {
    heading: "Coach",
    date: "June 2022 - Present",
    subHeading: "North Texas Table Tennis Club",
    description:
      "Appointed as a coach for intermediate table tennis lessons during summer camps. Lead warm up drills, give multi-ball practice, and fix technique issues. Encourage students to push themselves during training",
    direction: "left",
  },
  {
    heading: "Teacher",
    date: "August 2022 - May 2023",
    subHeading: "Turing Club",
    description: "Collaborated with math teachers to help establish a coding club at 2 local middle schools. Taught middle school students Python syntax and worked problems with them to help them understand practical and theoretical applications. Oversaw the development of a curriculum and made adjustments when needed.",
    direction: "left",
  },
  {
    heading: "Research Intern",
    date: "June 2022 - August 2022",
    subHeading: "UTD Quality Of Life Technology Lab",
    description:
      "Developed skills in regression analysis utilizing Linear and Logistic Regression techniques, and gained foundational knowledge in Neural Networks and Convolutional Neural Networks. Learned how to classify structured and unstructured datasets, with a focus on medical imaging diagnostics and smart health records.",
    direction: "left",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "ROS-YOLOv5 Object Detection",
    description: "Implementation of YOLOv5 in ROS",
    image: ObjectDetection,
    modalContent: {
      title: "ROS-YOLOv5 Object Detection",
      description:
        "Implementation of YOLOv5 in ROS. This project involves integrating YOLOv5, a state-of-the-art object detection model, with ROS (Robot Operating System) to detect and recognize objects in real-time.",
      categories: "ROS, Machine Learning",
      detailsLink: "https://github.com/nihalneeru/object_detection",
    },
  },
  {
    id: "project-2",
    title: "Personal Portfolio",
    description: "Saket's personal portfolio",
    image: WebsiteCover,
    modalContent: {
      title: "Personal Portfolio",
      description:
        "Made a personal website that showcases my skills, projects, and activities.",
      categories: "Web Development, HTML, Tailwind CSS, JavaScript, React",
      detailsLink: "https://github.com/SaketU/PersonalWebsite",
    },
  },
  {
    id: "project-3",
    title: "Storytunes",
    description: "Spotify generated Instagram stories",
    image: storytunescover,
    modalContent: {
      title: "Storytunes",
      description:
        "Storytunes is a platform designed for Instagram users to effortlessly find the perfect soundtrack for their stories. By entering a theme or mood, users receive a song recommendation from Spotify that aligns with their chosen theme, enhancing their Instagram story experience.",
      categories: "Next.js, Axios.js, Express.js, Spotify API",
      detailsLink: "https://github.com/SaketU/Storytunes.git",
    },
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/saketu2121/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/saket-upperla-bbb873298/",
  },
];


export const activitiesData = [
  {
    title: "Player",
    organization: "North Texas Table Tennis Club • 2013 - Present",
    details: [
      "Competed in regional, state, and national tournaments.",
      "Trained 10-12 hours a week.",
      "Appointed as a coach for intermediate table tennis lessons during summer camps.",
      "Lead warm-up drills, gave multi-ball practice, and fixed technique issues.",
    ],
  },
  {
    title: "Programmer",
    organization: "Eagle Robotics • 2020 - 2023",
    details: [
      "Competed in FTC (FIRST Tech Challenge), FRC (FIRST Robotics Competition), and BEST (Boosting Engineering Science and Technology) as a programmer.",
      "Coded, tested, and refined the main robot’s subsystems until it was ready for competition.",
      "Hosted and managed regional FTC competitions at school.",
      "Created a database using SmartDashboard to document robot data from matches.",
    ],
  },
  {
    title: "Secretary",
    organization: "Unified • 2022",
    details: [
      "Organized regional competitions for special needs robotics.",
      "Created matchups for teams and schedule for competitions.",
      "Recorded meeting minutes for participants.",
    ],
  },
];
