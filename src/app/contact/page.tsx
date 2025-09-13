"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Instagram, TwitterIcon as Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    
    // Redirect to success page
    router.push("/contact/success");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="pt-32">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let&apos;s work together
            </h1>
            <p className="text-muted-foreground text-lg">
              Ready to share your story or collaborate with Africa&apos;s leading business podcast?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Information */}
            <div className="space-y-12">
              {/* Our offices */}
              <div>
                <h2 className="text-xl font-semibold mb-8">Our studio</h2>
                <p className="text-muted-foreground mb-8">
                  Where the magic happens. Our recording studios are where entrepreneurs share their most inspiring stories.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-2">Accra</h3>
                    <p className="text-sm text-muted-foreground">210A Tulip Road</p>
                    <p className="text-sm text-muted-foreground">Community 1, Lakeside Estates</p>
                  </div>
                </div>
              </div>

              {/* Email us */}
              <div>
                <h2 className="text-xl font-semibold mb-8">Get in touch</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-2">Be a Guest</h3>
                    <p className="text-sm text-muted-foreground">guests@peswa.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Partnerships</h3>
                    <p className="text-sm text-muted-foreground">partners@peswa.com</p>
                  </div>
                </div>
              </div>

              {/* Follow us */}
              <div>
                <h2 className="text-xl font-semibold mb-8">Follow us</h2>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/thepeswa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com/thepeswa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/company/thepeswa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h2 className="text-xl font-semibold mb-8">Share your story</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <div>
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="h-12 w-full">
                      <SelectValue placeholder="What can we help you with?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="guest-appearance">I want to be a guest</SelectItem>
                      <SelectItem value="partnership">Partnership opportunity</SelectItem>
                      <SelectItem value="sponsorship">Sponsorship inquiry</SelectItem>
                      <SelectItem value="media-inquiry">Media & press</SelectItem>
                      <SelectItem value="general">General question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                >
                  Let&apos;s work together
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}