"use client";

import { useState, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuX, LuMenu } from "react-icons/lu";
import Image from "next/image";
const tabs = [{ name: "Breakfast" }, { name: "Lunch" }, { name: "Dinner" }];

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const pathname = usePathname();

	return (
		<Fragment>
			{/* Mobile menu button */}
			<div className="md:hidden fixed top-4 right-4 z-50">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className={`p-2 rounded-full ${
						isOpen
							? "text-[var(--color-primary)] bg-white"
							: "text-white bg-[var(--color-primary)]"
					} text-2xl`}>
					{isOpen ? <LuX /> : <LuMenu />}
				</button>
			</div>

			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 h-fit md:h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${
						isOpen ? "translate-y-0" : "-translate-y-full"
					} md:translate-y-0 md:w-64 md:left-0`}>
				<div className="flex flex-col h-full p-4 md:pt-4 pt-6 gap-6 md:gap-4">
					<Image
						src="/images/whatsbarrycooking.png"
						alt="whatsbarrycooking"
						width={150}
						height={150}
						className="mx-auto"
					/>
					<nav className="flex-1">
						<ul className="space-y-4">
							{tabs.map((tab) => {
								const href = `/${tab.name.toLowerCase()}`;
								return (
									<li key={tab.name}>
										<Link
											href={`/${tab.name.toLowerCase()}`}
											className={`block text-center md:text-left font-medium px-4 py-2 rounded-md transition-colors
                      ${
												pathname === href
													? "bg-[var(--color-primary)] text-white"
													: "text-gray-700 hover:bg-gray-100"
											}`}
											onClick={() => setIsOpen(false)}>
											{tab.name}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</div>
		</Fragment>
	);
};

export default Sidebar;
