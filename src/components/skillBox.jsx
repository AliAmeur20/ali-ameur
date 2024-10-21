import React from 'react'

function SkillBox({ skill, icon, alt }) {
    return (
        <div className='flex flex-col justify-center items-center bg-base-100 hover:bg-base-300 w-40 h-40 rounded-3xl gap-4'>
            <div>
            <img className='w-16 h-16 object-contain' alt={alt} src={icon} />
            </div>
            <div className='text-xl font-semibold'>
                {skill}
            </div>
        </div>
    )
}

export default SkillBox