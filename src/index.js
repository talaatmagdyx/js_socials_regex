const SocialsRegex = require('./platforms')

class PlatformsRegex {
  static REGEX = {
    [SocialsRegex.Platforms.PLATFORM_YELP]: SocialsRegex.Regexes.YELP_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_WHATSAPP]:
      SocialsRegex.Regexes.WHATSAPP_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_STACKEXCHANGE_NETWORK]:
      SocialsRegex.Regexes.STACKEXCHANGE_NETWORK_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_CRUNCHBASE]:
      SocialsRegex.Regexes.CRUNCHBASE_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_ANGELLIST]:
      SocialsRegex.Regexes.ANGELLIST_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_XING]: SocialsRegex.Regexes.XING_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_VIMEO]:
      SocialsRegex.Regexes.VIMEO_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_TELEGRAM]:
      SocialsRegex.Regexes.TELEGRAM_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_STACKOVERFLOW]:
      SocialsRegex.Regexes.STACKOVERFLOW_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_STACKEXCHANGE]:
      SocialsRegex.Regexes.STACKEXCHANGE_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_SNAPCHAT]:
      SocialsRegex.Regexes.SNAPCHAT_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_SKYPE]:
      SocialsRegex.Regexes.SKYPE_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_REDDIT]:
      SocialsRegex.Regexes.REDDIT_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_PHONE]:
      SocialsRegex.Regexes.PHONE_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_MEDIUM]:
      SocialsRegex.Regexes.MEDIUM_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_HACKER_NEWS]:
      SocialsRegex.Regexes.HACKERNEWS_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_EMAIL]:
      SocialsRegex.Regexes.EMAIL_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_YOUTUBE]:
      SocialsRegex.Regexes.YOUTUBE_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_INSTAGRAM]:
      SocialsRegex.Regexes.INSTAGRAM_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_TWITTER]:
      SocialsRegex.Regexes.TWITTER_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_LINKEDIN]:
      SocialsRegex.Regexes.LINKEDIN_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_GITHUB]:
      SocialsRegex.Regexes.GITHUB_URL_REGEX,
    [SocialsRegex.Platforms.PLATFORM_FACEBOOK]:
      SocialsRegex.Regexes.FACEBOOK_URL_REGEX
  }

  static ERROR_MSG_UNKNOWN_PLATFORM = `Unknown platform, expected one of ${Object.keys(
    SocialsRegex.Platforms
  ).join(', ')}`

  static supportedPlatformsRegex () {
    return Object.keys(PlatformsRegex.REGEX)
  }

  static allPlatform = PlatformsRegex.supportedPlatformsRegex()
}

class SocialExtraction {
  /**
   * This method is responsible for extracting matches for each social media platform defined in SocialsRegex.Regexes within the provided text.
   * @returns
   * An object where each key corresponds to a social media platform, and the value is an object containing matched information for that platform.
   * @param {string} text The input text containing social media URLs.
   * @example
   * text =  "hello https://twitter.com/example_twitter"
   * matches = SocialExtraction.extractMatchesPerPlatform(text);
   * console.log(matches)
   * {
   *     twitter:  {
   *          user: [ { matched: 'https://twitter.com/example_twitter', username: 'example_twitter'} ]
   *     }
   *  }
   *
   */
  static extractMatchesPerPlatform (text) {
    const matches = {}
    for (const [platform, regexes] of Object.entries(PlatformsRegex.REGEX)) {
      Object.assign(
        matches,
        SocialExtraction.platformMatches({ regexes, platform, text })
      )
    }
    return matches
  }

  /**
   * This method extracts matches based on the provided regex pattern within the given text.
   *
   * @returns {Object|Array}
   * An array of objects, where each object represents a match, including the matched text and named capture groups.
   * @param {RegExp || Object || Array} regex The key representing the regex pattern in SocialsRegex.Regexes.
   * @param {string} text The input text containing social media URLs.
   * @throws {Error} - If the type of regex is not supported.
   * @example
   * text = "Contact me on LinkedIn: https://linkedin.com/in/example_linkedin"
   * regex = PlatformsRegex.REGEX[SocialsRegex.Platforms.PLATFORM_LINKEDIN].user
   * const linkedinMatches = SocialExtraction.extractMatchesByRegex(PlatformsRegex.REGEX[SocialsRegex.Platforms.PLATFORM_LINKEDIN].profile, text);
   * console.log('Linkedin matches:', linkedinMatches);
   * Linkedin matches: [
   *   {
   *     matched: 'https://linkedin.com/in/example_linkedin',
   *     permalink: 'example_linkedin'
   *   }
   * ]
   * */
  static extractMatchesByRegex (regex, text) {
    // Case 1: Single RegExp
    if (typeof regex === 'object' && regex instanceof RegExp) {
      // Example: extractMatchesByRegex(/github\.com/, text);
      return SocialExtraction.matches({ regex, text })
    }
    // Case 2: Object with Named Regex Patterns
    else if (typeof regex === 'object' && regex.constructor === Object) {
      const values = {}
      // Iterate over named regex patterns in the object
      Object.entries(regex).forEach(([key, regexValue]) => {
        // Example: extractMatchesByRegex({ github: /github\.com/, twitter: /twitter\.com/ }, text);
        values[key] = SocialExtraction.matches({ regex: regexValue, text })
      })
      return values
    }
    // Case 3: Array of RegExp Patterns
    else if (Array.isArray(regex)) {
      const regexValues = []
      // Iterate over each element (regex) in the array
      regex.forEach((element) => {
        // Example: extractMatchesByRegex([/github\.com/, /twitter\.com/], text);
        regexValues.push(SocialExtraction.matches({ regex: element, text }))
      })

      return regexValues
    }
    // Case: Unsupported Type
    throw new Error(`Your Type not supported: ${typeof regex}`)
  }

  /**
   * This method extracts matches based on the regex patterns defined for a specific social media platform within the provided text.
   *  @returns {Object} - Matches based on the provided platform's regex patterns.
   * An object containing matched information for the specified platform.
   * @param {string} platform The key representing the social media platform in SocialsRegex.Regexes. for example twitter
   * @param {string} text  The input text containing social media URLs.
   * @throws {Error} - If the specified platform is unknown.
   * @example
   * text = "  Also, find me on Twitter: https://twitter.com/example_twitter"
   * platform = "twitter" // or SocialsRegex.Platforms.PLATFORM_TWITTER
   * const twitterMatches = SocialExtraction.extractMatchesByPlatform(SocialsRegex.Platforms.PLATFORM_TWITTER, text);
   * console.log('Twitter matches:', twitterMatches);
   * Twitter matches: { twitter: { user: [ [Object] ] } }
   * */
  static extractMatchesByPlatform (platform, text) {
    const regexes = PlatformsRegex.REGEX[platform]
    if (!regexes) {
      // Throw an error if the platform is unknown
      throw new Error(SocialsRegex.ERROR_MSG_UNKNOWN_PLATFORM)
    }
    // Call the platformMatches method from SocialExtraction to extract matches
    return SocialExtraction.platformMatches({ regexes, platform, text })
  }

  /**
   * This internal method handles the extraction of matches for a specific social media platform based on its regex patterns.
   *
   * @param {string} platform - The key representing the social media platform in SocialsRegex.Regexes (e.g., "twitter").
   * @param {string} text - The input text containing social media URLs.
   * @param {Object} regexes The key representing the regex pattern in SocialsRegex.Regexes.
   *
   * @returns {Object} An object containing matched information for the specified platform.
   *
   * @example
   * // Usage example:
   * const { SocialsRegex, SocialExtraction, PlatformsRegex } = require('socials_regex');
   *
   * const text = "Also, find me on Twitter: https://twitter.com/example_twitter";
   * const platform = "twitter"; // or SocialsRegex.Platforms.PLATFORM_TWITTER;
   * const regexes = PlatformsRegex.REGEX.twitter;
   * const twitterMatches = SocialExtraction.platformMatches({regexes, platform, text});
   * console.log('Twitter matches:', twitterMatches);
   * // Output: { twitter: { user: [ [Object] ] } }
   *
   */
  static platformMatches ({ regexes, platform, text }) {
    // Initialize an empty object to store matches
    const matches = {}
    // Iterate over each named regex pattern associated with the platform
    for (const [key, regex] of Object.entries(regexes)) {
      const matched = SocialExtraction.matches({ regex, text })
      // If no matches are found for the current regex pattern, continue to the next iteration
      if (matched.length === 0) continue
      // Initialize the matches object for the specified platform if it doesn't exist
      matches[platform] = matches[platform] || {}
      // Store the matches for the current regex pattern under the platform's matches object
      matches[platform][key] = matched
    }

    return matches
  }

  /**
   * This internal method extracts matches based on a provided regex pattern within the given text.
   * @param {RegExp} regex - The regex patterns associated with the specified platform.
   * @param {string} text - The input text containing social media URLs.
   * @returns {Array} - Matches based on the provided platform's regex patterns.
   * An array of objects, where each object represents a match, including the matched text and named capture groups.
   * @example
   * // Extract matches for Twitter usernames in the text
   * const twitterRegex = SocialsRegex.Regexes.TWITTER_URL_REGEX.username;
   * const textWithTwitter = "Check out my Twitter: https://twitter.com/example_twitter";
   * const twitterMatches = SocialExtraction.matches({ regex: twitterRegex, text: textWithTwitter });
   * console.log(twitterMatches);
   * // Output: [{ matched: 'https://twitter.com/example_twitter', username: 'example_twitter' }]
   * */

  static matches ({ regex, text }) {
    if (!regex) {
      return []
    }
    // Use a global regular expression if it's not already global
    const globalRegex = regex.global ? regex : new RegExp(regex.source, 'g')
    // Call the reformatMatches method to transform the match results into a structured array of objects
    return SocialExtraction.reformatMatches([...text.matchAll(globalRegex)])
  }

  /**
   * This internal method reformats the matches obtained from the regex matching process, converting them into a more structured format.
   *
   * @param {Array} matches - An array of matches obtained from the regex matching process.
   * @returns {Array} - An array of reformatted matches, where each object includes the matched text and named capture groups.
   * @example
   * // Reformat matches obtained from a regex matchAll operation
   * const regex = /(?<username>[A-Za-z0-9_]+)\/status\/(?<tweet_id>[0-9]+)/;
   * const textWithMatches = "Check out my tweet: https://twitter.com/example_user/status/123456789";
   * const matches = [...textWithMatches.matchAll(regex)];
   * const reformattedMatches = SocialExtraction.reformatMatches(matches);
   * console.log(reformattedMatches);
   * // Output: [{ matched: 'https://twitter.com/example_user/status/123456789', username: 'example_user', tweet_id: '123456789' }]
   */
  static reformatMatches (matches) {
    // Initialize an empty array to store reformatted matches
    const reformatted = []

    // Iterate over each match obtained from the regex matching process
    for (const match of matches) {
      // Extract named capture groups from the current match
      const namedCaptures = Object.fromEntries(
        Object.entries(match.groups || {}).map(([name, value]) => [
          name,
          value
        ])
      )

      // Create a new object representing the reformatted match, including the matched text and named capture groups
      reformatted.push({ matched: match[0], ...namedCaptures })
    }

    return reformatted
  }
}

module.exports = {
  PlatformsRegex,
  SocialExtraction,
  SocialsRegex
}
