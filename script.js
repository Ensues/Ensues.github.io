// Menu icon and navigation
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('[data-nav]');

const hashNavLinks = Array.from(navLinks).filter(link => {
    const href = link.getAttribute('href');
    return href && href.startsWith('#');
});

if (hashNavLinks.length > 0) {
    window.addEventListener('scroll', () => {
        const top = window.scrollY;
        sections.forEach(sec => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                hashNavLinks.forEach(link => link.classList.remove('active'));
                const selector = `header nav a[href="#${id}"]`;
                const el = document.querySelector(selector);
                if (el) el.classList.add('active');
            }
        });
    });
}

function setActivePageLink() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        if (href === current) link.classList.add('active');
    });
}
setActivePageLink();

menuIcon && (menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.style.display = 'block';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.style.display = 'none';
}

// Wire sidebar buttons (in case inline onclick is removed later)
const sidebarOpen = document.getElementById('sidebar-open');
const sidebarClose = document.getElementById('sidebar-close');
sidebarOpen && sidebarOpen.addEventListener('click', showSidebar);
sidebarClose && sidebarClose.addEventListener('click', hideSidebar);

// Theme toggle with persistence
const themeToggle = document.getElementById('theme-toggle');
function applyThemeFromStorage() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') document.body.classList.add('light-mode');
    else document.body.classList.remove('light-mode');
}
applyThemeFromStorage();
themeToggle && themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Initialize typed.js if available
if (typeof Typed !== 'undefined' && document.querySelector('.auto-type1')) {
    new Typed('.auto-type1', {
        strings: ['DEVELOPER', 'DATA SCIENTIST', 'DATA ANALYST'],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });
}

const certificateFiles = [
    { file: 'images/Certificates/Codsoft/Eric Janssen P. Quiambao.pdf', date: '2024-12-23' },
    { file: 'images/Certificates/Codsoft/Eric Janssen P. Quiambao_page-0001.jpg', date: '2024-12-23' },
    { file: 'images/Certificates/Sololearn/ML for Beginners Cert.png', date: '2025-02-27' },
    { file: 'images/Certificates/Sololearn/Python for Data Science Cert.png', date: '2025-02-27' },
    { file: 'images/Certificates/Sololearn/Tech for Everyone Cert.png', date: '2025-02-27' },
    { file: 'images/Certificates/Sololearn/Python for Beginners Cert.png', date: '2025-02-27' },
    { file: 'images/Certificates/Sololearn/Visualize Your Data Cert.jpg', date: '2025-02-27' },
    { file: 'images/Certificates/Sololearn/AI in Data Analysis Cert.jpg', date: '2025-02-27' },
    { file: 'images/Certificates/Sololearn/Data Analytics with AI.png', date: '2025-03-01' },
    { file: 'images/Certificates/Sololearn/CODSOFT - Eric Janssen P. Quiambao.jpg', date: '2025-03-01' },
    { file: 'images/Certificates/Sololearn/Python Intermediate Cert.pdf', date: '2025-03-01' },
    { file: 'images/Certificates/Sololearn/Introduction to Python Cert.pdf', date: '2025-03-03' },
    { file: 'images/Certificates/Sololearn/Introduction to SQL Cert.png', date: '2025-03-04' },
    { file: 'images/Certificates/Sololearn/SQL Intermediate Cert.pdf', date: '2025-04-10' },
    { file: 'images/Certificates/Sololearn/Coding for Data Cert.pdf', date: '2025-04-10' },
    { file: 'images/Certificates/CISCO/CCNA-_Introduction_to_Networks_certificate_ej-quiambao00529-student-tsu-edu-ph_7f73d725-8053-476e-bd3d-d79c82e5081e.pdf', date: '2025-05-05' },
    { file: 'images/Certificates/CISCO/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_ej-quiambao00529-student-tsu-edu-ph_1b0cf59a-a3b6-4a51-ab20-de713512e5f6.pdf', date: '2025-05-05' },
    { file: 'images/Certificates/CISCO/Introduction to Data Science.pdf', date: '2025-05-09' },
    { file: 'images/Certificates/CISCO/Introduction to Modern AI.pdf', date: '2025-05-10' },
    { file: 'images/Certificates/Google/Google Data Analysis/Google Data Analysis.pdf', date: '2025-05-12' },
    { file: 'images/Certificates/Google/Google Data Analysis/Foundations Data, Data, Everywhere.pdf', date: '2025-05-12' },
    { file: 'images/Certificates/Google/Google Data Analysis/Ask Questions to Make Data-Driven Decisions.pdf', date: '2025-05-12' },
    { file: 'images/Certificates/Google/Google Data Analysis/Prepare Data for Exploration.pdf', date: '2025-05-12' },
    { file: 'images/Certificates/Google/Google Data Analysis/Process Data from Dirty to Clean.pdf', date: '2025-05-12' },
    { file: 'images/Certificates/Google/Google Data Analysis/Analyze Data to Answer Questions.pdf', date: '2025-05-12' },
    { file: 'images/Certificates/Google/Google Data Analysis/Share Data Through the Art of Visualization.pdf', date: '2025-05-12' },
    { file: 'images/Certificates/Google/Google Data Analysis/Data Analysis with R Programming.pdf', date: '2025-05-12' },
    { file: 'images/Certificates/Google/Google Data Analysis/Google Data Analytics Capstone Complete a Case Study.pdf', date: '2025-05-12' },
    { file: 'images/Certificates/Google/Google Data Analysis/Google AI Essentials.pdf', date: '2025-05-12' },
    { file: 'images/Certificates/CISCO/Digital Safety and Security Awareness.pdf', date: '2025-06-05' },
    { file: 'images/Certificates/IBM/IBM Data Fundamentals.pdf', date: '2025-06-23' },
    { file: 'images/Certificates/IBM/IBM Artificial Intelligence Fundamentals.pdf', date: '2025-06-23' },
    { file: 'images/Certificates/Forage/Deloitte Data Analytics.pdf', date: '2025-07-15' },
    { file: 'images/Certificates/UPOU/Certificate_for_Business_Analytics_Concepts_and_Frameworks_(May_2025)-CA_106058.pdf', date: '2025-08-14' },
    { file: 'images/Certificates/IBM/Explore Emerging Tech.pdf', date: '2025-08-14' },
    { file: 'images/Certificates/UPOU/Certificate_for_AI_Essentials_Theory_and_Practice_(May_2025)-CA_116292.pdf', date: '2025-09-04' },
    { file: 'images/Certificates/Google/Google IT Automation/Crash Course on Python.pdf', date: '2025-09-14' },
    { file: 'images/Certificates/DataCamp/Understanding Artificial Intelligence.pdf', date: '2025-11-07' },
    { file: 'images/Certificates/DataCamp/Understanding ChatGPT.pdf', date: '2025-11-07' },
    { file: 'images/Certificates/DataCamp/Introduction to SQL.pdf', date: '2025-11-07' },
    { file: 'images/Certificates/DataCamp/AI Ethics.pdf', date: '2025-11-07' },
    { file: 'images/Certificates/DataCamp/Understanding Machine Learning.pdf', date: '2025-11-09' },
    { file: 'images/Certificates/DataCamp/Large Language Models (LLMs) Concepts.pdf', date: '2025-11-09' },
    { file: 'images/Certificates/DataCamp/AI Fundamentals.pdf', date: '2025-11-09' },
    { file: 'images/Certificates/DataCamp/Generative AI Concepts.pdf', date: '2025-11-09' },
    { file: 'images/Certificates/DataCamp/Intermediate SQL.pdf', date: '2025-11-10' },
    { file: 'images/Certificates/Google/Google Business Intelligence/Foundations of Business Intelligence.pdf', date: '2025-11-29' },
    { file: 'images/Certificates/Google/Google Business Intelligence/Accelerate Your Job Search with AI.pdf', date: '2025-12-06' },
    { file: 'images/Certificates/Google/Google Business Intelligence/The Path to Insights Data Models and Pipelinee.pdf', date: '2025-12-31' },
    { file: 'images/Certificates/Google/Google Business Intelligence/Decisions Decisions Dashboards and Reports.pdf', date: '2025-12-31' },
    { file: 'images/Certificates/Google/Google Business Intelligence/Google Business Intelligence.pdf', date: '2025-12-31' },
    { file: 'images/Certificates/Google/Project Management/Foundations of Project Management.pdf', date: '2026-01-31' },
    { file: 'images/Certificates/Google/IT/Technical Support Fundamentals.pdf', date: '2026-03-02' },
    { file: 'images/Certificates/Google/IT/Technical Support Fundamentals.jpg', date: '2026-03-02' },
    { file: 'images/Certificates/DataCamp/Introduction to Deep Learning with PyTorch.pdf', date: '2026-03-07' },
    { file: 'images/Certificates/DataCamp/Introduction to Data.pdf', date: '2026-03-08' },
    { file: 'images/Certificates/DataCamp/Introduction to AI for Work.pdf', date: '2026-03-08' },
    { file: 'images/Certificates/DataCamp/Generative AI for Business.pdf', date: '2026-03-08' },
    { file: 'images/Certificates/DataCamp/Understanding Cloud Computing.pdf', date: '2026-03-08' },
    { file: 'images/Certificates/DataCamp/Large Language Models for Business.pdf', date: '2026-04-30' },
    { file: 'images/Certificates/DataCamp/Artificial Intelligence (AI) Strategy.pdf', date: '2026-04-30' },
    { file: 'images/Certificates/DataCamp/Introduction to Git.pdf', date: '2026-04-30' },
    { file: 'images/Certificates/Business_Analytics_Concepts_and_Frameworks.png', date: '2026-05-13' },
    { file: 'images/Certificates/Github.png', date: '2026-05-13' },
    { file: 'images/Certificates/Google_AI_Essentials.png', date: '2026-05-13' },
    { file: 'images/Certificates/Google_Data_Analysis.png', date: '2026-05-13' },
    { file: 'images/Certificates/Intro to Data Science.png', date: '2026-05-13' },
    { file: 'images/Certificates/Introduction_to_Modern_AI.png', date: '2026-05-13' },
    { file: 'images/Certificates/Python_Data_Science.png', date: '2026-05-13' }
];

const certificateCredentials = {
    'Artificial Intelligence (AI) Strategy|DataCamp': '',
    'Introduction to Git|DataCamp': '',
    'Introduction to Data|DataCamp': '',
    'Introduction to AI for Work|DataCamp': '',
    'Google Data Analysis|Google': ''
};

const featuredCertificates = [
    'Google Data Analysis|Google',
    'Google Business Intelligence|Google',
    'CCNA: Introduction to Networks|Cisco',
    'IBM Artificial Intelligence Fundamentals|IBM',
    'Introduction to Deep Learning with PyTorch|DataCamp'
];

let projectsData = [
    {
        name: 'Ensues.github.io',
        html_url: 'https://github.com/Ensues/Ensues.github.io',
        description: 'Created a resume website to show to potential employers or interested individuals my resume and why they should hire me. As of now it only works in desktop view though.',
        homepage: 'https://ensues.github.io/',
        language: 'HTML',
        updated_at: '2026-05-08T07:05:57Z'
    },
    {
        name: 'Web-Prog-MT-Case-Study-G7',
        html_url: 'https://github.com/Ensues/Web-Prog-MT-Case-Study-G7',
        description: 'This is a midterm case study for web prog, just a revamp on our original websites home page.',
        homepage: '',
        language: 'HTML',
        updated_at: '2026-05-04T13:11:30Z'
    },
    {
        name: 'Ensues',
        html_url: 'https://github.com/Ensues/Ensues',
        description: 'Profile README showing stats, languages, and tools used.',
        homepage: '',
        language: null,
        updated_at: '2026-05-04T00:03:35Z'
    },
    {
        name: 'EluSEEdate-Mobile-App',
        html_url: 'https://github.com/Ensues/EluSEEdate-Mobile-App',
        description: 'Mobile app project in progress with upcoming feature details.',
        homepage: null,
        language: 'TypeScript',
        updated_at: '2026-05-13T06:09:53Z'
    },
    {
        name: 'Job-Search-Tracker-Analytics-Dashboard',
        html_url: 'https://github.com/Ensues/Job-Search-Tracker-Analytics-Dashboard',
        description: 'Job search tracker and analytics dashboard built to replace spreadsheets with a cleaner workflow.',
        homepage: 'https://job-search-tracker-analytics-dashbo.vercel.app',
        language: 'TypeScript',
        updated_at: '2026-05-13T06:07:29Z'
    },
    {
        name: 'Monocular-VO-for-Automated-Turn-Labeling-and-CSV-Generation',
        html_url: 'https://github.com/Ensues/Monocular-VO-for-Automated-Turn-Labeling-and-CSV-Generation',
        description: 'Python-based visual odometry system that estimates trajectory from a single camera feed and predicts driving directions in real time using geometric computer vision.',
        homepage: '',
        language: 'Python',
        updated_at: '2026-04-21T03:18:57Z'
    },
    {
        name: 'ConvLSTM',
        html_url: 'https://github.com/Ensues/ConvLSTM',
        description: 'Deep learning notebooks exploring ConvLSTM architectures for spatiotemporal modeling.',
        homepage: null,
        language: 'Jupyter Notebook',
        updated_at: '2026-04-16T02:54:41Z'
    },
    {
        name: 'Analyzing-Cyclistic-Bike-Share-Data',
        html_url: 'https://github.com/Ensues/Analyzing-Cyclistic-Bike-Share-Data',
        description: 'Capstone project analyzing Cyclistic bike-share data using BigQuery, Google Sheets, and Tableau to reveal usage differences between member types.',
        homepage: '',
        language: 'Jupyter Notebook',
        updated_at: '2026-02-04T12:51:24Z'
    },
    {
        name: 'Video-Editor',
        html_url: 'https://github.com/Ensues/Video-Editor',
        description: 'Python tools for editing video workflows.',
        homepage: null,
        language: 'Python',
        updated_at: '2026-01-31T03:41:36Z'
    },
    {
        name: 'Video-Augmentor',
        html_url: 'https://github.com/Ensues/Video-Augmentor',
        description: 'Python utilities for video augmentation workflows.',
        homepage: null,
        language: 'Python',
        updated_at: '2026-01-29T00:01:38Z'
    },
    {
        name: 'Anemia-Prediction',
        html_url: 'https://github.com/Ensues/Anemia-Prediction',
        description: 'Machine learning notebook for anemia prediction.',
        homepage: null,
        language: 'Jupyter Notebook',
        updated_at: '2025-12-19T13:56:10Z'
    },
    {
        name: 'Auto-File-Management',
        html_url: 'https://github.com/Ensues/Auto-File-Management',
        description: 'Python script that categorizes and moves files into designated directories based on type to streamline organization.',
        homepage: '',
        language: 'Python',
        updated_at: '2025-10-03T04:11:47Z'
    },
    {
        name: 'College-Appointment-Site',
        html_url: 'https://github.com/Ensues/College-Appointment-Site',
        description: 'Final term WebProg case study building an online appointment system for the TSU Registrar to reduce wait times and improve satisfaction.',
        homepage: '',
        language: 'PHP',
        updated_at: '2025-07-16T02:08:22Z'
    },
    {
        name: 'online-library',
        html_url: 'https://github.com/Ensues/online-library',
        description: 'Hackathon project for an online library serving Tarlac State University (TSU).',
        homepage: 'https://ensues.github.io/online-library/',
        language: 'HTML',
        updated_at: '2025-06-06T12:28:51Z'
    },
    {
        name: 'OS-Case-Study',
        html_url: 'https://github.com/Ensues/OS-Case-Study',
        description: 'Tkinter-based page replacement algorithm simulator that visualizes FIFO, LRU, and OPT strategies.',
        homepage: '',
        language: 'TeX',
        updated_at: '2025-05-23T02:10:33Z'
    },
    {
        name: 'QR-Code-Generator',
        html_url: 'https://github.com/Ensues/QR-Code-Generator',
        description: 'QR code generator using qrcode, PIL, and Tkinter with GUI inputs and canvas output.',
        homepage: '',
        language: 'HTML',
        updated_at: '2025-05-20T03:51:04Z'
    },
    {
        name: 'Credit-Card-Fraud-Detection',
        html_url: 'https://github.com/Ensues/Credit-Card-Fraud-Detection',
        description: 'Logistic regression model detecting fraudulent credit card transactions with strong accuracy despite class imbalance.',
        homepage: '',
        language: 'Jupyter Notebook',
        updated_at: '2025-05-19T07:50:56Z'
    },
    {
        name: 'Titanic-Survival-Prediction',
        html_url: 'https://github.com/Ensues/Titanic-Survival-Prediction',
        description: 'Machine learning model predicting Titanic survival using passenger features.',
        homepage: '',
        language: 'Jupyter Notebook',
        updated_at: '2025-05-19T07:50:28Z'
    },
    {
        name: 'Sales-Prediction-Using-Python',
        html_url: 'https://github.com/Ensues/Sales-Prediction-Using-Python',
        description: 'Model predicting sales based on advertising spend across channels with strong correlation insights.',
        homepage: '',
        language: 'Jupyter Notebook',
        updated_at: '2025-05-19T07:49:35Z'
    },
    {
        name: 'Movie-Rating-Prediction-with-Python',
        html_url: 'https://github.com/Ensues/Movie-Rating-Prediction-with-Python',
        description: 'Predicts movie ratings using features such as year, duration, votes, and genre averages with a regression model.',
        homepage: '',
        language: 'Jupyter Notebook',
        updated_at: '2025-05-19T07:49:13Z'
    },
    {
        name: 'CODSOFT',
        html_url: 'https://github.com/Ensues/CODSOFT',
        description: 'Repository for web development internship tasks at CODSOFT.',
        homepage: 'https://ensues.github.io/CODSOFT/',
        language: 'CSS',
        updated_at: '2025-05-12T07:24:15Z'
    },
    {
        name: 'Valentines',
        html_url: 'https://github.com/Ensues/Valentines',
        description: 'Lightweight Valentines ask-out site.',
        homepage: 'https://ensues.github.io/Valentines/',
        language: 'HTML',
        updated_at: '2025-02-13T12:09:26Z'
    },
    {
        name: 'Resume-Website-V4',
        html_url: 'https://github.com/Ensues/Resume-Website-V4',
        description: 'Resume website highlighting experience, skills, and projects.',
        homepage: 'https://ensues.github.io/Resume-Website-V4/',
        language: 'CSS',
        updated_at: '2025-01-22T10:19:13Z'
    },
    {
        name: 'Calculator-V2',
        html_url: 'https://github.com/Ensues/Calculator-V2',
        description: 'Simple calculator web app for basic arithmetic operations.',
        homepage: 'https://ensues.github.io/Calculator-V2/',
        language: 'JavaScript',
        updated_at: '2025-01-22T10:18:14Z'
    },
    {
        name: 'Landing-Page-V1',
        html_url: 'https://github.com/Ensues/Landing-Page-V1',
        description: 'Landing page project focused on layout, sections, and clean CSS alignment.',
        homepage: 'https://ensues.github.io/Landing-Page-V1/',
        language: 'CSS',
        updated_at: '2025-01-11T04:43:56Z'
    },
    {
        name: 'Calculator-V1',
        html_url: 'https://github.com/Ensues/Calculator-V1',
        description: 'Calculator web app to demonstrate basic web technologies.',
        homepage: 'https://ensues.github.io/Calculator-V1/',
        language: 'CSS',
        updated_at: '2025-01-06T10:53:07Z'
    },
    {
        name: 'Resume-Website-V2',
        html_url: 'https://github.com/Ensues/Resume-Website-V2',
        description: 'Resume website prototype.',
        homepage: 'https://ensues.github.io/Resume-Website-V2/',
        language: 'HTML',
        updated_at: '2024-11-06T23:24:31Z'
    },
    {
        name: 'Resume-Website-V1',
        html_url: 'https://github.com/Ensues/Resume-Website-V1',
        description: 'Initial resume website version for sharing experience and skills.',
        homepage: 'https://ensues.github.io/Resume-Website-V1/',
        language: 'HTML',
        updated_at: '2024-11-04T07:36:48Z'
    },
    {
        name: 'tic_tac_toe',
        html_url: 'https://github.com/Ensues/tic_tac_toe',
        description: 'Incomplete tic tac toe game prototype.',
        homepage: '',
        language: null,
        updated_at: '2024-09-26T10:23:55Z'
    },
    {
        name: 'Nom-U-Student-Portal',
        html_url: 'https://github.com/Ensues/Nom-U-Student-Portal',
        description: 'Student login form activity project.',
        homepage: '',
        language: 'Visual Basic .NET',
        updated_at: '2024-09-26T10:23:25Z'
    },
    {
        name: 'labMidTerm',
        html_url: 'https://github.com/Ensues/labMidTerm',
        description: 'Midterm lab activity repository.',
        homepage: null,
        language: 'Visual Basic .NET',
        updated_at: '2024-09-26T10:22:58Z'
    },
    {
        name: 'grading-sheet-calc',
        html_url: 'https://github.com/Ensues/grading-sheet-calc',
        description: 'Basic grading sheet calculator.',
        homepage: '',
        language: 'Visual Basic .NET',
        updated_at: '2024-09-26T10:22:30Z'
    }
];

const featuredProjects = [
    'Monocular-VO-for-Automated-Turn-Labeling-and-CSV-Generation',
    'ConvLSTM',
    'EluSEEdate-Mobile-App',
    'Job-Search-Tracker-Analytics-Dashboard',
    'Credit-Card-Fraud-Detection',
    'Analyzing-Cyclistic-Bike-Share-Data',
    'Auto-File-Management',
    'Ensues.github.io'
];

const projectReadmeCache = new Map();
const projectReadmeStacks = new Map();

const issuerOverrides = {
    CISCO: 'Cisco',
    UPOU: 'UPOU',
    IBM: 'IBM',
    Google: 'Google',
    DataCamp: 'DataCamp',
    Sololearn: 'Sololearn',
    Codsoft: 'Codsoft',
    Forage: 'Forage'
};

const titleOverrides = {
    'images/Certificates/Codsoft/Eric Janssen P. Quiambao.pdf': 'Codsoft Internship Certificate',
    'images/Certificates/Codsoft/Eric Janssen P. Quiambao_page-0001.jpg': 'Codsoft Internship Certificate',
    'images/Certificates/Sololearn/CODSOFT - Eric Janssen P. Quiambao.jpg': 'Codsoft Internship Certificate',
    'images/Certificates/CISCO/CCNA-_Introduction_to_Networks_certificate_ej-quiambao00529-student-tsu-edu-ph_7f73d725-8053-476e-bd3d-d79c82e5081e.pdf': 'CCNA: Introduction to Networks',
    'images/Certificates/CISCO/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_ej-quiambao00529-student-tsu-edu-ph_1b0cf59a-a3b6-4a51-ab20-de713512e5f6.pdf': 'CCNA: Switching, Routing, and Wireless Essentials',
    'images/Certificates/UPOU/Certificate_for_Business_Analytics_Concepts_and_Frameworks_(May_2025)-CA_106058.pdf': 'Business Analytics Concepts and Frameworks',
    'images/Certificates/UPOU/Certificate_for_AI_Essentials_Theory_and_Practice_(May_2025)-CA_116292.pdf': 'AI Essentials: Theory and Practice',
    'images/Certificates/Google/Google Business Intelligence/The Path to Insights Data Models and Pipelinee.pdf': 'The Path to Insights: Data Models and Pipelines',
    'images/Certificates/Github.png': 'GitHub Foundations',
    'images/Certificates/Python_Data_Science.png': 'Python for Data Science',
    'images/Certificates/Intro to Data Science.png': 'Introduction to Data Science',
    'images/Certificates/Introduction_to_Modern_AI.png': 'Introduction to Modern AI'
};

const issuerByFile = {
    'images/Certificates/Business_Analytics_Concepts_and_Frameworks.png': 'UPOU',
    'images/Certificates/Github.png': 'GitHub',
    'images/Certificates/Google_AI_Essentials.png': 'Google',
    'images/Certificates/Google_Data_Analysis.png': 'Google',
    'images/Certificates/Intro to Data Science.png': 'Cisco',
    'images/Certificates/Introduction_to_Modern_AI.png': 'Cisco',
    'images/Certificates/Python_Data_Science.png': 'Sololearn'
};

function getIssuer(file) {
    if (issuerByFile[file]) return issuerByFile[file];
    const parts = file.split('/');
    const certIndex = parts.indexOf('Certificates');
    const candidate = certIndex >= 0 ? parts[certIndex + 1] : 'Certificate';
    if (!candidate || candidate.includes('.')) return 'Certificate';
    return issuerOverrides[candidate] || candidate.replace(/_/g, ' ');
}

function normalizeTitle(file) {
    if (titleOverrides[file]) return titleOverrides[file];
    const fileName = file.split('/').pop() || '';
    let title = fileName.replace(/\.[^/.]+$/, '');
    title = title.replace(/Certificate_for_/i, '');
    title = title.replace(/\(May_\d{4}\)/i, '');
    title = title.replace(/-CA_[A-Z0-9_]+/i, '');
    title = title.replace(/_+/g, ' ');
    title = title.replace(/-+/g, ' ');
    title = title.replace(/\bcert(ificate)?\b/gi, '');
    title = title.replace(/page\s*\d+/gi, '');
    title = title.replace(/\s+/g, ' ').trim();
    return title || 'Certificate';
}

function normalizeKey(file) {
    return normalizeTitle(file).toLowerCase();
}

function formatDate(isoDate) {
    const date = new Date(`${isoDate}T00:00:00`);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function isImage(file) {
    return /\.(png|jpg|jpeg|webp)$/i.test(file);
}

function isPdf(file) {
    return /\.pdf$/i.test(file);
}

function buildCertificateCards() {
    const grouped = new Map();
    certificateFiles.forEach(entry => {
        const issuer = getIssuer(entry.file);
        const key = `${issuer}|${normalizeKey(entry.file)}`;
        if (!grouped.has(key)) {
            grouped.set(key, {
                title: normalizeTitle(entry.file),
                issuer,
                date: entry.date,
                file: entry.file,
                preview: null
            });
        }
        const item = grouped.get(key);
        if (new Date(entry.date) > new Date(item.date)) {
            item.date = entry.date;
        }
        if (isImage(entry.file)) {
            item.preview = entry.file;
            if (!item.file || isImage(item.file)) {
                item.file = entry.file;
            }
        } else if (isPdf(entry.file)) {
            item.file = entry.file;
        }
    });

    return Array.from(grouped.values()).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function formatRepoTitle(name) {
    return name
        .replace(/[-_]/g, ' ')
        .replace(/\bV(\d+)\b/gi, 'V$1')
        .replace(/\s+/g, ' ')
        .trim();
}

function formatLanguageBadge(language) {
    if (!language) return '';
    const map = {
        TypeScript: { label: 'TypeScript', logo: 'typescript', color: '3178C6' },
        Python: { label: 'Python', logo: 'python' },
        HTML: { label: 'HTML5', logo: 'html5' },
        CSS: { label: 'CSS3', logo: 'css3' },
        JavaScript: { label: 'JavaScript', logo: 'javascript', color: 'F7DF1E', logoColor: '000000' },
        PHP: { label: 'PHP', logo: 'php' },
        'Jupyter Notebook': { label: 'Jupyter', logo: 'jupyter', color: 'F37726' },
        'Visual Basic .NET': { label: 'VB.NET', logo: 'dotnet', color: '512BD4' },
        'TeX': { label: 'LaTeX', logo: 'latex', color: '008080' }
    };
    const entry = map[language] || { label: language, logo: '' };
    const label = encodeURIComponent(entry.label);
    const color = entry.color ? entry.color : '3670A0';
    const logo = entry.logo ? `&logo=${entry.logo}` : '';
    const logoColor = entry.logoColor ? `&logoColor=${entry.logoColor}` : '&logoColor=white';
    return `https://img.shields.io/badge/${label}-${color}?style=for-the-badge${logo}${logoColor}`;
}

function formatStackBadge(label) {
    const map = {
        TypeScript: { logo: 'typescript', color: '3178C6' },
        Python: { logo: 'python', color: '3670A0' },
        Jupyter: { logo: 'jupyter', color: 'F37726' },
        React: { logo: 'react', color: '61DAFB', logoColor: '000000' },
        Expo: { logo: 'expo', color: '000020' },
        OpenCV: { logo: 'opencv', color: '5C3EE8' },
        NumPy: { logo: 'numpy', color: '013243' },
        Pandas: { logo: 'pandas', color: '150458' },
        'scikit-learn': { logo: 'scikit-learn', color: 'F7931E' },
        TensorFlow: { logo: 'tensorflow', color: 'FF6F00' },
        PyTorch: { logo: 'pytorch', color: 'EE4C2C' },
        BigQuery: { logo: 'googlebigquery', color: '669DF6' },
        'Google Sheets': { logo: 'googlesheets', color: '34A853' },
        Tableau: { logo: 'tableau', color: 'E97627' },
        Vercel: { logo: 'vercel', color: '000000', logoColor: 'white' },
        Git: { logo: 'git', color: 'F05032' },
        Laravel: { logo: 'laravel', color: 'FF2D20' },
        'Tailwind CSS': { logo: 'tailwindcss', color: '06B6D4' },
        Vite: { logo: 'vite', color: '646CFF' }
    };
    const entry = map[label] || { color: '607D8B' };
    const badgeLabel = encodeURIComponent(label);
    const logo = entry.logo ? `&logo=${entry.logo}` : '';
    const logoColor = entry.logoColor ? `&logoColor=${entry.logoColor}` : '&logoColor=white';
    return `https://img.shields.io/badge/${badgeLabel}-${entry.color}?style=for-the-badge${logo}${logoColor}`;
}

function getProjectStack(project) {
    const readmeStack = projectReadmeStacks.get(project.name);
    if (readmeStack && readmeStack.length) return readmeStack;
    if (!project.language) return [];
    if (project.language === 'Jupyter Notebook') return ['Jupyter'];
    return [project.language];
}

function buildProjectTechStack(project) {
    const stack = getProjectStack(project);
    const unique = new Map();

    stack.forEach(label => {
        const normalized = normalizeTechLabel(label);
        if (normalized && !unique.has(normalized.toLowerCase())) {
            unique.set(normalized.toLowerCase(), normalized);
        }
    });

    if (project.language) {
        const languageLabel = project.language === 'Jupyter Notebook' ? 'Jupyter' : project.language;
        const normalized = normalizeTechLabel(languageLabel) || languageLabel;
        if (normalized && !unique.has(normalized.toLowerCase())) {
            unique.set(normalized.toLowerCase(), normalized);
        }
    }

    return Array.from(unique.values());
}

function normalizeAscii(text) {
    return text.normalize('NFKD').replace(/[^ -]/g, '');
}

function cleanReadmeText(text) {
    return text
        .replace(/```[\s\S]*?```/g, '')
        .replace(/`[^`]*`/g, '')
        .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(/<[^>]+>/g, '')
        .replace(/^#+\s.*$/gm, '')
        .replace(/\r/g, '')
        .trim();
}

function extractReadmeExcerpt(text) {
    const cleaned = cleanReadmeText(text);
    const parts = cleaned.split(/\n\s*\n/);
    const paragraph = (parts.find(part => part.trim().length > 60) || parts[0] || '').trim();
    if (!paragraph) return '';
    let excerpt = paragraph.replace(/\s+/g, ' ').trim();
    excerpt = normalizeAsciiSafe(excerpt);
    if (excerpt.length > 240) {
        excerpt = `${excerpt.slice(0, 237).trim()}...`;
    }
    return excerpt;
}

function normalizeAsciiSafe(text) {
    return text.normalize('NFKD').replace(/[^\u0000-\u007F]/g, '');
}

function cleanStackLabel(label) {
    return label
        .replace(/\*\*/g, '')
        .replace(/[_`]/g, '')
        .replace(/\s+/g, ' ')
        .replace(/^[-*+\d.\s]+/, '')
        .trim();
}

const TECH_ALIASES = {
    html5: 'HTML',
    html: 'HTML',
    css3: 'CSS',
    css: 'CSS',
    javascript: 'JavaScript',
    js: 'JavaScript',
    typescript: 'TypeScript',
    ts: 'TypeScript',
    python: 'Python',
    r: 'R',
    java: 'Java',
    php: 'PHP',
    sql: 'SQL',
    mysql: 'MySQL',
    postgresql: 'PostgreSQL',
    sqlite: 'SQLite',
    react: 'React',
    'react native': 'React Native',
    expo: 'Expo',
    'node.js': 'Node.js',
    nodejs: 'Node.js',
    vite: 'Vite',
    'tailwind css': 'Tailwind CSS',
    tailwind: 'Tailwind CSS',
    laravel: 'Laravel',
    '.net': '.NET',
    dotnet: '.NET',
    jupyter: 'Jupyter',
    pandas: 'Pandas',
    numpy: 'NumPy',
    'scikit-learn': 'scikit-learn',
    'scikit learn': 'scikit-learn',
    sklearn: 'scikit-learn',
    tensorflow: 'TensorFlow',
    pytorch: 'PyTorch',
    opencv: 'OpenCV',
    ffmpeg: 'FFmpeg',
    matplotlib: 'Matplotlib',
    seaborn: 'Seaborn',
    kaggle: 'Kaggle',
    bigquery: 'BigQuery',
    'google sheets': 'Google Sheets',
    tableau: 'Tableau',
    vercel: 'Vercel',
    git: 'Git',
    github: 'GitHub',
    'google colab': 'Google Colab',
    colab: 'Google Colab',
    excel: 'Excel',
    'power bi': 'Power BI',
    flask: 'Flask',
    django: 'Django',
    fastapi: 'FastAPI',
    streamlit: 'Streamlit'
};

const NON_TECH_TERMS = [
    'linkedin',
    'discord',
    'credly',
    'leetcode',
    'hackerrank',
    'sololearn',
    'portfolio',
    'resume',
    'website',
    'profile'
];

function normalizeTechLabel(label) {
    if (!label) return '';
    let value = cleanStackLabel(label);
    if (!value) return '';

    const splitters = [' - ', ': '];
    splitters.forEach(splitter => {
        if (value.includes(splitter)) value = value.split(splitter)[0].trim();
    });
    if (value.toLowerCase().includes(' for ') && value.length > 20) {
        value = value.split(/\s+for\s+/i)[0].trim();
    }

    value = value.replace(/\s*\(.*\)\s*/g, '').replace(/[.]+$/g, '').trim();
    let normalized = value.toLowerCase().replace(/[^a-z0-9.+#\s]/g, '').trim();
    if (!normalized) return '';
    if (NON_TECH_TERMS.some(term => normalized.includes(term))) return '';

    if (normalized.startsWith('google ')) {
        normalized = normalized.replace('google ', '').trim();
    }
    if (normalized.endsWith(' public')) {
        normalized = normalized.replace(' public', '').trim();
    }

    const alias = TECH_ALIASES[normalized];
    return alias || '';
}

function extractShieldLabelFromUrl(url) {
    if (!url) return '';
    const labelParam = url.match(/[?&]label=([^&]+)/i);
    if (labelParam && labelParam[1]) {
        return decodeURIComponent(labelParam[1]).replace(/_/g, ' ').trim();
    }

    const badgeMatch = url.match(/\/badge\/([^/?]+)(?:\?|$)/i);
    if (!badgeMatch || !badgeMatch[1]) return '';
    const raw = decodeURIComponent(badgeMatch[1]);
    const parts = raw.split('-');
    if (parts.length > 1) parts.pop();
    return parts.join(' ').replace(/_/g, ' ').trim();
}

function extractTechStack(text) {
    const lines = text.replace(/\r/g, '').split('\n');
    const headings = ['technologies used', 'tech stack', 'stack', 'languages used', 'built with', 'tools'];
    let startIndex = -1;
    let inCodeBlock = false;

    for (let i = 0; i < lines.length; i += 1) {
        const raw = lines[i];
        const trimmed = raw.trim();
        if (trimmed.startsWith('```')) {
            inCodeBlock = !inCodeBlock;
            continue;
        }
        if (inCodeBlock) continue;
        const line = trimmed
            .toLowerCase()
            .replace(/^#+\s*/, '')
            .replace(/[\*_`]/g, '')
            .trim();
        if (headings.some(heading => line.startsWith(heading))) {
            startIndex = i + 1;
            break;
        }
    }

    const items = [];
    if (startIndex >= 0) {
        inCodeBlock = false;
        for (let i = startIndex; i < lines.length; i += 1) {
            const raw = lines[i];
            const trimmed = raw.trim();
            if (trimmed.startsWith('```')) {
                inCodeBlock = !inCodeBlock;
                continue;
            }
            if (inCodeBlock) continue;
            if (/^#+\s/.test(trimmed)) break;
            if (/^\s*[-*+]\s+/.test(trimmed)) {
                const label = cleanStackLabel(trimmed.replace(/^\s*[-*+]\s+/, ''));
                if (label) items.push(label);
            }
        }
    }

    if (startIndex < 0) {
        lines.forEach(line => {
            const trimmed = line.trim();
            if (!/^\s*[-*+]\s+/.test(trimmed)) return;
            const label = cleanStackLabel(trimmed.replace(/^\s*[-*+]\s+/, ''));
            const normalized = normalizeTechLabel(label);
            if (normalized) items.push(normalized);
        });
    }

    const badgeMatches = Array.from(text.matchAll(/!\[([^\]]*)\]\(([^)]*shields\.io[^)]*)\)/gi));
    badgeMatches.forEach(match => {
        const altLabel = normalizeTechLabel(match[1] || '');
        const urlLabel = normalizeTechLabel(extractShieldLabelFromUrl(match[2] || ''));
        if (altLabel) items.push(altLabel);
        if (urlLabel) items.push(urlLabel);
    });

    const unique = new Map();
    items.forEach(item => {
        const normalized = normalizeTechLabel(item);
        if (normalized && !unique.has(normalized.toLowerCase())) {
            unique.set(normalized.toLowerCase(), normalized);
        }
    });
    return Array.from(unique.values());
}

async function fetchReadmeText(project) {
    if (projectReadmeCache.has(project.name)) return projectReadmeCache.get(project.name);
    const owner = 'Ensues';
    const branches = [project.default_branch, 'main', 'master'].filter(Boolean);
    const uniqueBranches = Array.from(new Set(branches));
    const urls = uniqueBranches.map(branch => (
        `https://raw.githubusercontent.com/${owner}/${project.name}/${branch}/README.md`
    ));

    for (const url of urls) {
        try {
            const response = await fetch(url, { cache: 'force-cache' });
            if (response.ok) {
                const text = await response.text();
                if (text && text.trim().length > 20) {
                    projectReadmeCache.set(project.name, text);
                    return text;
                }
            }
        } catch (error) {
            continue;
        }
    }

    projectReadmeCache.set(project.name, '');
    return '';
}

function updateProjectCardContent(card, project, readmeText) {
    if (project.name === 'Ensues') {
        const badges = card.querySelector('.project-badges');
        const stack = card.querySelector('.project-stack');
        if (badges) badges.innerHTML = '';
        if (stack) stack.innerHTML = '';
        return;
    }
    const excerpt = extractReadmeExcerpt(readmeText);
    const desc = card.querySelector('.project-desc');
    if (excerpt && desc) desc.textContent = excerpt;

    const stackItems = extractTechStack(readmeText);
    if (stackItems.length) projectReadmeStacks.set(project.name, stackItems);

    const badges = card.querySelector('.project-badges');
    const stack = card.querySelector('.project-stack');
    if (!badges || !stack) return;

    badges.innerHTML = '';
    stack.innerHTML = '';

    const updatedStack = buildProjectTechStack(project);
    updatedStack.forEach(label => {
        const img = document.createElement('img');
        img.alt = label;
        img.src = formatStackBadge(label);
        badges.appendChild(img);
    });
    updatedStack.forEach(label => {
        const img = document.createElement('img');
        img.alt = label;
        img.src = formatStackBadge(label);
        stack.appendChild(img);
    });
}

async function enhanceProjectsFromReadmes() {
    const cards = Array.from(document.querySelectorAll('.project-card[data-project-name]'));
    const projectMap = new Map(projectsData.map(project => [project.name, project]));

    await Promise.all(cards.map(async card => {
        const projectName = card.dataset.projectName;
        const project = projectMap.get(projectName);
        if (!project) return;
        const readmeText = await fetchReadmeText(project);
        if (!readmeText) return;
        updateProjectCardContent(card, project, readmeText);
    }));
}

async function loadProjectsFromGitHub() {
    const apiUrl = 'https://api.github.com/users/Ensues/repos?per_page=100&sort=updated';
    try {
        const response = await fetch(apiUrl, { cache: 'no-store' });
        if (!response.ok) return false;
        const repos = await response.json();
        const visibleRepos = repos.filter(repo => !repo.fork && !repo.archived);
        projectsData = visibleRepos.map(repo => ({
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description || '',
            homepage: repo.homepage || '',
            language: repo.language,
            updated_at: repo.updated_at,
            default_branch: repo.default_branch || 'main'
        }));
        return true;
    } catch (error) {
        return false;
    }
}

function renderCertificates() {
    const cards = buildCertificateCards();
    const certCount = document.getElementById('metric-certs');
    if (certCount) certCount.textContent = String(cards.length);

    const grid = document.getElementById('certificates-grid');
    if (!grid || grid.dataset.static === 'true') return;
    const featuredGrid = document.getElementById('featured-certificates');
    if (featuredGrid && featuredGrid.dataset.static === 'true') return;
    grid.innerHTML = '';
    if (featuredGrid) featuredGrid.innerHTML = '';

    const featuredSet = new Set(featuredCertificates);
    const featuredCards = [];
    const allCards = [];

    cards.forEach(cert => {
        const key = `${cert.title}|${cert.issuer}`;
        const credential = certificateCredentials[key] || '';
        const card = document.createElement('article');
        card.className = 'certificate-card';

        const preview = document.createElement('div');
        preview.className = 'certificate-preview';
        if (cert.preview) {
            const img = document.createElement('img');
            img.src = encodeURI(cert.preview);
            img.alt = `${cert.title} certificate`;
            img.loading = 'lazy';
            preview.appendChild(img);
        } else if (cert.file && isPdf(cert.file)) {
            const iframe = document.createElement('iframe');
            iframe.className = 'certificate-pdf';
            iframe.src = `${encodeURI(cert.file)}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;
            iframe.setAttribute('aria-label', `${cert.title} certificate preview`);
            iframe.setAttribute('loading', 'lazy');
            preview.appendChild(iframe);
        } else {
            const placeholder = document.createElement('div');
            placeholder.className = 'certificate-placeholder';
            placeholder.innerHTML = '<i class="ti ti-certificate"></i>';
            preview.appendChild(placeholder);
        }

        const info = document.createElement('div');
        info.className = 'certificate-info';
        const title = document.createElement('h3');
        title.textContent = cert.title;
        const issuer = document.createElement('p');
        issuer.className = 'certificate-meta';
        issuer.textContent = cert.issuer;
        const date = document.createElement('p');
        date.className = 'certificate-meta';
        date.textContent = `Issued: ${formatDate(cert.date)}`;

        const action = document.createElement('div');
        const link = document.createElement('a');
        link.className = 'btn btn-small';
        link.href = encodeURI(cert.file);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Open';
        action.appendChild(link);

        const credentialLink = document.createElement('a');
        credentialLink.className = 'btn btn-small';
        credentialLink.textContent = credential ? 'Credential' : 'Add credential link';
        credentialLink.href = credential || '#';
        if (!credential) credentialLink.classList.add('btn-disabled');
        action.appendChild(credentialLink);

        info.appendChild(title);
        info.appendChild(issuer);
        info.appendChild(date);
        info.appendChild(action);

        card.appendChild(preview);
        card.appendChild(info);
        if (featuredSet.has(key) && featuredCards.length < 5) {
            featuredCards.push(card);
        } else {
            allCards.push(card);
        }
    });

    if (featuredGrid) {
        featuredCards.forEach(card => featuredGrid.appendChild(card));
    }
    allCards.forEach(card => grid.appendChild(card));

}

function renderProjects() {
    const featuredGrid = document.getElementById('featured-projects');
    const grid = document.getElementById('projects-grid');
    if (!grid && !featuredGrid) return;
    if (grid && grid.dataset.static === 'true') return;
    if (featuredGrid && featuredGrid.dataset.static === 'true') return;

    const featuredSet = new Set(featuredProjects);
    const sorted = [...projectsData].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    const projectMap = new Map(projectsData.map(project => [project.name, project]));
    const featured = featuredProjects
        .map(name => projectMap.get(name))
        .filter(Boolean);
    const all = [];

    sorted.forEach(project => {
        if (featuredSet.has(project.name)) return;
        const card = document.createElement('article');
        card.className = 'project-card';

        const title = document.createElement('h3');
        title.textContent = formatRepoTitle(project.name);

        const desc = document.createElement('p');
        desc.className = 'project-desc';
        desc.textContent = project.description || 'Project overview coming soon.';

        const meta = document.createElement('p');
        meta.className = 'project-meta';
        meta.textContent = `Updated: ${new Date(project.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;

        const badges = document.createElement('div');
        badges.className = 'project-badges';

        const stackItems = buildProjectTechStack(project);
        stackItems.forEach(label => {
            const img = document.createElement('img');
            img.alt = label;
            img.src = formatStackBadge(label);
            badges.appendChild(img);
        });

        const stack = document.createElement('div');
        stack.className = 'project-stack';
        stackItems.forEach(label => {
            const img = document.createElement('img');
            img.alt = label;
            img.src = formatStackBadge(label);
            stack.appendChild(img);
        });

        const actions = document.createElement('div');
        actions.className = 'project-actions';
        const codeLink = document.createElement('a');
        codeLink.className = 'btn btn-small';
        codeLink.href = project.html_url;
        codeLink.target = '_blank';
        codeLink.rel = 'noopener noreferrer';
        codeLink.textContent = 'View Repo';
        actions.appendChild(codeLink);

        if (project.homepage) {
            const liveLink = document.createElement('a');
            liveLink.className = 'btn btn-small';
            liveLink.href = project.homepage;
            liveLink.target = '_blank';
            liveLink.rel = 'noopener noreferrer';
            liveLink.textContent = 'Live Demo';
            actions.appendChild(liveLink);
        }

        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(meta);
        card.appendChild(badges);
        card.appendChild(stack);
        card.appendChild(actions);

        card.dataset.projectName = project.name;
        all.push(card);
    });

    if (featuredGrid) {
        featuredGrid.innerHTML = '';
        featured.forEach(project => {
            const card = document.createElement('article');
            card.className = 'project-card';

            const title = document.createElement('h3');
            title.textContent = formatRepoTitle(project.name);

            const desc = document.createElement('p');
            desc.className = 'project-desc';
            desc.textContent = project.description || 'Project overview coming soon.';

            const meta = document.createElement('p');
            meta.className = 'project-meta';
            meta.textContent = `Updated: ${new Date(project.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;

            const badges = document.createElement('div');
            badges.className = 'project-badges';

            const stackItems = buildProjectTechStack(project);
            stackItems.forEach(label => {
                const img = document.createElement('img');
                img.alt = label;
                img.src = formatStackBadge(label);
                badges.appendChild(img);
            });

            const stack = document.createElement('div');
            stack.className = 'project-stack';
            stackItems.forEach(label => {
                const img = document.createElement('img');
                img.alt = label;
                img.src = formatStackBadge(label);
                stack.appendChild(img);
            });

            const actions = document.createElement('div');
            actions.className = 'project-actions';
            const codeLink = document.createElement('a');
            codeLink.className = 'btn btn-small';
            codeLink.href = project.html_url;
            codeLink.target = '_blank';
            codeLink.rel = 'noopener noreferrer';
            codeLink.textContent = 'View Repo';
            actions.appendChild(codeLink);

            if (project.homepage) {
                const liveLink = document.createElement('a');
                liveLink.className = 'btn btn-small';
                liveLink.href = project.homepage;
                liveLink.target = '_blank';
                liveLink.rel = 'noopener noreferrer';
                liveLink.textContent = 'Live Demo';
                actions.appendChild(liveLink);
            }

            card.appendChild(title);
            card.appendChild(desc);
            card.appendChild(meta);
            card.appendChild(badges);
            card.appendChild(stack);
            card.appendChild(actions);

            card.dataset.projectName = project.name;
            featuredGrid.appendChild(card);
        });
    }
    if (grid) {
        grid.innerHTML = '';
        all.forEach(card => grid.appendChild(card));
    }

    const projectCount = document.getElementById('metric-projects');
    if (projectCount) projectCount.textContent = String(featured.length);
}

function initProjectViewToggle() {
    const section = document.querySelector('.projects');
    const toggleButtons = document.querySelectorAll('.project-view-toggle');
    if (!section || toggleButtons.length === 0) return;

    function setProjectView(view) {
        const safeView = view === 'detailed' ? 'detailed' : 'compact';
        section.classList.remove('projects-view--compact', 'projects-view--detailed');
        section.classList.add(`projects-view--${safeView}`);
        localStorage.setItem('projectView', safeView);
        toggleButtons.forEach(btn => {
            btn.classList.toggle('is-active', btn.dataset.view === safeView);
        });
    }

    const savedView = localStorage.getItem('projectView') || 'compact';
    setProjectView(savedView);
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => setProjectView(btn.dataset.view));
    });
}

renderCertificates();
initProjectViewToggle();
const staticProjects = document.getElementById('projects-grid')?.dataset.static === 'true'
    || document.getElementById('featured-projects')?.dataset.static === 'true';

if (!staticProjects) {
    loadProjectsFromGitHub().finally(() => {
        renderProjects();
        enhanceProjectsFromReadmes();
    });
}