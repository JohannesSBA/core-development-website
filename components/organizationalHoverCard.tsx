import { HoverCard, HoverCardContent, HoverCardPortal, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { HoverCardRoot } from "./ui/hover-card";

interface HoverCardProps {
    title: string;
    description: string;
    image?: string;
}

export default function OrganizationalHoverCard({ title, description, image }: HoverCardProps) {
    return (
        <HoverCardRoot>
        <HoverCard>
        <HoverCardTrigger asChild>
            <div className="bg-teal-700 hover:bg-teal-800 transition-all duration-300 hover:scale-105 hover:shadow-lg text-white px-4 py-6 text-sm font-bold text-center">{title}</div>
        </HoverCardTrigger>
            <HoverCardPortal>
                <HoverCardContent 
                    className="w-[300px] rounded-md bg-white p-5 shadow-lg transition-opacity duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                    sideOffset={5}>
                    {description}
                </HoverCardContent>
                </HoverCardPortal>
     </HoverCard>
     </HoverCardRoot>
    )
}