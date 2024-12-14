const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default HomeLayout;
