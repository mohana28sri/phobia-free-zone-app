
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Search, BookOpen, Heart, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full py-4 px-4 md:px-6 bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-phobia-healing" />
          <span className="text-xl font-serif font-bold">FearFree</span>
        </Link>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          <div className="flex flex-col gap-1.5">
            <div className={cn("w-5 h-0.5 bg-foreground transition-all", 
              menuOpen && "transform rotate-45 translate-y-2")}></div>
            <div className={cn("w-5 h-0.5 bg-foreground transition-all", 
              menuOpen && "opacity-0")}></div>
            <div className={cn("w-5 h-0.5 bg-foreground transition-all", 
              menuOpen && "transform -rotate-45 -translate-y-2")}></div>
          </div>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" icon={<Home className="h-4 w-4" />}>Home</NavLink>
          <NavLink to="/daily-tasks" icon={<BookOpen className="h-4 w-4" />}>Daily Tasks</NavLink>
          <NavLink to="/consultancy" icon={<HelpCircle className="h-4 w-4" />}>Consultancy</NavLink>
          <NavLink to="/chatbot" icon={<Search className="h-4 w-4" />}>AI Chat</NavLink>
          <NavLink to="/phobias" icon={<Heart className="h-4 w-4" />}>Phobias</NavLink>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <div className={cn(
        "container md:hidden overflow-hidden transition-all duration-300 ease-in-out",
        menuOpen ? "max-h-60 py-4" : "max-h-0 py-0"
      )}>
        <nav className="flex flex-col gap-4">
          <NavLink to="/" icon={<Home className="h-4 w-4" />}>Home</NavLink>
          <NavLink to="/daily-tasks" icon={<BookOpen className="h-4 w-4" />}>Daily Tasks</NavLink>
          <NavLink to="/consultancy" icon={<HelpCircle className="h-4 w-4" />}>Consultancy</NavLink>
          <NavLink to="/chatbot" icon={<Search className="h-4 w-4" />}>AI Chat</NavLink>
          <NavLink to="/phobias" icon={<Heart className="h-4 w-4" />}>Phobias</NavLink>
        </nav>
      </div>
    </header>
  );
};

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const NavLink = ({ to, children, icon }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-accent/20"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
};

export default Header;
