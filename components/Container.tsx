export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[1700px] px-6 md:px-10 xl:px-16">
      {children}
    </div>
  );
}