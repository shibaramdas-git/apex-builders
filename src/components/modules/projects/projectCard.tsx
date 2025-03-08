import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

export interface IProject {
  title: string;
  slug: { current: string; _type: string };
  status: "completed" | "ongoing" | "planned"; // Add more statuses if needed
  shortDescription: string;
  thumbnailImage: any;
}

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Project Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={urlFor(project.thumbnailImage).url()}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <CardHeader className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{project.title}</h3>
        </div>
      </CardHeader>

      <CardContent className="p-4 text-sm text-muted-foreground line-clamp-3 h-[80px]">
        {project.shortDescription}
      </CardContent>

      {/* Card Footer */}
      <CardFooter className="p-4 flex justify-between items-end w-full">
        <Link href={`/projects/${project.slug.current}`}>
          <Button variant="default" className="w-full">
            View Project
          </Button>
        </Link>

        {project.status === "completed" ? (
          <Badge variant="green">Completed</Badge>
        ) : project.status === "ongoing" ? (
          <Badge variant="yellow">In Progress</Badge>
        ) : (
          <Badge>Upcoming</Badge>
        )}
      </CardFooter>
    </Card>
  );
}
