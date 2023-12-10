// Define the SocialsRegex module for handling social platform regex patterns
const SocialsRegex = {};

// Define the Platforms class in the module
SocialsRegex.Platforms = {
    PLATFORM_FACEBOOK: 'facebook',
    PLATFORM_GITHUB: 'github',
    PLATFORM_LINKEDIN: 'linkedin',
    PLATFORM_TWITTER: 'twitter',
    PLATFORM_INSTAGRAM: 'instagram',
    PLATFORM_YOUTUBE: 'youtube',
    PLATFORM_EMAIL: 'email',
    PLATFORM_HACKER_NEWS: 'hackernews',
    PLATFORM_MEDIUM: 'medium',
    PLATFORM_PHONE: 'phone',
    PLATFORM_REDDIT: 'reddit',
    PLATFORM_SKYPE: 'skype',
    PLATFORM_SNAPCHAT: 'snapchat',
    PLATFORM_STACKEXCHANGE: 'stackexchange',
    PLATFORM_STACKOVERFLOW: 'stackoverflow',
    PLATFORM_TELEGRAM: 'telegram',
    PLATFORM_VIMEO: 'vimeo',
    PLATFORM_XING: 'xing',
    PLATFORM_ANGELLIST: 'angellist',
    PLATFORM_CRUNCHBASE: 'crunchbase',
    PLATFORM_STACKEXCHANGE_NETWORK: 'stackexchange network',
    PLATFORM_WHATSAPP: 'whatsapp',
    PLATFORM_YELP: 'yelp',

    // Define the 'all' and 'show' methods in the Platforms class
    all: function() {
        return Object.keys(this);
    },

    show: function(const_name) {
        return this[const_name] || '';
    }
};

// Define the Regexes class in the module
SocialsRegex.Regexes = {
    ANGELLIST_URL_REGEX: {
        // https://angel.co/company/twitter, https://angel.co/company/twitter/culture
        company: /(?:https?:)?\/\/angel\.co\/company\/(?<company>[A-Za-z0-9_-]+)(?:\/(?<company_subpage>[A-Za-z0-9-]+))?/,
        // https://angel.co/company/twitter/jobs/576275-engineering-manager
        job: /(?:https?:)?\/\/angel\.co\/company\/(?<company>[A-Za-z0-9_-]+)\/jobs\/(?<job_permalink>(?<job_id>[0-9]+)-(?<job_slug>[A-Za-z0-9-]+))/,
        // https://angel.co/p/naval, https://angel.co/u/karllorey
        user: /(?:https?:)?\/\/angel\.co\/(?<type>u|p)\/(?<user>[A-Za-z0-9_-]+)/
    },

    CRUNCHBASE_URL_REGEX: {
        // http://crunchbase.com/organization/acme-corp
        company: /(?:https?:)?\/\/crunchbase\.com\/organization\/(?<organization>[A-Za-z0-9_-]+)/,
        // http://crunchbase.com/person/karl-lorey
        person: /(?:https?:)?\/\/crunchbase\.com\/person\/(?<person>[A-Za-z0-9_-]+)/
    },

    EMAIL_URL_REGEX: {
        // jeff@amazon.com, mailto:jeff@amazon.com, mailto:plususer+test@gmail.com
        email: /(?:mailto:)?(?<email>[A-Za-z0-9_.+-]+@[A-Za-z0-9_.-]+\.[A-Za-z]+)/,
        email_without_extract: /\A[\w+\-.]+@[a-z\d-]+(\.[a-z\d-]+)*\.[a-z]+\z/i
    },
    FACEBOOK_URL_REGEX: {
        // http://fb.com/peter_parker-miller, https://facebook.com/peter.parker, https://facebook.com/peterparker
        username: /(?:https?:)?\/\/(?:www\.)?(?:facebook|fb)\.com\/(?<profile>(?![A-Za-z]+\.php)(?!marketplace|gaming|watch|me|messages|help|search|groups)[A-Za-z0-9_\-.]+)\/?/,
        // https://www.facebook.com/100004123456789, https://www.facebook.com/profile.php?id=100004123456789
        profile_id: /(?:https?:)?\/\/(?:www\.)?facebook\.com\/(?:profile\.php\?id=)?(?<id>[0-9]+)/
    },
    GITHUB_URL_REGEX: {
        // https://github.talaatmagdyx/socials_regexcom/
        repo: /(?:https?:)?\/\/(?:www\.)?github\.com\/(?<login>[A-Za-z0-9_-]+)\/(?<repo>[A-Za-z0-9_-]+)\/?/,
        // https://github.com/talaatmagdyx
        user: /(?:https?:)?\/\/(?:www\.)?github\.com\/(?<login>[A-Za-z0-9_-]+)\/?/
    },
    HACKERNEWS_URL_REGEX: {
        // An item can be a post or a direct link to a comment.
        // https://news.ycombinator.com/item?id=23290375
        item: /(?:https?:)?\/\/news\.ycombinator\.com\/item\?id=(?<item>[0-9]+)/,
        // https://news.ycombinator.com/user?id=CamelCaps
        user: /(?:https?:)?\/\/news\.ycombinator\.com\/user\?id=(?<user>[A-Za-z0-9_-]+)/
    },
    INSTAGRAM_URL_REGEX: {
        // The rules:
        //  Matches with one . in them disco.dude but not two .. disco..dude
        //  Ending period not matched discodude.
        //  Match underscores _disco__dude
        //  Max characters of 30 1234567890123456789012345678901234567890
        //  https://instagram.com/__disco__dude
        profile: /(?:https?:)?\/\/(?:www\.)?(?:instagram\.com|instagr\.am)\/(?<username>[A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/
    },
    LINKEDIN_URL_REGEX: {
        // https://fr.linkedin.com/school/université-grenoble-alpes/
        company: /(?:https?:)?\/\/(?:\w+\.)?linkedin\.com\/(?<company_type>(?:company|school))\/(?<company_permalink>[A-Za-z0-9\-À-ÿ.]+)\/?/,
        // https://www.linkedin.com/feed/update/urn:li:activity:6665508550111912345/
        post: /(?:https?:)?\/\/(?:\w+\.)?linkedin\.com\/feed\/update\/urn:li:activity:(?<activity_id>[0-9]+)\/?/,
        // https://www.linkedin.com/in/talaatmagdyx/
        profile: /(?:https?:)?\/\/(?:\w+\.)?linkedin\.com\/in\/(?<permalink>[\w\-_À-ÿ%]+)\/?/
    },
    MEDIUM_URL_REGEX: {
        // https://medium.com/does-exist/some-post-123abc
        post: /(?:https?:)?\/\/medium\.com\/(?:(?:@(?<username>[A-Za-z0-9]+))|(?<publication>[a-z-]+))\/(?<slug>[a-z0-9-]+)-(?<post_id>[A-Za-z0-9]+)(?:\?.*)?/,
        // https://onezero.medium.com/what-facebooks-remote-work-policy-means-for-the-future-of-tech-salaries-everywhere-edf859226b62?source=grid_home------
        post_of_subdomain_publication: /(?:https?:)?\/\/(?<publication>(?!www)[a-z-]+)\.medium\.com\/(?<slug>[a-z0-9-]+)-(?<post_id>[A-Za-z0-9]+)(?:\?.*)?/,
        // https://medium.com/@talaatmagdyx
        user: /(?:https?:)?\/\/medium\.com\/@(?<username>[A-Za-z0-9]+)(?:\?.*)?/,
        // Now redirects to new user profiles. Follow with a head or get request.
        // https://medium.com/u/b3d3d3653c2c?source=post_page-----da92b81b85ef----------------------
        user_by_id: /(?:https?:)?\/\/medium\.com\/u\/(?<user_id>[A-Za-z0-9]+)(?:\?.*)/
    },
    PHONE_URL_REGEX: {
        // Should be cleaned afterwards to strip dots, spaces, etc.
        // tel:+49 900 123456
        // tel:+49900123456
        number: /(?:tel|phone|mobile):(?<number>\+?[0-9. -]+)/
    },
    REDDIT_URL_REGEX: {
        // https://old.reddit.com/user/ar-guetita
        // https://reddit.com/u/ar-guetita
        user: /(?:https?:)?\/\/(?:[a-z]+\.)?reddit\.com\/(?:u(?:ser)?)\/(?<username>[A-Za-z0-9\-_]*)\/?/
    },
    SKYPE_URL_REGEX: {
        // Matches Skype's URLs to add contact, call, chat. More info at Skype SDK's docs.
        // Examples:
        // skype:echo123
        // skype:echo123?call
        profile: /(?:(?:callto|skype):)(?<username>[a-z][a-z0-9.,\-_]{5,31})(?:\?(?:add|call|chat|sendfile|userinfo))?/
    },
    SNAPCHAT_URL_REGEX: {
        // https://www.snapchat.com/add/example_user/
        profile: /(?:https?:)?\/\/(?:www\.)?snapchat\.com\/add\/(?<username>[A-Za-z0-9._-]+)\/?/
    },
    STACKEXCHANGE_URL_REGEX: {
        // This is the meta-platform above stackoverflow, etc. Username can be changed at any time, user_id is persistent.
        //  https://www.stackexchange.com/users/12345/example_user/
        user: /(?:https?:)?\/\/(?:www\.)?stackexchange\.com\/users\/(?<id>[0-9]+)\/(?<username>[A-Za-z0-9\-_.]+)\/?/
    },
    STACKEXCHANGE_NETWORK_URL_REGEX: {
        // While there are some "named" communities in the stackexchange network like stackoverflow,
        // many only exist as subdomains, i.e. gaming.stackexchange.com.
        // Again, username can be changed at any time, user_id is persistent.
        // https://gaming.stackexchange.com/users/304007/talaat-magdy
        user: /(?:https?:)?\/\/(?:(?<community>[a-z]+(?!www))\.)?stackexchange\.com\/users\/(?<id>[0-9]+)\/(?<username>[A-Za-z0-9\-_.]+)\/?/
    },
    STACKOVERFLOW_URL_REGEX: {
        // https://stackoverflow.com/questions/12345/how-to-embed
        question: /(?:https?:)?\/\/(?:www\.)?stackoverflow\.com\/questions\/(?<id>[0-9]+)\/(?<title>[A-Za-z0-9\-_.]+)\/?/,
        // Username can be changed at any time, user_id is persistent.
        // https://stackoverflow.com/users/13916928/talaat-magdy
        user: /(?:https?:)?\/\/(?:www\.)?stackoverflow\.com\/users\/(?<id>[0-9]+)\/(?<username>[A-Za-z0-9\-_.]+)\/?/
    },
    TELEGRAM_URL_REGEX: {
        // Matches for t.me, telegram.me and telegram.org.
        // Examples:
        // https://t.me/example_username/
        profile: /(?:https?:)?\/\/(?:t(?:elegram)?\.me|telegram\.org)\/(?<username>[a-z0-9_]{5,32})\/?/
    },
    TWITTER_URL_REGEX: {
        // https://twitter.com/karllorey/status/1259924082067374088
        status: /(?:https?:)?\/\/(?:[A-Za-z]+\.)?twitter\.com\/@?(?<username>[A-Za-z0-9_]+)\/status\/(?<tweet_id>[0-9]+)\/?/,
        // Allowed for usernames are alphanumeric characters and underscores.
        // http://twitter.com/@talaatmagdyx
        // http://twitter.com/talaatmagdyx
        // https://twitter.com/talaatmagdyx
        user: /(?:https?:)?\/\/(?:[A-Za-z]+\.)?twitter\.com\/@?(?!home|share|privacy|tos)(?<username>[A-Za-z0-9_]+)\/?/
    },
    VIMEO_URL_REGEX: {
        // https://vimeo.com/user12345
        user: /(?:https?:)?\/\/vimeo\.com\/user(?<id>[0-9]+)/,
        // https://vimeo.com/123456789
        // https://player.vimeo.com/video/148751763
        video: /(?:https?:)?\/\/(?:(?:www\.)?vimeo\.com|player\.vimeo\.com\/video)\/(?<id>[0-9]+)/
    },
    XING_URL_REGEX: {
        // Default slugs are Firstname_Lastname. If several people with the same name exist, a number is appended.
        // https://www.xing.com/profile/Tobias_Zilbersahn5
        profile: /(?:https?:)?\/\/(?:www\.)?xing\.com\/profile\/(?<slug>[A-z0-9\-_]+)/
    },
    YOUTUBE_URL_REGEX: {
        // https://www.youtube.com/channel/UCxyz123456789
        channel: /(?:https?:)?\/\/(?:[A-z]+\.)?youtube\.com\/channel\/(?<id>[A-z0-9\-_]+)/,
        // https://www.youtube.com/user/username123
        user: /(?:https?:)?\/\/(?:[A-z]+\.)?youtube\.com\/user\/(?<username>[A-z0-9]+)/,
        // https://www.youtube.com/watch?v=dQw4w9WgXcQ
        // https://www.youtube.com/watch?v=dQw4w9WgXcQ
        // https://www.youtube.com/embed/dQw4w9WgXcQ
        // https://www.youtube.com/watch?v=6_b7RDuLwcI
        video: /(?:https?:)?\/\/(?:(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)(?<id>[A-z0-9\-_]+)/
    },

    WHATSAPP_URL_REGEX: {
        // https://wa.me/1234567890
        phone: /(?:https?:)?\/\/(?:wa\.me\/)(?<number>\+?[0-9. -]+)/
    },

    YELP_URL_REGEX: {
        // https://www.yelp.com/biz/example-business
        company: /(?:https?:\/\/)?(?:www\.)?yelp\.com\/biz\/(?<company>[A-Za-z0-9_-]+)/
    },

    isMatch: function(input_str, regex) {
        return regex.test(input_str);
    },

    // Define the 'all' method in the Regexes class
    all: function() {
        return Object.keys(this);
    }
};

// Export the SocialsRegex module for use in other files
module.exports = SocialsRegex;
