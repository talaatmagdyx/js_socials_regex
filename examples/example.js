const { SocialsRegex, SocialExtraction, PlatformsRegex } = require('socials_regex');

// Example text containing social platform URLs
const text = `
  Check out my GitHub: https://github.com/example_user
  Also, find me on Twitter: https://twitter.com/example_twitter
   Also, find me on Twitter: https://twitter.com/example_twitter
  Also, find me on Twitter: https://twitter.com/example_twitter

  Contact me on LinkedIn: https://linkedin.com/in/example_linkedin
`;

// Use the static method directly
const matchesPerPlatform = SocialExtraction.extractMatchesPerPlatform(text);
console.log('Matches per platform:', matchesPerPlatform);

const twitterMatches = SocialExtraction.extractMatchesByPlatform(SocialsRegex.Platforms.PLATFORM_TWITTER, text);
console.log('Twitter matches:', twitterMatches);

// with array regex
const githubMatches = SocialExtraction.extractMatchesByRegex([PlatformsRegex.REGEX[SocialsRegex.Platforms.PLATFORM_GITHUB].user,
PlatformsRegex.REGEX[SocialsRegex.Platforms.PLATFORM_TWITTER].user], text);
console.log('GitHub matches:', githubMatches);

// with object regex
const twMatches = SocialExtraction.extractMatchesByRegex(PlatformsRegex.REGEX[SocialsRegex.Platforms.PLATFORM_TWITTER], text);
console.log('tw matches:', twMatches);



const linkedinMatches = SocialExtraction.extractMatchesByRegex(PlatformsRegex.REGEX[SocialsRegex.Platforms.PLATFORM_LINKEDIN].profile, text);
console.log('Linkedin matches:', linkedinMatches);

