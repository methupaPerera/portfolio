export type Blog = {
	slug: string;
	category: string[];
	title: string;
	description: string;
	content: string;
	tags: string[];
	image: string;
	posted_date: string;
	read: string;
};

export type BlogResponse = {
	items: Blog[];
	hasMore: boolean;
	page: number;
	filter: { availableCategories: string[] };
};
