import { useState } from "react";
import { ConsumptionForm } from "@/components/ConsumptionForm";
import { ConsumptionDisplay } from "@/components/ConsumptionDisplay";
import { toast } from "sonner";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [consumptionData, setConsumptionData] = useState<{
    contractedPower: number;
    currentConsumption: number;
  } | null>(null);

  const handleSubmit = async (dni: string, cups: string) => {
    setIsLoading(true);
    
    try {
      // Simulated API call - replace with actual API integration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulated response - replace with actual data
      setConsumptionData({
        contractedPower: 4.6,
        currentConsumption: 324.5,
      });
      
      toast.success("Data retrieved successfully");
    } catch (error) {
      toast.error("Failed to retrieve consumption data");
      console.error("Error fetching consumption data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Check Your Energy Consumption
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your DNI and CUPS to discover your current energy consumption and find ways to save.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <ConsumptionForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {consumptionData && <ConsumptionDisplay data={consumptionData} />}
      </div>
    </div>
  );
};

export default Index;