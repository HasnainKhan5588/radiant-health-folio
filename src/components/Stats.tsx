import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Award, Building2, Heart } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  end: number;
  label: string;
  suffix?: string;
}

const StatItem = ({ icon, end, label, suffix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-6 bg-gradient-card rounded-xl shadow-soft hover:shadow-medium transition-shadow"
    >
      <div className="bg-primary/10 p-4 rounded-full mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-foreground mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground text-center">{label}</div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Healthcare Excellence in Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to quality healthcare is reflected in these milestones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem
            icon={<Users className="h-8 w-8 text-primary" />}
            end={50000}
            suffix="+"
            label="Happy Patients"
          />
          <StatItem
            icon={<Heart className="h-8 w-8 text-primary" />}
            end={150}
            suffix="+"
            label="Expert Doctors"
          />
          <StatItem
            icon={<Building2 className="h-8 w-8 text-primary" />}
            end={25}
            suffix="+"
            label="Departments"
          />
          <StatItem
            icon={<Award className="h-8 w-8 text-primary" />}
            end={100}
            suffix="+"
            label="Awards Won"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
