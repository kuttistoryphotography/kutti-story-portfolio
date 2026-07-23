interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1700px] px-6 md:px-10 xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
}