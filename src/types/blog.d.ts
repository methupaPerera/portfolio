export type Blog = {
	slug: string;
	category: string[];
	title: string;
	content: string;
	tags: string[];
	image: string;
	posted_date: string;
};

export type BlogResponse = {
	items: Blog[];
	hasMore: boolean;
	page: number;
};
