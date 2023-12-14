const { SocialsRegex, SocialExtraction } = require("socials_regex");

// User profile description
const userProfile = `
  Hey there! I'm an TalaatMagdy, and you can find my projects on GitHub: https://github.com/talaatmagdyx.
  Let's connect on LinkedIn: https://linkedin.com/in/talaatmagdyx.
  I also share my thoughts on Twitter: https://twitter.com/talaatmagdyx.
`;

// Extract matches per platform
const matchesPerPlatform =
  SocialExtraction.extractMatchesPerPlatform(userProfile);
console.log("Social Media Links:", matchesPerPlatform);

// Output:
/*
Social Media Links: {
  github: { user: [ { matched: 'https://github.com/coding_enthusiast', login: 'coding_enthusiast' } ] },
  linkedin: { profile: [ { matched: 'https://linkedin.com/in/professional_coder' } ] },
  twitter: { user: [ { matched: 'https://twitter.com/coder_tweets', username: 'coder_tweets' } ] }
}
*/
