import self from "../img/self.jpg"

export let colors = [ "rgb(224, 140, 62)", "rgb(203, 188, 21)"];
export let bgcolors = [ "rgb(255, 255, 255)", "rgb(255, 255, 255)"];

export const info = {
    title: 'Luca Martinelli',
    firstName: "Luca",
    lastName: "Martinelli",
    hello: "Hi, I'm Luca Martinelli",
    initials: "LM", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Project Manager",
    playlistAbout: "https://open.spotify.com/embed/playlist/0aH66jrlUNWxJvXHWmiiXM?utm_source=generator",
    playlistTechnologies: "https://open.spotify.com/embed/playlist/18pqhKxaSdp8yqoarZZ6Ss?utm_source=generator",
    playlistExeperiences: "https://open.spotify.com/embed/playlist/3np2N8qCr9HusUK7jgYCPF?utm_source=generator",
    
    images: [
        {
            img: '../../img/insta-1.jpg',
            title: 'mountain',
            rows: '2',
            cols: '2',
        },
        {
            img: '../../img/insta-2.jpg',
            title: 'bike',
            rows: '2',
            cols: '2',
        },
        {
            img: '../../img/insta-3.jpg',
            title: 'snowboard',
            rows: '2',
        }
    ],
    currentCompany: "Automobili Lamborghini S.p.A",
    basedIn: "in Mantova, Bologna and Trento ",
    resume: "if available,",
    notFound: "Next Time Bro",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    bgGradient: `-webkit-linear-gradient(135deg, ${bgcolors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Italy'
        },
        {
            emoji: "💼",
            text: "Customer Journey at Automobili Lamborghini"
        },
        {
            emoji: "📧",
            text: "l.martinelli@hotmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/luca.martinelli.12139/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/lucagump",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },        
        {
            link: "https://open.spotify.com/user/lucagump?si=faaed05c674e4df8",
            icon: "fa fa-spotify",
            label: 'spotify'
        },

        {
            link: "https://www.linkedin.com/in/luca-martinelli-7ab713168",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.github.com/lucagump",
            icon: "fa fa-github",
            label: 'github'
        }
    ],
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        },
    experiences: [
        {
            position: 'Consultant',
            company: 'Jakala S.p.a',
            location: 'Milano(MI)',
            description: '',
            startDate: 'March 2023',
            endDate: 'Now'
        },
        {
            position: 'Customer Journey - Mobile App Specialist',
            company: 'Automobili Lamborghini S.p.a',
            description: 'As a Mobile App Specialist for Lamborghini Unica in the commercial department, I support the Product Owner in the overall vision, strategy, and execution of the apps connectivity and user experience. I work closely with cross-functional teams including engineering, design, and marketing to define and deliver innovative features that enhance the apps connectivity and user experience.',
            startDate: 'March 2022',
            endDate: 'February 2023',
            activities: [
                'Defining and prioritizing the product roadmap for the app\'s connectivity and user experience',
                'Create a detailed plan for how the connected features will be developed and integrated into the super sport car, including timelines and resources needed.',
                'Collaborating with engineering and design teams to deliver high-quality features on time',
                'Define key benefits and value proposition of connected features for SSc and SSuv',
                'Gathering and synthesizing customer feedback to inform product decisions',
                'Ensuring that the app\'s connectivity and user experience are consistent with the Lamborghini Brand',
                'Monitoring and analyzing app usage and performance data to identify opportunities for improvement',
                'Collaborating with marketing to develop and execute go-to-market strategies for connected features, including marketing and communication efforts, and providing ongoing support to ensure a seamless and high-quality user experience.'
            ],
            knowledge: [
                'User Experience (UX)', 
                'Design', 
                'Connectivity', 
                'Digital Strategy',
                'Project Management',
                'Product Development', 
                'Agile Methodologies'
            ]
        },
        {
            position: 'IT Customer Processes',
            company: 'Automobili Lamborghini S.p.a',
            description: 'Directly collaborated with Motorsport, Marketing and Connectivity team to prototype, design and deliver UI and UX experience with a design thinking approach. Collaborated with product and development teams on core projects to improve product interfaces and experiences.',
            startDate: 'May 2021',
            endDate: 'February 2022',
            activities: [],
            knowledge: []
        },
        {
            position: 'Project Manager',
            company: 'E-Agle Trento Racing Team',
            description: 'Design and development of user-interface. I improved the software management approach of the team and compelted the first version of the steering wheel. The second year I started a new project with the faculty advisorto to design a new telemetry solution. During one of the competitions in Varano (PR) 2018 our solution won the - "Best HMI Solution" Prize from Automobili Lamborghini. Design and Development of Telemetry Solutions adopting technology like MQTT for Cloud Based Web Applications using Raspberry PI, MongoDB and Vue. Project Management is about the choices behind the HW and SW solution for "Telemetria" and "Steering Wheel"',
            startDate: 'September 2017',
            endDate: 'December 2020',
            activities: [],
            knowledge: ['Git', 'Embedded Linux', 'HMI', 'Webapp', 'EVs', 'Yocto', 'Product Development']
        },
        {
            position: 'Software Engineer',
            company: 'Zucchetti',
            description: 'In my part-time job, I learned to develop integrations and customizations for retail solutions in the HORECA (hotel, restaurant, and café) industry. This involved working closely with a senior developer and project manager to understand requirements and create solutions that met those needs. I had the opportunity to work with a variety of technologies and tools to develop customizations for point of sale systems, inventory management systems, and other retail solutions. Through this job, I gained experience in the HORECA industry and learned how to develop solutions that meet the unique needs of retail businesses. Overall, this was a challenging position that allowed me to grow my skills in the field of development.',
            startDate: 'February 2020',
            endDate: 'October 2020',
            activities: [],
            knowledge: ['C#', '.NET', 'Visual Studio']
        },
        {
            position: 'Full Stack Developer',
            company: 'Prom Facility',
            description: 'Design and development of micro-services web applications used to collect and display data from machinery and other internal purposes.',
            startDate: 'November 2018',
            endDate: 'April 2019',
            activities: [],
            knowledge: ['Node.js', 'Vue.js', 'MQTT', 'MongoDB']
        }
    ],
    educations: [{
            course: 'Master Degree in ICT Innovation Software and Service Architectures',
            university: 'Università degli Studi di Trento',
            startDate: 'September 2019',
            endDate: 'December 2021',
            grade: '110/110 cum Laude'
        },
        {
            course: 'Bachelor Degree in Computer Science',
            university: 'Università degli Studi di Trento',
            startDate: 'September 2015',
            endDate: 'July 2019',
            grade: '92/110'
        }
    ],
    interests: 'I have a deep-seated curiosity about the profound influence of nature and the environment on our decision-making processes and cognitive patterns. While this topic may veer into the abstract, I passionately invest my free moments in close communion with the natural world. I relish taking short respites from my daily routine to immerse myself in my garden\'s tranquility. On days when this isn\'t feasible, I find solace in observing the ebb and flow of urban life, from the intricate details of architecture to the rhythmic movements of people, seeking inspiration in the ordinary. Though I wouldn\'t label myself as inherently athletic, I do embrace winter\'s embrace through the exhilaration of snowboarding and relish the summertime thrill of mountain biking. When circumstances confine me indoors, I channel my interests into the realms of science fiction and fantasy, losing myself in the captivating narratives of movies and television series within these genres. I identify as an aspiring problem solver, dedicating substantial time to explore cutting-edge technology within the realms of software development and interactive design. It\'s in these pursuits that I find my greatest fulfillment.',
    certifications: [
        'English: B2 certified by "Centro Linguistico di Ateneo - Università degli Studi di Trento"',
        'English: Technical Writing certified by "Centro Linguistico di Ateneo - Università degli Studi di Trento"'
    ],

    techIcon:[
        'devicon-figma-plain',
        'devicon-linux-plain',
        'devicon-visualstudio-plain',
        'devicon-ubuntu-plain',
        'devicon-photoshop-line',
        'devicon-github-original',
        'devicon-html5-plain',
        'devicon-mongodb-plain',
        'devicon-nodejs-plain',
        'devicon-csharp-plain',
        'devicon-vim-plain',
        'devicon-windows8-original',
        'devicon-vuejs-plain',
        'devicon-express-original',
        'devicon-heroku-line-wordmark',
        'devicon-nginx-original',
        'devicon-docker-plain-wordmark',
        'devicon-mocha-plain'
    ],
    approaches: [
        'Design Thinking',
        'Critical Thinking',
        'Emotional Intelligence',
        'Co-Design',
        'Empathy'
    ],
    methodologies: [
        'Data analysis and research',
        'Product roadmap development',
        'User experience design',
        'Technical writing',
        'Software development'
    ],    
    technologies: [
        ' Qt, C++, QML: Cross-Platform Development',
        ' Can-Bus: Linux Embedded Systems',
        ' Linux: Embedded Systems and Server',
        ' Node.JS & Vue.JS: Services and Web Application',
        ' .NET, C# & Azure DevOps',
        ' Docker & NGNIX: Microservices' 
    ],
    field: 'Automotive, Formula Student, Linux, Snowboard, Athletics and Mountain Bike'
}