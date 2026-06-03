'use client';

import { useState } from 'react';

interface TimelineItemProps {
  year: string;
  role: string;
  company: string;
  type: string;
  details: string[];
}

function TimelineItem({ year, role, company, type, details }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative pl-12 pb-12 last:pb-0 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-neutral-200 dark:bg-neutral-800" />
      
      {/* Dot */}
      <div 
        className={`absolute left-[-3px] top-2 h-2 w-2 rounded-full transition-all duration-300 ease-out
          ${isExpanded 
            ? 'bg-neutral-900 dark:bg-neutral-100' 
            : 'bg-neutral-400 dark:bg-neutral-600'
          }`} 
      />

      <div className="w-full">
        {/* Year and type */}
        <div className="flex items-center gap-3 mb-3">
          <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {year}
          </div>
          <div className="text-xs px-2 py-0.5 font-medium rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
            {type}
          </div>
        </div>

        {/* Role and company */}
        <div className="space-y-1 mb-3">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {role}
          </h3>
          <div className="text-neutral-600 dark:text-neutral-400 font-medium">
            {company}
          </div>
        </div>

        {/* View details button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors duration-200"
        >
          <span>
            {isExpanded ? 'Hide work details' : 'View work details'}
          </span>
          <svg 
            className={`w-4 h-4 transform transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Expanded details with animation */}
      <div className={`
        mt-4 overflow-hidden transition-all duration-300 ease-out
        ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="py-2 space-y-3">
          {details.map((detail, index) => (
            <div key={index} className="flex items-start space-x-3 text-neutral-600 dark:text-neutral-400">
              <span className="mt-2 h-px w-2 bg-neutral-300 dark:bg-neutral-600 flex-shrink-0" />
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="my-12">
      <div className="relative">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
} 