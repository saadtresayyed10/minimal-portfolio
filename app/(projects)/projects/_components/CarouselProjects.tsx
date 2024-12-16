import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectContent from "./ProjectContent";

const projects = [
  {
    id: 1,
    name: "Euphoria",
    img: "/images/euphoria.png",
    link: "https://euphoriabygrove.vercel.app",
    desc: "Collaborative online whiteboard for brainstorming, planning, and team creativity...",
  },
  {
    id: 2,
    name: "Jade",
    img: "/images/jade.png",
    link: "https://jadebygrove.vercel.app",
    desc: "All-in-one workspace for notes, tasks, wikis, etc...",
  },
  {
    id: 3,
    name: "Avon AI",
    img: "/images/avon.png",
    link: "https://avonbygrove.vercel.app",
    desc: "Advanced artificial intelligence platform for innovative business and personal solutions...",
  },
  {
    id: 4,
    name: "Expense Tracker",
    img: "/images/expense.png",
    link: "https://expense-tracker-down.vercel.app/",
    desc: "Effortlessly manage and monitor your personal financial transactions...",
  },
];

export function CarouselProjects() {
  return (
    <Carousel className="lg:w-full w-full max-w-xs mx-auto overflow-hidden">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id}>
            <ProjectContent
              desc={project.desc}
              name={project.name}
              link={project.link}
              img={project.img}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
