import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ConsumptionFormProps {
  onSubmit: (dni: string, cups: string) => void;
  isLoading: boolean;
}

export const ConsumptionForm = ({ onSubmit, isLoading }: ConsumptionFormProps) => {
  const [dni, setDni] = useState("");
  const [cups, setCups] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!dni || !cups) {
      toast.error("Please fill in all fields");
      return;
    }

    if (dni.length < 9) {
      toast.error("DNI must be at least 9 characters");
      return;
    }

    if (cups.length < 20 || cups.length > 22) {
      toast.error("CUPS must be between 20-22 characters");
      return;
    }

    onSubmit(dni, cups);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="dni" className="text-sm font-medium">
          DNI
        </Label>
        <Input
          id="dni"
          placeholder="Enter your DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          className="transition-all duration-200 focus:ring-2 focus:ring-theme-500"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="cups" className="text-sm font-medium">
          CUPS
        </Label>
        <Input
          id="cups"
          placeholder="Enter your CUPS"
          value={cups}
          onChange={(e) => setCups(e.target.value)}
          className="transition-all duration-200 focus:ring-2 focus:ring-theme-500"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-theme-600 hover:bg-theme-700 text-white transition-all duration-200"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Processing...
          </div>
        ) : (
          "Discover How to Save"
        )}
      </Button>
    </form>
  );
};