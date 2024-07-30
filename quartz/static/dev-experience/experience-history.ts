import { ExperienceItem } from "../../components/ExperienceItem";

export const devExperienceItems: ExperienceItem[] = [
    {
        title: "Stealth Startup: The Uber for Exotic Dancers",  
        duration: "Mar 2018 - Dec 2018 (7 months total; temporarily left the project from Jul to Oct)",
        image: "default-landing-item-image.jpg",
        description: "An effort to develop a contract-labor app that would help exotic dancers and club owners work together in a efficient and completely legal way.",
        responsibilitiesAndWins: [
            { title:  "Initially led the development of the React Native frontend; Moved to a support role when I came back to the project in October." },
            { title: "Spearheaded the design for both the web and mobile versions based on the given specfications." },
            { title: "Constructed wireframes and high-fidelity mockups" }
        ],
        githubURL: ""
    },
    {
        title: "59DaysofCode 2018 Hackathon Entry - Korey",  
        duration: "Jun 2018 - Aug 2018 (occurred while I temporarily left the above project)",
        image: "default-landing-item-image.jpg",
        description: "A mobile app that allows you to save online articles and other digital content for later and consume them right within the app. For reference, I started this endeavor because I discovered a need while working on a independent user experience case study.",
        responsibilitiesAndWins: [
            { title: "Spearheaded the app's design and co-developed the React-Native frontend" },
            { title: "Played an active role in discussions that pertained to the backend" },
            { title:  "Main speaker for both the pitch to the judges and the main stage pitch (audience of at least 100 peopple). We came in second place." }
        ],
        githubURL: ""
    },
    {
        title: "Project in Human Computer Interaction & Evaluation - Web-based Exergame Tracker",  
        duration: "Apr 2016 - Jun 2016",
        image: "default-landing-item-image.jpg",
        description: "A web-based administration system that would allow doctors and trainers to track the exercise data of their Leukemia patients",
        responsibilitiesAndWins: [
            { title: "Participated in architectural discussions that determined what technologies would be used for the backend and front-end", subItems: ["( Backend - Spring / MongoDB | Frontend - HTML / CSS / AngularJS )"] },
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
        githubURL: ""
    },
    {
        title: "Senior Design Project - Thales Group Proof-of-Concept Android App",
        duration: "Jan 2016 - Jun 2016",
        image: "default-landing-item-image.jpg",
        description: "A proof of concept Android application that would allow users to monitor business operations, like fleet performance.",
        githubURL: "",
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
            title: " Part 2 - Focus: Implementation (Spring Quarter) ",
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
        duration: "Feb 2016 - Mar 2016",
        githubURL: "",
        image: "default-landing-item-image.jpg",
        description: "An extensible board game server.",
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
      image: "default-landing-item-image.jpg",
      duration: "Oct 2014 - Feb 2015",       
      description: "A mobile app for the iPhone that allows users to combine short video clips with music.",
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
      duration: "Aug 2011 - Apr 2014",
      image: "default-landing-item-image.jpg",
      description: "A mobile bus schedule that improves the experience of Fresno Area Express bus riders.",
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