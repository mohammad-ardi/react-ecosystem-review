import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/pricingOption/pricingOption';

function App() {

  const pricingPromise = fetch('pricingData.json').then((res)=> res.json());

  return (
    <>
    <Navbar></Navbar>

    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <PricingOption pricingPromise={pricingPromise}></PricingOption>
    </Suspense>
    </>
  )
}

export default App
