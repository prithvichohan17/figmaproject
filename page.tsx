import Image from "next/image";
import Header from "./component/Header";
import Hero from "./component/Hero";
import OurProducts from "./component/Our Products";
import Rooms from "./component/Rooms";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <OurProducts/>
      <Rooms/>
    </div>
    
  );
}
