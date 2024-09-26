// import { useQuery } from "@tanstack/react-query";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  // const { data: authUser, isLoading } = useQuery({
  //   queryKey: ["authUser"],
  // });

  // console.log("authuser is in layout", authUser);

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main className="py-6 mx-auto max-w-7xl px-3 ">{children}</main>
    </div>
  );
};

export default Layout;
