import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <ShieldCheck className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ElectionWatch Pro</h1>
              <p className="text-xs text-muted-foreground">Securing Democracy</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#elections" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Elections
            </a>
            <a href="#reports" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Reports
            </a>
            <a href="#analytics" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Analytics
            </a>
          </div>

          <Button>Sign In</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
