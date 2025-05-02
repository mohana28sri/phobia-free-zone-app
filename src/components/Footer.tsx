
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border py-10 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-phobia-healing" />
              <span className="text-xl font-serif font-bold">FearFree</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              A safe space to learn about, understand, and overcome your phobias with professional guidance and support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <FooterSection title="Quick Links">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/daily-tasks">Daily Tasks</FooterLink>
              <FooterLink to="/consultancy">Consultancy</FooterLink>
              <FooterLink to="/chatbot">AI Chat</FooterLink>
              <FooterLink to="/phobias">Phobias</FooterLink>
            </FooterSection>
          </div>

          {/* Learn More */}
          <div className="col-span-1">
            <FooterSection title="Learn More">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/testimonials">Success Stories</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
            </FooterSection>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <FooterSection title="Contact">
              <p className="text-sm text-muted-foreground">
                If you need immediate help, please contact a mental health professional.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </FooterSection>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FearFree. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

type FooterSectionProps = {
  title: string;
  children: React.ReactNode;
};

const FooterSection = ({ title, children }: FooterSectionProps) => (
  <div>
    <h3 className="text-lg font-medium mb-4">{title}</h3>
    <div className="flex flex-col gap-2">
      {children}
    </div>
  </div>
);

type FooterLinkProps = {
  to: string;
  children: React.ReactNode;
};

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <Link to={to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
    {children}
  </Link>
);

export default Footer;
