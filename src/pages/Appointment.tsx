import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, Mail, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Appointment request submitted successfully! We'll contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      department: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Book an Appointment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Schedule your visit with our expert medical team
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-large border-border bg-gradient-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User className="h-4 w-4 text-primary" />
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="date" className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          Preferred Date
                        </Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department" className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        Department
                      </Label>
                      <Select
                        value={formData.department}
                        onValueChange={(value) => setFormData({ ...formData, department: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="neurology">Neurology</SelectItem>
                          <SelectItem value="pediatrics">Pediatrics</SelectItem>
                          <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                          <SelectItem value="orthopedics">Orthopedics</SelectItem>
                          <SelectItem value="emergency">Emergency Medicine</SelectItem>
                          <SelectItem value="general">General Medicine</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        Additional Information
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide any additional information about your visit"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Appointment Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-center text-muted-foreground"
            >
              <p className="mb-2">
                <strong>Note:</strong> This is an appointment request. Our team will contact you to confirm your appointment.
              </p>
              <p>For urgent medical attention, please call our emergency line: <strong className="text-primary">+1 (555) 123-4567</strong></p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appointment;
