import { ReactNode } from "react";
import TopBar from "./topbar";

const Layout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${className}`}>
      <TopBar />
      <div className="mt-[50px]">{children}</div>
    </div>
  );
};

export default Layout;
