import RouteTransition from "@/nextjs-portfolio/components/Animations/RouteTransition";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteTransition>
      <div className="flex flex-1 h-full min-w-screen">{children}</div>
    </RouteTransition>
  );
}
