import { test } from 'node:test';
import assert from 'node:assert';
import { convertDriveLink, formatSocialUrl, parseHashtags } from '../src/utils/helpers.ts';
import { profileData } from '../src/data/profile.ts';

test('convertDriveLink correctly transforms various Google Drive links', () => {
	const shareLink = 'https://drive.google.com/file/d/18hsDnawCUS4QyBjSEMZlY0RHyjUBYapj/view?usp=sharing';
	assert.strictEqual(
		convertDriveLink(shareLink),
		'https://drive.google.com/uc?export=view&id=18hsDnawCUS4QyBjSEMZlY0RHyjUBYapj'
	);

	const driveLink = 'https://drive.google.com/file/d/1kOSskhxpwkCTe5N0DdaPGc3j3f7AQnDg/view?usp=drive_link';
	assert.strictEqual(
		convertDriveLink(driveLink),
		'https://drive.google.com/uc?export=view&id=1kOSskhxpwkCTe5N0DdaPGc3j3f7AQnDg'
	);

	const alreadyConverted = 'https://drive.google.com/uc?export=view&id=123456';
	assert.strictEqual(convertDriveLink(alreadyConverted), alreadyConverted);
});

test('formatSocialUrl standardizes protocols and trailing slashes', () => {
	assert.strictEqual(
		formatSocialUrl('facebook', 'https://www.facebook.com/beinbe.ritual/'),
		'https://www.facebook.com/beinbe.ritual'
	);
	assert.strictEqual(
		formatSocialUrl('website', 'beinbe.com'),
		'https://beinbe.com/'
	);
	assert.strictEqual(
		formatSocialUrl('twitter', 'x.com/BeinbeGins2pu3'),
		'https://x.com/BeinbeGins2pu3'
	);
});

test('parseHashtags correctly splits hashtag string into array', () => {
	const tags = parseHashtags('#beinbe #ginsengslim #beinbeginsengslim');
	assert.deepStrictEqual(tags, ['#beinbe', '#ginsengslim', '#beinbeginsengslim']);
});

test('profileData has all required 12+ fields and 9 social channels', () => {
	assert.strictEqual(profileData.brand.title_social_short, 'Beinbe');
	assert.strictEqual(profileData.brand.title_social_long, 'Beinbe Ginseng Slim');
	assert.strictEqual(profileData.brand.username, 'beinbe.ritual');
	assert.ok(profileData.description.short.length > 10);
	assert.ok(profileData.description.long.length > 20);
	assert.ok(profileData.bio_html.includes('https://beinbe.com/'));
	assert.strictEqual(profileData.contact.email, 'xinchao@beinbe.com');
	assert.strictEqual(profileData.contact.hotline, '0962975381');
	assert.ok(profileData.contact.address.includes('Vincom Center'));
	assert.strictEqual(profileData.personal_info.gender, 'Nữ');
	assert.strictEqual(profileData.personal_info.birthday, '06/10/1986');

	// 9 social channels
	const expectedChannels = [
		'website',
		'business_site',
		'facebook',
		'instagram',
		'twitter',
		'tiktok',
		'youtube',
		'pinterest',
		'linkedin',
	];

	for (const channel of expectedChannels) {
		assert.ok(profileData.social_links[channel], `Missing social channel: ${channel}`);
		assert.ok(profileData.social_links[channel].startsWith('https://'), `Invalid URL for: ${channel}`);
	}
});
