
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import SectionTitle from '../components/SectionTitle';
import { BookOpen, HelpCircle, Search, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <Layout>
      <HeroSection
        title="Face Your Fears, Find Your Freedom"
        subtitle="Welcome to FearFree"
        description="A supportive space designed to help you understand, manage, and overcome your phobias through personalized guidance, daily exposure exercises, and AI-powered support."
        buttonText="Begin Your Journey"
        buttonLink="/daily-tasks"
        imageSrc="/journey-mountains.jpg"
      />

      <section className="py-20 bg-muted/30">
        <div className="container">
          <SectionTitle
            title="How We Can Help"
            subtitle="FearFree offers a comprehensive approach to overcoming fears"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <FeatureCard
              title="Daily Tasks"
              description="Guided exposure therapy exercises tailored to your specific phobia and comfort level."
              icon={<BookOpen className="text-primary h-6 w-6" />}
              linkText="Start your daily plan"
              linkTo="/daily-tasks"
            />
            <FeatureCard
              title="Consultancy"
              description="Connect with licensed therapists specializing in phobia treatment and anxiety disorders."
              icon={<HelpCircle className="text-primary h-6 w-6" />}
              linkText="Find a consultant"
              linkTo="/consultancy"
            />
            <FeatureCard
              title="AI Chatbot"
              description="24/7 supportive conversations and guidance through moments of anxiety."
              icon={<Search className="text-primary h-6 w-6" />}
              linkText="Chat now"
              linkTo="/chatbot"
            />
            <FeatureCard
              title="Phobia Library"
              description="Comprehensive information about common phobias, symptoms, and treatment approaches."
              icon={<Heart className="text-primary h-6 w-6" />}
              linkText="Explore phobias"
              linkTo="/phobias"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Success Stories"
            subtitle="Read how FearFree has helped others overcome their fears"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover-effect">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-phobia-warmth" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    <div className="mt-4">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.phobia}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Face Your Fears?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands who have taken the first step toward freedom from phobia.
              Your journey begins with a simple decision to try.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/daily-tasks" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
                Get Started
              </a>
              <a href="/chatbot" className="bg-transparent border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all">
                Talk to AI Assistant
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const testimonials = [
  {
    name: "Sarah M.",
    phobia: "Arachnophobia (Fear of Spiders)",
    quote: "After 6 weeks with FearFree, I can now remove spiders from my home without panic attacks. The daily tasks were life-changing."
  },
  {
    name: "Michael T.",
    phobia: "Acrophobia (Fear of Heights)",
    quote: "The consultant connected me with helped me understand the root of my fear. I can now enjoy hiking without anxiety."
  },
  {
    name: "Priya K.",
    phobia: "Claustrophobia (Fear of Small Spaces)",
    quote: "The AI chatbot was there for me during a panic attack on an elevator. It guided me through breathing exercises that really helped."
  }
];

export default Index;
