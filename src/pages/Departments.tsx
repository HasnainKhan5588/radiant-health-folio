import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DepartmentCard from "@/components/DepartmentCard";
import { motion } from "framer-motion";
import { Heart, Brain, Baby, Eye, Bone, Activity, Pill, Stethoscope } from "lucide-react";

const Departments = () => {
  const departments = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Advanced heart care with state-of-the-art diagnostic and treatment facilities for all cardiovascular conditions.",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Comprehensive neurological care for brain, spine, and nervous system disorders with expert specialists.",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents with a child-friendly environment.",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services including surgery, vision correction, and treatment of eye diseases.",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Expert treatment for bone, joint, and muscle conditions with advanced surgical techniques.",
    },
    {
      icon: Activity,
      title: "Emergency Medicine",
      description: "24/7 emergency services with rapid response teams and critical care facilities.",
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description: "In-house pharmacy providing prescribed medications and pharmaceutical care services.",
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Primary care services for common illnesses, health screenings, and preventive care.",
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
            Our Departments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Comprehensive medical services across multiple specialties
          </motion.p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <DepartmentCard
                key={dept.title}
                icon={dept.icon}
                title={dept.title}
                description={dept.description}
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

export default Departments;
