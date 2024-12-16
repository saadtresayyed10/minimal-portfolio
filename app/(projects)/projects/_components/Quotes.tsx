"use client";

import WordPullUp from "@/components/ui/word-pull-up";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import store from "store2";

interface Motivation {
  category: string;
  quote: string;
  action: string;
}

const motivationArray: Motivation[] = [
  {
    category: "Coding Inspiration",
    quote:
      "Code is like art—it requires creativity and structure to build something truly beautiful.",
    action: "Start your day by designing a feature that excites you.",
  },
  {
    category: "Artistic Insight",
    quote: "Every pixel, every brushstroke—small details build masterpieces.",
    action: "Dedicate time to refining the UI of your project today.",
  },
  {
    category: "Growth Mindset",
    quote:
      "Every bug is an opportunity to learn, just as every failed sketch sharpens your skills.",
    action:
      "Reflect on a challenging bug you've solved recently—celebrate that growth.",
  },
  {
    category: "Balance",
    quote:
      "Creativity thrives where discipline meets passion. Embrace both sides of yourself.",
    action:
      "Schedule time for both coding and sketching to keep your skills in harmony.",
  },
  {
    category: "Innovation",
    quote:
      "Artists paint the world as it could be; developers build the world as it should be.",
    action:
      "Experiment with a new framework or a creative feature for your application.",
  },
  {
    category: "Perspective",
    quote:
      "A bug in code or a flaw in a sketch isnt failure; its feedback for your next masterpiece.",
    action:
      "Take a step back and review your work with fresh eyes—its part of the process.",
  },
  {
    category: "Teamwork",
    quote:
      "Collaboration blends colors and ideas into something extraordinary.",
    action:
      "Pair program or discuss an idea with a fellow developer or artist today.",
  },
  {
    category: "Mindfulness",
    quote: "The most brilliant ideas come when the mind is calm and free.",
    action: "Take a 5-minute break to sketch or meditate to spark creativity.",
  },
  {
    category: "Vision",
    quote:
      "Every great app starts with a single line of code, just as every great painting starts with a single stroke.",
    action:
      "Write down one ambitious goal for your current project and take the first step.",
  },
  {
    category: "Legacy",
    quote:
      "Your work—code or canvas—can inspire others for generations to come.",
    action:
      "Share a piece of your work today, whether its a GitHub repo or an illustration.",
  },
];

const DailyMotivation = () => {
  const [motivation, setMotivation] = useState<Motivation | null>(null);

  useEffect(() => {
    const now = new Date();
    const storedMotivation = store.get("dailyMotivation");
    const storedDate = store.get("motivationDate");

    if (storedMotivation && storedDate) {
      const lastDate = new Date(storedDate);
      if (now.getTime() - lastDate.getTime() < 24 * 60 * 60 * 1000) {
        setMotivation(storedMotivation as Motivation);
        return;
      }
    }

    const randomMotivation =
      motivationArray[Math.floor(Math.random() * motivationArray.length)];
    setMotivation(randomMotivation);

    store.set("dailyMotivation", randomMotivation);
    store.set("motivationDate", now.toISOString());
  }, []);

  if (!motivation)
    return (
      <p className="text-center animate-spin text-muted-foreground">
        <Loader2 className="w-10 h-10" />
      </p>
    );

  return (
    <div className="max-w-lg mx-auto p-6 font-agrandir">
      <h2 className="text-xl uppercase font-bold">{motivation.category}</h2>
      <p className="mt-4 capitalize text-2xl">{motivation.quote}</p>
      <p className="mt-6 capitalize">
        <span className="font-bold underline underline-offset-2 mr-2">
          Action:
        </span>
        {motivation.action}
      </p>
      <WordPullUp
        className="mt-10 capitalize block lg:hidden text-xs text-muted-foreground"
        words="Please swipe right to see next project."
      />
    </div>
  );
};

export default DailyMotivation;
