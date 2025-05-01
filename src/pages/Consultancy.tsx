
import React from 'react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from 'lucide-react';

const Consultancy = () => {
  return (
    <Layout>
      <div className="container py-12">
        <SectionTitle 
          title="Professional Consultancy" 
          subtitle="Connect with licensed therapists specializing in phobia treatment"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {consultants.map((consultant, index) => (
            <Card key={index} className="card-hover-effect">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Avatar className="w-24 h-24 border-4 border-primary/20">
                    <AvatarImage src={consultant.image} alt={consultant.name} />
                    <AvatarFallback>{consultant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-center">{consultant.name}</CardTitle>
                <CardDescription className="text-center">{consultant.specialty}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-center space-y-2">
                  <p className="font-medium">{consultant.credentials}</p>
                  <p className="text-muted-foreground">{consultant.experience}</p>
                </div>
                
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium">Specializes in:</p>
                  <div className="flex flex-wrap gap-2">
                    {consultant.specializations.map((spec, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-accent/50 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button className="w-full">Book Consultation</Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Schedule
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-muted/30 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">How Our Consultations Work</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">1</div>
                  <div>
                    <h4 className="font-medium">Schedule Your First Session</h4>
                    <p className="text-sm text-muted-foreground">Choose a consultant and select a convenient time for your initial assessment.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">2</div>
                  <div>
                    <h4 className="font-medium">Complete Pre-Session Questionnaire</h4>
                    <p className="text-sm text-muted-foreground">Help your consultant understand your specific phobia and concerns.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">3</div>
                  <div>
                    <h4 className="font-medium">Attend Your Session</h4>
                    <p className="text-sm text-muted-foreground">Connect via secure video call for your 50-minute consultation.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">4</div>
                  <div>
                    <h4 className="font-medium">Receive Your Treatment Plan</h4>
                    <p className="text-sm text-muted-foreground">Get a personalized approach to managing and overcoming your phobia.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-serif font-bold mb-4">Pricing</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Initial Consultation (60 min)</span>
                    <span className="font-medium">$95</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Follow-up Sessions (50 min)</span>
                    <span className="font-medium">$85</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Package: 5 Sessions</span>
                    <span className="font-medium">$395</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-4">
                    <p>Many insurance plans accepted. Contact us for details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const consultants = [
  {
    name: "Dr. Emily Chen",
    specialty: "Cognitive Behavioral Therapist",
    credentials: "Ph.D., Licensed Psychologist",
    experience: "15+ years experience",
    image: "",
    specializations: ["Arachnophobia", "Social Phobia", "Claustrophobia"]
  },
  {
    name: "Dr. Marcus Johnson",
    specialty: "Exposure Therapy Specialist",
    credentials: "Psy.D., ABPP",
    experience: "12+ years experience",
    image: "",
    specializations: ["Acrophobia", "Aerophobia", "Driving Phobia"]
  },
  {
    name: "Sarah Williams",
    specialty: "Anxiety & Trauma Therapist",
    credentials: "LMHC, NCC",
    experience: "8+ years experience",
    image: "",
    specializations: ["PTSD-Related Phobias", "Emetophobia", "Health Anxiety"]
  }
];

export default Consultancy;
