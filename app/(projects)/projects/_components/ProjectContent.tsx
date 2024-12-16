import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProjectContentProps {
  name: string;
  link: string;
  img: string;
  desc: string;
}

const ProjectContent = ({ img, desc, link, name }: ProjectContentProps) => {
  return (
    <Card>
      <CardContent className="flex gap-y-4 flex-col aspect-square items-center justify-center p-6">
        <Image
          src={img}
          alt={img}
          width={400}
          height={400}
          className="rounded-lg shadow-md"
        />
        <h1 className="uppercase font-semibold font-agrandir text-center lg:text-xl text-lg">
          {name}
        </h1>
        <p className="capitalize font-agrandir text-center lg:text-base text-sm">
          {desc}
        </p>
        <Button className="w-full capitalize font-agrandir">
          <Link target="_blank" href={link}>
            Check this project
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectContent;
