import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React developers excel at building dynamic, user-friendly web applications with reusable components.
                            They leverage React’s virtual DOM for efficient updates and manage state seamlessly with tools like Redux or Context API.
                            Their expertise lies in creating responsive interfaces and optimizing performance for smooth user experiences.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Skilled React developers stay current with evolving best practices and new features to 
                        deliver cutting-edge solutions in a fast-paced web development landscape.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}