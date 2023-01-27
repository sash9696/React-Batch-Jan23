import { Button } from '@mui/material'
import React from 'react'
import './AboutUs.css'

function AboutUs() {
    return (
        <div className='about_us'>
            <p className='about_us_title'>About Us</p>

            <p className='about_us_para1'>
                -Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper tortor ipsum, id condimentum nibh blandit ut. Morbi rhoncus urna at pellentesque finibus. Cras vehicula lectus id ex commodo consectetur eget auctor nibh. Etiam maximus rhoncus iaculis. Suspendisse quis elit et ex ultricies malesuada ac a sapien. Nulla finibus finibus est vel fringilla. Aenean id leo sem. Morbi ipsum enim, scelerisque ut porttitor quis, elementum et velit.
            </p>
            <p className='about_us_para1'>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin gravida orci a ante volutpat vulputate. Quisque commodo at sapien ut fermentum. Suspendisse tempor, erat a ultrices dapibus, magna elit maximus sem, non facilisis turpis nulla sed turpis.
            </p>
            <p className='about_us_para1'>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin gravida orci a ante volutpat vulputate. Quisque commodo at sapien ut fermentum. Suspendisse tempor, erat a ultrices dapibus, magna elit maximus sem, non facilisis turpis nulla sed turpis.
            </p>

            <Button variant='outlined'>
                Go To Home Page
            </Button>
        </div>
    )
}

export default AboutUs