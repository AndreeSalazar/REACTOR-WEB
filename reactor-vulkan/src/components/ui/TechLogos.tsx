import React from "react";

export const VulkanLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 256 256" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M102.5 0H0L51.5 256H154L102.5 0Z" fill="#CC2131" />
    <path d="M153.5 0H256L204.5 256H102L153.5 0Z" fill="#A81525" />
    <path d="M51.5 0H154L128 128L102.5 0H51.5Z" fill="#CC2131" />
  </svg>
);

export const DirectXLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 256 256" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M38.6 20.3L95.9 104.4L11.7 235.7H67.2L124.6 142.1L183.9 235.7H239.5L148.4 103.8L225.2 20.3H170.8L117.8 81.3L64.8 20.3H38.6Z" fill="#98C619"/>
     <path d="M236.6 20.3L253.5 39.7L226.7 51.5L209.8 32.1L236.6 20.3Z" fill="#98C619"/>
  </svg>
);
