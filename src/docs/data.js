const serviceOptions = [
  "1. Housing - Help finding house",
  "2. Employment / Job Training - Help with job search",
  "3. English / Translation - Provide English tutoring, identify ESL classes, and/or provide translation services",
  "4. Benefits - Connect to government resources (Medicaid, SNAP, Social Security, etc.)",
  "5. Mentoring - Help acclimate to US system, culture, and environment, help with budgeting/finances, guide with bus routes/transportation, etc.",
  "6. Medical Assistance - Help pertaining to medical needs",
  "7. Legal Support - Help pertaining to legal needs",
  "8. Education - Help get enrolled in school/ college, provide academic tutoring, etc.",
  "9. Transportation - Provide transport to appointments and religious events",
  "10. Financial Support - Provide monetary contribution",
  "11. Electronics - Provide cellphones, SIM cards, computers, internet service, etc.",
  "12. Apartment Setup - Lifting and moving furniture, etc.",
].map((x) => {
  return { id: x, value: x, label: x };
});

const languageOptions = [
  "English",
  "Urdu",
  "Farsi",
  "Dari",
  "Arabic",
  "Other - Please specify in additional comments",
].map((x) => {
  return { id: x, value: x, label: x };
});

const timeOptions = [
  "Monday - Friday 9 AM - 5 PM",
  "Monday - Friday After 5 PM",
  "Monday - Friday After 3 PM",
  "Saturday",
  "Sunday",
  "Other - Please specify in additional comments",
].map((x) => {
  return { id: x, value: x, label: x };
});

const idaraOptions = [
  "Every program",
  "Most programs",
  "Very few programs",
  "Once or less times a year",
  "Never",
].map((x) => {
  return { id: x, value: x, label: x };
});

const yesNoOptions = ["Yes", "No"].map((x) => {
  return { id: x, value: x, label: x };
});

const faithOptions = [
  "Muslim",
  "Christian",
  "Jewish",
  "Hindu",
  "Sikh",
  "Buddhist",
  "Atheist",
  "Other - Please specify in additional comments",
  "Prefer Not to Answer",
].map((x) => {
  return { id: x, value: x, label: x };
});

export {
  serviceOptions,
  languageOptions,
  timeOptions,
  idaraOptions,
  yesNoOptions,
  faithOptions,
};
