import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Waves, Box, Lightbulb } from "lucide-react";
import heroImage from "@/assets/water-droplets.jpg";

const Products = () => {
  const products = [
    {
      icon: Waves,
      title: "Bubble Walls",
      description: "Stunning vertical water features with LED lighting and bubble effects",
      features: [
        "Multiple size options",
        "RGB LED lighting",
        "Stainless steel or acrylic",
        "Remote control operation",
        "Customizable colors",
      ],
    },
    {
      icon: Box,
      title: "Indoor Waterfalls",
      description: "Elegant cascading water features for interior spaces",
      features: [
        "Natural stone or glass",
        "Quiet pump operation",
        "Built-in lighting",
        "Easy maintenance",
        "Custom designs available",
      ],
    },
    {
      icon: Lightbulb,
      title: "Custom Water Features",
      description: "Bespoke water installations tailored to your specific requirements",
      features: [
        "Unique designs",
        "Professional installation",
        "Quality materials",
        "Full support",
        "Warranty included",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative text-primary-foreground py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Products</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Discover our range of premium water features designed to enhance any space with beauty and tranquility
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <product.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-secondary mt-1">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Quality You Can Trust</h2>
            <p className="text-lg text-muted-foreground mb-8">
              All our products are manufactured with premium materials and come with comprehensive warranties. 
              We provide full installation support and ongoing maintenance guidance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6">
                <div className="text-4xl font-bold text-secondary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-secondary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Installations</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Product Is Right for You?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our team can help you choose the perfect water feature for your space and budget
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Our Experts</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
