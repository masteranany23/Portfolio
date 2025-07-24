export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tools: string;
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-powered Android Assistant",
    category: "AI/ML & Android",
    description: "Android app that connects with OpenAI-powered AI agents via n8n to perform document processing, email handling, and scheduling—integrated with Jetpack Compose and Room DB.",
    tools: "Kotlin, Jetpack Compose, OpenAI API, n8n, Room DB, MVVM",
    image: "/images/taskit.webp"
  },
  {
    id: 2,
    title: "Smart AI Surveillance Bot",
    category: "Robotics & AI",
    description: "Real-time robotic system combining Raspberry Pi + ESP32-CAM for surveillance, obstacle avoidance, and live AI-based detection using Pi Camera and TensorFlow Lite.",
    tools: "Raspberry Pi, ESP32-CAM, TensorFlow Lite, OpenCV, Python",
    image: "/images/robotapp.webp"
  },
   {
    id: 3,
    title: "AI Agent Automation Platform",
    category: "AI Automation",
    description: "Building AI assistants using OpenAI + n8n for automating workflows across email, documents, scheduling, and business intelligence with real-time data processing.",
    tools: "OpenAI API, n8n, LangChain, Python, Web Scraping",
    image: "/images/n8nwork.webp"
  },

   {
    id: 4,
    title: "ML Movie Recommendation System",
    category: "Machine Learning",
    description: "Built a personalized recommendation engine using collaborative filtering and trending movie data, with a clean UI frontend and a Python Flask backend.",
    tools: "Python, Flask, Scikit-learn, Collaborative Filtering, React",
    image: "/images/movie.webp"
  }
  
 
];
