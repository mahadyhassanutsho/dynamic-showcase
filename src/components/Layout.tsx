import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 bg-orbs pointer-events-none" />
      
      <Navbar />
      
      <main className="relative z-10 pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;
