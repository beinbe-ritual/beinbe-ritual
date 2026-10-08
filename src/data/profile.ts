export interface BrandInfo {
	title_social_short: string;
	title_social_long: string;
	full_name: string;
	first_name: string;
	last_name: string;
	username: string;
}

export interface DescriptionInfo {
	short: string;
	long: string;
}

export interface ContactInfo {
	email: string;
	hotline: string;
	address: string;
	google_maps: string;
}

export interface MediaInfo {
	logo_500x500: string;
	background_1200x600: string;
}

export interface PersonalInfo {
	gender: string;
	birthday: string;
}

export interface SocialLinks {
	website: string;
	business_site: string;
	facebook: string;
	instagram: string;
	twitter: string;
	tiktok: string;
	youtube: string;
	pinterest: string;
	linkedin: string;
}

export interface ProfileData {
	brand: BrandInfo;
	description: DescriptionInfo;
	bio_html: string;
	hashtags: string;
	contact: ContactInfo;
	media: MediaInfo;
	personal_info: PersonalInfo;
	social_links: SocialLinks;
}

export const profileData: ProfileData = {
	brand: {
		title_social_short: "Beinbe",
		title_social_long: "Beinbe Ginseng Slim",
		full_name: "Beinbe Ginseng Slim",
		first_name: "Beinbe",
		last_name: "Ginseng Slim",
		username: "beinbe.ritual",
	},
	description: {
		short:
			"01 gói mỗi ngày hỗ trợ quản lý vóc dáng, chống oxy hóa và tăng cường trí nhớ. Thành phần thiên nhiên minh bạch, kiểm nghiệm bởi Viện Pasteur.",
		long:
			"Ginseng Slim là thức uống chăm sóc vóc dáng dành cho người bận rộn, sử dụng thành phần thiên nhiên dựa trên nền tảng nghiên cứu khoa học, cùng bạn xây dựng lối sống lành mạnh và làm đẹp vóc dáng bền vững. 01 gói mỗi ngày hỗ trợ quản lý vóc dáng, chống oxy hóa và tăng cường trí nhớ.",
	},
	bio_html: '<a href="https://beinbe.com/">Beinbe Ginseng Slim</a>',
	hashtags:
		"#beinbe #ginsengslim #beinbeginsengslim #dailyslimritual #deptubentrong",
	contact: {
		email: "xinchao@beinbe.com",
		hotline: "0962975381",
		address: "Tầng 15, Tòa nhà Vincom Center, 72 Lê Thánh Tôn, TP. Hồ Chí Minh",
		google_maps: "Sẽ update sau",
	},
	media: {
		logo_500x500: "/images/logo-500x500.jpg",
		background_1200x600: "/images/banner-1200x600.png",
	},
	personal_info: {
		gender: "Nữ",
		birthday: "06/10/1986",
	},
	social_links: {
		website: "https://beinbe.com/",
		business_site: "https://beinbe.com/business-info",
		facebook: "https://www.facebook.com/beinbe.ritual",
		instagram: "https://www.instagram.com/beinbe.ritual",
		twitter: "https://x.com/BeinbeGins2pu3",
		tiktok: "https://www.tiktok.com/@beinbe",
		youtube: "https://www.youtube.com/@BeinbeGinsengSlim",
		pinterest: "https://www.pinterest.com/beinberitual/",
		linkedin: "https://www.linkedin.com/in/beinbe-ginseng-slim/",
	},
};

export default profileData;
