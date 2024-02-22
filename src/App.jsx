import './App.css'
// import { Button } from 'flowbite-react';

function App() {

  return (
    <>
      <div className='lg:columns-2 xl:mt-40 md:mt-30 mt-10 lg:ps-6 sm:ps-2'>
        <div className='w-full col-span-1 xl:col-span-1 items-center'>
          <h1 className='text-white text-start  font-bold text-4xl'>Revolutionize Your Customer Relationships: Discover Our CRM Solutions Today!</h1>
          <div className='lg:columns-2 md:columns-1 xl:mt-20 lg:mt-5 mt-8'>
            <div>
              <p className='text-gray-200 opacity-50 text-start text-sm mb-1'>Experience the Power of Seamless Customer Engagement: Unlock Opportunities, Build Relationships, and Drive Growth with Our Intuitive CRM Platform.</p>
            </div>
            <div>
              <p className='text-gray-200 opacity-50 text-start text-sm my-1'>Elevate Your Sales Process and Delight Customers: Streamline Workflows, Boost Productivity, and Enhance Satisfaction with Our Comprehensive Suite of CRM Solutions.</p>

            </div>

          </div>
        </div>
        <div className='w-full col-span-2 lg:col-span-2'>
          <video className='aspect-w-16 aspect-h-9' src='/home-vid2.mp4' autoPlay loop muted playsInline ></video>

        </div>
      </div>
    </>
  )
}

export default App
