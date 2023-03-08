"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='py-9'>
            {/* First Part */}
            <div>
                <h1 className="text-center md:text-4xl text-3xl font-bold mt-8">
                    Certified Web 3.0 and Metaverse Developer
                </h1>

                <RevealWrapper
                    origin="top"
                    delay={200}
                    duration={2000}
                    distance="500px"
                    reset={true}
                >
                    <div className="md:flex mt-8 w-full gap-3">
                        <div className="basis-[50%]">
                            <p className="text-center md:text-xl text-sm md:px-11 pt-6 px-1">
                                A One and Quarter Years Panaverse DAO Earn as you Learn Program
                                Getting Ready for the Next Generation of the Internet
                                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                                Bioinformatics Technologies The Panaverse Community and Syllabus
                                <br />
                                <Link
                                    href={'https://www.panaverse.co/'}
                                    target="_blank"
                                    title="click to visit"
                                    className="text-gray-900 font-bold">
                                    https://www.panaverse.co
                                </Link>
                            </p>
                        </div>
                        <div className="basis-[50%] md:ml-[100px] mt-10 md:mt-0">
                            <Image
                                src="/fulllogo.png"
                                alt="logo"
                                height={400}
                                width={400}
                                className="mx-auto"
                            />
                        </div>
                    </div>
                </RevealWrapper>
            </div>

            {/* Second Part */}
            <div>

                <h1 className="text-center md:text-4xl text-3xl font-bold mt-16 md:mt-20">
                    Version 6.0.0 - March 2023
                </h1>

                <RevealWrapper
                    origin="top"
                    delay={200}
                    duration={2000}
                    distance="500px"
                    reset={true}
                >
                    <p className="text-center md:text-xl text-sm md:px-60 pt-6 px-1">
                        The internet is without a doubt the most important technological
                        development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and
                        Edge technologies expand the internet as we know it by introducing
                        novel features and advancements. Metaverse will make use of all
                        aspects of modern technology, including 3D, VR, AR, AI, blockchain,
                        cloud and edge computing, voice computing, ambient computing, and
                        more.
                        <br />
                        <Link
                            href={
                                'https://icg.citi.com/icghome/what-we-think/citigps/insights/metaverse-and-money_20220330'
                            }
                            target="_blank"
                            title="click to visit"
                            className="text-gray-900 font-bold">
                            https://icg.citi.com/icghome/what-we-think/citigps/insights
                        </Link>
                    </p>
                </RevealWrapper>
            </div>

            {/* Third Part */}
            <div>

                <h1 className="text-center md:text-4xl text-2xl font-bold mt-16 md:mt-20 px-2">
                    The Program in a Nutshell: Earn While You Learn
                </h1>

                <RevealWrapper
                    origin="top"
                    delay={200}
                    duration={2000}
                    distance="500px"
                    reset={true}
                >
                    <p className="text-center md:text-xl text-sm md:px-60 pt-6 px-1">
                        In this brand-new type of curriculum, students will learn how to make
                        money and boost exports in the classroom and will begin doing so
                        within six months of the programs beginning. It resembles a cross
                        between a corporate venture and an educational project. Program of
                        Studies
                        <br />
                        <Link
                            href={'https://www.panaverse.co/'}
                            target="_blank"
                            title="click to visit"
                            className="text-gray-900 font-bold">
                            https://www.panaverse.co
                        </Link>
                    </p>
                </RevealWrapper>
            </div>

            {/* Fourth Part */}
            <div>

                <h1 className="text-center md:text-4xl text-3xl font-bold mt-16 md:mt-20">
                    Program of Studies
                </h1>


                <RevealWrapper
                    origin="top"
                    delay={200}
                    duration={2000}
                    distance="500px"
                    reset={true}
                >
                    <div className="flex mt-8 mx-3 flex-col md:flex-row">
                        <div className="md:basis-[50%] basis-[80%]">
                            <p className="text-center md:text-xl text-sm md:px-11 pt-6">
                                This curriculum is intended for beginners who want to learn
                                software development from the ground up. The first three quarters
                                are shared by all specialties and are dedicated to studying
                                Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
                                development. It is going to be a fifteen-month-long hybrid program
                                that includes both onsite and online classes and is divided into
                                five quarters of 13 weeks each. The emphasis will be on hands-on
                                learning by educating students to produce projects.

                            </p>
                        </div>
                        <div className="md:basis-[50%] basis-[60%]">
                            <Image
                                src="/download.svg"
                                alt="logo"
                                height={800}
                                width={800}
                                className="pt-5"
                            />
                        </div>
                    </div>
                </RevealWrapper>
            </div>
        </div >
    );
}
