import NestNav from "@/app/(about)/about/_components/NestNav";
import Footer from "@/app/(home)/_components/Footer";

const LayoutEd = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <NestNav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutEd;
