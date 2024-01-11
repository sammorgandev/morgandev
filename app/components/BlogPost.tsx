import { client } from "../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import Breadcrumbs from "./Breadcrumbs";
type Post = {
	_id: string;
	title: string;
	slug: {
		_type: string;
		current: string;
	};
	author: {
		image: any;
		name: string;
		slug: any;
		role: string;
		_ref: string;
		_type: string;
	};
	mainImage: {
		_type: string;
		asset: {
			_ref: string;
			_type: string;
		};
		alt?: string;
	};
	categories: Array<{
		slug: any;
		title: string;
		_type: string;
		_ref: string;
	}>;
	publishedAt: string;
	body: Array<{
		_type: string;
		style: string;
		children: Array<{
			_type: string;
			_key: string;
			marks: string[];
			text: string;
		}>;
		markDefs: Array<{
			_type: string;
			_key: string;
		}>;
	}>;
};

export default async function BlogPost({
	params: { id },
}: {
	params: { id: string };
}) {
	const post = await client.fetch<Post>(
		`*[_type == "post" && slug.current == "${id}"]{
			...,
			categories[]->{
			  title,
			  slug,
			  _ref
			}
		  }[0]`
	);
	if (!post) return <div>Loading...</div>;
	return (
		<div className="bg-transparent flex-col z-50">
			<div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
				<div className="mb-4">
					<Breadcrumbs />
				</div>
				<p className="text-base font-semibold leading-7 text-indigo-600">
					Introducing
				</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
					{post.title}
				</h1>
				<div className="flex gap-4">
					{post.categories.map((category) => (
						<p
							className="text-base font-normal text-indigo-600 mt-6 px-6 py-2 bg-indigo-50 rounded-md inline-block"
							key={category.title}>
							{category.title}
						</p>
					))}
				</div>
				<p className="mt-6 text-xl leading-8 dark:text-slate-300">
					Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
					arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
					feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
					Eleifend egestas fringilla sapien.
				</p>
				<div className="mt-6 rounded-sm">
					<Image
						src={urlForImage(post.mainImage)}
						alt=""
						className="rounded-md"
						width={1000}
						height={1000}
					/>
				</div>
				<div className="mt-10 max-w-3xl h-fit dark:text-slate-300">
					<p>
						{post.body.map((block) => (
							<p key={block.children[0]._key} className="mb-5">
								<span>{block.children[0].text}</span>
								<br></br>
							</p>
						))}
					</p>
				</div>
			</div>
		</div>
	);
}
