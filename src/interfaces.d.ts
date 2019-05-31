interface FooterLink {
	href: string;
	text: string;
}

export interface SiteMeta {
	title: string;
	description: string;
	author: string;
	footerLinks: FooterLink[];
}
export interface AppProperties {
	siteMeta: SiteMeta;
}
