import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  bio: string;
  index: number;
}

const DoctorCard = ({ name, specialty, image, bio, index }: DoctorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
          <Badge className="mb-3">{specialty}</Badge>
          <p className="text-muted-foreground text-sm">{bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DoctorCard;
