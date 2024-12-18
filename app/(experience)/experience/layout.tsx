import NestNav from "@/app/(about)/about/_components/NestNav";

const LayoutExp = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="sticky top-0 w-full z-50">
        <NestNav />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default LayoutExp;
