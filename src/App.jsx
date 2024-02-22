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
          <video className='aspect-w-16 aspect-h-9' src='/home-vid2.mp4' autoPlay loop muted playsInline   ></video>

        </div>
      </div>

      <div className='lg:columns-1 xl:mt-40 md:mt-30 mt-10 lg:ps-6 sm:ps-2  shadow-gray-400  '>
        <div className='w-full col-span-1 xl:col-span-1 items-center'>
          <h1 className='text-white text-start font-bold text-4xl'>Data-Driven Insights for Informed Decisions. </h1>
        </div>
        <div className='w-full col-span-2 bg-transparent lg:col-span-2 flex justify-end mt-24  '>
          <img className='aspect-w-16 aspect-h-9 xl:skew-y-6 hover:skew-x-1 transition-all ease-in-out ' src='/crmcrowd.PNG' autoPlay />

        </div>
      </div>

      <div className="banner-whitepatch">
        <h2 className='text-white text-start font-bold text-4xl mt-10'>What's to love about our crm?</h2>
        <div className="banner-info ">
          <div className="love-bgn-box profile-img1">
            <span className="first-bgn-sprite lov-icon1"></span>
            <p className=''>Perfect sweet spot between overly simplistic spreadsheets and a highly complicated CRM</p>
          </div>
          <div className="love-bgn-box profile-img2">
            <span className="first-bgn-sprite lov-icon2"></span>
            <p className=''>Not just your first, but your CRM partner forever</p>
          </div><div className="love-bgn-box profile-img1">
            <span className="first-bgn-sprite lov-icon3"></span>
            <p>Features you need at a price you can afford</p>
          </div><div className="love-bgn-box profile-img2">
            <span className="first-bgn-sprite lov-icon4"></span>
            <p>The right blend of features to help you manage customer relationships and complement your marketing and sales efforts</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
