import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "Gate Smasher",
  initialMessages: [
      createChatBotMessage("Hi, I'm here to help. Preparing for GATE? You're good to go!\nWhat do you want to learn?", {
        widget: "learningOptions",
      }),
    ],
   
   widgets: [
       {
         widgetName: "learningOptions",
        widgetFunc: (props) => <LearningOptions {...props} />,
       },
       {
        widgetName: "tocLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "edX: Stanford Online Automata Theory",
              url: "https://www.edx.org/course/automata-theory",
              id: 1,
            },
            {
              text: "Geeks for Geeks: Theory of Computation",
              url:  "https://www.geeksforgeeks.org/theory-of-computation-automata-tutorials/",
              id: 2,
            },
            {
              text: "Scanftree: Automata Theory",
              url:  "https://scanftree.com/automata/",              
              id: 3,
            },
          ],
        },
      },
      {
        widgetName: "dbmsLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Great Learning",
              url: "https://www.greatlearning.in/academy/learn-for-free/courses/database-management-systems-dbms",
              id: 1,
            },
            {
              text: "Hobby Bytes",
              url: "https://www.hobbybytes.in/",
              id: 2,
            },
            {
              text: "Geeks for Geeks: DBMS",
              url: "https://www.geeksforgeeks.org/dbms/",
              id: 3,
            },
          ],
        },
      },
      { 
        widgetName: "oopLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Tutorialspoint",
              url: "https://www.tutorialspoint.com/human_computer_interface/object_oriented_programming.htm",
              id: 1,
            },
            {
              text: "edX: IITB OOP",
              url: "https://www.edx.org/course/object-oriented-programming",
              id: 2,
            },
            {
              text: "Geeks for Geeks: OOP",
              url: "https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/",
              id: 3,
            },
          ],
        },
      },
      {
        widgetName: "cnetLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Swayam: Computer Networks",
              url: "https://onlinecourses.swayam2.ac.in/cec21_cs04/preview",
              id: 1,
            },
            {
              text: "Geeks for Geeks: Computer Networks",
              url: "https://www.geeksforgeeks.org/computer-network-tutorials/",
              id: 2,
            },
            {
              text: "GradeUp",
              url: "https://gradeup.co/computer-science-engineering-exams/computer-networks",
              id: 3,
            },
          ],
        },
      },
      {
        widgetName: "sengLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Gate Smasher SE playlist",
              url:
                "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2",
              id: 1,
            },
            {
              text: "NPTEL Software Engineering",
              url:
                "https://nptel.ac.in/courses/106/105/106105182/",
              id: 2,
            },
            {
              text: "Geeks for Geeks: Software Engineering",
              url: "https://www.geeksforgeeks.org/software-engineering/",
              id: 3,
            },
          ],
        },
      },
   ],
  }
  
  export default config;