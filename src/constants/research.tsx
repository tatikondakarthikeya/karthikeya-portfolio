import { Activity, Target, Globe, BookOpen } from "lucide-react";

export type ResearchProject = {
  id: string;
  title: string;
  type: string;
  timeline: string;
  event?: string;
  description: string;
  fullDescription: string;
  architecture: {
    layers: { title: string; content: string }[];
    deployment?: { title: string; content: string }[];
  } | {
    stages: { title: string; content: string }[];
  } | {
    components: string[];
    description: string;
  };
  methodology?: string;
  results?: {
    detection?: {
      model: string;
      metrics: { label: string; value: string }[];
    };
    prediction?: {
      models: { name: string; mae: string; rmse: string; accuracy: string }[];
    };
    classification?: {
      model: string;
      metrics: { label: string; value: string }[];
    };
    comparison?: {
      model: string;
      accuracy: string;
    }[];
    custom?: React.ReactNode;
  };
  contributions: string[];
  skills: string[];
  pdfPaths: string[];
  paperTitle: string;
  icon: React.ReactNode;
  colorClass: string;
};

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: "mesh-leo-satellite",
    title: "Integrating Mesh Networks with LEO Satellites for Remote Connectivity",
    type: "Conference Research",
    event: "GeoSmart India 2024 Conference",
    timeline: "Apr 2023 – Feb 2026",
    description: "This research proposes a hybrid communication architecture designed to provide reliable internet connectivity in remote and underserved regions.",
    fullDescription: "Traditional infrastructure such as fiber networks and cellular towers often fails to reach rural and geographically challenging environments due to high deployment costs and physical limitations. The proposed system integrates decentralized mesh networking with Low Earth Orbit (LEO) satellite communication. Mesh networks provide local communication between distributed nodes while LEO satellites serve as global internet backhaul links connecting remote networks to the internet backbone.",
    architecture: {
      layers: [
        { title: "Local Mesh Network Layer", content: "Distributed mesh nodes communicate with each other to form a self-healing decentralized network." },
        { title: "Gateway Layer", content: "Gateway nodes collect traffic from mesh nodes and connect to satellite communication hardware." },
        { title: "Satellite Backhaul Layer", content: "Gateway nodes transmit data to LEO satellites which relay information to ground stations and cloud networks." }
      ],
      deployment: [
        { title: "Urban Regions", content: "Leverage existing fiber and DWDM backbone networks." },
        { title: "Rural Regions", content: "Use mmWave communication links (24–100 GHz) to connect towers and mesh nodes." },
        { title: "Remote Regions", content: "Rely on mesh networking combined with LEO satellite communication." }
      ]
    },
    contributions: [
      "Hybrid mesh–satellite communication architecture",
      "Adaptive network design for urban and rural environments",
      "Satellite backhaul integration with decentralized mesh networks"
    ],
    skills: ["Mesh Networking", "Satellite Communication", "mmWave Networks", "Distributed Systems"],
    pdfPaths: ["/research/ConfPres.pdf"],
    paperTitle: "Conference Presentation",
    icon: <Activity size={24} className="text-blue-400" />,
    colorClass: "border-blue-500"
  },
  {
    id: "space-debris-detection",
    title: "AI-Driven Space Debris Detection and Trajectory Prediction",
    type: "Published Research + Extended Study",
    timeline: "Sep 2025 – Jan 2026",
    description: "This research investigates artificial intelligence approaches for detecting orbital debris and predicting its trajectory to improve space situational awareness.",
    fullDescription: "Space debris traveling at high orbital speeds presents serious collision risks to operational satellites. The work combines two complementary approaches: a 1D trajectory prediction model trained on orbital datasets and a computer vision detection pipeline using YOLO models to detect debris in space imagery.",
    architecture: {
      stages: [
        { title: "Stage 1 – Orbital Data Modeling", content: "A CNN processes orbital parameters such as velocity, eccentricity, inclination, and magnitude to predict debris trajectory patterns." },
        { title: "Stage 2 – Debris Detection", content: "A YOLO-based object detection pipeline identifies debris fragments in orbital imagery." },
        { title: "Stage 3 – Trajectory Prediction", content: "Detection outputs are processed by regression and sequential models to estimate motion patterns." }
      ]
    },
    results: {
      detection: {
        model: "YOLO v12-m",
        metrics: [
          { label: "mAP@0.5", value: "0.995" },
          { label: "Precision", value: "0.99" },
          { label: "Recall", value: "0.98" }
        ]
      },
      prediction: {
        models: [
          { name: "YOLO Regression", mae: "0.228", rmse: "0.378", accuracy: "83.53%" },
          { name: "LSTM Model", mae: "0.197", rmse: "0.233", accuracy: "82.57%" }
        ]
      }
    },
    contributions: [
      "Integration of detection and trajectory prediction models",
      "Extension of published research into computer vision workflows",
      "Unified framework for orbital debris monitoring"
    ],
    skills: ["Deep Learning", "YOLO", "CNN", "Python", "Orbital Data Analysis"],
    pdfPaths: [
      "/papers/AI-Driven_Space_Debris_Detection_and_Trajectory_Prediction_Using_Deep_Learning_and_Orbital_Mechanics.pdf"
    ],
    paperTitle: "Full Research Paper",
    icon: <Target size={24} className="text-amber-400" />,
    colorClass: "border-amber-500"
  },
  {
    id: "marine-waste-detection",
    title: "AI-Based Marine Waste Detection and Environmental Toxicity Analysis",
    type: "Environmental AI Research",
    timeline: "Aug 2025 – Dec 2025",
    description: "This research introduces a hybrid deep learning framework designed to detect marine waste, classify waste types, and evaluate toxicity levels.",
    fullDescription: "The system integrates computer vision with environmental risk analysis to support automated monitoring and decision-making for marine pollution management. Stage 1 involves RT-DETR transformer-based detection; Stage 2 involves EfficientNet classification; and Stage 3 implements toxicity risk analysis.",
    architecture: {
      stages: [
        { title: "Object Detection", content: "RT-DETR transformer-based detection identifies waste objects in ocean imagery." },
        { title: "Waste Classification", content: "EfficientNet with Multi-Head Self-Attention classifies waste types." },
        { title: "Environmental Risk Analysis", content: "A toxicity score is calculated using R = αT + βC, where T is toxicity level and C is detection confidence." }
      ]
    },
    results: {
      detection: {
        model: "RT-DETR",
        metrics: [
          { label: "Precision", value: "99.28%" },
          { label: "Recall", value: "99.24%" },
          { label: "mAP@0.5", value: "98.74%" }
        ]
      },
      classification: {
        model: "EfficientNet-MHSA",
        metrics: [
          { label: "Accuracy", value: "98.91%" },
          { label: "F1 Score", value: "98.69%" }
        ]
      }
    },
    contributions: [
      "Hybrid AI framework for marine pollution monitoring",
      "Integration of environmental risk analysis with detection systems",
      "Priority-based remediation decision support"
    ],
    skills: ["Deep Learning", "RT-DETR", "EfficientNet", "Transformer Models", "Environmental AI"],
    pdfPaths: ["/work/AI_Driven_Real_Time_Toxic_Waste_Particle_Detection_System.pdf"],
    paperTitle: "Research Work Summary",
    icon: <Globe size={24} className="text-cyan-400" />,
    colorClass: "border-cyan-500"
  },
  {
    id: "driver-distraction-detection",
    title: "Real-Time Driver Distraction Detection using Custom CNN",
    type: "Computer Vision Research",
    timeline: "Mar 2024 – Jul 2024",
    description: "This research develops a deep learning framework capable of detecting distracted driving behaviors using in-vehicle camera images.",
    fullDescription: "The system analyzes driver activities and classifies behaviors into multiple categories such as texting, phone usage, drinking, and interacting with passengers. The model uses a custom convolutional neural network architecture designed to capture driver behavior features directly from RGB inputs.",
    architecture: {
      components: ["Convolution layers", "Pooling layers", "Parallel feature branches", "Dense classification layers"],
      description: "Custom CNN architecture designed to extract spatial features from 224 × 224 × 3 RGB inputs captured via in-vehicle cameras."
    },
    methodology: "Developed on the State Farm Driver Distraction Dataset containing ten driver behavior classes.",
    results: {
      detection: {
        model: "Custom CNN",
        metrics: [
          { label: "Test Accuracy", value: "98.2%" },
          { label: "Precision", value: "0.98" },
          { label: "Recall", value: "0.98" },
          { label: "F1 Score", value: "0.98" }
        ]
      },
      comparison: [
        { model: "VGG16", accuracy: "97.57%" },
        { model: "VGG19", accuracy: "96.36%" },
        { model: "InceptionNet V3", accuracy: "80.97%" }
      ]
    },
    contributions: [
      "Custom CNN architecture for driver monitoring",
      "High-accuracy driver behavior classification system",
      "Improved performance compared to standard CNN models"
    ],
    skills: ["Deep Learning", "CNN", "Computer Vision", "Python", "TensorFlow"],
    pdfPaths: ["/work/Driver_Distraction_Detection__Design__Benchmarking__and_Assessment_of_a_Custom_Convolutional_Neural_Network_Architecture.pdf"],
    paperTitle: "Research Work Summary",
    icon: <BookOpen size={24} className="text-orange-400" />,
    colorClass: "border-orange-500"
  }
];
