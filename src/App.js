import Footer from './component/footer';
import Header from './component/header';
import Card from './component/card';
import SmallCard from './component/smallcard';
import SubHeader from './component/subheader';
import './App.css'

export default function App() {

  return (
    <>
    <Header />
    <div className='flex w-100 items-center justify-center'>
    <SubHeader />
    </div>
    
    <div className='flex-col w-full items-center justify-center'>
    <Card />
    <div className='w-full flex justify-center'>
      <SmallCard />
    </div>
    <div className='w-100 flex justify-center items-center'>
      <div className='flex justify-between w-[60%] mb-10'>
        <div className="w-80 text-[#5C6874] text-2xl font-semibold">Signup for getting exclusive special deals</div>
        <button className='bg-[#1B88F4] border-r-0 rounded-r-md px-4 text-[#FFFFFF]'>Signup</button>
      </div>
    </div>
  </div>
  <Footer/>
    </>
  )
}