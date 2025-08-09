"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import WaveReveal from "@/components/WaveReveal/WaveReveal";
import { cn } from "@/lib/utils";

interface Item {
  image: string;
  title: string;
}

interface ImageProps {
  item: Item;
  index: number;
  activeItem: number;
  onHover: () => void;
  onLeave: () => void;
}

interface ExpandableProps {
  list?: Item[];
  autoPlay?: boolean;
  className?: string;
}

const ROUTES = ["/experience", "/projects", "/about"];

const List = ({ item, index, activeItem, onHover, onLeave }: ImageProps) => {
  const dynamicRoute = ROUTES[index] || "/";

  return (
    <Link
      href={dynamicRoute}
      className={cn(
        "relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all duration-300 ease-in-out",
        { "flex-grow": index === activeItem }
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <img
        src={item.image}
        alt={item.title}
        className={cn("h-full w-full object-cover", {
          "blur-[2px]": index !== activeItem,
        })}
      />
      {index === activeItem && (
        <div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8">
          <WaveReveal
            duration="750ms"
            className="items-start justify-start text-xl sm:text-2xl md:text-6xl"
            text={item.title}
            direction="up"
          />
        </div>
      )}
    </Link>
  );
};

export default function Expandable({
  list,
  autoPlay = true,
  className,
}: ExpandableProps) {
  const items = useMemo<Item[]>(
    () =>
      list || [
        {
          image:
            "https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=880&auto=format&fit=crop",
          title: "Experience",
        },
        {
          image:
            "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=765&auto=format&fit=crop",
          title: "Projects",
        },
        {
          image:
            "https://images.unsplash.com/photo-1584968173934-bc0b588eb806?q=80&w=1000&auto=format&fit=crop",
          title: "<Me/>",
        },
      ],
    [list]
  );

  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovering) return;

    const interval = setInterval(
      () => setActiveItem((prev) => (prev + 1) % items.length),
      5000
    );
    return () => clearInterval(interval);
  }, [autoPlay, isHovering, items.length]);

  return (
    <div className={cn("flex h-96 w-full gap-1", className)}>
      {items.map((item, index) => (
        <List
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onHover={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onLeave={() => setIsHovering(false)}
        />
      ))}
    </div>
  );
}
