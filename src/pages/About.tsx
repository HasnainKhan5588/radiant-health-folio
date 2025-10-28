import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Award, Heart } from "lucide-react";

const About = () => {
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
            About HealthCare Plus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Committed to providing exceptional healthcare services for over 25 years
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Founded in 1998, HealthCare Plus has been at the forefront of providing 
                  quality medical services to our community. What started as a small clinic 
                  with a handful of dedicated doctors has grown into a comprehensive healthcare 
                  facility serving thousands of patients annually.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, adoption of cutting-edge 
                  medical technology, and an unwavering commitment to patient care. We believe 
                  that healthcare is not just about treating illnesses—it's about building 
                  lasting relationships with our patients and their families.
                </p>
                <p>
                  Today, we stand proud as a leading healthcare institution, equipped with 
                  state-of-the-art facilities, a team of highly skilled medical professionals, 
                  and a patient-first philosophy that guides everything we do.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-card rounded-2xl p-8 shadow-medium border border-border"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide accessible, affordable, and high-quality healthcare services 
                to all members of our community. We strive to promote health and wellness 
                through preventive care, advanced treatment options, and compassionate 
                patient support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-card rounded-2xl p-8 shadow-medium border border-border"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be recognized as the leading healthcare provider in the region, 
                setting the standard for medical excellence, patient satisfaction, 
                and innovative healthcare solutions. We envision a healthier community 
                where quality medical care is available to everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide our actions and decisions every day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Heart, title: "Compassion", description: "We treat every patient with empathy, respect, and dignity" },
              { icon: Award, title: "Excellence", description: "We maintain the highest standards in medical care and service" },
              { icon: Target, title: "Integrity", description: "We uphold ethical practices and transparency in all we do" },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
