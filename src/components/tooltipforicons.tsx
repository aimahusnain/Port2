import Link from "next/link";
import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip"

const TooltipForIcons: React.FC<{
  linkhref: string;
  arialabel: string;
  children: React.ReactNode;
}> = ({ linkhref, arialabel, children }) => {
  return (
    <TooltipProvider>
    <Tooltip>
    <TooltipTrigger><li className="transition-all duration-500 hover:bg-boo-700 p-2 cursor-pointer rounded-full">
      <Link href={linkhref} aria-label={arialabel} target="_blank">
        {children}
      </Link>
    </li></TooltipTrigger>
    <TooltipContent>
      <p>{arialabel}</p>
    </TooltipContent>
    </Tooltip>
    </TooltipProvider>
    
  );
};

export default TooltipForIcons;