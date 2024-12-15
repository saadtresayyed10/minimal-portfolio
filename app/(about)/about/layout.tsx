import NestNav from "./_components/NestNav";

const LayoutAbout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <NestNav />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default LayoutAbout;
