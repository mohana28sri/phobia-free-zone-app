
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkText: string;
  linkTo: string;
  className?: string;
};

const FeatureCard = ({
  title,
  description,
  icon,
  linkText,
  linkTo,
  className,
}: FeatureCardProps) => {
  return (
    <Card className={cn("card-hover-effect", className)}>
      <CardHeader>
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-1 w-1/3 rounded-full bg-primary/30 mb-4"></div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0">
          <Link to={linkTo}>
            {linkText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
