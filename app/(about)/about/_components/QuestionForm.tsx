"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function QuestionForm() {
  const [questions, setQuestions] = useState<string>("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const questionsData = { questions };
    console.log("Sending data to API:", questionsData);

    const response = await fetch("/api/questionaire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(questionsData),
    });

    if (response.ok) {
      toast({
        title: "Message sent :)",
        description: "Saad will soon reply to your message.",
      });
    } else {
      toast({
        title: "Message did not sent :(",
        description: "Saad will fix this issue soon.",
      });
    }

    setQuestions("");
  };

  const placeholders = [
    "How do I manage multiple careers?",
    "How do I heal and grow in a messy environment?",
    "How do I learn life through video-games?",
    "How do I trust in GOD and so how can you too?",
    "What drives me to be me?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestions(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <h2 className="text-xl opacity-0 text-center lg:text-4xl">
        Feel free to ask me anything:
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
