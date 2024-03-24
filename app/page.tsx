import Sports from './Components/Pages_Sections/Sports/Sports';
import CollectionSpotlight from './Components/Pages_Sections/CollectionSpotlight/CollectionSpotlight';

export default function Home() {
   return (
      <main className=' bg-[#F7F7F8] dark:bg-[#292B32] -mt-7'>
         <div className='lg:w-[1249px] mx-auto'>
            <Sports></Sports>
            <CollectionSpotlight></CollectionSpotlight>
         </div>
      </main>
   );
}
