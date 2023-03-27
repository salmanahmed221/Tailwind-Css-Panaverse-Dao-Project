"use client";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";
import { data } from "../components/database";

export default function About() {
    return (
        <>
            {/* Section 1 */}

            <RevealWrapper
                origin="top"
                delay={200}
                duration={2000}
                distance="500px"
                reset={true}
            >
                <div className="md:flex mt-8 mx-3 gap-3">
                    {/* Left Part */}

                    <div className="basis-[50%] md:ml-[100px] mt-16 md:mt-0">
                        <Image
                            src="/President.webp"
                            alt="president"
                            width={350}
                            height={603}
                        />
                    </div>

                    {/* Right Part */}

                    <div className="basis-[50%]">
                        <h1 className="text-center text-4xl font-bold mt-8">
                            Dr. Arif Alvi
                        </h1>
                        <p className="md:text-xl text-sm md:px-11 pt-6 py-20 text-justify">
                            Dr. Arif Alvi was sworn in as the 13th President of Islamic
                            Republic of Pakistan on 9th September 2018.
                            Dr. Arif Alvi was born in 1949 and completed his early education
                            in Karachi. He did his Bachelor of Dental Surgery (BDS) from De
                            Montmorency College of Dentistry, Lahore where he was declared the
                            Best Graduate. He completed his Masters of Science in the field
                            of Prosthodontics from University of Michigan (1975) and in
                            Orthodontics from University of Pacific, San Francisco (1982).
                        </p>

                    </div>
                </div>
            </RevealWrapper>

            {/* Section 2 */}

            <RevealWrapper
                origin="top"
                delay={200}
                duration={2000}
                distance="500px"
                reset={true}
            >
                <div className="md:flex mt-8 mx-3 gap-3">
                    {/* Left Part */}
                    <div className="basis-[50%]">
                        <h1 className="text-center text-4xl font-bold mt-8">
                            Panaverse DAO
                        </h1>
                        <p className="text-justify md:text-xl text-sm md:px-11 pt-6">
                            Panaverse DAO is a community of Web 3 and Metaverse developers,
                            designers, trainers, startup founders and service providers.
                            Panaverse DAO is struggling to produce professional metaverse
                            developers from Pakistan for the upcoming Era of Internet
                            President Dr. Arif Alvi has been a renowned professional and has
                            held many important positions in the field of Dentistry.
                        </p>
                    </div>

                    {/* Right Part */}
                    <div className="basis-[50%] md:ml-[100px] md:mt-0 mt-10">
                        <Image src="/fulllogo.png" alt="logo" width={400} height={230} />
                    </div>
                </div>
            </RevealWrapper>

            {/* Section 3*/}

            <h1 className="text-center text-4xl font-bold mt-16">Our Instructors</h1>
            <RevealWrapper
                origin="top"
                delay={200}
                duration={2000}
                distance="500px"
                reset={true}
            >
                <div className="text-center grid md:grid-cols-4 gap-8 px-8 py-6">
                    {data.map((elem) => (
                        <div key={elem.id} className="w-full">
                            <Image
                                src={elem.src}
                                alt="logo"
                                width={70}
                                height={70}
                                className="flex rounded-full  mx-auto"
                            />
                            <h1 className="text-xl font-bold">{elem.Heading}</h1>
                            <p>{elem.Text}</p>
                        </div>
                    ))}
                </div>
            </RevealWrapper>
        </>
    );
}