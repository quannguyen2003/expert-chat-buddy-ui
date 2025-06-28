
import { Star, Badge, Clock } from "lucide-react";

export const ExpertProfile = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
          SJ
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Dr. Sarah Johnson</h2>
          <p className="text-blue-100 text-sm">Tech Career Consultant & Former VP of Engineering</p>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span className="text-sm">4.9 (127 reviews)</span>
            </div>
            <div className="flex items-center space-x-1">
              <Badge className="w-4 h-4" />
              <span className="text-sm">Verified Expert</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Usually responds in 2 min</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="w-3 h-3 bg-green-400 rounded-full mb-1"></div>
          <span className="text-xs text-blue-100">Online</span>
        </div>
      </div>
    </div>
  );
};
