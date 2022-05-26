import React from 'react';
import './IconWrapper.css'


const IconWrapper = ({icon})=> {

    return (
        <div class="container_">
	
        <button class="button_">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                <g fill="none" fill-rule="evenodd">
    
                   <circle class="inner-circle" cx="60" cy="60" r="23" fill="#FFF"/>
                    {icon}
                   <g class="outer-circle">
                      <circle cx="60" cy="60" r="23" stroke="#9B9B9B" transform="rotate(90 60 60)"/>
                      <circle cx="60" cy="37" r="2" fill="#9B9B9B"/>
                      <circle cx="60" cy="83" r="2" fill="#9B9B9B"/>
                      <circle cx="83" cy="60" r="2" fill="#9B9B9B"/>
                      <circle cx="37" cy="60" r="2" fill="#9B9B9B"/>
                   </g>
    
                </g>
            </svg>
        </button>
        
    </div>
    )
}

export default IconWrapper;