import Aarav from "../assets/cardio1.png";
import Sanya from "../assets/neuro1.png";
import Rahul from "../assets/plastic1.png";
import neha from "../assets/neha.png";

const doctordata = [
  {
    id: 10814,
    name: "Aarav Patel",
    age: 28,
    city: "Mumbai",
    experience: 10 + "+" + "Years",
    gender: "Male",
    specialist: "Cardiologist",
    Nationality: "Indian",
    education:
      "MBBS(Bachelor Of Medicine),M.Ch (Master of Chirurgiae) in Cardiology",
    about: `Dr. Aarav Patel is a highly experienced cardiologist with over 10 years of dedicated service in heart care.
He holds an MBBS degree and a prestigious M.Ch in Cardiology, reflecting his deep medical expertise.
Renowned for his precision and compassionate approach, Dr. Patel specializes in complex cardiac procedures.
He has helped countless patients lead healthier lives through advanced treatments and genuine care.
With a strong foundation in both medicine and surgery, he continues to lead in cardiovascular excellence.`,
    image: Aarav,
  },
  {
    id: 10275,
    name: "Sanya Mehra",
    age: 34,
    city: "Delhi",
    gender: "Female",
    experience: 6 + "+" + "Years",
    specialist: "Heart Surgery",
    Nationality: "Indian",
    education: "MBBS(Bachelor Of Medicine),Cardiothoracic Surgery",
    about: `Dr. Sanya Mehra is a skilled heart surgeon with 6 years of experience in cardiac surgery.
She holds advanced medical qualifications specializing in complex heart procedures.
Dr. Mehra is known for her precision and compassionate patient care.
Her expertise has contributed to successful outcomes in numerous cardiac surgeries.
She remains committed to advancing her skills and delivering exceptional cardiac treatment.`,
    image: Sanya,
  },
  {
    id: 10538,
    name: "Rahul Sharma",
    age: 35,
    city: "Bangalore",
    experience: 8 + "years",
    gender: "Male",
    specialist: "Plastic Surgeons",
    Nationality: "Indian",
    education: "MBBS,Doctor of Osteopathic Medicine",
    about: `Dr. Rahul Sharma is an experienced plastic surgeon with 8 years of clinical practice.
He holds an MBBS degree and a Doctor of Osteopathic Medicine (DO) qualification.
Dr. Sharma specializes in reconstructive and aesthetic plastic surgery with a patient-focused approach.
His expertise combines surgical skill with a strong emphasis on natural, lasting results.
Committed to continual learning, he stays updated on the latest advancements in plastic surgery.`,
    image: Rahul,
  },
  {
    id: 10417,
    name: "Neha",
    age: 55,
    city: "Chennai",
    experience: 20 + "+" + "years",
    gender: "Female",
    specialist: "Neurlogist",
    Nationality: "London",
    education: "MBBS(Bachelor Of Medicine),MD in General Medicine",
    about: `Dr. Neha is a highly experienced neurologist with 20 years of clinical expertise.
She holds an MBBS degree and an MD in General Medicine, demonstrating strong medical knowledge.
Dr. Neha specializes in diagnosing and treating complex neurological disorders with precision.
Her compassionate approach ensures personalized care for every patient she manages.
She remains dedicated to advancing her skills and incorporating the latest developments in neurology.`,
    image: neha,
  },
];

export default doctordata;
