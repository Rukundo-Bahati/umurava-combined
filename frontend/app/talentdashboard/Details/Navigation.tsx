import React from "react";
import { MoveLeft } from "lucide-react";

interface NavigationBarProps {
  onGoBack: () => void;
  title: string;
  actionText: string;
  onActionClick: () => void;
  className?: string; // Add className prop
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  onGoBack,
  title,
  actionText,
  onActionClick,
  className,
}) => {
  return (
    <div className={`flex items-center justify-between p-4 ${className}`}>
      <MoveLeft className="cursor-pointer" onClick={onGoBack} />
      <div className="flex-1 text-center">{title}</div>
      <button className="text-blue-500" onClick={onActionClick}>
        {actionText}
      </button>
    </div>
  );
};

export default NavigationBar;
