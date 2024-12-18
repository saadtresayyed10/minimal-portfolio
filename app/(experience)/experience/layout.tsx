import NestNav from "@/app/(about)/about/_components/NestNav";
import Footer from "@/app/(home)/_components/Footer";

const LayoutExp = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="sticky top-0 w-full z-50">
        <NestNav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutExp;
