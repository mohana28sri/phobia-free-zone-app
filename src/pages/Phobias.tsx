
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Phobias = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter the phobias list
    console.log("Searching for:", searchQuery);
  };
  
  const filteredPhobias = phobias.filter(phobia => 
    phobia.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    phobia.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container py-12">
        <SectionTitle 
          title="Phobia Library" 
          subtitle="Learn about different phobias and their treatment approaches"
        />
        
        <form onSubmit={handleSearch} className="max-w-md mx-auto mt-8 mb-10">
          <div className="flex gap-2">
            <Input
              placeholder="Search phobias..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </form>
        
        <Tabs defaultValue="common" className="mt-10">
          <TabsList className="grid w-full md:w-[400px] grid-cols-3">
            <TabsTrigger value="common">Common</TabsTrigger>
            <TabsTrigger value="specific">Specific</TabsTrigger>
            <TabsTrigger value="rare">Rare</TabsTrigger>
          </TabsList>
          
          {["common", "specific", "rare"].map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhobias
                  .filter(phobia => phobia.category === category)
                  .map((phobia) => (
                    <PhobiaCard key={phobia.id} phobia={phobia} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

interface PhobiaType {
  id: string;
  name: string;
  technicalName: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  category: 'common' | 'specific' | 'rare';
}

const PhobiaCard = ({ phobia }: { phobia: PhobiaType }) => {
  return (
    <Card className="card-hover-effect h-full flex flex-col">
      <CardHeader>
        <CardTitle>{phobia.name}</CardTitle>
        <CardDescription>{phobia.technicalName}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{phobia.description}</p>
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Common symptoms:</h4>
          <ul className="text-sm space-y-1 list-disc pl-4">
            {phobia.symptoms.map((symptom, i) => (
              <li key={i}>{symptom}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button size="sm" variant="outline" className="w-full">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

const phobias: PhobiaType[] = [
  {
    id: '1',
    name: 'Fear of Spiders',
    technicalName: 'Arachnophobia',
    description: 'An intense fear of spiders and other arachnids like scorpions.',
    symptoms: [
      'Immediate anxiety when seeing a spider',
      'Avoidance of places where spiders might be found',
      'Physical symptoms like sweating or increased heart rate'
    ],
    treatments: [
      'Exposure therapy',
      'Cognitive behavioral therapy',
      'Virtual reality treatment'
    ],
    category: 'common'
  },
  {
    id: '2',
    name: 'Fear of Heights',
    technicalName: 'Acrophobia',
    description: 'The fear of heights or being close to high places.',
    symptoms: [
      'Vertigo when looking down from a height',
      'Panic attacks when in high places',
      'Avoidance of tall buildings or mountains'
    ],
    treatments: [
      'Gradual exposure therapy',
      'Virtual reality therapy',
      'Anti-anxiety medication in some cases'
    ],
    category: 'common'
  },
  {
    id: '3',
    name: 'Fear of Flying',
    technicalName: 'Aerophobia',
    description: 'The fear of flying or traveling in air vehicles.',
    symptoms: [
      'Extreme anxiety before or during flights',
      'Avoidance of air travel',
      'Physical symptoms like nausea or hyperventilation'
    ],
    treatments: [
      'Cognitive behavioral therapy',
      'Flight simulation exposure',
      'Anti-anxiety techniques'
    ],
    category: 'common'
  },
  {
    id: '4',
    name: 'Fear of Dogs',
    technicalName: 'Cynophobia',
    description: 'An irrational fear of dogs, regardless of their size or breed.',
    symptoms: [
      'Panic when near dogs',
      'Avoidance of places where dogs might be',
      'Physical reactions like trembling or crying'
    ],
    treatments: [
      'Gradual exposure therapy',
      'Cognitive behavioral therapy',
      'Relaxation techniques'
    ],
    category: 'specific'
  },
  {
    id: '5',
    name: 'Fear of Thunder',
    technicalName: 'Astraphobia',
    description: 'Fear of thunder and lightning, often escalating during storms.',
    symptoms: [
      'Intense anxiety during thunderstorms',
      'Hiding behavior when thunder occurs',
      'Obsessive weather checking'
    ],
    treatments: [
      'Desensitization therapy',
      'Cognitive restructuring',
      'Relaxation training'
    ],
    category: 'specific'
  },
  {
    id: '6',
    name: 'Fear of Blood',
    technicalName: 'Hemophobia',
    description: 'An extreme fear of blood, injuries, or medical procedures involving blood.',
    symptoms: [
      'Fainting at the sight of blood',
      'Avoidance of medical procedures',
      'Rapid heart rate and dizziness'
    ],
    treatments: [
      'Applied tension technique',
      'Exposure therapy',
      'Cognitive behavioral therapy'
    ],
    category: 'specific'
  },
  {
    id: '7',
    name: 'Fear of Numbers',
    technicalName: 'Arithmophobia',
    description: 'The fear of numbers or math, beyond typical math anxiety.',
    symptoms: [
      'Panic attacks when dealing with math',
      'Avoidance of situations involving calculations',
      'Physical symptoms like nausea when seeing certain numbers'
    ],
    treatments: [
      'Cognitive behavioral therapy',
      'Gradual exposure to numbers',
      'Anxiety management techniques'
    ],
    category: 'rare'
  },
  {
    id: '8',
    name: 'Fear of Mirrors',
    technicalName: 'Catoptrophobia',
    description: 'An irrational fear of mirrors or seeing one\'s reflection.',
    symptoms: [
      'Anxiety when forced to look in mirrors',
      'Covering or avoiding mirrors',
      'Fear of seeing something supernatural in mirrors'
    ],
    treatments: [
      'Exposure therapy',
      'Cognitive behavioral therapy',
      'Relaxation techniques'
    ],
    category: 'rare'
  },
  {
    id: '9',
    name: 'Fear of Long Words',
    technicalName: 'Hippopotomonstrosesquippedaliophobia',
    description: 'Ironically, the fear of long words.',
    symptoms: [
      'Anxiety when confronted with long words',
      'Avoidance of reading or academic situations',
      'Physical reactions like sweating when seeing long words'
    ],
    treatments: [
      'Systematic desensitization',
      'Cognitive therapy',
      'Relaxation training'
    ],
    category: 'rare'
  }
];

export default Phobias;
