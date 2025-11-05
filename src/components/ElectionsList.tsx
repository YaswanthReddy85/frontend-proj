import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const elections = [
  {
    title: "Presidential Election 2024",
    location: "National",
    status: "Active",
    progress: 68,
    voters: "45.2M",
    issues: 2,
  },
  {
    title: "State Governor Election",
    location: "California",
    status: "Active",
    progress: 45,
    voters: "12.8M",
    issues: 0,
  },
  {
    title: "City Council Election",
    location: "New York",
    status: "Completed",
    progress: 100,
    voters: "2.1M",
    issues: 1,
  },
  {
    title: "Senate Election",
    location: "Texas",
    status: "Upcoming",
    progress: 0,
    voters: "8.9M",
    issues: 0,
  },
];

const ElectionsList = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-3">Current Elections</h3>
          <p className="text-muted-foreground text-lg">Monitor progress and status of ongoing democratic processes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {elections.map((election, index) => (
            <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{election.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{election.location}</p>
                  </div>
                  <Badge 
                    variant={
                      election.status === "Active" 
                        ? "default" 
                        : election.status === "Completed"
                        ? "secondary"
                        : "outline"
                    }
                    className={
                      election.status === "Active"
                        ? "bg-success text-white"
                        : ""
                    }
                  >
                    {election.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Voting Progress</span>
                      <span className="font-semibold text-foreground">{election.progress}%</span>
                    </div>
                    <Progress value={election.progress} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{election.voters}</p>
                      <p className="text-xs text-muted-foreground">Registered Voters</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{election.issues}</p>
                      <p className="text-xs text-muted-foreground">Issues Reported</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectionsList;
