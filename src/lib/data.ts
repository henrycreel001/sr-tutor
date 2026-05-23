export const courses = {
  foundation: {
    title: "Class 1 – 10",
    subtitle: "Foundation & School Coaching",
    board: "CBSE",
    subjects: [
      "Mathematics",
      "Science",
      "English",
      "Social Studies",
      "Hindi",
    ],
    description: "Strong foundational coaching for all subjects. Individual attention in small batches ensures every student grasps concepts clearly.",
  },
  commerce: {
    title: "Class 11 – 12 Commerce",
    subtitle: "Commerce Stream",
    board: "CBSE",
    subjects: [
      "Accountancy",
      "Business Studies",
      "Economics",
      "Mathematics",
      "English",
    ],
    description: "Expert guidance for Commerce stream students with focus on board exam preparation and concept clarity.",
  },
  arts: {
    title: "Class 11 – 12 Arts",
    subtitle: "Arts / Humanities Stream",
    board: "CBSE",
    subjects: [
      "History",
      "Geography",
      "Political Science",
      "English",
      "Hindi",
    ],
    description: "Comprehensive coaching for Arts stream with experienced faculty and proven exam strategies.",
  },
};

export const batchTimings = [
  { batch: "Morning Batch 1", time: "7:00 AM – 8:30 AM", classes: "Class 1–5" },
  { batch: "Morning Batch 2", time: "8:30 AM – 10:00 AM", classes: "Class 6–8" },
  { batch: "Afternoon Batch", time: "2:00 PM – 4:00 PM", classes: "Class 9–10" },
  { batch: "Evening Batch 1", time: "4:30 PM – 6:00 PM", classes: "Class 11–12" },
  { batch: "Evening Batch 2", time: "6:00 PM – 7:30 PM", classes: "Class 9–12" },
];

export const usps = [
  {
    icon: "GraduationCap",
    title: "Experienced Faculty",
    description: "8 years building Maths, Science, and Commerce specialists. Our faculty knows exactly where students get stuck — and how to get them unstuck.",
  },
  {
    icon: "Users",
    title: "Small, Focused Batches",
    description: "Max 25 students per batch. Every doubt gets addressed in the same session — no waiting for \"next class.\"",
  },
  {
    icon: "IndianRupee",
    title: "Affordable Fees",
    description: "Transparent pricing, no hidden charges. Most families find our fees significantly lower than comparable centers nearby.",
  },
  {
    icon: "Trophy",
    title: "Proven Results",
    description: "Top scorers every year since 2016. In 2024, 4 of our Class 10 students crossed 90% in CBSE boards. 98% overall pass rate.",
  },
];

export const toppers = [
  {
    name: "Aarav Sharma",
    class: "Class 10",
    score: "95.8%",
    year: "2024",
    subject: "CBSE Board",
    image: null,
  },
  {
    name: "Priya Gupta",
    class: "Class 12 Commerce",
    score: "94.2%",
    year: "2024",
    subject: "CBSE Board",
    image: null,
  },
  {
    name: "Rohan Verma",
    class: "Class 10",
    score: "93.6%",
    year: "2024",
    subject: "CBSE Board",
    image: null,
  },
  {
    name: "Sneha Malhotra",
    class: "Class 12 Arts",
    score: "91.4%",
    year: "2023",
    subject: "CBSE Board",
    image: null,
  },
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Parent of Class 10 student",
    review: "My son was failing Maths — 48% in his Unit 2 test. Within three months at SR TUTOR he understood what he'd missed in two years of school. Boards came: 87% in Maths, 93% overall. The teacher actually noticed when he got stuck and stopped the whole class to fix it.",
    rating: 5,
  },
  {
    name: "Sunita Agarwal",
    role: "Parent of Class 12 Commerce student",
    review: "I was skeptical about the evening batch — worried it'd clash with school revision time. They adjusted without any fuss. My daughter finished boards with 94% in Accountancy. Fees are genuinely reasonable — we'd budgeted for more.",
    rating: 5,
  },
  {
    name: "Mohan Lal",
    role: "Parent of Class 8 student",
    review: "Honestly the fees here are lower than the previous center we tried, and the results are better. My son's Science went from a C to a B+ this term. My only ask is a Sunday morning batch — would make scheduling easier for us.",
    rating: 4,
  },
  {
    name: "Anita Sharma",
    role: "Parent of Class 11 Arts student",
    review: "My daughter failed Geography twice — completely lost confidence. By January she was explaining maps to her classmates. That confidence shift meant more to us than the marks, though those improved too. She scored 88% in the subject at boards.",
    rating: 5,
  },
];

// Client to provide actual names — placeholders show role until confirmed
export const faculty = [
  {
    name: "Simran Ratti",
    role: "Founder & Head Faculty",
    subject: "All Subjects (Class 6–10), Humanities (Class 11 & 12)",
    experience: "8+ Years",
    qualification: "BA Programme, Jesus & Mary College (DU) · B.Ed, GGSIPU · MA Psychology, Delhi University",
    image: null,
  },
  {
    name: "Commerce Faculty",
    subject: "Commerce (Accountancy, Economics & BST)",
    experience: "6+ Years",
    qualification: "M.Com., B.Ed.",
    image: null,
  },
  {
    name: "English & Humanities Faculty",
    subject: "All Subjects (Class 1–5",
    experience: "15+ Years",
    qualification: "M.A. English, B.Ed.",
    image: null,
  },
];

export const galleryImages = [
  { src: null, alt: "Classroom at SR TUTOR", category: "Classroom" },
  { src: null, alt: "Students studying at SR TUTOR", category: "Students" },
  { src: null, alt: "Faculty at SR TUTOR", category: "Faculty" },
  { src: null, alt: "Results celebration", category: "Results" },
  { src: null, alt: "Classroom environment", category: "Classroom" },
  { src: null, alt: "Student success", category: "Results" },
  { src: null, alt: "Teaching session", category: "Classroom" },
  { src: null, alt: "Student group", category: "Students" },
];

export const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "500+", label: "Students Taught" },
  { value: "98%", label: "Board Pass Rate" },
  { value: "≤25", label: "Students Per Batch" },
];
