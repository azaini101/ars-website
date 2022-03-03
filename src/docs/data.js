const housingOptions = [
  "Housing Assistance"
]

const employmentOptions = [
  "Computer Literacy",
  "Financial Literacy",
  "Citizenship Classes",
  "Job Applications",
  "Resume Writing",
  "Mock Job Interviews",
  "Career Readiness Skills",
  "English Tutoring"
]

const englishOptions = [
  "Interpretation",
  "English Tutoring"
]

const foodOptions = [
  "Food Bank",
  "Grocery Shopping"]

const medicalOptions = [
  "Insurance",
  "Mental Health",
  "Medical Bills",
  "Vaccine"
]

const legalOptions = [
  "Legal Support - AMBA"
]

const educationOptions = [
  "School Enrollment",
  "Headstart",
  "Tutoring/ESL",
  "School Supplies"
]

const enrollmentOptions = [
  "SNAP",
  "Medicaid",
  "Social Security Benefits",
  "MVA Appointments"
]

const transportationOptions = [
  "NeighborRide",
  "Public Transportation",
  "Welcome Visit",
  "General Support - Items Needed"
]

const generalOptions = [
  "Welcome Visit",
  "Items Needed"
]
  

const languageOptions = ["Urdu", "Pashto", "Dari", "Farsi"].map(
  (x) => {
    return {id: x, value: x, label: x };
  }
);

const timeOptions = [
  "Weekdays during business hours (Monday-Friday 9:00 a.m. to 5:00 p.m.)", 
  "Weekdays after school hours (Monday-Friday after 3:00 p.m.)", 
  "Weekday evenings (Monday-Friday after 5:00 p.m.)", 
  "Saturdays",
  "Sundays",
  "One-Time Event"
  ].map(
  (x) => {
    return { id: x, value: x, label: x };
  }
);

const serviceOptions = [
  {
    label: "Housing",
    options: housingOptions.map((x) => {
      return { value: x, label: x };
    }),
  },
  {
    label: "Employment/Mentorship Assistance",
    options: employmentOptions.map((x) => {
      return { value: x, label: x };
    }),
  },
  {
    label: "English/Translation",
    options: englishOptions.map((x) => {
      return { value: x, label: x };
    }),
  },
  {
    label: "Food Assistance",
    options: foodOptions.map((x) => {
      return { value: x, label: x };
    }),
  },
  {
    label: "Medical Support - IMI",
    options: medicalOptions.map((x) => {
      return { value: x, label: x };
    }),
  },
  {
    label: "Legal Support - AMBA",
    options: legalOptions.map((x) => {
      return { value: x, label: x };
    }),
  },
  {
    label: "Education",
    options: educationOptions.map((x) => {
      return { value: x, label: x };
    }),
  },
  {
    label: "Enrollment in Services",
    options: enrollmentOptions.map((x) => {
      return { value: x, label: x };
    }),
  },
  {
    label: "Transportation",
    options: transportationOptions.map((x) => {
      return { value: x, label: x };
    }),
  },
  {
    label: "General Support",
    options: generalOptions.map((x) => {
      return { value: x, label: x };
    }),
  },

];

export {serviceOptions, languageOptions, timeOptions };
