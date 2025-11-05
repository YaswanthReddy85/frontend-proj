import { Building2, Eye, AlertTriangle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    icon: Building2,
    value: "248",
    label: "Active Elections",
    change: "+12%",
    trend: "up",
  },
  {
    icon: Eye,
    value: "1,847",
    label: "Election Observers",
    change: "+8%",
    trend: "up",
  },
  {
    icon: AlertTriangle,
    value: "23",
    label: "Issues Reported",
    change: "-15%",
    trend: "down",
  },
  {
    icon: Users,
    value: "892K",
    label: "Registered Voters",
    change: "+25%",
    trend: "up",
  },
];

const StatsOverview = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-3">Real-Time Election Overview</h3>
          <p className="text-muted-foreground text-lg">Live data from ongoing democratic processes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isNegative = stat.trend === "down";
            
            return (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <Badge 
                      variant="secondary"
                      className={`${
                        isNegative 
                          ? 'bg-danger-light text-danger' 
                          : 'bg-success-light text-success'
                      }`}
                    >
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsOverview;
