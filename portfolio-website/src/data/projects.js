export const projects = [
  {
    id: "voiceform-ai",
    title: "VoiceForm AI",
    featured: true,
    shortDescription:
      "Detects form fields via OCR and walks users through filling them out with multilingual voice guidance.",
    longDescription:
      "AI-powered document assistant that detects form fields, extracts labels using OCR, and guides users through form completion using multilingual voice interaction.",
    tech: ["Python", "YOLO", "OCR", "FastAPI", "React"],
    link: null,
  },
  {
    id: "projectmind-ai",
    title: "ProjectMindAI",
    featured: true,
    shortDescription:
      "Hybrid semantic and keyword search for discovering and recommending similar projects.",
    longDescription:
      "Intelligent project discovery system combining semantic embeddings and BM25 keyword search for hybrid retrieval, project recommendations, and similar-project discovery.",
    tech: ["Python", "Sentence Transformers", "BM25", "MongoDB"],
    link: null,
  },
  {
    id: "rigs",
    title: "RIGS",
    featured: true,
    shortDescription:
      "Flags helmetless riders and auto-generates e-challans from detected license plates.",
    longDescription:
      "Automated traffic-violation detection using YOLOv8 and OCR to identify helmetless riders, extract license plates, and generate e-challans.",
    tech: ["React", "Node.js", "MongoDB", "YOLOv8", "OpenCV", "OCR"],
    link: null,
  },
  {
    id: "urban-signal",
    title: "Urban Signal",
    featured: false,
    shortDescription:
      "Real-time traffic signal system that adapts timing to live congestion and prioritizes emergency vehicles.",
    longDescription:
      "Real-time traffic management system using YOLOv4 and OpenCV for vehicle detection, congestion analysis, dynamic signal timing, and emergency-vehicle prioritization.",
    tech: ["Next.js", "TypeScript", "Flask", "YOLOv4", "OpenCV", "MySQL"],
    link: null,
  },
  {
    id: "wedding-face-finder",
    title: "Wedding Face Finder",
    featured: false,
    shortDescription:
      "Facial-embedding search that finds a person across thousands of event photos.",
    longDescription:
      "AI-powered facial search system using DeepFace, ArcFace, and RetinaFace to identify users across thousands of photos through facial embeddings and similarity matching.",
    tech: ["Flask", "DeepFace", "ArcFace", "RetinaFace"],
    link: null,
  },
];
