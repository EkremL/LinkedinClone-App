import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main className="py-6 mx-auto max-w-7xl px-3 ">{children}</main>
    </div>
  );
};

export default Layout;
