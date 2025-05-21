import React from 'react';
import QuickInsight from './QuickInsight';
import SideBar from './SideBar';

function AdminInterface() {
  const getTime = new Date().getHours();
  let message;

  if(getTime < 12)message = 'Good Morning';
  else if(getTime < 17)message = 'Good Afternoon';
  else message = 'Good Evening';

  return (
      <div className='bg-gray-100 flex h-screen w-screen'>
        <div className='w-1/6 border-r text-center'>
          <SideBar />
        </div>
        <div className='flex-1 mt-3'>
          <span className='m-6 font-sans text-xl font-bold'>Hello, {message}</span>
          <div className='flex justify-between'>
            <section className='grid md:grid-cols-3 sm:grid-cols-2 w-full mt-3'>
              <QuickInsight />
              <QuickInsight />
              <QuickInsight />
            </section>  
          </div>
        </div>
      </div>
  );
}

export default AdminInterface;
