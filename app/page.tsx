import Navbar from "./components/nav";
import Main from "./components/main";
import Footer from "./components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-full ">
      
      <div className="relative z-10">
        <Main />
        <Footer />
      </div>
    </div>
  );
}
