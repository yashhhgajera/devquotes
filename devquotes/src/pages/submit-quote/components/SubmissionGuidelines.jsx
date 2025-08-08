import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SubmissionGuidelines = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const guidelines = [
    {
      title: "Content Quality",
      description: "Submit original, meaningful quotes that provide value to the developer community. Avoid spam or low-effort content."
    },
    {
      title: "Attribution",
      description: "Always credit the original author. If the source is unknown, use 'Anonymous' or 'Unknown Developer'."
    },
    {
      title: "Language & Tone",
      description: "Keep content professional and respectful. Humor is welcome, but avoid offensive or discriminatory language."
    },
    {
      title: "Length Guidelines",
      description: "Quotes should be between 10-500 characters. Aim for concise, impactful statements that are easy to read and share."
    },
    {
      title: "Originality",
      description: "Check if the quote already exists in our database. Duplicate submissions will be automatically filtered out."
    }
  ];

  return (
    <div className="bg-muted rounded-lg border border-border">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-muted/80 transition-smooth rounded-lg"
      >
        <div className="flex items-center gap-2">
          <Icon name="Info" size={16} className="text-primary" />
          <span className="text-sm font-medium text-foreground">
            Submission Guidelines
          </span>
        </div>
        <Icon 
          name={isExpanded ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-muted-foreground transition-transform duration-200"
        />
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 space-y-3 border-t border-border mt-2 pt-3">
          {guidelines?.map((guideline, index) => (
            <div key={index} className="space-y-1">
              <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {guideline?.title}
              </h4>
              <p className="text-xs text-muted-foreground ml-3.5 leading-relaxed">
                {guideline?.description}
              </p>
            </div>
          ))}
          
          <div className="mt-4 p-3 bg-background rounded-md border border-border">
            <div className="flex items-start gap-2">
              <Icon name="Lightbulb" size={14} className="text-accent mt-0.5" />
              <div>
                <p className="text-xs font-medium text-foreground">Pro Tip</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Great quotes often capture universal truths about programming, debugging experiences, or insights about software development that other developers can relate to.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmissionGuidelines;