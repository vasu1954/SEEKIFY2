import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import WorkExperience from './WorkExperience'
import EmploymentType from './EmploymentType'
import Fields from './Fields'


const Sidebar = ({ handleChange, handleClick,selectedCategory }) => {
  return (
    <div className='space-y-5  rounded-lg'>
        <h1 className='text-lg font-bold mb-2 p-2'>Filters</h1>
        <Fields selectedCategory={selectedCategory} handleChange={handleChange}/>
        <Location handleChange={handleChange}/>
        <Salary handleChange={handleChange} handleClick={handleClick}/>
        <JobPostingData handleChange={handleChange}/>
        <WorkExperience handleChange={handleChange}/>
        <EmploymentType handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar