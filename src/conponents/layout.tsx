import { ReactNode } from "react";
import TopBar from "./topbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <TopBar />
      <div className="mt-[50px]">{children}</div>
    </div>
  );
};

export default Layout;
