import Image from "next/image";
import {CustomerReviews, Foter ,PouplarProducts,Services,Hero,SpecialOffer,SuperQuality,Subscrib} from '@/app/sections'
import Uper from "./component/Uper";


export default function Home() {
  return ( 
    <>
     
    <main className="relative " >
    <Uper/>
      <section className='xl:padding-1 wide:padding-r padding-b '>
          <Hero/>
      </section>
       <section className="padding">
        <PouplarProducts/>
       </section>
       <section className="padding">
        <SuperQuality/>
       </section>
       <section className="padding-x py-10">
        <Services/>
       </section>
       <section className="padding">
        <SpecialOffer/>
       </section>
       <section className="bg-pale-blue padding">
        <CustomerReviews/>
       </section>
       <section className="padding">
       <Subscrib/>
       </section>
       <section className="bg-black padding-x padding-t  ">
        <Foter/>
       </section>
       
    </main>
    </>
  );
}
