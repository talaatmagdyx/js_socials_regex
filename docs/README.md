# Socials Regex Library - Developer's Playground

Welcome to the Socials Regex library, where extracting social media information from text becomes a breeze! 🚀

## Overview

Tired of battling with complex regex patterns to find social media links in your text? Look no further! Socials Regex is here to make your developer life more enjoyable. This library provides predefined regex patterns for various social media platforms, saving you from the regex headache.

## Installation

Getting started is as easy as sipping your favorite coffee. Install the Socials Regex library using npm:

```bash
npm install socials-regex
```

## Let's Dive In!

### Importing the Magic

```javascript
const {
  PlatformsRegex,
  SocialExtraction,
  SocialsRegex,
} = require("socials-regex");
```

### PlatformsRegex Class

#### Magic Properties

- **REGEX**: A treasure chest of predefined regex patterns for various social media platforms.

```javascript
console.log(PlatformsRegex.REGEX);
```

#### Secrets Unveiled

- **supportedPlatformsRegex()**: Discover the array of supported platform regex keys.

```javascript
console.log(PlatformsRegex.supportedPlatformsRegex());
```

- **allPlatform**: Unlock the array containing all supported platform regex keys.

```javascript
console.log(PlatformsRegex.allPlatform);
```

### SocialExtraction Class

#### Enchanting Methods

- **extractMatchesPerPlatform(text)**: Witness the magic of extracting matches for each social media platform within the provided text.

```javascript
const text = "Hello https://twitter.com/example_twitter";
const matchesPerPlatform = SocialExtraction.extractMatchesPerPlatform(text);
console.log(matchesPerPlatform);
```

- **extractMatchesByRegex(regex, text)**: Cast a spell to extract matches based on the provided regex pattern within the text.

```javascript
const regex = PlatformsRegex.REGEX.twitter.user;
const twitterMatches = SocialExtraction.extractMatchesByRegex(regex, text);
console.log("Twitter matches:", twitterMatches);
```

- **extractMatchesByPlatform(platform, text)**: Perform wizardry to extract matches based on regex patterns defined for a specific social media platform.

```javascript
const platform = SocialsRegex.Platforms.PLATFORM_TWITTER;
const twitterMatches = SocialExtraction.extractMatchesByPlatform(
  platform,
  text,
);
console.log("Twitter matches:", twitterMatches);
```

#### Behind the Curtain

- **matches({ regex, text })**: Peek behind the curtain to see how matches are extracted based on a provided regex pattern within the text.

- **platformMatches({ regexes, platform, text })**: Discover the magic of handling match extraction for a specific social media platform.

- **reformatMatches(matches)**: Witness the transformation of matches obtained from the regex matching process.

## Developer's Playground

Now, let's put the library to the test with an example:

```javascript
const { SocialsRegex, SocialExtraction } = require("socials-regex");

const text = `
  Check out my GitHub: https://github.com/example_user
  Also, find me on Twitter: https://twitter.com/example_twitter
  Contact me on LinkedIn: https://linkedin.com/in/example_linkedin
`;

const matchesPerPlatform = SocialExtraction.extractMatchesPerPlatform(text);
console.log("Matches per platform:", matchesPerPlatform);

const twitterMatches = SocialExtraction.extractMatchesByPlatform(
  "PLATFORM_TWITTER",
  text,
);
console.log("Twitter matches:", twitterMatches);

const githubMatches = SocialExtraction.extractMatchesByRegex(
  "GITHUB_URL_REGEX",
  text,
);
console.log("GitHub matches:", githubMatches);
```

Happy coding! 🚀🔮
