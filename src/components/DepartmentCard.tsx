import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface DepartmentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const DepartmentCard = ({ icon: Icon, title, description, index }: DepartmentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border">
        <CardContent className="p-6">
          <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
            <Icon className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DepartmentCard;
