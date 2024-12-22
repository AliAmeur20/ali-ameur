import React from 'react'

function SkillBox({ skill, icon, alt }) {
    return (
        <div className='flex flex-col justify-center items-center bg-base-100 hover:bg-base-300 w-36 h-36 lg:w-40 lg:h-40 rounded-xl lg:rounded-2xl gap-4'>
            <div>
            <img className='w-14 h-14 lg:w-16 lg:h-16 object-contain' alt={alt} src={icon} />
            </div>
            <div className='text-lg lg:text-xl font-semibold'>
                {skill}
            </div>
        </div>
    )
}

export default SkillBox