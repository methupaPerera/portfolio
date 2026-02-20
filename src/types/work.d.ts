export type Work = {
	slug: string;
	type: "personal" | "client";
	title: string;
	description: string;
	image: string;
	overview: string;
	tech_stack: string[];
	key_features: string[];
	link: string;
	code: string;
	role: string;
	timeline: string;
	client: string;
	gallery: string[];
};

type WorkResponse = {
	items: Work[];
	hasMore: boolean;
	page: number;
};
