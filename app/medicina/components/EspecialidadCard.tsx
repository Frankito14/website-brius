"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SubEspecialidadItem } from "./SubEspecialidadItem";

interface EspecialidadCardProps {
  spec: {
    name: string;
    sub?: string[];
  };
}

export function EspecialidadCard({ spec }: EspecialidadCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-white p-6 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all group">
      <div 
        className={`flex items-center justify-between ${spec.sub ? 'cursor-pointer' : ''}`}
        onClick={() => spec.sub && setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold text-indigo-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
          {spec.name}
        </h3>
        {spec.sub && (
          <button className="text-indigo-400 hover:text-indigo-600 focus:outline-none shrink-0 ml-2 transition-colors">
            {isOpen ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
          </button>
        )}
      </div>
      
      {spec.sub && isOpen && (
        <div className="absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white border border-indigo-100 rounded-xl shadow-xl z-50 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="space-y-1">
            {spec.sub.map((subItem, subIndex) => (
              <SubEspecialidadItem key={subIndex} name={subItem} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
