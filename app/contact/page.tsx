import MainLayout from "../components/MainLayout";
import Image from "next/image";
export default function Contact() {
	return (
		<MainLayout>
			<div className="relative isolate bg-transparent">
				<div className="mx-auto max-w-2xl lg:max-w-4xl">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900">
						Let&apos;s talk about your project
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						We help companies and individuals build out their brand guidelines.
					</p>
					<div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
						<form action="#" method="POST" className="lg:flex-auto">
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<div>
									<label
										htmlFor="first-name"
										className="block text-sm font-semibold leading-6 text-gray-900">
										First name
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="last-name"
										className="block text-sm font-semibold leading-6 text-gray-900">
										Last name
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="last-name"
											id="last-name"
											autoComplete="family-name"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="budget"
										className="block text-sm font-semibold leading-6 text-gray-900">
										Budget
									</label>
									<div className="mt-2.5">
										<input
											id="budget"
											name="budget"
											type="text"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="website"
										className="block text-sm font-semibold leading-6 text-gray-900">
										Website
									</label>
									<div className="mt-2.5">
										<input
											type="url"
											name="website"
											id="website"
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="message"
										className="block text-sm font-semibold leading-6 text-gray-900">
										Message
									</label>
									<div className="mt-2.5">
										<textarea
											id="message"
											name="message"
											rows={4}
											className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											defaultValue={""}
										/>
									</div>
								</div>
							</div>
							<div className="mt-10">
								<button
									type="submit"
									className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
									Let&apos;s talk
								</button>
							</div>
							<p className="mt-4 text-sm leading-6 text-gray-500">
								By submitting this form, I agree to the{" "}
								<a href="#" className="font-semibold text-indigo-600">
									privacy&nbsp;policy
								</a>
								.
							</p>
						</form>
						<div className="lg:mt-6 lg:w-80 lg:flex-none">
							<Image
								className="h-12 w-auto"
								src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
								alt=""
								width={50}
								height={50}
							/>
							<figure className="mt-10">
								<blockquote className="text-lg font-semibold leading-8 text-gray-900">
									<p>
										“Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nemo expedita voluptas culpa sapiente alias molestiae.
										Numquam corrupti in laborum sed rerum et corporis.”
									</p>
								</blockquote>
								<figcaption className="mt-10 flex gap-x-6">
									<Image
										src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
										alt=""
										className="h-12 w-12 flex-none rounded-full bg-gray-50"
										width={50}
										height={50}
									/>
									<div>
										<div className="text-base font-semibold text-gray-900">
											Brenna Goyette
										</div>
										<div className="text-sm leading-6 text-gray-600">
											CEO of Workcation
										</div>
									</div>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
