const { expect } = require('chai')
const SocialsRegexExtraction = require('../src/index')
const SocialsRegex = SocialsRegexExtraction.SocialsRegex
const SocialExtraction = SocialsRegexExtraction.SocialExtraction

describe('SocialExtraction', () => {
  describe('extractMatchesPerPlatform', () => {
    it('should extract matches for each platform', () => {
      const text =
        'Check out my YouTube channel: https://www.youtube.com/user/username123 and follow me on Twitter: https://twitter.com/talaatmagdyx'

      const matches = SocialExtraction.extractMatchesPerPlatform(text)
      expect(matches).to.have.property(SocialsRegex.Platforms.PLATFORM_YOUTUBE)
      expect(matches[SocialsRegex.Platforms.PLATFORM_YOUTUBE]).to.have.property(
        'user'
      )
      expect(matches[SocialsRegex.Platforms.PLATFORM_YOUTUBE].user).to.be.an(
        'array'
      ).that.is.not.empty

      expect(matches).to.have.property(SocialsRegex.Platforms.PLATFORM_TWITTER)
      expect(matches[SocialsRegex.Platforms.PLATFORM_TWITTER]).to.have.property(
        'user'
      )
      expect(matches[SocialsRegex.Platforms.PLATFORM_TWITTER].user).to.be.an(
        'array'
      ).that.is.not.empty
    })
  })

  describe('extractMatchesByRegex', () => {
    it('should extract matches for a specific regex', () => {
      const text = 'Contact me on WhatsApp: https://wa.me/1234567890'

      const regex = SocialsRegex.Regexes.WHATSAPP_URL_REGEX.phone
      const matches = SocialExtraction.extractMatchesByRegex(regex, text)

      expect(matches).to.be.an('array').that.is.not.empty
      expect(matches[0]).to.have.property('number')
    })
  })

  describe('extractMatchesByPlatform', () => {
    it('should extract matches for a specific platform', () => {
      const text =
        'Visit my Yelp page: https://www.yelp.com/biz/example-business'

      const platform = SocialsRegex.Platforms.PLATFORM_YELP
      const matches = SocialExtraction.extractMatchesByPlatform(platform, text)
      expect(matches[SocialsRegex.Platforms.PLATFORM_YELP]).to.have.property(
        'company'
      )
      expect(matches[SocialsRegex.Platforms.PLATFORM_YELP].company).to.be.an(
        'array'
      ).that.is.not.empty
    })

    it('should throw an error for an unknown platform', () => {
      const text = 'Invalid platform: https://example.com'

      const invalidPlatform = 'INVALID_PLATFORM'
      expect(() =>
        SocialExtraction.extractMatchesByPlatform(invalidPlatform, text)
      ).to.throw(Error)
    })
  })
})
