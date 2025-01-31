import { motion } from "framer-motion";

interface ConsumptionData {
  contractedPower: number;
  currentConsumption: number;
}

interface ConsumptionDisplayProps {
  data: ConsumptionData;
}

export const ConsumptionDisplay = ({ data }: ConsumptionDisplayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto mt-8 space-y-6"
    >
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-4 border border-gray-100">
        <div className="space-y-1">
          <p className="text-sm text-theme-600 font-medium">Contracted Power</p>
          <p className="text-3xl font-semibold">
            {data.contractedPower.toFixed(2)} kW
          </p>
        </div>
        
        <div className="h-px bg-gray-100" />
        
        <div className="space-y-1">
          <p className="text-sm text-theme-600 font-medium">Current Consumption</p>
          <p className="text-3xl font-semibold">
            {data.currentConsumption.toFixed(2)} kWh
          </p>
        </div>
      </div>
    </motion.div>
  );
};