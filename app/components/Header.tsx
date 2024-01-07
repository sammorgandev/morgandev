"use client";
import React, { use } from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Projects", href: "/projects" },
	{ name: "Blog", href: "/blog" },
	{ name: "Contact", href: "/contact" },
];
//function to check if current scroll position >0
//if so, add shadow and white background to header
//if not, remove shadow and background
// const [scroll, setScroll] = useState(false);
// const changeBackground = () => {
// 	if (window.scrollY >= 1) {
// 		setScroll(true);

// 	} else {
// 		setScroll(false);
// 	}
// };
// //add event listener to check scroll position
// window.addEventListener("scroll", changeBackground);
// const headerStyle = {
// 	backgroundColor: scroll ? "#fff" : "transparent",
// 	boxShadow: scroll ? "0 4px 2px -2px rgba(0,0,0,.2)" : "none",
// 	transition: "all .5s ease",
// };
function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const currentPath = usePathname();
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		const changeBackground = () => {
			if (window.scrollY >= 1) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};

		window.addEventListener("scroll", changeBackground);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", changeBackground);
		};
	}, []);

	//const headerStyle = {
	//backgroundColor: scroll ? "bg-white" : "transparent",
	//boxShadow: scroll ? "0 4px 2px -2px rgba(0,0,0,.2)" : "none",
	//};
	return (
		<header
			className={`inset-x-0 top-0 z-50 sticky ${
				scroll
					? "bg-white shadow-sm transition-all ease-in-out duration-200"
					: "bg-transparent"
			}`}>
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global">
				<div className="flex items-center gap-4 lg:flex-1">
					<a href="/" className="-m-1.5 p-1.5 flex gap-4 items-center">
						<Image
							className="w-8 h-8 object-cover rounded-full"
							src="/profilepic.jpg"
							alt=""
							width={50}
							height={50}
						/>

						<b>
							{" "}
							<h1 className="text-xl text-indigo-600">morgan/dev</h1>
						</b>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className={`px-3 py-2 rounded-md text-sm font-medium ${
								currentPath === item.href ? "text-indigo-600" : "text-gray-900"
							}`}>
							{item.name}
						</a>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="https://github.com/sammorgandev"
						className="text-sm font-semibold leading-6 text-gray-900">
						Git hub <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center gap-4 justify-between">
						<div className="flex gap-4">
							{" "}
							<a href="/" className="-m-1.5 p-1.5 flex items-center gap-4">
								<Image
									className="w-8 h-8 object-cover rounded-full"
									src="/profilepic.jpg"
									alt=""
									width={50}
									height={50}
								/>

								<b>
									{" "}
									<h1 className="text-xl text-indigo-600">morgan/dev</h1>
								</b>
							</a>
						</div>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										{item.name}
									</a>
								))}
							</div>
							<div className="py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									Git hub
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
export default Header;