/**
 * Utility helpers for Beinbe Profile
 */

/**
 * Converts a Google Drive share link into a direct link for embedding in <img> tags.
 * Supported input formats:
 * - https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * - https://drive.google.com/file/d/FILE_ID/view?usp=drive_link
 * - https://drive.google.com/open?id=FILE_ID
 * Output format:
 * - https://drive.google.com/uc?export=view&id=FILE_ID
 */
export function convertDriveLink(url: string): string {
	if (!url) return '';

	// If already in direct uc?export=view format
	if (url.includes('drive.google.com/uc?export=view&id=')) {
		return url;
	}

	// Match /file/d/{FILE_ID}/
	const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
	if (fileIdMatch && fileIdMatch[1]) {
		return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
	}

	// Match id={FILE_ID}
	const queryIdMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
	if (queryIdMatch && queryIdMatch[1]) {
		return `https://drive.google.com/uc?export=view&id=${queryIdMatch[1]}`;
	}

	return url;
}

/**
 * Normalizes and formats social media URLs.
 * Ensures https:// protocol and removes unwanted trailing slashes (except root domain).
 */
export function formatSocialUrl(platform: string, url: string): string {
	if (!url) return '';

	let cleaned = url.trim();

	// Add https:// if no protocol
	if (!/^https?:\/\//i.test(cleaned)) {
		cleaned = `https://${cleaned}`;
	}

	try {
		const parsed = new URL(cleaned);
		// Normalize pathname: remove trailing slash if not root
		if (parsed.pathname.length > 1 && parsed.pathname.endsWith('/')) {
			parsed.pathname = parsed.pathname.slice(0, -1);
		}
		return parsed.toString();
	} catch {
		return cleaned;
	}
}

/**
 * Parses space-separated hashtags string into an array of individual hashtags.
 */
export function parseHashtags(hashtagString: string): string[] {
	if (!hashtagString) return [];
	return hashtagString
		.trim()
		.split(/\s+/)
		.map((tag) => (tag.startsWith('#') ? tag : `#${tag}`))
		.filter((tag) => tag.length > 1);
}
