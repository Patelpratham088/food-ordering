import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
             We are a dedicated team passionate about revolutionizing the way people experience food, we believe that great meals should be accessible to everyone, no matter where they are or what their dietary preferences may be.

Our mission is simple: to connect hungry customers with the best restaurants in town, all from the comfort of their own homes or offices. Whether you're craving a hearty pizza, a spicy curry, or a fresh salad, we've got you covered with a diverse selection of cuisines and flavors to suit every palate.

What sets us apart is our commitment to excellence in every aspect of the ordering process. From our user-friendly interface that makes ordering a breeze, to our seamless payment and delivery options, we strive to provide an exceptional dining experience from start to finish. Plus, with our innovative features like real-time order tracking and personalized recommendations, we're always working to make your experience even better.
          </p>
          
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  )
}
