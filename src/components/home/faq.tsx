"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: " Is Meely a bank?",
    answer:
      "No. Meely is not a bank. Meely is a financial technology company. Banking services are provided by our partner banks through Mbanq.",
  },
  {
    id: "item-2",
    question: "Can I open a bank account with Meely?",
    answer:
      "You can apply for an account through Meely. The account will be opened and managed by our Sponsor Bank partners.",
  },
  {
    id: "item-3",
    question: "Is my money insured?",
    answer:
      "Yes, deposits with Sponsor Banks are FDIC insured up to the standard limits. “Sponsor Bank deposits are fully protected up to the standard deposit insurance amount by the FDIC which is $250,000 per depositor, per insured bank, for each account ownership category",
  },
  {
    id: "item-4",
    question: "Who can use Meely?",
    answer:
      "Meely is available to both individuals and businesses seeking a smarter way to manage money.",
  },
  {
    id: "item-5",
    question: "How secure is Meely?",
    answer:
      "Meely uses industry-leading encryption, multi-factor authentication, and strict privacy protocols.",
  }
];

const Faq = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (item: string) => {
    setOpenItem((prev) => (prev === item ? null : item));
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full mt-6  hover:no-underline cursor-pointer max-w-4xl mx-auto rounded-lg"
    >
      {faqData.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={faq.id}
          className="border-[#E7E7E7] border mt-5 shadow-[2px_2px_16px_0px_#1018280A] rounded-lg"
        >
          <AccordionTrigger
            className="px-4 hover:no-underline py-3 flex justify-between items-center [&>svg]:hidden after:hidden"
            onClick={() => handleToggle(faq.id)}
          >
            <span className="text-left text-2xl text-[#1A1A1A] font-medium">
              {faq.question}
            </span>

            {/* Custom icon */}
            <span className="w-6 h-6 rounded-full border border-[#1521F2] bg-[] flex items-center justify-center ml-4">
              {openItem === faq.id ? (
                <Minus size={14} className="text-[#1521F2]" />
              ) : (
                <Plus size={14} className="text-[#1521F2]" />
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-sm font-medium text-[#475467]">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;
