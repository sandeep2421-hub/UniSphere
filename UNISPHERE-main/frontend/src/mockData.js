// Mock data for demo mode (works without backend)

export const MOCK_DATA = {
  users: [
    { id: 1, username: "student", email: "student@vit.com", password: "123", name: "John Doe", detailsFilled: true },
    { id: 2, username: "admin", email: "admin@vit.com", password: "admin", name: "Admin User", detailsFilled: true },
  ],
  
  courses: [
    { id: 1, code: "CS1001", name: "Data Structures", credits: 4, grade: "A", attendance: 95 },
    { id: 2, code: "CS1002", name: "Database Management", credits: 3, grade: "A-", attendance: 88 },
    { id: 3, code: "CS1003", name: "Web Development", credits: 3, grade: "B+", attendance: 92 },
    { id: 4, code: "MA1001", name: "Discrete Mathematics", credits: 4, grade: "A", attendance: 90 },
  ],
  
  assignments: [
    { id: 1, title: "DS Assignment 1", course: "Data Structures", dueDate: "2026-03-15", status: "Submitted", grade: "95/100" },
    { id: 2, title: "DBMS Project", course: "Database Management", dueDate: "2026-03-20", status: "Pending", grade: "-" },
    { id: 3, title: "Web Lab 2", course: "Web Development", dueDate: "2026-03-10", status: "Submitted", grade: "90/100" },
  ],
  
  events: [
    { id: 1, title: "Tech Symposium", date: "2026-03-25", location: "Main Auditorium", type: "event" },
    { id: 2, title: "Hackathon 2026", date: "2026-04-01", location: "Innovation Hub", type: "hackathon" },
    { id: 3, title: "Cultural Fest", date: "2026-04-10", location: "Open Air Theater", type: "event" },
  ],
  
  questionPapers: [
    { id: 1, subject: "Data Structures", year: 2025, semester: "Fall", downloadUrl: "#" },
    { id: 2, subject: "Database Management", year: 2025, semester: "Fall", downloadUrl: "#" },
    { id: 3, subject: "Web Development", year: 2025, semester: "Fall", downloadUrl: "#" },
  ],
  
  internships: [
    { id: 1, company: "Google", role: "Software Engineering Intern", location: "Bangalore", stipend: "₹50,000/month", applyBy: "2026-03-30" },
    { id: 2, company: "Microsoft", role: "Frontend Developer Intern", location: "Hyderabad", stipend: "₹45,000/month", applyBy: "2026-04-05" },
    { id: 3, company: "Amazon", role: "SDE Intern", location: "Bangalore", stipend: "₹55,000/month", applyBy: "2026-04-15" },
  ],
  
  hackathons: [
    { id: 1, name: "Smart India Hackathon", date: "2026-04-20", prize: "₹5 Lakhs", location: "Online", registerBy: "2026-04-10" },
    { id: 2, name: "TechCrunch Disrupt", date: "2026-05-01", prize: "$10,000", location: "Mumbai", registerBy: "2026-04-20" },
  ],
  
  books: [
    { id: 1, title: "Introduction to Algorithms", author: "Cormen", available: true, dueDate: null },
    { id: 2, title: "Database System Concepts", author: "Korth", available: true, dueDate: null },
    { id: 3, title: "Clean Code", author: "Robert Martin", available: false, dueDate: "2026-03-20" },
  ],
  
  academicCalendar: [
    { id: 1, event: "Mid Semester Exams", date: "2026-03-15 to 2026-03-25" },
    { id: 2, event: "Project Submissions", date: "2026-04-01" },
    { id: 3, event: "End Semester Exams", date: "2026-05-01 to 2026-05-15" },
  ],
  
  messages: [
    { id: 1, user: "Admin", text: "Welcome to UniSphere!", timestamp: "2026-02-01 10:00" },
    { id: 2, user: "System", text: "Your attendance is above 85%", timestamp: "2026-02-02 09:00" },
  ],
  
  message: [
    { id: 1, user: "Admin", text: "Welcome to UniSphere!", timestamp: "2026-02-01 10:00" },
    { id: 2, user: "System", text: "Your attendance is above 85%", timestamp: "2026-02-02 09:00" },
  ],
  
  registrations: [],
  
  applications: [],
};

// Check if we're in demo mode (no backend)
export const isDemoMode = () => {
  return !window.location.hostname.includes('localhost') || 
         !navigator.onLine;
};

// Get mock data by key
export const getMockData = (key) => {
  return MOCK_DATA[key] || [];
};

