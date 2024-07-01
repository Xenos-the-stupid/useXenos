"use client";
import useDraggable from "@/hooks/useDraggable";
import useView from "@/hooks/useView";

export default function Home() {
  const ref = useDraggable<HTMLDivElement>({ x: 100, y: 20 });

  return (
    <main className="h-[calc(100vh*5)]">
      <div>Hello</div>
      <div
        ref={ref}
        className="bg-red-500">
        Some text
      </div>
    </main>
  );
}
