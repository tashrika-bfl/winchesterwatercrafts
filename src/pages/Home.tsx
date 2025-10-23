import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Droplets, Sparkles, Zap, Shield, Volume2, Palette } from "lucide-react";

const Home = () => {
  const features = [
    { icon: Zap, title: "Easy to Set-Up", description: "Quick installation with minimal hassle" },
    { icon: Shield, title: "Easy to Maintain", description: "Low maintenance requirements" },
    { icon: Droplets, title: "Low Energy Use", description: "Energy-efficient operation" },
    { icon: Volume2, title: "Soothing Sound", description: "Relaxing water sounds" },
    { icon: Palette, title: "Colourful", description: "Vibrant LED lighting options" },
    { icon: Sparkles, title: "Stainless Steel", description: "Premium quality materials" },
  ];

  const applications = [
    "Indoor Display",
    "Office Receptions",
    "Consulting Rooms",
    "Entrance Halls",
    "Patios",
    "Rooms",
    "Decor",
    "Therapeutic Spaces",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We Beautify Water
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Through Technology
            </p>
            <p className="text-lg mb-8 opacity-80">
              Waterfall & Bubble Wall Series
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/products">View Products</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Water Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For Any Space</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-accent text-accent-foreground py-4 px-6 rounded-lg text-center font-medium hover:scale-105 transition-transform"
              >
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with us today to discuss your water feature needs. Our expert team is ready to help bring your vision to life.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
