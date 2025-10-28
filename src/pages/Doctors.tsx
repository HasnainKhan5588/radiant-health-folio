import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";
import { motion } from "framer-motion";
import doctor1 from "@/assets/doctor1.jpg";
import doctor2 from "@/assets/doctor2.jpg";
import doctor3 from "@/assets/doctor3.jpg";
import doctor4 from "@/assets/doctor4.jpg";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      image: doctor1,
      bio: "Specialized in heart disease prevention and treatment with over 15 years of experience in cardiovascular medicine.",
    },
    {
      name: "Dr. Sarah Williams",
      specialty: "Pediatrician",
      image: doctor2,
      bio: "Dedicated to providing compassionate care for children. Board-certified with expertise in pediatric development.",
    },
    {
      name: "Dr. James Anderson",
      specialty: "Neurologist",
      image: doctor3,
      bio: "Expert in diagnosing and treating neurological disorders with advanced techniques and patient-centered care.",
    },
    {
      name: "Dr. Emily Zhang",
      specialty: "General Surgeon",
      image: doctor4,
      bio: "Highly skilled in minimally invasive surgical procedures with a focus on patient recovery and outcomes.",
    },
    {
      name: "Dr. Robert Martinez",
      specialty: "Orthopedic Surgeon",
      image: doctor1,
      bio: "Specializes in joint replacement and sports medicine with cutting-edge surgical techniques.",
    },
    {
      name: "Dr. Lisa Thompson",
      specialty: "Ophthalmologist",
      image: doctor2,
      bio: "Expert in eye care and vision correction with advanced laser surgery capabilities.",
    },
    {
      name: "Dr. David Kim",
      specialty: "Emergency Medicine",
      image: doctor3,
      bio: "Experienced emergency physician providing critical care in high-pressure situations.",
    },
    {
      name: "Dr. Jennifer Lee",
      specialty: "Internal Medicine",
      image: doctor4,
      bio: "Focuses on adult healthcare, chronic disease management, and preventive medicine.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Expert Doctors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Meet our team of highly qualified and experienced medical professionals
          </motion.p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <DoctorCard
                key={doctor.name}
                name={doctor.name}
                specialty={doctor.specialty}
                image={doctor.image}
                bio={doctor.bio}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
