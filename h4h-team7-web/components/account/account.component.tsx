import React from "react";
import { BaseLayout } from "../../layouts/base-layout";

export const Account = () => {
  return (
    <BaseLayout>
      <div className="container mx-auto">
        <div className="flex justify-center px-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center">
            
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="lg:px-8 pb-12 text-2xl font-bold">
                Account Information
              </h3>
              <div className="flex lg:px-8">
                <span className="font-light text-gray-500">
                  Congratulations! You now have full access to the the
                  noticeboard!
                </span>
              </div>
              <div className="flex justify-between lg:px-8">
                <div className="bg-gray-300 w-20 h-20 my-10"></div>
                <div className="my-10 flex flex-col">
                  <span className="font-bold text-black">Add a cover photo.</span>
                  <span className="font-light text-black text-sm"> Add a photo...</span>
                </div>
              </div>
              <form className="lg:px-8">
              <div className="my-10 flex flex-col">
                  
                  <label
                    className="block mb-2 font-bold text-black flex flex-col"
                    htmlFor="profile-name"
                  >
                    <span className="lg:py-2">Add a profile name</span>
                    <span className="font-light text-black text-sm lg:py-2"> This will be shown on your profile. Think about how you want people to see you!</span>
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="profile-name"
                    type="text"
                    placeholder="Add your name"
                  />
                  <button className="w-100 px-4 py-2 text-sm font-bold text-white bg-teal-400 hover:bg-teal-300 focus:outline-none focus:shadow-outline"
                    type="button">
                        Change profile name
                    </button>
                </div>
                <div className="my-10 flex flex-col">
                    <label  className="block mb-2 font-bold text-black flex flex-col"
                    htmlFor="location">
                  <span className="font-bold text-black lg:py-2">Your community noticeboard</span>
                  <span className="font-light text-black text-sm lg:py-2"> This will be your default board</span>
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="location"
                    type="text"
                    placeholder="location"
                  />
                </div>
                
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-teal-400 hover:bg-teal-300 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                Save
                  </button>
                  
                <div className="flex justify-center">
                  <a className="font-light text-gray-500 underline  py-6 lg:py-12">
                    Skip for now.
                  </a>
                </div>
                </form>
                </div>
            </div>
          </div>
        </div>
      
    </BaseLayout>
  );
};
