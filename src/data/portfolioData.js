/**
 * PORTFOLIO CONFIGURATION DATA
 * 
 * Replace placeholders (e.g. [Student Name], [Email], [GitHub URL])
 * with your real details to instantly customize your portfolio!
 */

export const portfolioData = {
  personal: {
    name: "Shashwat Bhatt",
    initials: "SB",
    role: "B.Tech CSE | Artificial Intelligence & Machine Learning",
    year: "1st Year Student",
    university: "JECRC University",
    location: "Jaipur, Rajasthan, India",
    statusBadge: "Open to Collaborations & Learning",
    heroDescription:
      "Passionate about technology, artificial intelligence, and problem solving. Currently building my foundation in programming, computer science, and AI/ML while exploring new technologies and developing meaningful projects.",
    aboutBio:
      "I am a motivated 1st-year B.Tech Computer Science and Engineering student specializing in Artificial Intelligence & Machine Learning at JECRC University, Jaipur. With a continuous learning mindset, I am passionate about core programming, software development, and understanding how data and intelligent algorithms can solve real-world challenges.",
    resumeUrl: "#resume", // Link to resume PDF file or cloud link
  },

  socials: {
    github: "https://github.com/shashwatbhatt",
    linkedin: "https://linkedin.com/in/shashwatbhatt",
    email: "shashwat.bhatt@jecrc.ac.in",
    twitter: "https://twitter.com/shashwatbhatt",
  },

  stats: [
    { label: "Current Academic Year", value: "1st Year", subtitle: "B.Tech CSE (AI & ML)" },
    { label: "Core Specialization", value: "AI & ML", subtitle: "Artificial Intelligence" },
    { label: "Project Portfolio", value: "Growing", subtitle: "Practical Implementations" },
    { label: "Learning Mindset", value: "Continuous", subtitle: "Skills & Problem Solving" },
  ],

  skillCategories: [
    {
      name: "Programming",
      description: "Core languages for logic building and algorithmic thinking",
      skills: [
        { name: "Python", level: "Beginner/Intermediate", progress: 75, tag: "Primary Language" },
        { name: "C / C++", level: "Foundations", progress: 65, tag: "CS Fundamentals" },
        { name: "Java", level: "Learning Basics", progress: 50, tag: "OOP Concepts" },
      ],
    },
    {
      name: "Web Development",
      description: "Building responsive and accessible web interfaces",
      skills: [
        { name: "HTML5 & CSS3", level: "Intermediate", progress: 80, tag: "Markup & Styling" },
        { name: "JavaScript", level: "Beginner", progress: 65, tag: "Core Interactivity" },
        { name: "React", level: "Learning Basics", progress: 60, tag: "Modern UI" },
        { name: "Tailwind CSS", level: "Intermediate", progress: 75, tag: "Utility First" },
      ],
    },
    {
      name: "AI & Machine Learning",
      description: "Exploring algorithms, data, and intelligent systems",
      skills: [
        { name: "ML Fundamentals", level: "Foundations", progress: 60, tag: "Supervised & Unsupervised" },
        { name: "Data Analysis", level: "Beginner", progress: 65, tag: "NumPy & Pandas" },
        { name: "Python for AI", level: "Intermediate", progress: 70, tag: "Core AI Tooling" },
        { name: "Basic Neural Networks", level: "Exploring", progress: 45, tag: "Perceptrons & Math" },
      ],
    },
    {
      name: "Tools & Environment",
      description: "Developer workflows and version control",
      skills: [
        { name: "Git & GitHub", level: "Intermediate", progress: 75, tag: "Version Control" },
        { name: "VS Code", level: "Proficient", progress: 85, tag: "Primary Editor" },
        { name: "Jupyter Notebook", level: "Intermediate", progress: 70, tag: "Data & ML Prototyping" },
        { name: "Command Line / Terminal", level: "Beginner", progress: 60, tag: "CLI Essentials" },
      ],
    },
  ],

  projects: [
    {
      id: "01",
      title: "Personal Portfolio Website",
      category: "Web Development",
      description:
        "A modern, responsive personal portfolio website crafted with React and Tailwind CSS to showcase my academic projects, skills, education timeline, and learning journey.",
      technologies: ["React", "Tailwind CSS", "Lucide Icons", "Vite", "JavaScript"],
      githubUrl: "https://github.com/[Your-GitHub-Username]/portfolio",
      liveDemoUrl: "#",
      featured: true,
      highlight: "Responsive & Modern UI",
    },
    {
      id: "02",
      title: "AI/ML Beginner Project",
      category: "Artificial Intelligence",
      description:
        "A beginner-level machine learning model exploring data preprocessing, feature engineering, and classification using Python, Pandas, and Scikit-Learn with evaluation metrics.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Jupyter"],
      githubUrl: "https://github.com/[Your-GitHub-Username]/aiml-beginner-project",
      liveDemoUrl: "#",
      featured: true,
      highlight: "Data Classification Model",
    },
    {
      id: "03",
      title: "Python Problem-Solving Project",
      category: "Python Development",
      description:
        "A Python-based utility application demonstrating modular programming, algorithmic problem-solving, and efficient file handling and data structures.",
      technologies: ["Python 3", "Algorithms", "OOP", "File I/O"],
      githubUrl: "https://github.com/[Your-GitHub-Username]/python-project",
      liveDemoUrl: "#",
      featured: true,
      highlight: "Algorithmic Automation",
    },
  ],

  education: [
    {
      institution: "JECRC University",
      degree: "B.Tech — Computer Science Engineering",
      specialization: "Artificial Intelligence & Machine Learning",
      currentYear: "1st Year (2025 - Present)",
      location: "Jaipur, Rajasthan, India",
      status: "Currently Enrolled",
      keyFocus: [
        "Programming with Python & C/C++",
        "Linear Algebra & Applied Mathematics for AI",
        "Computer Science Foundations",
        "AI/ML Research Clubs & Technical Workshops"
      ],
    },
    {
      institution: "[School Name / Senior Secondary]",
      degree: "Class XII / Senior Secondary Education",
      specialization: "Science Stream (PCM)",
      currentYear: "[Graduation Year]",
      location: "[City, State]",
      status: "Completed",
      keyFocus: [
        "Physics, Chemistry & Advanced Mathematics",
        "Foundational Computing & Problem Solving",
      ],
    },
  ],

  achievements: [
    {
      type: "Certification",
      title: "[Certification Name]",
      issuer: "Issuing Organization / Platform (e.g. Coursera / NPTEL / Kaggle)",
      year: "2025 - 2026",
      description: "Completed comprehensive coursework covering core concepts and hands-on exercises.",
      badge: "Verified",
    },
    {
      type: "Hackathon / Competition",
      title: "[Hackathon / Coding Competition Name]",
      issuer: "University / Technical Society",
      year: "2025 - 2026",
      description: "Collaborated with peers to build innovative software solutions under timed competition conditions.",
      badge: "Participant / Winner",
    },
    {
      type: "Workshop",
      title: "AI & Modern Web Development Hands-on Workshop",
      issuer: "JECRC University Tech Cell",
      year: "2025 - 2026",
      description: "Engaged in interactive training sessions on emerging tech stacks and machine learning workflows.",
      badge: "Completed",
    },
    {
      type: "Academic Milestone",
      title: "Active Member — AI & Coding Community",
      issuer: "Department of CSE, JECRC University",
      year: "1st Year",
      description: "Regularly participating in coding practice sessions, peer learning, and tech seminars.",
      badge: "Active",
    },
  ],

  currentlyLearning: [
    {
      title: "Python Programming",
      status: "Mastering Core OOP & Libraries",
      icon: "Code",
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Data Structures & Algorithms",
      status: "Arrays, Linked Lists, Trees, Searching & Sorting",
      icon: "Binary",
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Machine Learning Concepts",
      status: "Regression, Classification & Data Science Tools",
      icon: "Brain",
      color: "from-cyan-500/20 to-cyan-600/10",
      borderColor: "border-cyan-500/30",
    },
    {
      title: "Modern Web Development",
      status: "Component Architecture with React & Tailwind",
      icon: "Globe",
      color: "from-indigo-500/20 to-indigo-600/10",
      borderColor: "border-indigo-500/30",
    },
    {
      title: "Git & GitHub Collaboration",
      status: "Branches, PRs, Workflow Automation",
      icon: "GitBranch",
      color: "from-emerald-500/20 to-emerald-600/10",
      borderColor: "border-emerald-500/30",
    },
    {
      title: "Generative AI & LLM Exploration",
      status: "Prompting, API Integrations & AI Agent Architectures",
      icon: "Sparkles",
      color: "from-pink-500/20 to-pink-600/10",
      borderColor: "border-pink-500/30",
    },
  ],

  learningQuote:
    "I'm currently focused on strengthening my programming fundamentals and exploring how artificial intelligence can be used to solve real-world problems.",

  futureGoals: [
    {
      step: "01",
      title: "Strong Programming Fundamentals",
      description: "Deepen understanding of Data Structures & Algorithms, Clean Code principles, and Object-Oriented Design.",
      target: "Year 1 - Year 2",
    },
    {
      step: "02",
      title: "Develop Real-World Projects",
      description: "Build end-to-end full-stack and AI-powered applications that solve tangible student and societal problems.",
      target: "Year 1 - Year 2",
    },
    {
      step: "03",
      title: "Learn Advanced AI/ML Concepts",
      description: "Progress into Deep Learning, Computer Vision, Natural Language Processing, and Neural Networks.",
      target: "Year 2 - Year 3",
    },
    {
      step: "04",
      title: "Hackathons & Open-Source",
      description: "Actively participate in national hackathons and contribute regularly to meaningful open-source GitHub repositories.",
      target: "Ongoing",
    },
    {
      step: "05",
      title: "Internship Preparation",
      description: "Prepare resume, algorithmic problem-solving speed, and system design intuition for competitive internships.",
      target: "Year 2 - Year 3",
    },
    {
      step: "06",
      title: "Becoming a Skilled AI/ML Engineer",
      description: "Bridge research with production engineering to build impactful, scalable AI products.",
      target: "Career Goal",
    },
  ],
};
