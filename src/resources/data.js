import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const contact = [
    {
        name: 'David Kenyi',
        alias: 'Johnny Whysky',
        phone: '613 xxx 6016',
        email: 'j...d@cmail.carleton.ca',
    },
];

export const hobbies = [
    'Favourite sport teams',
    'Socializing',
    'Travelling'
];

export const favourites = [
    'Books',
    'Movies',
    'Sports',
    'Games'
];

export const social = [
  {
    id: 1,
    name: 'Facebook',
    url: 'https://www.facebook.com/johnnywhysky',
    icon: <FaFacebook size = {50} />,
  },
  {
    id: 2,
    name: 'Twitter',
    url: 'https://twitter.com/johnny_whysky',
    icon: <FaTwitter size = {50} />,
  },
  {
    id: 3,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/david-kenyi-6a13a5b6/',
    icon: <FaLinkedin size = {50} />,
  },
  {
    id: 4,
    name: 'Github',
    url: 'https://www.github.com/johnnyalier',
    icon: <FaGithub size = {50} />,
  },
]

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/About',
    text: 'About',
  },
  {
    id: 3,
    url: '/Education',
    text: 'Education',
  },
  {
    id: 4,
    url: '/Portfolio',
    text: 'Portfolio',
  },
  {
    id: 5,
    url: '/Work',
    text: 'Work',
  },
];

export const education = [
    {
        degree: 'Bachelor of Computer Science',
        school: 'Carleton University',
        availability: 'Immediately',
    }
];

export const skills = [
    {
        type: 'Technical Skills',
        details: [
            ' Demonstrated know of Automation by writing automation scripts in Ruby and executed them in both Linux and iOS platforms',
            ' Demonstrated knowledge of JavaScript and HTML by developing a Trivia Web API that uses http concepts',
            ' Demonstrated excellent debugging skills through application of concepts of Java abstract data types and algorithms',
            ' Experienced with programming languages such as Java, JavaScript, HTML, C, C++, SAS, R Studio and Python',
            ' Queried MongoDB database to obtain information client requested from the server',
        ]
    },
    {
        type: 'Analytical Skills',
        details: [
            ' Prepared year-end journal entries, income statement and statement of financial position as part of my financial accounting class',
            ' Analyzed projects from a case study in my corporate finance class using Microsoft Excel and recommended whether the company should invest in the projects or not',
            ' Applied approach to financial decision making which use future expectations about after-tax cash-flows while accounting for uncertainty in the available information, during my business finance class',
            ' Participated in StockTrak trading competition for university students, as part of my investment class project, by trading stocks using virtual $100,000 and made a profit of at least $15,000 in the end',
            ' Analyzed data from the Centre for Disease Control (CDC) website by fitting various epidemiological models to it using R studio and Microsoft Excel',
            ' Applied ARIMA models to time series data to determine which model the data follow in order to make forecast for the future values using R Studio, SAS and Microsoft Excel',
            ' Demonstrated understanding of data smoothing by implementing exponential smoothing methods on time series data'
        ]
    },
    {
        type: 'Communication Skill',
        details: [
            ' Demonstrated strong communication skills by proper documentation of assignment programs to ease reading and understanding the code',
            ' Excellent in understanding and accurately relaying information to the Carleton community',
            ' Strong understanding of customer service and public relations',
            ' Fluent in both written and verbal Swahili'
        ]
    },
    {
        type: 'Leadership Skills',
        details: [
            ' Delegates tasks to team of Student Refugee Program – WUSC Carleton volunteers to achieve goals',
            ' Mobilizes other team members using leadership techniques',
            ' Motivates volunteers to continue helping the Local Committee by providing positive feedback on their contributions'
        ]
    }
];

export const experience = [
    {
        company: 'Bell Canada',
        date: 'June 2020 - April 2021',
        title: 'Junior Software Developer',
        duties: [
            ' Developed automation test cases on Android automation platform using Ruby',
            ' Familiarized with FibeTv app and its variants on iOS and Android platforms',
            ' Documented and reported automation test results and problems identified by the automated test harnesses',
            ' Interacted and collaborated with automation platform vendors, to report problems and suggest improvements',
        ]
    },
    {
        company: 'Carleton University',
        date: 'January 2020 - April 2021',
        title: 'Teaching Assistant',
        duties: [
            ' Conducted bi-weekly labs where students work on assignment problems using statistical software such as MiniTab or SPSS',
            ' Graded assignments and midterms submitted through the course portal, CuLearn, as assigned by the course instructor',
            ' Proctored midterms and or final exams',
        ]
    },
    {
        company: 'Carleton University',
        date: 'September 2017 - April 2018',
        title: 'Database Developer',
        duties: [
            ' Designed a Microsoft Access database for the School of Linguistics and Language Studies (SLaLS)’s graduate students',
            ' Utilized database analysis tools to analyze the graduate student database to generate requested reports',
            ' Used Adobe Acrobat to design fillable forms that were posted to the school’s website',
            ' Archived historical data',
        ]
    },
    {
        company: 'Carleton University',
        date: 'September 2016 - April 2017',
        title: 'ISSO Support Services Assistant',
        duties: [
            ' Demonstrated strong communication skills by responding to inquiries from students, their parents, Carleton staff, the general public and other members of the Campus Community in person, via Microsoft Outlook email and as well as over the phone',
            ' Answered phone calls and transferred them to the relevant services on campus and to requested extensions',
            ' Updated directories regularly with relevant information changes on both Carleton University website and the Citizenship and Immigration Canada website',
            ' Kept up-to-date on events and activities both on and off campus and register students interested in attending them using Microsoft Excel',
            ' Directed students, their parents and the general public to and from locations on and off campus',
            ' Assisted senior staff with other duties when requested',
        ]
    }
];

