import Image from "next/image";
import Sports from "./Components/Pages_Sections/Sports/Sports";
import CollectionSpotlight from "./Components/Pages_Sections/CollectionSpotlight/CollectionSpotlight";

export default function Home() {
  return (
    <main className="min-h-screen lg:w-[1249px] mx-auto">
      <Sports></Sports>
      <CollectionSpotlight></CollectionSpotlight>
    </main>
  );
}
