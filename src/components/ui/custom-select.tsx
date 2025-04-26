import { useState } from "react";
import {  Controller, Control } from "react-hook-form";
import { ChevronDown, ChevronUp } from "lucide-react";

export type CustomSelectProps = {
  label?: string;
  name: string;
  options: string[];
  control: Control<any>;
  className?: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  options,
  control,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div>
            <div
              className="flex items-center justify-between border rounded-xl px-4 py-2 cursor-pointer bg-white shadow-sm"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="text-gray-600">
                {field.value || label || "Select..."}
              </span>
              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              )}
            </div>
            {isOpen && (
              <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-xl bg-white shadow-lg border">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                      field.value === option ? "bg-gray-100" : ""
                    }`}
                    onClick={() => {
                      field.onChange(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default CustomSelect;
