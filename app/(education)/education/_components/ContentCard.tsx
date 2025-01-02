"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface ContentCardProps {
  logo: string;
  univ: string;
  timeline: string;
  degree: string;
  desc: string;
}

export function ContentCard({
  degree,
  desc,
  logo,
  timeline,
  univ,
}: ContentCardProps) {
  return (
    <div className="max-w-xs w-full group/card font-agrandir border-2 border-black rounded-md">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1515549832467-8783363e19b6?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={logo}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-black relative z-10">
              {univ}
            </p>
            <p className="text-sm text-black">{timeline}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-black relative z-10">
            {degree}
          </h1>
          <p className="font-normal text-sm text-black relative z-10 my-4">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
