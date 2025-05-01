
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc?: string;
};

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  buttonText, 
  buttonLink,
  imageSrc 
}: HeroSectionProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 animate-fade-in">
            <div>
              <h2 className="text-lg font-medium text-primary mb-2">{subtitle}</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                {title}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
            <div>
              <Button asChild className="px-8 py-6 text-lg">
                <Link to={buttonLink}>
                  {buttonText}
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-first md:order-last animate-fade-in">
            {imageSrc ? (
              <img 
                src={imageSrc}
                alt="Hero illustration" 
                className="w-full h-auto rounded-lg shadow-lg breathe-animation"
              />
            ) : (
              <div className="w-full aspect-square md:aspect-video rounded-lg bg-gradient-to-br from-phobia-calm to-phobia-support breathe-animation"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
