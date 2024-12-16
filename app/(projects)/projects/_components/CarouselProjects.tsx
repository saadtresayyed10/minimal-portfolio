import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    id: 1,
    name: "Jade",
    img: "/images/jade.png",
    link: "https://jadebygrove.vercel.app",
    desc: "",
  },
  {
    id: 2,
    name: "Euphoria",
    img: "/images/euphoria.png",
    link: "https://euphoriabygrove.vercel.app",
    desc: "",
  },
  {
    id: 3,
    name: "Avon AI",
    img: "/images/avon.png",
    link: "https://avonbygrove.vercel.app",
    desc: "",
  },
  {
    id: 4,
    name: "Expense Tracker",
    img: "/images/expense.png",
    link: "https://evenidk.vercel.app",
    desc: "",
  },
];

export function CarouselProjects() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{project.name}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
