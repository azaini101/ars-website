const housingOptions = [
  "Housing Assistance"
].map((x) => {
  return { value: x, label: x };
});

const employmentOptions = [
  "Computer Literacy",
  "Financial Literacy",
  "Citizenship Classes",
  "Job Applications",
  "Resume Writing",
  "Mock Job Interviews",
  "Career Readiness Skills",
  "English Tutoring"
].map((x) => {
  return { value: x, label: x };
});

const englishOptions = [
  "Interpretation",
  "English Tutoring"
].map((x) => {
  return { value: x, label: x };
});

const foodOptions = [
  "Food Bank",
  "Grocery Shopping"].map((x) => {
  return { value: x, label: x };
});

const medicalOptions = [
  "Insurance",
  "Mental Health",
  "Medical Bills",
  "Vaccine"
].map((x) => {
  return { value: x, label: x };
});

const legalOptions = [
  "Legal Support - AMBA"
].map((x) => {
  return { value: x, label: x };
});

const educationOptions = [
  "School Enrollment",
  "Headstart",
  "Tutoring/ESL",
  "School Supplies"
].map((x) => {
  return { value: x, label: x };
});

const enrollmentOptions = [
  "SNAP",
  "Medicaid",
  "Social Security Benefits",
  "MVA Appointments"
].map((x) => {
  return { value: x, label: x };
});

const transportationOptions = [
  "NeighborRide",
  "Public Transportation",
  "Welcome Visit",
  "General Support - Items Needed"
].map((x) => {
  return { value: x, label: x };
});

const generalOptions = [
  "Welcome Visit",
  "Items Needed"
].map((x) => {
  return { value: x, label: x };
});
  


const languageOptions = ["Urdu", "Pashto", "Dari", "Farsi"].map(
  (x) => {
    return { value: x, label: x };
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
    return { value: x, label: x };
  }
);

const serviceOptions = [
  {
    label: "Housing",
    options: housingOptions,
  },
  {
    label: "Employment/Mentorship Assistance",
    options: employmentOptions
  },
  {
    label: "English/Translation",
    options: englishOptions
  },
  {
    label: "Food Assistance",
    options: foodOptions
  },
  {
    label: "Medical Support - IMI",
    options: medicalOptions
  },
  {
    label: "Legal Support - AMBA",
    options: legalOptions
  },
  {
    label: "Education",
    options: educationOptions
  },
  {
    label: "Enrollment in Services",
    options: enrollmentOptions
  },
  {
    label: "Transportation",
    options: transportationOptions
  },
  {
    label: "General Support",
    options: generalOptions
  },

];

export { serviceOptions, languageOptions, timeOptions };
