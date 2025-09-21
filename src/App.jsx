import React from 'react'
import { useState } from 'react'
import './App.css'
import Counter from './components/easyLevel/counter/Counter'
import FormValidation from './components/easyLevel/formValidation/FormValidation'
import { Lists } from './components/easyLevel/lists/Lists'
import ToggleBtn from './components/easyLevel/toggleBtn/ToggleBtn'
import Card from './components/easyLevel/props/Card'
import Parent from './components/easyLevel/props/Parent'
function App() {
  return (
    <>
   {/* <Counter/> */}
   {/* <FormValidation/> */}
   {/* <Lists/> */}
   {/* <ToggleBtn/> */}
  <Parent/>
    </>
  )
}

export default App
