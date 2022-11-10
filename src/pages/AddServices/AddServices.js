import React from "react";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const AddServices = () => {

  useTitle('Add Service')
  const handleAddService = (event) => {
    event.preventDefault();

    const form = event.target;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const photoURL = form.photoURL.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const service = {
      serviceName,
      price,
      photoURL,
      rating,
      description,
    };

    // console.log(service);

    fetch(`https://globe-route-travels.vercel.app/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast("Successfully Added", {
            position: "top-center",
            autoClose: 2000,
          });
          form.reset();
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          onSubmit={handleAddService}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="serviceName" className="text-xl my-2">
                  Service Name
                </label>
                <input
                  id="serviceName"
                  name="serviceName"
                  type="text"
                  placeholder="Service Name"
                  className="w-full h-10 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="price" className="text-xl my-2">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="text"
                  placeholder="Price"
                  className="w-full h-10 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="photoURL" className="text-xl my-2">
                  Photo URL
                </label>
                <input
                  id="photoURL"
                  name="photoURL"
                  type="text"
                  placeholder="Photo URL"
                  className="w-full h-10 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="rating" className="text-xl my-2">
                  Rating
                </label>
                <input
                  id="rating"
                  name="rating"
                  type="text"
                  placeholder="Rating"
                  className="w-full h-10 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3 md:col-span-full lg:col-span-full">
                <label htmlFor="description" className="text-xl my-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="w-full h-24 pt-2  px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <input
                className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800"
                type="submit"
                name=""
                value="Add Service"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddServices;
