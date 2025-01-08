import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
function App() {


  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("-translate-x-full");
    document.addEventListener("mousedown", handleOutsideClick);
  };

  const handleOutsideClick = (event) => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && !sidebar.contains(event.target)) {

      sidebar.classList.add("-translate-x-full");

      document.removeEventListener("mousedown", handleOutsideClick);
    }
  };

  return (
    <>

      <div className='flex '>

        {/* sidebar */}
        {/* Sidebar */}
        <div
          id="sidebar"
          className="fixed top-0 left-0 w-fit bg-blue-950  -translate-x-full transition-transform duration-300 "
        >

          <div className='p-2 bg-blue-950 text-white h-screen  flex flex-col justify-between'>
            <div className='flex flex-col justify-center items-start ml-2 rounded-lg '>

              <div className='flex mt-1 gap-5 mr-2 items-center'>
                <div className='flex justify-around items-center gap-3'>
                  <img src="https://raw.githubusercontent.com/mallowigi/a-file-icon-idea/master/icon.png" width={"50px"} />
                  <p>Nishyan </p>
                </div>

                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 font-bold">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>

              <div className='flex flex-col gap-3 items-start mt-5'>
                <div className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <p>Home</p>

                </div>
                <div className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                  </svg>

                  <p>Order</p>

                </div>
                <div className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>


                  <p>Product</p>

                </div>
                <div className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                  </svg>
                  <p>Delivery</p>

                </div>
                <div className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                  </svg>



                  <p>Marketing</p>

                </div>
                <div className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                  </svg>


                  <p>Analytics</p>

                </div>
                <div className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>



                  <p>Payouts</p>

                </div>
                <div className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                  </svg>



                  <p>Discounts</p>

                </div>
                <div className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>



                  <p>Audiences</p>

                </div>
                <div className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                  </svg>



                  <p>Appearence</p>

                </div>
                <div className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                  </svg>



                  <p>Plugins</p>

                </div>
              </div>

            </div>

            {/* <div>
              <div className='flex gap-2 justify-center items-center border-2 border-gray-100 rounded-md p-1 bg-gray-500'>
                <div className='p-2 bg-gray-600 rounded-md'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                  </svg>

                </div>
                <div className='flex flex-col text-white'>
                  <p className='text-light'>Available Credit</p>
                  <p className='font-bold'>224.10</p>
                </div>
              </div>
            </div> */}




          </div>

        </div>



        <div className='flex h-screen  flex-col justify-between  border-2 w-full  '>

          <div className="flex  border-2 p-2 justify-between  bg-white  ">

            <div className='flex items-center gap-2 mr-3 '>
              <div onClick={toggleSidebar} className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </div>
              <span className='text-xl font-medium'>Payouts</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden lg:block md:block xl:block 2xl:block size-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
              <span className='text-sm text-gray-500 hidden lg:block md:block xl:block 2xl:block'>How it works</span>


            </div>
            <div className='flex items-center border-2  bg-gray-100 pl-1 lg:w-96 md:w-96 2xl:w-96 w-max-23'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input type="text" placeholder='Search features,tutorials , etc.' className=' h-10 w-full  px-2 text-sm border-none outline-none bg-gray-100' />

            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

            </div>

          </div>

          <div className="overflow-auto  flex-1">
            <div>
              {/* this is the middle section */}
              <div>
                <div className='flex items-center justify-between mt-4 ml-5 mr-5'>
                  <p>
                    <span className='text-2xl font-lite'>Overview</span>
                  </p>
                  <p className='text-gray-700 flex items-center p-1 border-2 gap-2 w-fit cursor-pointer'>
                    This Month
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                  </p>
                </div>
              </div>

              <div className='justify-between  ml-4 mt-10  sm:flex-col gap-10 sm:justify-center  sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'>

                <div className='bg-sky-700 w-96 mb-5 md:mb-0 lg:mb-0 rounded-xl text-white  pt-5'>
                  <div className='pl-4 pr-4 pb-4'>
                    <p className='flex items-center gap-2'>Next Payout <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg></p>
                  </div>
                  <div className='flex items-center gap-2 justify-between pl-4 pr-4 pb-4'>
                    <div>
                      <p className='text-3xl font-bold'>₹23030.10</p>
                    </div>
                    <div>
                      <a className="underline decoration-white">
                        <p className=" flex items-center font-medium text-white">
                          23 Orders
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </p>
                      </a>

                    </div>
                  </div>
                  <div className='bg-sky-900 w-full rounded-t-lg rounded-b-lg p-3 flex justify-between pl-4 pr-4 pb-4'>
                    <p>
                      <span className='text-white'>Next Payout Date:</span>
                    </p>
                    <p className='text-white'>Today, 4:00PM</p>
                  </div>

                </div>

                <div className='border-2  w-96 mb-5 md:mb-0 lg:mb-0 rounded-xl text-white  pt-5'>

                  <div className='flex items-center justify-between mt-4 ml-5 '>
                    <div className='pl-4 pr-4 pb-4'>
                      <p className='flex items-center gap-2 text-black'>Amount Pending <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                      </svg></p>
                    </div>

                  </div>
                  <div className='flex items-center gap-2 justify-between pl-4 pr-4 pb-4'>
                    <div>
                      <p className='text-3xl font-bold text-black pl-4'>₹92,312.20</p>
                    </div>
                    <div>
                      <a className="underline decoration-sky-600">
                        <p className=" flex items-center font-medium text-sky-600">
                          23 Orders
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </p>
                      </a>

                    </div>
                  </div>

                </div>

                <div className='border-2  w-96 mb-5 md:mb-0 lg:mb-0 rounded-xl text-white  pt-5'>

                  <div className='flex items-center justify-between mt-4 ml-5 '>
                    <div className='pl-4 pr-4 pb-4'>
                      <p className='flex items-center gap-2 text-black'>Amount Processed <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                      </svg></p>
                    </div>

                  </div>
                  <div className='flex items-center gap-2 justify-between pl-4 pr-4 pb-4'>
                    <div>
                      <p className='text-3xl font-bold text-black pl-4'>₹23,92,312.19</p>
                    </div>
                    <div>
                      <a className="underline decoration-sky-600">
                        <p className=" flex items-center font-medium text-sky-600">
                          23 Orders
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </p>
                      </a>

                    </div>
                  </div>

                </div>

              </div>

              <div>
                <div>
                  <p className='font-medium text-xl  ml-4 mt-5'>
                    Transactions | This Month
                  </p>
                </div>
              </div>
            </div>

            <div className='flex gap-4 mt-5 ml-4'>
              <button className='pt-2 pr-4 pb-2 pl-4 bg-gray-300 text-gray-500  border-2 rounded-3xl'>
                Payouts (22)
              </button>
              <button className='pt-2 pr-4 pb-2 pl-4 bg-sky-700 text-gray-50  border-2 rounded-3xl'>
                Refound (6)
              </button>
            </div>

            <div className='flex justify-between items-center'>

              <div className='flex items-center border-2 w-fit bg-gray-50 pl-2 mt-5 ml-4'>


                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" placeholder='Order ID or transactions ID' className='w-max-80 h-10  px-2 text-sm border-none outline-none bg-gray-50' />




              </div>

              <div className='flex gap-5 mr-4'>
                <span>
                  <p className='text-gray-700 flex items-center border-2 p-2  gap-3 w-fit cursor-pointer'>
                    Sort
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>


                  </p></span>
                <span>
                  <p className='text-gray-700 flex items-center p-2 border-2 gap-3 w-fit cursor-pointer'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>


                  </p></span>
              </div>

            </div>

            <div className="overflow-auto  ml-4 mt-5">
              <table className="w-full border-collapse border overflow-x-auto  text-sm text-left">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2">Order</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Transaction ID</th>
                    <th className="px-4 py-2">Refund Date</th>
                    <th className="px-4 py-2">Order Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "#281209", status: "Successful", transaction: "TRX123456", date: "Today, 8:45 PM", amount: "₹1125.00" },
                    { id: "#281210", status: "Unsuccessful", transaction: "TRX123457", date: "Today, 7:30 PM", amount: "₹500.00" },
                    { id: "#281211", status: "Successful", transaction: "TRX123458", date: "Yesterday, 6:45 PM", amount: "₹900.00" },
                    { id: "#281212", status: "Unsuccessful", transaction: "TRX123459", date: "Yesterday, 5:15 PM", amount: "₹1500.00" },
                    { id: "#281213", status: "Successful", transaction: "TRX123460", date: "Today, 4:30 PM", amount: "₹2000.00" },
                    { id: "#281214", status: "Unsuccessful", transaction: "TRX123461", date: "Today, 3:45 PM", amount: "₹300.00" },
                    { id: "#281215", status: "Successful", transaction: "TRX123462", date: "Today, 2:30 PM", amount: "₹750.00" },
                    { id: "#281216", status: "Unsuccessful", transaction: "TRX123463", date: "Yesterday, 1:15 PM", amount: "₹1200.00" },
                    { id: "#281217", status: "Successful", transaction: "TRX123464", date: "Today, 12:00 PM", amount: "₹1350.00" },
                    { id: "#281218", status: "Unsuccessful", transaction: "TRX123465", date: "Yesterday, 11:00 AM", amount: "₹400.00" },
                    { id: "#281219", status: "Successful", transaction: "TRX123466", date: "Today, 10:45 AM", amount: "₹1800.00" },
                    { id: "#281220", status: "Unsuccessful", transaction: "TRX123467", date: "Today, 9:30 AM", amount: "₹250.00" },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className=" px-4 py-2">{row.id}</td>
                      <td className=" px-4 py-2 flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`w-5 h-5 ${row.status === "Successful" ? "text-green-500" : "text-red-500"
                            }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {row.status}
                      </td>
                      <td className=" px-4 py-2">{row.transaction}</td>
                      <td className=" px-4 py-2">{row.date}</td>
                      <td className=" px-4 py-2">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div className="flex justify-center items-center mt-4  mb-5 text">
                <p className='font-bold text-sky-900 italic'>Made with ❤️ by Lokesh Choudhary</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default App;
