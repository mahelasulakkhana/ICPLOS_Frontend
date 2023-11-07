import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-500 h-[675px]">
      <div className="bg-white p-8 rounded-lg shadow-md border-2 border-green-500">
        <img
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504="                        
          alt="User Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-10"
        />
        <label className='relative cursor-pointer  '>
          <div className='mb-2 h-12 w-[450px] px-6 text-l text-black  border-black border-2 rounded-lg border-opacity-100 outline-none '>
            <span className='text-l text-black text-opacity-80  absolute left-5 top-3 px-1 duration-200 '>Name:</span>
          </div>
        </label>
        <label className='relative cursor-pointer  '>
          <div className='mb-2 h-12 w-[450px] px-6 text-l text-black  border-black border-2 rounded-lg border-opacity-100 outline-none '>
            <span className='text-l text-black text-opacity-80  absolute left-5 top-3 px-1 duration-200 '>Email :</span>
          </div>
        </label>
        <label className='relative cursor-pointer  '>
          <div className='mb-2 h-12 w-[450px] px-6 text-l text-black  border-black border-2 rounded-lg border-opacity-100 outline-none '>
            <span className='text-l text-black text-opacity-80  absolute left-5 top-3 px-1 duration-200 '>Number :</span>
          </div>
        </label>
        <th className='p-10'>
        <button className="mr-5 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900">
            UPDATE PROFILE
            </button>
            {/* <button className="mr-5 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            UPDATE
            </button>
            <button className="mr-5 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            UPDATE
            </button> */}
        </th>
        
      </div>
    </div>
  );
};

export default UserProfile;
