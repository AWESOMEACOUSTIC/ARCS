import { useState } from "react";

const AccordionItem = ({ title, content, isExpanded, onClick }) => {
  return (
    <div className="mb-2">
      <button
        type="button"
        className={`mb-2 flex w-full items-center justify-between gap-4 font-rugen ${
          !isExpanded && "rounded-xl border-b border-white"
        } bg-transparent p-4 text-left`}
        aria-expanded={isExpanded}
        onClick={onClick}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          className={`size-5 shrink-0 transition ${
            isExpanded ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {isExpanded && (
        <div
          className={`mb-2 text-pretty font-neuton ${
            isExpanded && "rounded-xl border-b border-white"
          } p-4 text-lg sm:text-base`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Toggle or close other items
  };

  return (
    <div className="w-[99%] overflow-hidden sm:w-[95%] md:w-[60%]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
