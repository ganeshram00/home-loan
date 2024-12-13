import React from 'react'
import Crousel from '../componat/Crousel1'
import HomeLoanDocuments from '../componat/HomeLoanDocuments'
import HomeLoanOptions from '../componat/HomeLoanOptions'
import FAQs from '../componat/FAQs'
import HomeLoan from '../componat/HomeLoan'
import EligibilityCriteria from '../componat/EligibilityCriteria'
import LoanFeatures from '../componat/LoanFeatures'

const Home = () => {
  return (
    <>
    <Crousel/>
    <HomeLoan/>
    <LoanFeatures/>
    <EligibilityCriteria/>
    <HomeLoanDocuments/>
    <HomeLoanOptions/>
    <FAQs/>
      
    </>
  )
}

export default Home
