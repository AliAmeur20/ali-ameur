import Carousel from './carousel';

function Projects() {

    const projects = [
        {
            'id': 1,
            'title': 'DZ Fast',
            'subtitle': 'Inventory and Sails managment - SAAS',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt .',
            'image': 'https://images.unsplash.com/photo-1731375659532-d3341d0a5b5e?q=80&w=3749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            'id': 2,
            'title': 'IDS Livraison Express',
            'subtitle': 'Deliveries And Returns Administration',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt .',
            'image': 'https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            'id': 3,
            'title': 'IDS - Mobile App',
            'subtitle': 'Deliveries And Returns managements',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt .',
            'image': 'https://images.unsplash.com/photo-1731375659532-d3341d0a5b5e?q=80&w=3749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            'id': 4,
            'title': 'Get Notified',
            'subtitle': 'Alerts and News System',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt .',
            'image': 'https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
    ];

    return (
        <div className='bg-secondary overflow-hidden'>
            <div className='container mx-auto py-20 md:py-24 space-y-16 md:space-y-20'>
                <div className='flex justify-center px-2 text-secondary-content'>
                    <div className='text-center max-w-3xl px-2'>
                        <p className='text-3xl md:text-[40px] font-bold'>Every project tells a story..</p>
                        <p className='md:text-xl mt-4 md:mt-8 font-medium'>These projects reflect my journey as a developer,
                            showcasing the skills I've honed over time and my unwavering
                            commitment to bringing innovative ideas to life through thoughtful design and functional solutions.
                        </p>
                    </div>
                </div>
                <div className='flex justify-end px-8'>
                    <div className='flex justify-end'>
                        <Carousel elements={projects} cardType = 'project' color = 'secondary' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;