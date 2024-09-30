"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { awwwards, ochiside, rkk } from "@/public";
import axios from 'axios';
import { useEffect, useState } from 'react';

// interface Category {
//     id: number; // или string, в зависимости от вашего API
//     name: string;
// }

export default function Hero() {
	// const [categories, setCategories] = useState<Category[]>([]); // Указываем тип

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         const response = await axios.get('http://localhost:3001/categories'); // Убедитесь, что ваш Nest.js сервер запущен
    //         setCategories(response.data);
    //     };
    //     fetchCategories();
    // }, []);

	return (
		<section
			className="w-full h-screen sm:mb-[-10px] xm:mb-[-10px]"
			data-scroll
			data-scroll-speed="-.3">
			<div className="w-full h-full flex flex-col justify-between">
			<video
                className="absolute top-0 left-0 w-full h-full object-cover lg:hidden"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/img/hero.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
				<div />
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
					<div className="w-full flex justify-between gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
						<div className="lg:visible sm:invisible">
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk ">
								Рюмочная <br />
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 1.5,
										}}
										className="leading-[130px]">
										<Image
											width={120}
											height={50}
											src={rkk}
											alt="img"
											className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
										/>
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk ">
										на
									</h1>
								</div>
								Пушкинской
							</h1>
						</div>
						{/* <div>
            <h1>Категории настоек</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li> // Теперь TypeScript знает, что category имеет свойство name
                ))}
            </ul>
        </div> */}
						{/* <div>
							<Image
								src={awwwards}
								alt="awwwards"
								width={60}
								height={60}
								className="xm:hidden sm:hidden"
							/>
						</div> */}
					</div>


					{/* <div className="lg:hidden sm:visible">
							<h1 className=" heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk ">
								В разработке
							</h1>
						</div> */}
						


					<div className="w-full flex flex-col h-[22vh] border-t sm:border-none lg:border-[#21212155] py-[20px] sm:mb-[80px] xm:mb-[80px] gap-[30px] z-10">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[50%] xm:w-full sm:w-full">
								<p className="paragraph font-NeueMontreal sm:text-white lg:text-secondry">
									Бар, Паб
								</p>
							</div>
							<div className="w-[50%] xm:w-full sm:w-full flex justify-between xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
								<div>
									<p className="paragraph font-NeueMontreal sm:text-white lg:text-secondry">
										г. Воронеж, ул. Пушкинская 1
									</p>
								</div>
								<div className="flex items-center gap-[5px] group">
									<div className="rounded-[50px] border sm:border-about lg:border-[#21212199] group-hover:bg-secondry  py-[3px] px-[12px] cursor-pointer">
										<Link
											className="paragraph font-NeueMontreal sm:text-white lg:text-secondry uppercase group-hover:text-background transition-all  transform duration-[0.3s] ease-[.215,.61,.355,1]"
											href="/contact">
											собери свой сет
										</Link>
									</div>
									<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#21212199] rounded-full p-[1px] sm:p-[30px] xm:pb-[30px]  group-hover:bg-secondry transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">
										<p className="font-normal text-secondry group-hover:text-background">
											<ArrowUpRight
												size={24}
												strokeWidth={1.25}
											/>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden">
							<motion.p
								initial={{ y: "-100%", opacity: 0 }}
								animate={{ y: "100%", opacity: 0.5 }}
								transition={{
									duration: 1.8,
									repeat: Infinity,
									ease: [0.3, 0.86, 0.36, 0.95],
								}}
								className="paragraph opacity-50 font-NeueMontreal text-secondry">
								scroll down
							</motion.p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
