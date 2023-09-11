import LeftSideMenu from "@/components/dashboard/LeftsileMenu/LeftSideMenu";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <main className="flex">
        <div className="w-full lg:w-[300px]">
          <LeftSideMenu />
        </div>
        <div className="w-full lg:w-full">{children}</div>
      </main>
    </>
  );
}
