import React from 'react'
import { useState } from 'react'
import './App.css'
import Counter from './components/counter/Counter'
import FormValidation from './components/counter/FormValidation'
import { Lists } from './components/Lists'

function App() {
  return (
    <>
   <Counter/>
   <FormValidation/>
   <Lists/>
    </>
  )
}

export default App
