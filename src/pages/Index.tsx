import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsOverview from "@/components/StatsOverview";
import ElectionsList from "@/components/ElectionsList";
import RoleSelection from "@/components/RoleSelection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StatsOverview />
      <ElectionsList />
      <RoleSelection />
    </div>
  );
};

export default Index;
