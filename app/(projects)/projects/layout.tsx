import NestNav from "@/app/(about)/about/_components/NestNav";

const LayoutProject = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <NestNav />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default LayoutProject;
