import React from 'react'
import InputField from '../components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
    <h1 className="text-lg font-medium mb-2">Type of employment</h1>
 <div>
   <label className="sidebar-label-container">
     <input onChange={handleChange} type="radio" value="" name="test" />
     <span className="checkmark"></span>Any
   </label>
   <InputField
     handleChange={handleChange}
     value="full-time"
     title="Full-time"
     name="test"
   />
   <InputField
     handleChange={handleChange}
     value="part-time"
     title="Part-time"
     name="test"
   />
   <InputField
     handleChange={handleChange}
     value="Internship"
     title="Internship"
     name="test"
   />
 </div>
</div>
  )
}

export default EmploymentType