const {
  SocialsRegex,
  SocialExtraction,
  PlatformsRegex
} = require('socials_regex')

text = '  Also, find me on Twitter: https://twitter.com/example_twitter'
platform = 'twitter' // or SocialsRegex.Platforms.PLATFORM_TWITTER
const twitterMatches = SocialExtraction.extractMatchesByPlatform(
  SocialsRegex.Platforms.PLATFORM_TWITTER,
  text
)
console.log('Twitter matches:', twitterMatches)
