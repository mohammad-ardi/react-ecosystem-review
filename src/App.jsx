import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/pricingOption/pricingOption';
import ResultsChart from './components/ResultsChart/ResultsChart';
import CustomTooltip from './components/CustomTooltip/CustomTooltip';

function App() {

  const pricingPromise = fetch('pricingData.json').then((res)=> res.json());
  // const resultData = fetch('resultsPromise.json').then((res)=> res.json());

  return (
    <>
    <Navbar></Navbar>

    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <PricingOption pricingPromise={pricingPromise}></PricingOption>
    </Suspense>

    <ResultsChart ></ResultsChart>
    </>
  )
}

export default App
