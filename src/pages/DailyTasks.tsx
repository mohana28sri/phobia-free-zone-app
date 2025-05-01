
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';

const DailyTasks = () => {
  const { toast } = useToast();
  const [tasks, setTasks] = useState(sampleTasks);
  
  const toggleComplete = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
    
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      toast({
        title: task.completed ? "Task unmarked" : "Task completed!",
        description: task.completed ? "Keep working on your goals" : "Great job on your progress!",
        duration: 3000,
      });
    }
  };
  
  const completedCount = tasks.filter(task => task.completed).length;
  const progressPercentage = (completedCount / tasks.length) * 100;

  return (
    <Layout>
      <div className="container py-12">
        <SectionTitle 
          title="Your Daily Tasks" 
          subtitle="Complete these personalized tasks to gradually overcome your fears"
        />
        
        <div className="mt-8 mb-12">
          <h3 className="text-lg font-medium mb-2">Daily Progress</h3>
          <div className="flex items-center gap-4">
            <Progress value={progressPercentage} className="h-2" />
            <span className="text-sm font-medium">{completedCount}/{tasks.length}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <Card key={task.id} className={task.completed ? "border-primary/30 bg-primary/5" : ""}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{task.title}</CardTitle>
                    <CardDescription className="mt-1">{task.description}</CardDescription>
                  </div>
                  <div className="flex h-6 items-center space-x-2">
                    <Checkbox 
                      id={`task-${task.id}`} 
                      checked={task.completed} 
                      onCheckedChange={() => toggleComplete(task.id)}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <span className={`px-2 py-0.5 rounded-full ${getDifficultyBadgeClass(task.difficulty)}`}>
                    {task.difficulty}
                  </span>
                  <span className="text-muted-foreground">{task.duration}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

const getDifficultyBadgeClass = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-green-100 text-green-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'hard':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const sampleTasks = [
  {
    id: '1',
    title: 'Look at Spider Images',
    description: 'Spend 5 minutes looking at pictures of spiders without looking away.',
    difficulty: 'Easy',
    duration: '5 minutes',
    completed: false
  },
  {
    id: '2',
    title: 'Watch Spider Video',
    description: 'Watch a 3-minute educational video about harmless house spiders.',
    difficulty: 'Medium',
    duration: '3 minutes',
    completed: false
  },
  {
    id: '3',
    title: 'Guided Visualization',
    description: 'Follow the audio guide to imagine yourself calmly watching a spider nearby.',
    difficulty: 'Medium',
    duration: '10 minutes',
    completed: false
  },
  {
    id: '4',
    title: 'Visit Pet Store Spider Section',
    description: 'Go to a pet store and spend time observing the spiders in enclosures.',
    difficulty: 'Hard',
    duration: '20 minutes',
    completed: false
  }
];

export default DailyTasks;
