import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import { Heart, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "Quality Care",
      description: "Compassionate healthcare delivered by experienced professionals",
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment and facilities",
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency services for urgent care",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly qualified doctors and medical staff",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional healthcare services with a patient-first approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Book your appointment today and take the first step towards better health
            </p>
            <Button asChild size="lg" variant="secondary" className="shadow-large">
              <Link to="/appointment">Schedule an Appointment</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
