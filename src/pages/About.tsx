import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Heart, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every water feature we create",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Passionate about bringing tranquility through water technology",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Premium materials and craftsmanship in every installation",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Winchester Water Craft</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Transforming spaces through the art and science of water features
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Winchester Water Craft specializes in creating stunning water features that combine natural beauty 
                with modern technology. We are passionate about transforming ordinary spaces into extraordinary 
                environments through the calming presence of water.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our journey began with a simple belief: water features should be accessible, beautiful, and 
                sustainable. Today, we're proud to offer a comprehensive range of waterfalls, bubble walls, 
                and custom water installations that bring this vision to life.
              </p>
              <p className="text-lg text-muted-foreground">
                Every project we undertake reflects our commitment to quality craftsmanship, innovative design, 
                and customer satisfaction. From concept to installation, we work closely with our clients to 
                create water features that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-secondary">Design & Installation</h3>
                <p className="text-muted-foreground">
                  We design and install custom water features tailored to your space, style, and budget. 
                  Our expert team handles every aspect from initial consultation to final installation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-secondary">Maintenance & Support</h3>
                <p className="text-muted-foreground">
                  Our commitment doesn't end at installation. We provide ongoing maintenance support and 
                  guidance to ensure your water feature continues to perform beautifully for years to come.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-secondary">Custom Solutions</h3>
                <p className="text-muted-foreground">
                  Every space is unique. We specialize in creating bespoke water features that perfectly 
                  complement your environment, whether residential, commercial, or hospitality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-secondary">Quality Materials</h3>
                <p className="text-muted-foreground">
                  We use only premium materials including stainless steel, tempered glass, and 
                  energy-efficient components to ensure longevity and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can transform your space with a beautiful water feature
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
