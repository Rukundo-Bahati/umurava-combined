"use client";

import { useInView } from "react-intersection-observer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useCounter } from "../hooks/user-counter";

export function TalentCounter() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const count = useCounter(inView ? 20000 : 0);

  const images = [
    "/images/man1.png",
    "/images/woman1.png",
    "/images/man2.png",
    "/images/woman2.png",
  ];

  return (
    <div ref={ref} className="flex items-center gap-2">
      <div className="flex -space-x-3">
        {images.map((image, i) => (
          <Avatar key={i} className="border-2 border-white w-8 h-8">
            <AvatarImage src={image} alt={`User ${i + 1}`} />
          </Avatar>
        ))}
      </div>
      <div className="ml-4">
        <p className="font-semibold tabular-nums">{count.toLocaleString()}+</p>
        <p className="text-sm text-gray-600">Talents</p>
      </div>
    </div>
  );
}
