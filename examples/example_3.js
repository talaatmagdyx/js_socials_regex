const {
  SocialsRegex,
  SocialExtraction,
  PlatformsRegex
} = require('socials_regex')

const text = 'Also, find me on Twitter: https://twitter.com/example_twitter'
const platform = 'twitter' // or SocialsRegex.Platforms.PLATFORM_TWITTER;
const regexes = PlatformsRegex.REGEX.twitter
const twitterMatches = SocialExtraction.platformMatches({
  regexes,
  platform,
  text
})
console.log('Twitter matches:', twitterMatches)
// Output: { twitter: { user: [ [Object] ] } }
