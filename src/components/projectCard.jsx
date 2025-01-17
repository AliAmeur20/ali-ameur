const ProjectCard = ({id, title, subtitle, description, image}) => {
    return (
        <div class="flex flex-col justify-between overflow-hidden rounded-3xl bg-base-100 shadow-2xl">
            <img alt={`Slide ${id}`} src={image} class="h-60 md:h-80 w-full object-cover" />

            <div class="px-4 md:px-8 py-4 md:py-6">
                <p class="text-2xl md:text-4xl font-bold">{title}</p>
                <p class="md:text-lg opacity-60">{subtitle}</p>
                <p class="text-sm md:text-base mt-4 md:mt-6">{description}</p>
            </div>

            <div class="flex justify-end gap-x-2 p-3 md:p-6">
                <button class="custom-secondary-white-btn !h-11 !w-11 md:!h-12 md:!w-12">
                    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="on h-6 w-6"><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path></svg>
                </button>
                <button class="custom-secondary-white-btn !h-11 !w-11 md:!h-12 md:!w-12">
                    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="on h-7 w-7"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                </button>
                <button class="custom-secondary-white-btn !h-11 !w-11 md:!h-12 md:!w-12">
                    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="on h-7 w-7"><path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default ProjectCard;