import RouteTransition from "@/nextjs-portfolio/components/Animations/RouteTransition";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteTransition>
      <div className="flex h-full w-full">{children}</div>
    </RouteTransition>
  );
}
