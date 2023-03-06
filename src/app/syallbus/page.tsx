'use client';
import { RevealWrapper, RevealList } from 'next-reveal';
import { commonCourse } from '../components/database';
import { specializedTrack } from '../components/database';

export default function Syallbus() {
    return (
        <div className='pb-9 w-[80%] justify-center mx-auto' >
            {/* Core part */}

            <div>
                <h1 className="text-center text-4xl font-bold mt-8">Course Syllabus</h1>
                <p className="text-center md:text-xl text-sm md:px-24 pt-6 px-7">
                    The first three quarters are shared by all specialties and are
                    dedicated to studying Object-Oriented Programming and cutting-edge
                    Full-Stack Web 2.0 development. It is going to be a fifteen-month-long
                    hybrid program that includes both onsite and online classes and is
                    divided into five quarters of 13 weeks each
                </p>
            </div>

            {/* Common part */}
            <div>
                <h1 className="text-center text-4xl font-bold mt-8 md:mt-20 px-2">
                    Common in All
                </h1>
                <p className="text-center md:text-xl text-sm md:px-24 pt-6 px-7">
                    Every participant of the program will start by completing the
                    following three core courses:
                </p>
            </div>

            {/* Common three Courses */}
            <RevealWrapper
                origin="top"
                delay={200}
                duration={2000}
                distance="500px"
                reset={true}>
                <div className="flex md:justify-center md:space-x-8 mt-5 md:flex-row flex-col items-center gap-3">
                    {commonCourse.map((elem) => (
                        <div key={elem.id} className="border-4 shadow-lg shadow-black border-gray-100 w-60 px-5 py-3 rounded-2xl">
                            <h1 className=" text-3xl text-center font-semibold border-b-4 border-purple-500">
                                {elem.Heading}
                            </h1>
                            <p className="text-center mt-3">{elem.Text}</p>
                        </div>
                    ))}
                </div>
            </RevealWrapper>

            {/* Specialized */}
            <div>
                <h1 className="text-center text-4xl font-bold mt-8 md:mt-20 px-2">
                    <mark><b>Specialized Tracks</b></mark>
                </h1>
                <p className="text-center md:text-xl text-sm md:px-24 pt-6 px-7">
                    After completing the first two quarters the participants will select
                    one or more specializations consisting of two courses each:
                </p>
            </div>

            {/* Web3 */}
            {specializedTrack.map((elem) => (

                <div key={elem.id}>
                    <h1 className='text-center md:text-4xl font-bold mt-8 md:mt-20 px-2 text-xl'>{elem.Heading1}</h1>
                    <p className='text-center md:text-xl text-sm md:px-24 pt-6 px-7'>
                        {elem.Text1}
                    </p>
                    <RevealWrapper
                        origin="top"
                        delay={200}
                        duration={2000}
                        distance="500px"
                        reset={true}>
                        <div className="flex md:justify-center md:space-x-8 mt-5 md:flex-row flex-col items-center gap-3">
                            <div className="border-4 shadow-lg shadow-black border-gray-100 w-60 px-5 py-3 rounded-2xl">
                                <h1 className=" text-3xl text-center font-semibold border-b-4 border-purple-500">
                                    {elem.Heading2}
                                </h1>
                                <p className="text-center mt-3">{elem.Text2}</p>
                            </div>

                            <div className="border-4 shadow-lg shadow-black border-gray-100 w-60 px-5 py-3 rounded-2xl">
                                <h1 className=" text-3xl text-center font-semibold border-b-4 border-purple-500">
                                    {elem.Heading3}
                                </h1>
                                <p className="text-center mt-3">{elem.Text3}</p>
                            </div>

                        </div>
                    </RevealWrapper>
                </div>
            ))}

        </div>
    );
}
