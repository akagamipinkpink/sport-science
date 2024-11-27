"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { ConfettiButton } from "@/components/ui/confetti";

interface ScrollToSectionButtonProps {
  className?: string;
  scrollToId: string;
  children: React.ReactNode;
}

const ScrollToSectionButton: React.FC<ScrollToSectionButtonProps> = ({
  className,
  scrollToId,
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    setTimeout(() => {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 700);
  };

  if (!isMounted) {
    return null; // atau placeholder
  }

  return (
    <ConfettiButton>
      <button
        onClick={handleClick}
        className={`${className} group cursor-pointer`}
      >
        {children}
        <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </button>
    </ConfettiButton>
  );
};

export default ScrollToSectionButton;
