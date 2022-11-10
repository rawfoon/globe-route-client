import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import banner from "../../Assets/banner/bannar.jpg";
import ServiceCard from "../Services/ServicesCard/ServiceCard";
import Subscribe from "./Subscribe/Subscribe";
import VisitSites from "./VisitSites/VisitSites";


const Home = () => {

  const serviceCards = useLoaderData()




  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="mx-5">
        <div
          className="container mx-auto rounded"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div style={{background: '#0000007a'}}>
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
              <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                Globe Route Travels
              </h1>
              <p className="px-8 mt-8 mb-12 text-lg">
			  The journey of a thousand miles begins with a single step...
              </p>
              <div className="flex flex-wrap justify-center">
                <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                  Get started
                </button>
                <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
     
  <section className="dark:bg-gray-800 dark:text-gray-100 ">
    <div className="container mx-auto py-10  ">
      <div className="mb-10">
        <h1 className="text-5xl text-center">Our Services</h1>
        
      </div>
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
    {
      serviceCards.length === 0 ?
      <p className="text-3xl">No services were added</p>
      :

        serviceCards.map(service => <ServiceCard 
        key={service._id}
        service={service}></ServiceCard>)
      }
    </div>
    <div className="flex justify-end mt-5">
        <Link to='/services' className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                  See All
                </Link>
        </div>
    </div>
  </section>

  <section>
    <VisitSites></VisitSites>
  </section>
  <section className="py-10 dark:bg-gray-800 dark:text-gray-100 " >
    <Subscribe></Subscribe>
  </section>





    </div>
  );
};

export default Home;
