// data.js
// Centralized data for Experience and Projects so components remain simple to read/edit.

export const contact = {
  email: "miyarkarthikkamath@gmail.com",
  phone: "(408)581-3438",
  linkedin: "https://www.linkedin.com/in/mkarthikkamath/",
  github: "https://github.com/mkarthikkamath",
  location: "San Jose, CA",
};

export const skills = {
  languages: ["Java", "Python", "Kotlin", "JavaScript", "HTML", "CSS", "Go"],
  frameworks: ["Spring Boot", "Spring MVC", "Hibernate", "React.js", "Flask", "FastAPI"],
  apis: ["REST APIs", "gRPC", "Protobuf"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  cloud: ["AWS", "Docker", "Kubernetes", "Terraform", "Containerization", "Jenkins", "GitHub Actions", "CI/CD Pipelines", "Maven", "Git"],
  machinelearning: ["GitHub Copilot", "ChatGPT", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
  others: ["Apache Kafka", "Spark Structured Streaming", "ETL Pipelines", "Prometheus", "Datadog", "Zipkin", "ELK Stack", "Splunk", "JUnit", "Mockito", "Agile/Scrum"],
};

export const experiences = [
  {
  title: "Software Engineer",
  company: "Neuro Leap Corp",
  location: "Remote/San Jose",
  date: "Oct 2025 – Present",
  bullets: [
    "Developed, tested, and optimized 150+ REST APIs across 15+ backend modules, integrating external data sources and sensor payloads with PostgreSQL-backed services through data validation and transformation.",
    "Preparing technical documentation and providing weekly engineering progress updates to stakeholders and leadership."
  ]
  },
  {
    title: "Senior Software Engineer",
    company: "Tech Mahindra (Client - Expedia Group)",
    location: "Bangalore, India",
    date: "Jun 2022 – Aug 2023",
    bullets: [
      "Developed a Kotlin microservice (Price Summary) using gRPC with asynchronous programming (Kotlin Coroutines); deployed on Kubernetes and handled 66.97M monthly visits and 5M daily active users.",
      "Migrated multiple Expedia brand services from REST to gRPC (HTTP/2), reducing latency by ~40%, increasing throughput 3x, and cutting infrastructure costs by 30% through service consolidation.",
      "Maintained 95% code coverage and 99.9% uptime by validating Kubernetes-based blue-green and canary deployments, ensuring scalable and reliable backend operations across multiple Expedia brands."
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Infosys Limited (Client - The Allstate Corporation)",
    location: "Mangalore, India",
    date: "Jul 2020 – May 2022",
    bullets: [
      "Expanded and maintained backend APIs for Allstate Boat products in the service layer supporting thousands of policy creations per day, performing eligibility validations and calculations for underwriting.",
      "Implemented payment validation features that enforced a 24-hour cooldown after three invalid attempts, reducing erroneous transactions by 30%.",
      "Built internal project & resource management services with Spring Boot and MongoDB to centralize reporting and improve data access efficiency."
    ]
  },
  {
    title: "Software Engineer",
    company: "Infosys Limited",
    location: "Mangalore, India",
    date: "Jul 2018 – Jun 2020",
    bullets: [
      "Developed backend APIs processing over 1000 of daily policy eligibility checks from third-party MVR/LIS reports, converting legacy XML to standardized JSON domain models, achieving 95%+ code coverage, monitoring via Splunk, and deploying with Jenkins",
      "Collaborated with frontend teams and product managers, conducted UAT testing, and delivered features across the full SDLC, improving high-risk policy detection by 20% and enabling seamless integration with upstream legacy systems."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Infosys Limited",
    location: "Mysore, India",
    date: "Feb 2018 – May 2018",
    bullets: [
      "Developed the backend of a web application using ASP.NET MVC, implementing structured controllers and SQL Server integration for data management."
    ]
  },
];

export const projects = [
  {
    title: "Real-Time Log Streaming for Threat Detection",
    desc: "Designed and implemented a real-time streaming ETL pipeline using Apache Kafka for event ingestion, Spark Structured Streaming for data cleansing, feature engineering, transformation, and anomaly detection, and Logstash, Elasticsearch, and Kibana for indexing, visualization, and analytics, deployed on AWS cloud infrastructure with Kubernetes for scalability.",
    link: "https://github.com/SJSU-RealTime-Threat-Detection"
  },
  {
    title: "Travel Diary",
    desc: "Backend microservices in Java Spring Boot integrated with AWS S3 (image upload/delete), Rekognition (image labeling/moderation), Textract (OCR), and RDS MySQL. Deployed on EC2 with ELB and Auto Scaling.",
    link: "https://github.com/mkarthikkamath/CMPE281-Cloud-Project-2"
  },
  {
    title: "ML House Price Prediction System",
    desc: "Machine learning pipeline for house price prediction (data wrangling, features, models, evaluation). (Repo contains notebooks, model artifacts and README.)",
    link: "https://github.com/mkarthikkamath/ML-House-Price-Prediction-System"
  }
];
