export type EducationItem = {
    degree: string;
    school: string;
    location: string;
    dates: string;
    gpa: string;
    coursework: string[];
};

export const EDUCATION: EducationItem[] = [
    {
        degree: "M.S. in Computer Science",
        school: "University of Florida",
        location: "Gainesville, FL",
        dates: "Aug 2024 – May 2026",
        gpa: "3.86",
        coursework: [
            "Advanced Data Structures",
            "Distributed Systems",
            "Software Engineering",
            "NLP",
            "Analysis of Algorithms",
            "Internet Storage Systems",
            "Bioinformatics",
        ],
    },
    {
        degree: "B.Tech. in Information Technology",
        school: "Vignan University",
        location: "Guntur, India",
        dates: "Oct 2020 – May 2024",
        gpa: "3.43",
        coursework: [
            "Data Structures",
            "Java",
            "Python",
            "Web Applications",
            "Database Management Systems",
            "IoT",
            "Computer Security",
            "Operating Systems",
        ],
    },
];
