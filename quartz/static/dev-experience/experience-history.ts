import { ExperienceItem } from "../../components/ExperienceItem";

export const devExperienceItems: ExperienceItem[] = [
    {
        title: "The Digital Gardening Collective ",
        roles: ["Creator", "Lead Developer"],
        duration: "Sep 2022 - Mar 2024 (Open-Source Initiative)",
        image: { name: "../landing-showcase/dgc-showcase-image.png", isSquare: true },
        description: "The DGC is a living directory of personal digital gardens and digital gardeners who are willing to trade their time to help others create their own. The DGC also maintains open-source technologies in the personal digital gardening arena.",
        responsibilitiesAndWins: [
            {  
                title: "Front Porch (Dec 2023 - Mar 2024)",
                productHuntLaunchURL: "https://www.producthunt.com/products/front-porch#front-porch",
                githubURL: "https://github.com/DigitalGardeningCollective/front-porch",
                techStack: [
                    "JavaScript",
                    "TypeScript",
                    "HTML",
                    "CSS",
                    "Quartz (Open-Source Static-Site Generator)"
                ],
                items: [
                    { title: "Created an open-source fork of Quartz that serves as a person's website, digital garden, portfolio, 'now' log, and blogroll" }
                ]
            },
            {
                title: "Open-Source Community Digital Gardening Technology (Jun 2023 - Dec 2023)",
                githubURL: "https://github.com/DigitalGardeningCollective/community-digital-garden",
                techStack: [
                    "ReactJS",
                    "NextJS",
                    "TypeScript",
                    "JavaScript",
                    "PostgreSQL",
                    "Supabase",
                    "Storybook",
                    "Chakra UI",
                    "HTML",
                    "CSS"
                ],
                items: [
                    { title: "Led a team of 5 open-source developers in creating a community blogging web app that would be integrated with a digital gardening hub" },
                    { title: "Created the frontend boilerplate that would be used as the starting point for the team" }
                ]
            },
            {
                title: "(Canceled) Digital Gardening Hub (Sep 2022 - Dec 2023)",
                techStack: [
                    "ReactJS",
                    "NextJS",
                    "TypeScript",
                    "JavaScript",
                    "PostgreSQL",
                    "Supabase",
                    "Deno",
                    "Storybook",
                    "Chakra UI",
                    "HTML",
                    "CSS"
                ],
                items: [
                    { title: "Developed a digital gardening hub that would allow users to create a personal digital garden on the platform and submit pieces to community digital gardens that were connected to the platform" }
                ]
            }
        ]
    },
    {
        title: "Bitwise Technology Services",
        roles: ["Software Developer"],
        duration: "Jan 2022 - Jun 2023 (On May 29th, everyone was furloughed and then laid off in June.)",
        image: { name: "bitwise-boilerplate-preview.png", isSquare: true, hasBorder: true },
        description: "A software development company that specialized in creating custom software solutions for businesses.",
        techStack: [
            "ReactJS", 
            "TypeScript", 
            "JavaScript",             
            "PostgreSQL",
            "Storybook",
            "NestJS", 
            "Django", 
            "Python",
            "HTML",
            "CSS"
        ],
        responsibilitiesAndWins: [
            { title: "Served as a full-stack developer on the Internal Tooling Team. We developed and maintained frontend and backend boilerplates for the developers at Bitwise Technology Services. For reference, Bitwise Technology Services was originally called Shift3." },
            { prefixText: "Frontend Contributions:", title: "React Boilerplate", url: "https://github.com/Shift3/boilerplate-client-react/pulls?page=1&q=is%3Apr+is%3Aclosed+author%3Ajoshwingreene" },
            {
                title: "Backend Contributions:",
                subItems: [
                    { title: "NestJS Boilerplate", url: "https://github.com/Shift3/boilerplate-server-node/pulls?q=is%3Apr+is%3Aclosed+author%3Ajoshwingreene" },
                    { title: "Django Boilerplate", url: "https://github.com/Shift3/dj-starter/pulls?q=is%3Apr+is%3Aclosed+author%3Ajoshwingreene" }
                ]
            }
            
        ]
    },
    {
        title: "Make Work Fun",
        roles: ["Open-Source Contributor"],
        duration: "Jun 2021 - Oct 2021 (and a couple of commits in Nov 2022)",
        image: { name: "make-work-fun-dailies-preview.png", isSquare: true },
        description: "Gamify your productivity tools and unlock multiplayer for personal development.",
        productHuntLaunchURL: "https://www.producthunt.com/products/make-work-fun-gamify-notion-workspaces#make-work-fun-gamify-notion-workspaces",
        githubURL: "https://github.com/thex3family/make-work-fun",
        techStack: [
            "ReactJS", 
            "NextJS",
            "JavaScript", 
            "PostgreSQL", 
            "Supabase",
            "TailwindCSS",
            "HTML",
            "CSS"
        ],
        responsibilitiesAndWins: [
            { title: "Developed the inner workings of the Dailies (Daily Habits) feature and played an active part in designing how daillies should be represented in the Supabase backend, which used PostgreSQL" },
            { title: "Created the initial version of the Edit Daillies feature using an Ant Design table, which showed the user's list of habits (offered local CRUD functionality)" },
            { title: "Often referenced the 3 normal forms when we were discussing database design; Provided development guidance for the above two features" },
            { title: "Contributed to the development of the Parties feature" }
        ]
    },
    {
        title: "Infosys (Client: Large Healthcare Company)",
        duration: "Mar 2021 - Dec 2021",
        image: { name: "healthcare-nda-graphic.png", isSquare: true },
        description: "I worked for a large healthcare company while I was an employee at Infosys.",
        responsibilitiesAndWins: [
            { 
                title: "Software Engineer (Sep 2021 - Dec 2021)",
                techStack: [
                    "SQL",
                    "Microsoft SQL Server",
                    "C#",
                    "WCF Services",
                    "Excel"
                ],
                items: [
                    { title: "Analyzed and validated WCF Services that used C# and stored procedures" },
                    { title: "Prepared test data for the development environment while doing the above analysis" }
                ]
            },
            {
                title: "Technical Support Engineer (Mar 2021 - Sep 2021)",
                techStack: [
                    "SQL",
                    "Microsoft SQL Server",
                    "Excel"
                ],
                items: [
                    { title: "Troubleshooted issues and wrote queries that fixed issues in the production database" },
                    { title: "Created SQL queries for business analysts and project managers" },
                    { title: "Created excel reports that were included in executive reports via automated SQL queries " }
                ]
            }
        ]
    },
    {
        title: "Revature",
        roles: ["Software Engineer (Feb 2021 - Mar 2021)", "Associate Software Engineer (Dec 2020 - Feb 2021)"],
        duration: "Dec 2020 - Mar 2021",
        image: { name: "revature-logo.png", isSquare: true },
        description: "A software development training program that prepares you for a career in software development, in addition to having you interview with their client companies (ex. Infosys).",
        responsibilitiesAndWins: [
            {
                title: "Project 3 - RVTR Campsite (Feb 2021 - Feb 2021)",
                techStack: [
                    "C#", 
                    "ASP.NET Web API", 
                    "MongoDB", 
                    "ADO.NET Entity Framework", 
                    "Angular", 
                    "JavaScript", 
                    "Testing", 
                    "DevOps", 
                    "Docker", 
                    "HTML5", 
                    "CSS3", 
                    "SQL", 
                    "BDD", 
                    "TDD", 
                    "Microsoft Azure", 
                    ".NET", 
                    "Continuous Integration", 
                    "Microservices", 
                    "TypeScript", 
                    "Jasmine", 
                    "Karma", 
                    "REST", 
                    "Kubernetes"
                ],
                items: [
                    { title: "Served as the team leader for one of the four teams; Participated in the daily team lead/scrum, standup, and code review meetings." },
                    { title: "Added features to the Account API, in addition to refactoring code." },
                    { title: "Supported my team in making enhancements to the Angular web application." },
                    { title: "Reviewed pull requests; Informed the team-wide lead know which pull requests from my team were ready so that they could be reviewed and merged into the upstream repository" }
                ]
            },
            {
                title: "Project 2 - Revature Dev Tribune (Jan 2021 - Feb 2021)",
                githubURL: "https://github.com/Revature-Dev-News/Revature-Dev-Tribune",
                techStack: [
                    "C#", 
                    "ASP.NET Web API", 
                    "SQL Server", 
                    "ADO.NET Entity Framework", 
                    "HTML", 
                    "JavaScript", 
                    "CSS", 
                    "Microsoft Azure", 
                    "ASP.NET MVC", 
                    "YAML", 
                    "GitHub Actions", 
                    "Docker", 
                    "Docker Hub", 
                    "Okta", 
                    "xUnit"
                ],
                items: [
                    { title: "Served as one of the two leads for this 3-person team; Provided the vision for the project; Created wireframes." },
                    { title: "Played an active role in defining the different properties for all of our domain classes and how the multiplicity relationships should be represented in our SQL Server." },
                    { title: "Corrected the service-side endpoints that dealt with article creation, editing, and deletion." },
                    { title: "Implemented the MVC functionality that allows (1) authors to view all articles and create, edit, and delete articles (2) readers to filter articles by topic." },
                    { title: "Used bootstrap to style all of the pages that I worked on; Made it so that the general layout styling would be dependent on whether the user is an author, reader, or guest." },
                    { title: "Corrected the YAML script so that it would deploy our MVC and API docker images to separate Azure web app services; Supported other DevOp efforts." },
                    { title: "Supported efforts to set up security using Okta." }
                ]
            }
        ]
    },
    {
        title: "Project Iota",
        roles: ["Indie App Developer"],
        duration: "May 2020 - Aug 2020",
        image: { name: "iota-preview.png", isSquare: true, hasBorder: true },
        description: "A save-for-later and digital media aggregator app.",
        techStack: [
            "Dart", 
            "Flutter", 
            "JavaScript", 
            "React", 
            "Redux", 
            "HTML", 
            "CSS", 
            "Bulma CSS", 
            "Firebase/Firestore", 
            "Python", 
            "Flask"
        ],
        responsibilitiesAndWins: [
            { title: "Revised the design of Korey (Team Korey's project from below) and rebranded it" },
            { title: "Used the Newspaper3k python library to develop a basic Flask api that would return the content of articles that were passed to it" },
            { title: "Developed the mobile and web versions from scratch. Started with the mobile version and was working on the web version. A screenshot of the project is available at the bottom of my website." }
        ]
    },
    {
        title: "Stealth Startup: The Uber for Exotic Dancers",
        learnMoreURL: "../../portfolio/design/stealth-startup-dancers",
        roles: ["React Developer", "React Native Developer", "UI/UX Designer"],
        duration: "Mar 2018 - Dec 2018 (7 months total; temporarily left the project from Jul to Oct)",
        image: { name: "../item-cover/stealth-startup-dancers-preview.png", isSquare: true },
        description: "An effort to develop a contract-labor app that would help exotic dancers and club owners work together in a efficient and completely legal way.",
        techStack: [
            "React Native",
            "Expo",
            "iOS",
            "Android",
            "ReactJS",
            "JavaScript",
            "HTML",
            "CSS"
        ],
        responsibilitiesAndWins: [
            { title:  "Initially led the development of the React Native frontend; Moved to a support role when I came back to the project in October." },
            { title: "Spearheaded the design for both the web and mobile versions based on the given specfications." },
            { title: "Constructed wireframes and high-fidelity mockups" }
        ],
    },
    {
        title: "59DaysofCode 2018 Hackathon Entry - Korey",
        learnMoreURL: "../../portfolio/design/pocket-ux-case-study",
        roles: ["Project Lead", "Software Developer, Product Designer"],  
        duration: "Jun 2018 - Aug 2018 (occurred while I temporarily left the above project)",
        image: { name: "korey-preview.png", isSquare: false, hasBorder: true },
        description: "A mobile app that allows you to save online articles and other digital content for later and consume them right within the app. For reference, I started this endeavor because I discovered a need while working on a independent user experience case study.",
        techStack: [
            "React Native",
            "Realm",
            "iOS",
            "Android",
            "Flask",
            "Python"
        ],
        responsibilitiesAndWins: [
            { title: "Spearheaded the app's design and co-developed the React-Native frontend" },
            { title: "Played an active role in discussions that pertained to the backend" },
            { title:  "Main speaker for both the pitch to the judges and the main stage pitch (audience of at least 100 peopple). We came in second place." }
        ],
    },
    {
        title: "Project in Human Computer Interaction & Evaluation - Web-based Exergame Tracker",
        roles: ["Software Developer"], 
        duration: "Apr 2016 - Jun 2016",
        image: { name: "hci-eval-project-preview.png", isSquare: true, hasBorder: true },
        description: "A web-based administration system that would allow doctors and trainers to track the exercise data of their Leukemia patients",
        techStack: [
            "Spring", 
            "MongoDB", 
            "AngularJS", 
            "HTML", 
            "CSS"
        ],
        responsibilitiesAndWins: [
            { title: "Participated in architectural discussions that determined what technologies would be used for the backend and front-end" },
            { title: "Played an active role in backend development discussions and supported backend development efforts that were being spearheaded by another team member:",
              subItems: [
                "Made the REST controllers make use of the service layer classes, which interacted with the MongoDB database",
                "Constructed the model classes and added missing operations to the service layer classes"
              ]  
            },
            { title: "Provided direction for development efforts that led to the creation of a message queue based on the client's requirements" },
            { title: "Developed a python script that was used to remotely update the Spring-based server on the client's physical server, which I previously set up" },
            { title: "Wrote documentation that described our architecture and why specific technologies were chosen" }
        ],
    },
    {
        title: "Senior Design Project - Thales Group Proof-of-Concept Android App",
        roles: ["Lead Software Developer"],
        duration: "Jan 2016 - Jun 2016",
        image: { name: "senior-design-dev-preview.png", isSquare: false },
        imageDimensions: { height: 400, width: 200 },
        description: "A proof of concept Android application that would allow users to monitor business operations, like fleet performance.",
        techStack: [
            "Android",
            "Java",
            "Spring",
            "REST",
            "MPAndroidChart"
        ],
        responsibilitiesAndWins: [
          {
            title: "Part 1 - Focus: Usability Design & Implementation Design (Winter Quarter)",
            items: [
              { title: "Actively participated in architectural discussions that led to the use of the Model-View-View Model architecture for eased view and application logic testing" },
              { title: "Constructed sequence, class, and activity diagrams for the planned application flow and proposed features" },
              { title: "Served as the main liaison to the System Architect at Thales who advised us on our implementation design and briefed us on how we should make requests to Thales' cloud architecture. (This approach was ultimately scrapped for a mocked RESTful backend using Spring.)"},
              { title: "Played an active role in our bi-weekly sprint report presentations to our client and class over the course of both quarters" }
            ]
          },
          { 
            title: " Part 2 - Focus: Implementation (Spring Quarter)",
            items: [
              { title: "Delegated development tasks and directed integration efforts during sprints" },
              { title: "Laid the foundations for the class that made login and coverage data requests to our mocked RESTful backend" },
              { title: "Implemented login functionality and used Android's AccountManager class for on-device account creation and token authentication" },
              { title: "Played a vital role in the discussion that finalized the data visualizations on the Operations dashboard" },
              { title: "Completed the Operations dashboard, which, using mocked coverage data from the backend, displayed five line charts that identified how many airplane data payloads were lost each day for each coverage area and allowed users to select a data point to see detailed information for the specified day (Graphing Library Used - MPAndroidChart)" },
              { title: "Fine-tuned and populated the Operation dashboard's detail page, which listed all of the airplanes that lost a payload on the chosen day" },
              { title: "Refactored code for clarity and wrote documentation" }
            ]
          }
        ]
    },
    {
        title: "Software Design II - Final Project (JavaFX)",
        roles: ["Software Developer"],
        duration: "Feb 2016 - Mar 2016",
        image: { name: "board-game-dev-preview.png", isSquare: true },
        description: "An extensible board game server.",
        githubURL: "https://github.com/blinebau/inf122-game-server",
        techStack: [
            "Java",
            "JavaFX",
        ],
        responsibilitiesAndWins: [
          { title: "Collaborated with 6 students in order to design and build an extensible board game server, which included a networking component and the following built-in games: Chess, Checkers, Tic-Tac-Toe" },
          { title: "Actively participated in architectural discussions that led the game-related classes to ultimately use a Model-View-Controller architecture, in addition to participating in discussions related to how the networking component of the project would interface with the game architecture" },
          { title: "Proposed the creation of a standard way to construct grid-based game boards, which was implemented and used by each game" },
          { title: "Designed and implemented the custom game board implementation (BoardGameGridPane) and the base game gui class (GameGUI); Contributed to the development of the Chess game plugin" },
          { title: "Participated in five presentations over the course of the project that explained how we went about the project" },
          { title: "Wrote documentation for the custom game board implementation and the base Model/View/Controller classes"}
        ]
    },
    {
      title: "Mixagram (iOS)",
      roles: ["iOS Developer"],
      image: { name: "mixagram-dev-preview.png", isSquare: false },
      duration: "Oct 2014 - Feb 2015",       
      description: "A mobile app for the iPhone that allows users to combine short video clips with music.",
      techStack: [
        "Objective-C",
        "iOS",
        "PBJVision",
        "Facebook Pop"
      ],
      responsibilitiesAndWins: [
        { title: "Laid down the foundations for the recording and preview screens based on the given design specifications" },
        { title: "Analyzed the documentation and code of the outsourced music and video clip mixing engine in order to integrate its functionality into the recording screen"},
        { title: "Reverse engineered the iOS camera engine, PBJVision, in order to record individual clips so that they could be paired with music and be merged with the aforementioned engine" },
        { title: "Developed the progress bar and processing music animations using Facebook's animation framework, Pop" },
        { title: "Developed a custom radial value picker control, which is used to control the song and device’s microphone audio levels" }
      ]
    },
    {
      title: "Fresno Transit Free",
      roles: ["Co-Founder", "General Project Manager", "Mobile App Developer", "Designer"],
      duration: "Aug 2011 - Apr 2014",
      learnMoreURL: "../../portfolio/design/fresno-transit-free",
      image: { name: "ftf-dev-preview.png", isSquare: false },
      description: "A mobile bus schedule that improves the experience of Fresno Area Express bus riders.",
      techStack: [
        "Objective-C",
        "iOS",
        "Java",
        "Android"
      ],
      responsibilitiesAndWins: [
        { title: "Spearheaded the design and the development of the user interface and user experience" },
        { title: "Designed and developed the Favorites feature, which allows users to quickly access their most used routes" },
        { title: "Designed and implemented an algorithm that differentiates between AM and PM times for the Bus Schedule feature (iOS version)" },
        { title: "Designed and created a class that manages the database and encapsulates all of its operations (iOS version)" },
        { title: "Helped fine-tune and debug the functionality for every feature (i.e. Display Routes, Information, Bus Schedule, Favorites, Access to Google Maps)" },
        { title: "Researched different technologies, libraries, and frameworks and implemented them into the project" }
      ],
    }
  ];