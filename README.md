# SocialsRegex for JavaScript

Detect and extract URLs of social media profiles with ease. This JavaScript package provides regular expressions and utilities to identify and extract social media account URLs from text.

## Installation

Install the package using npm:

```bash
npm install socials_regex
```

## Usage

```javascript
const { SocialsRegex, SocialExtraction } = require('socials_regex');

// Example usage in your application
const text = 'Visit my Yelp page: https://www.yelp.com/biz/example-business';
const platform = SocialsRegex.Platforms.PLATFORM_YELP;
const matches = SocialExtraction.extractMatchesByPlatform(platform, text);

console.log(matches[SocialsRegex.Platforms.PLATFORM_YELP].company);
// Output: [{ matched: 'https://www.yelp.com/biz/example-business', company: 'example-business' }]
```

### more example
```javascript
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

const githubMatches = SocialExtraction.extractMatchesByRegex([PlatformsRegex.REGEX[SocialsRegex.Platforms.PLATFORM_GITHUB].user,
  PlatformsRegex.REGEX[SocialsRegex.Platforms.PLATFORM_TWITTER].user], text);
console.log('GitHub matches:', githubMatches);

/*
* Matches per platform: {
  twitter: { user: [ [Object], [Object], [Object] ] },
  linkedin: { profile: [ [Object] ] },
  github: { user: [ [Object] ] }
}
Twitter matches: { twitter: { user: [ [Object], [Object], [Object] ] } }
GitHub matches: [
  [
    {
      matched: 'https://github.com/example_user',
      login: 'example_user'
    }
  ],
  [
    {
      matched: 'https://twitter.com/example_twitter',
      username: 'example_twitter'
    },
    {
      matched: 'https://twitter.com/example_twitter',
      username: 'example_twitter'
    },
    {
      matched: 'https://twitter.com/example_twitter',
      username: 'example_twitter'
    }
  ]
]

* */
```

## Features

- Detect the platform a URL points to (support for major platforms).
- Extract information contained within the URL without accessing the link.
- Extract emails and phone numbers from hyperlinks.

## Supported Platforms

```javascript
const supportedPlatforms = SocialsRegex.Platforms.all;
// Output: ['PLATFORM_FACEBOOK', 'PLATFORM_GITHUB', 'PLATFORM_LINKEDIN', 'PLATFORM_TWITTER', 'PLATFORM_INSTAGRAM', 'PLATFORM_YOUTUBE', ...]
```

## Supported Regexes

```javascript
const supportedRegexes = SocialsRegex.Regexes.all;
// Output: ['ANGELLIST_URL_REGEX', 'CRUNCHBASE_URL_REGEX', 'EMAIL_URL_REGEX', 'FACEBOOK_URL_REGEX', 'GITHUB_URL_REGEX', 'HACKERNEWS_URL_REGEX', ...]
```

## Development

- Clone the repository: `git clone https://github.com/talaatmagdyx/js_socials_regex.git`
- Install dependencies: `npm install`
- Run tests: `npm test`

## References
- [social-media-profiles-regexs](https://github.com/lorey/social-media-profiles-regexs):
  extract urls of social media profiles with regular expressions
- [Ruby socials_regex](https://github.com/talaatmagdyx/socials_regex) Social Regex Account Detection and Extraction for Ruby. Detect and extract URLs of social accounts: throw in URLs, get back URLs of social media profiles by type.



## Contributing

Bug reports and pull requests are welcome on GitHub at [Contributing](https://github.com/talaatmagdyx/js_socials_regex/blob/master/.github/CONTRIBUTING.md). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/talaatmagdyx/js_socials_regex/blob/master/.github/CODE_OF_CONDUCT.md).

## License

The pakcage is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Reporting Bugs / Feature Requests

Please [open an issue on GitHub](https://github.com/talaatmagdyx/js_socials_regex/issues) for feedback, new feature requests, or bug reports.

## Pull Request

Please read [Contributing](https://github.com/talaatmagdyx/js_socials_regex/blob/master/.github/PULL_REQUEST_TEMPLATE.md)

## Code of Conduct

Everyone interacting in the SocialsRegex project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/talaatmagdyx/js_socials_regex/blob/master/.github/CODE_OF_CONDUCT.md).

