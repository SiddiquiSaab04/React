import React, { useState } from 'react'

export default function FormValidation() {

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })
    const [showInfo, setShowInfo] = useState(false)
    const handleInputs = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handleSubmit = (event) => {
        if(formData){
        event.preventDefault();
        console.log('Form Data:', formData);
        setShowInfo(true)
        }
        else{
            setError("name and email are required")
        }
    };
    return (
        <div className='w-full mx-auto py-3'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-y-3'>
                <div className='flex flex-col text-left justify-center items-start  gap-y-2'>
                    <label className='text-gray-600'>Name:</label>
                    <input
                        className='border border-purple-300 p-2'
                        placeholder='Enter your name'
                        type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleInputs}
                        required
                    />
                </div>
                <div className='flex flex-col text-left justify-center items-start  gap-y-2'>
                    <label className='text-gray-600'>Email:</label>
                    <input
                        className='border border-purple-300 p-2'
                        placeholder='Enter your email'
                        type="email"
                        name='email'
                        value={formData.email}
                        onChange={handleInputs}
required
                    />
                </div>
                <button type="submit" className='px-3 py-1 bg-purple-300 text-gray-600 border border-gray-500 rounded'>Submit</button>
            </form>
            <div className='text-gray-600'>
                {showInfo ? `the name is ${formData.name} and the email is ${formData.email} ` : ""}
            </div>
        </div>
    )
}
