import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "@/layout/RootLayout";
import GetStarted from "@/components/GetStarted";
import Services from "@/components/Services";
import About from "@/components/About";
import HowToStart from "@/components/HowToStart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <RootLayout>
        <div className={"flex flex-col gap-[100px] w-full "}>
            <GetStarted/>
            <Services/>
            <h4 className={"w-full text-center text-3xl font-medium"}>Как работает IHunter?</h4>
            <About/>
            <HowToStart/>
        </div>

    </RootLayout>
  );
}
