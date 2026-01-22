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
        gpa: "3.83",
        coursework: [
            "Advanced Data Structures",
            "Distributed Operating Systems",
            "Software Engineering",
            "Internet Storage Systems",
            "Bioinformatics",
            "Natural Language Processing",
        ],
    },
    {
        degree: "B.Tech. in Information Technology",
        school: "Vignan University",
        location: "Guntur, India",
        dates: "Aug 2020 – May 2024",
        gpa: "3.43",
        coursework: [
            "Data Structures and Algorithms",
            "Java",
            "Python",
            "Web Applications",
            "DBMS",
            "Computer Organization and Architecture",
            "IoT",
            "Network and Cyber Security",
            "Operating Systems",
        ],
    },
];
