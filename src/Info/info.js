import { BiCodeAlt } from "react-icons/bi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaRobot, FaTwitter } from "react-icons/fa";
import { SiPython } from "react-icons/si";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Terry",
    lastName: "Stewart",
    initials: "ts",
    position: "AI Engineer + Web Developer",
    selfPortrait: "/assets/me.png",
    resume: "/assets/Resume.pdf",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    majors: ["AI Engineer", "LLM Specialist", "Reinforcement learnging Expert", "Web Developer"],
    socials: [
        {
            link: "https://facebook.com",
            label: 'facebook',
            icon: <FaFacebook size={30} data-aos="fade-up" data-aos-delay="100" />
        },
        {
            link: "https://instagram.com",
            label: 'instagram',
            icon: <FaInstagram size={30} data-aos="fade-up" data-aos-delay="200" />
        },
        {
            link: "https://github.com",
            label: "github",
            icon: <FaGithub size={30} data-aos="fade-up" data-aos-delay="500" />
        },
        {
            link: "https://linkedin.com",
            label: "linkedin",
            icon: <FaLinkedin size={30} data-aos="fade-up" data-aos-delay="300" />
        },
        {
            link: "https://twitter.com",
            label: "twitter",
            icon: <FaTwitter size={30} data-aos="fade-up" data-aos-delay="400" />
        }
    ],
    bio: "I graduated Havard University. I am a passionate AI developer and researcher specializing in Large Language Models (LLMs), Reinforcement Learning, modern artificial intelligence technologies and a bit of Web Dev Technology. I am dedicated to advancing the field of AI through innovative research and practical implementations.",
    age: 26,
    homeTown: "New York, USA",
    residence: "Los Angeles, USA",
    birthday: "May 13, 2000",
    gmail: "matthewwood0302@gmail.com",
    hobbies: ['Tennis', 'Music', 'Movies', 'Cooking'],
    portfolio: [
        {
            title: "Project 1",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock5
        }
    ],
    services: [
        {
            id: 1,
            icon: <FaRobot />,
            name: "AI Engineering",
            desc: "Building intelligent systems",
        },
        {
            id: 2,
            icon: <BiCodeAlt />,
            name: "Web Development",
            desc: "Fancinating Web Sites",
        }
    ],
    skills: [
        {
            id: "1",
            name: "Python",
            imgsrc:  <SiPython size={48} color="#3776AB" />,
            link: 'https://www.python.org'
        },
        {
            id: "2",
            name: "C++",
            imgsrc: "images/C++.png",
            link: 'https://isocpp.org'
        },
        {
            id: "3",
            name: "HTML 5",
            imgsrc: "images/HTML5.png",
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
        {
            id: "4",
            name: "CSS 3",
            imgsrc: "images/CSS3.png",
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
        },
        {
            id: "5",
            name: "Javascript",
            imgsrc: "images/javascript.png",
        },
        {
            id: "6",
            name: "Bootstrap",
            imgsrc: "images/Bootstrap.png"
        },
        {
            id: "7",
            name: "ReactJs",
            imgsrc: "images/React.png"
        },
        {
            id: "8",
            name: "Material-ui",
            imgsrc: "images/Material-ui.png"
        },
        {
            id: "9",
            name: "Sass",
            imgsrc: "images/SASS.png"
        },
        {
            id: "10",
            name: "Node Js",
            imgsrc: "images/nodejs.png"
        },
        {
            id: "11",
            name: "Express",
            imgsrc: "images/express.png"
        },
        {
            id: "12",
            name: "Next Js",
            imgsrc: "images/Nextjs-logo.svg"
        },
        {
            id: "13",
            name: "MongoDB",
            imgsrc: "images/mongodb.png"
        },
        {
            id: "15",
            name: "Github",
            imgsrc: "images/github.png"
        },
        {
            id: "16",
            name: "Firebase",
            imgsrc: "images/firebase.png"
        },
        {
            id: "20",
            name: "Canva",
            imgsrc: "images/canva.png"
        },
    ],
    proImages: [
        {
            id: "1",
            name: "Bhagavad Gita",
            category: "react",
            imgsrc: "projectImg/react/p_01.jpg",
            href: "https://bhagavad-gita-gyan.vercel.app/"
        },
        {
            id: "2",
            name: "NotePlus",
            category: "react",
            imgsrc: "projectImg/react/p_7.png",
            href: "https://note-plus-react.vercel.app"
        },
        {
            id: "3",
            name: "Pokemon-app",
            category: "react",
            imgsrc: "projectImg/react/p_0.jpg",
            href: "https://react-pokemon-app1.netlify.app/"
        },
        {
            id: "4",
            name: "Crypto-Tracker",
            category: "react",
            imgsrc: "projectImg/react/p_1.jpg",
            href: "https://crypto-tracker1.netlify.app/"
        },
        {
            id: "5",
            name: "Weather-app",
            category: "react",
            imgsrc: "projectImg/react/p_2.jpg",
            href: "https://weather-app-132.netlify.app/"
        },
        {
            id: "6",
            name: "Snake Game",
            category: "javascript",
            imgsrc: "projectImg/js/p_0.jpg",
            href: "https://narendercoder.github.io/Snake-Game/"
        },
        {
            id: "7",
            name: "Spotify",
            category: "javascript",
            imgsrc: "projectImg/js/p_1.jpg",
            href: "https://narendercoder.github.io/Spotify/"
        },
        {
            id: "8",
            name: "Todolist",
            category: "react",
            imgsrc: "projectImg/react/p_4.jpg",
            href: "https://todolist82.netlify.app/"
        },
        {
            id: "9",
            name: "Tic-Tac-toe",
            category: "javascript",
            imgsrc: "projectImg/js/p_2.jpg",
            href: "https://narendercoder.github.io/Tic_Tac_Toe/"
        },
        {
            id: "10",
            name: "E-talk",
            category: "react",
            imgsrc: "projectImg/react/p_5.png",
            href: "https://e-talk.vercel.app/"
        },
        {
            id: "11",
            name: "E-commerce",
            category: "react",
            imgsrc: "projectImg/react/p_6.png",
            href: "https://e-trade.netlify.app/"
        },
    ],
    experience: [
        {
            id: "1",
            date: "Sep 2021 - Mar 2022",
            name: "Graphic Designer",
            company: "Dharaksha Ecosolutions",
            desc: ["Collaborate with social media teams.", "Design and update website.", "Design different media post on Instagram."]
        },
        {
            id: "2",
            date: "Feb 2020 - Present",
            name: "Digital Artist",
            company: "",
            desc: ["Self-taught digital artist on instagram"]
        },

    ],
    education: [
        {
            id: 1,
            date: "Dec 2020-Present",
            name: "Maharaja Agrasen Institute of Technology",
            company: "Rohini Sec-22, Delhi-86",
            desc: "Btech Degree in Electrical and Electronic Engineering Maharaja Agrasen Institute of Technology, Rohini, Delhi"
        },
        {
            id: 2,
            date: "Aug 2019 - Mar 2020",
            name: "Graphic Design Course",
            company: "DICS, GTB Nagar",
            desc: "Completed Graphic Design course"
        },
        {
            id: 3,
            date: "2018-2019",
            name: "XIIth",
            company: "Govt Boys Sr Sec School No-2 Roop Nagar Delhi",
            desc: ""
        },
    ]
}