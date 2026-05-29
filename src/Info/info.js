import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

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
    hobbies: [
        {
            label: 'tennis',
            emoji: '🎾'
        },
        {
            label: 'music',
            emoji: '🎵'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
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
    ]
}