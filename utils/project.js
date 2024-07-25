const projects = {
  "numerical-analysis": {
    pagetitle: "numerical-analysis",
    title: "Package",
    shortdescription:
      " Developed a comprehensive module in numerical analysis, advancing algorithms for solving complex problems across diverse fields including natural sciences, engineering, and business.",
    type: "package",
    skills:
      "Package structure and organization, Python programming, Dependency management, Documentation, Testing",
    content:
      "This Module is Numerical analysis, area of mathematics and computer science that creates, analyzes, and implements algorithms for obtaining numerical solutions to problems involving continuous variables. Such problems arise throughout the natural sciences, social sciences, engineering, medicine, and business.",
    url: "https://pypi.org/project/numerical-analysis-aman/",
    image: "/images/package.png",
  },
  loadbalancer: {
    pagetitle: "loadbalancer",
    title: "LoadShare",
    shortdescription: "Implementation of Layer 4 LoadBalancer in GoLang",
    type: "Tool",
    skills: "Golang, LoadBalancer, Layer 4, Networking",
    content:
      "I designed and implemented a load balancer in Go to efficiently distribute incoming network traffic across multiple servers, improving system scalability and fault tolerance. The load balancer features advanced algorithms for traffic distribution, including round-robin and least connections, and supports dynamic server health checks to ensure optimal resource utilization. With a focus on high performance and minimal latency, this solution significantly enhances the reliability and responsiveness of distributed applications, making it ideal for handling large volumes of traffic in real-time.",
    url: "https://github.com/AMANKANOJIYA/Golang-Projects/tree/main/Loadbalancer",
    image: "/images/loadbalancer.webp",
  },
  grid5: {
    pagetitle: "LogSec",
    title: "LogSec",
    shortdescription:
      " Developed LogSec: A Modular Application for Compliance Checking and Security Analysis of Logs",
    type: "Tool",
    skills:
      "Python, TypeScript, Microservices Architecture, Caching, Large Language Models (LLMs), Artificial Intelligence (AI), Machine Learning (ML)",
    content: `LogSec is an application that will take a significant amount of logs, and according to the security standards that have been provided, it will check upon the compliance of the logs with these security standards. It will be implemented in a modular form consisting of an elaborate architecture. After the analysis, we will display \n
        1. all the infected logs, along with the corresponding log lines,\n
        2. the problem that has been detected in these particular logs and,\n
        3. the most optimal solution that can be implemented in the system.
`,
    url: "https://github.com/AMANKANOJIYA/Grid-Infosec-5-Backend",
    image: "/images/grid5.png",
  },
  grid4: {
    pagetitle: "BlueSpy",
    title: "BlueSpy",
    shortdescription:
      "BlueSpy is an Open Source Security Analysis Tool, works with GitHub, NPM and PyPi.",
    type: "Tool",
    skills: "javascript, python, scraping, security, open-source, docker",
    content: `BlueSpy is an Open Source Security Analysis Tool, works with GitHub, NPM and PyPi. It is a tool that helps in analyzing the security of open-source packages. It uses the following metrics to determine the security of a package:
        Popularity Score
        Takes into account the repo's forks, stars, watches and downloads (for NPM and PyPi) to create a single score.
        Metadata Analysis Score
        Metadata analysis module consists of 13 tests, 3 for Typosquatting and 10 for analyzing metadata.
        Static Source Analysis
        Uses Regex patterns to find common functionalities of malicious programs - cryptography, network calls, file system I/O, OS calls and cryptocurrency demands.
        BlueSpy score
        It's an aggregated score of the previous 3 scores that helps cluster packages into whether they are malicious or not. Generally, we found:
        < 5: dangerous,
        5-7: require manual code reviews before use,
        7+: can be considered safe.
`,
    url: "https://github.com/sudoshreyansh/BlueSpy",
    image: "/images/bluespy.png",
  },
  blogsite: {
    pagetitle: "Scroll",
    title: "Scroll",
    shortdescription:
      "Developed a Blogging Platform using MVC Architecture with REST API, featuring user authentication.",
    type: "website",
    skills:
      "MVC Architecture, Adobe XD, REST API Development, Passport.js, User Authentication, Image Handling.",
    content: `I built a comprehensive blogging platform using the MVC architecture, designed with Adobe XD for a seamless user experience. The platform allows users to upload new blogs with image support, utilizing REST APIs for efficient communication between the frontend and backend. For security and user management, I integrated Passport.js for robust authentication and authorization, enabling admin control over all data and user activities. This solution ensures a scalable, secure, and user-friendly environment for managing and publishing blog content.
`,
    url: "https://github.com/AMANKANOJIYA/Aman-Blog-Site",
    image: "/images/scroll.png",
  },
  mfa: {
    pagetitle: "MultiAuth",
    title: "Multi Auth",
    shortdescription: "Authentication Microservice using Okta",
    type: "Tool",
    skills: "javascript, authentication, okta, microservice, security",
    content: `This microservice provides authentication services to applications using Okta as its provider.
Along with basic authentication, it supports:

 Multi-factor authentication using OTPs,
 Single sign-on
`,
    url: "https://github.com/sudoshreyansh/mfa-microservice",
    image: "/images/okta.jpg",
  },
  sec: {
    pagetitle: "SEC",
    title: "SEC",
    shortdescription: " SEC Filing Analyzer for SaaS Companies",
    type: "Tool",
    skills:
      "Data Parsing, Financial Analysis, Compliance Automation, SEC Filings, SaaS Industry Knowledge, Regulatory Reporting, Data Extraction, Software Development",
    content: `This project involves creating a SEC Filing Analyzer tailored for SaaS companies to efficiently process and analyze SEC filings. The tool automates the extraction of critical financial and compliance data from SEC reports, providing actionable insights and simplifying regulatory adherence. By integrating advanced data parsing and analysis techniques, the system enhances the ability to track financial performance, assess compliance, and make informed strategic decisions, thereby streamlining the reporting and auditing processes for SaaS businesses.
`,
    url: "https://github.com/IIT-ISM-GSEC",
    image: "/images/sec.png",
  },
  cubedetect: {
    pagetitle: "CubeDetect",
    title: "CubeDetect",
    shortdescription:
      "Developed CubeOpt and CubeTrac Modules for Advanced Cube Detection and Tracking",
    type: "Tool",
    skills:
      "OpenCv, Numpy, python, HSV Tracking, Canny Edge Detection, Modular Design, Command-Line Interfaces",
    content: `The application features two distinct modules, CubeOpt and CubeTrac, each designed for specialized cube detection and tracking using different image processing techniques. CubeOpt employs HSV tracking to configure and filter cubes, generating outputs with color tags on images, while CubeTrac utilizes Canny Edge Detection for tracking, producing text files with unique color patterns. Both modules can be executed individually or in combination to leverage their respective approaches, offering versatile solutions for cube analysis and tracking.
`,
    url: "https://github.com/AMANKANOJIYA/Rubic-Cube-Detector",
    image: "/images/cubedetect.png",
  },
  secsys: {
    pagetitle: "Secsys",
    title: "Secsys",
    shortdescription: "Main Gate Security System With Open Close Using Boltiot",
    type: "Hardware",
    skills:
      "Bolt IoT, Python, Web Interface Development, Circuit Design, Hardware Integration, Flow Chart Design, Embedded Systems.",
    content: `This project involves creating a main gate security system that allows for remote operation via a webpage and Python scripts using the Bolt IoT platform. The system integrates various hardware components, including LEDs, DC motors, and a buzzer, to manage the gate's open and close functions. Users can control the gate from a web interface or through Python commands, ensuring enhanced security and convenience. The project includes a detailed flow chart and circuit diagram for implementation and future improvements.
`,
    url: "https://github.com/AMANKANOJIYA/Main-Door-Security",
    image: "/images/secsys.png",
  },
  crosschain: {
    pagetitle: "Cross-Chain",
    title: "Cross-Chain",
    shortdescription:
      "Developed a Cross-Chain NFT Bridge for Seamless Asset Transfers Across Blockchain Networks",
    type: "Smart Contract",
    skills:
      " Ethereum (ETH), DApp Development, Cross-Chain Integration, Smart Contracts, Cryptographic Techniques, Blockchain Interoperability",
    content: `This project involves creating a cross-chain NFT bridge to facilitate the seamless transfer of non-fungible tokens (NFTs) between different blockchain networks. The bridge ensures compatibility and security, allowing users to move their NFTs across chains without losing their value or metadata. By leveraging advanced cryptographic techniques and smart contracts, this solution provides a robust infrastructure for inter-chain NFT transactions, enhancing the versatility and reach of digital assets in the decentralized ecosystem.
`,
    url: "https://github.com/AMANKANOJIYA/BlockChainIITB",
    image: "/images/crosschain.png",
  },
};

module.exports = projects;
