
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ModernNavigation from "./components/ModernNavigation";
import ModernHero from "./components/ModernHero";
import ModernAbout from "./components/ModernAbout";
import ModernProjects from "./components/ModernProjects";
import ModernSkills from "./components/ModernSkills";
import ModernResume from "./components/ModernResume";
import ModernContact from "./components/ModernContact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-gray-50">
        <ModernNavigation />
        <ModernHero />
        <ModernAbout />
        <ModernProjects />
        <ModernSkills />
        <ModernResume />
        <ModernContact />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
