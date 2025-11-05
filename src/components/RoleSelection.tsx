import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, UserCircle, CheckCircle } from "lucide-react";

const roles = [
  {
    icon: ShieldCheck,
    title: "Admin",
    description: "Manage the system, monitor election data, and ensure platform security",
    features: [
      "System Management",
      "Security Monitoring",
      "User Access Control",
      "Data Integrity",
    ],
    buttonText: "Select Role",
  },
  {
    icon: UserCircle,
    title: "Citizen",
    description: "Track election processes, report issues, and engage in civic discussions",
    features: [
      "Election Tracking",
      "Issue Reporting",
      "Civic Engagement",
      "Voting Information",
    ],
    buttonText: "Get Started",
  },
];

const RoleSelection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-3">Choose Your Role</h3>
          <p className="text-muted-foreground text-lg">Access specialized tools designed for your specific needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {roles.map((role, index) => {
            const Icon = role.icon;
            
            return (
              <Card key={index} className="shadow-elevated hover:shadow-elevated transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary mb-4">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{role.title}</CardTitle>
                  <CardDescription className="text-base">{role.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {role.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" size="lg">
                    {role.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoleSelection;
