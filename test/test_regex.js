const { expect } = require('chai');
const SocialsRegex  = require('../src/platforms');

describe(SocialsRegex.Platforms.PLATFORM_ANGELLIST, () => {
    it('Valid # company', () => {
        const inputStr = 'https://angel.co/company/twitter';
        const regex = SocialsRegex.Regexes.ANGELLIST_URL_REGEX.company;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # job', () => {
        const inputStr = 'https://angel.co/company/twitter/jobs/576275-engineering-manager';
        const regex = SocialsRegex.Regexes.ANGELLIST_URL_REGEX.job;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # user ', () => {
        const inputStr = 'https://angel.co/p/naval';
        const  anotherInputStr = 'https://angel.co/u/karllorey';
        const regex = SocialsRegex.Regexes.ANGELLIST_URL_REGEX.user;
        expect(regex.test(inputStr)).to.be.true;
        expect(regex.test(anotherInputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_CRUNCHBASE, () => {
    it('Valid # company', () => {
        const inputStr = 'http://crunchbase.com/organization/acme-corp';
        const regex = SocialsRegex.Regexes.CRUNCHBASE_URL_REGEX.company;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # person', () => {
        const inputStr = 'http://crunchbase.com/person/karl-lorey';
        const regex = SocialsRegex.Regexes.CRUNCHBASE_URL_REGEX.person;
        expect(regex.test(inputStr)).to.be.true;
    });

});

describe(SocialsRegex.Platforms.PLATFORM_EMAIL, () => {
    it('Valid # email', () => {
        const inputStr = 'jeff@amazon.com';
        const regex = SocialsRegex.Regexes.EMAIL_URL_REGEX.email;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # email with mailto', () => {
        const inputStr = 'mailto:plususer+test@gmail.com';
        const regex = SocialsRegex.Regexes.EMAIL_URL_REGEX.email;
        expect(regex.test(inputStr)).to.be.true;
    });

});

describe(SocialsRegex.Platforms.PLATFORM_FACEBOOK, () => {
    it('Valid # username with shortcut', () => {
        const inputStr = 'http://fb.com/peter_parker-miller';
        const regex = SocialsRegex.Regexes.FACEBOOK_URL_REGEX.username;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # username', () => {
        const inputStr = 'https://facebook.com/peterparker';
        const regex = SocialsRegex.Regexes.FACEBOOK_URL_REGEX.username;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # profile_id', () => {
        const inputStr = 'https://www.facebook.com/100004123456789';
        const regex = SocialsRegex.Regexes.FACEBOOK_URL_REGEX.profile_id;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # profile_id with id params', () => {
        const inputStr = 'https://www.facebook.com/profile.php?id=100004123456789';
        const regex = SocialsRegex.Regexes.FACEBOOK_URL_REGEX.profile_id;
        expect(regex.test(inputStr)).to.be.true;
    });


});

describe(SocialsRegex.Platforms.PLATFORM_GITHUB, () => {
    it('Valid # repo', () => {
        const inputStr = 'https://github.com/talaatmagdyx/socials_regex';
        const regex = SocialsRegex.Regexes.GITHUB_URL_REGEX.repo;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # user', () => {
        const inputStr = 'https://github.com/talaatmagdyx';
        const regex = SocialsRegex.Regexes.GITHUB_URL_REGEX.user;
        expect(regex.test(inputStr)).to.be.true;
    });

});

describe(SocialsRegex.Platforms.PLATFORM_HACKER_NEWS, () => {
    it('Valid # item', () => {
        const inputStr = 'https://news.ycombinator.com/item?id=23290375';
        const regex = SocialsRegex.Regexes.HACKERNEWS_URL_REGEX.item;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # user', () => {
        const inputStr = 'https://news.ycombinator.com/user?id=CamelCaps';
        const regex = SocialsRegex.Regexes.HACKERNEWS_URL_REGEX.user;
        expect(regex.test(inputStr)).to.be.true;
    });

});

describe(SocialsRegex.Platforms.PLATFORM_INSTAGRAM, () => {
    it('Valid # profile', () => {
        const inputStr = 'https://instagram.com/talaatmagdyx';
        const regex = SocialsRegex.Regexes.INSTAGRAM_URL_REGEX.profile;
        expect(regex.test(inputStr)).to.be.true;
    });


});

describe(SocialsRegex.Platforms.PLATFORM_LINKEDIN, () => {
    it('Valid # company', () => {
        const inputStr = 'https://fr.linkedin.com/school/université-grenoble-alpes/';
        const regex = SocialsRegex.Regexes.LINKEDIN_URL_REGEX.company;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # post', () => {
        const inputStr = 'https://www.linkedin.com/feed/update/urn:li:activity:6665508550111912345/';
        const regex = SocialsRegex.Regexes.LINKEDIN_URL_REGEX.post;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # profile', () => {
        const inputStr = 'https://www.linkedin.com/in/talaatmagdyx/';
        const regex = SocialsRegex.Regexes.LINKEDIN_URL_REGEX.profile;
        expect(regex.test(inputStr)).to.be.true;
    });

});

describe(SocialsRegex.Platforms.PLATFORM_MEDIUM, () => {
    it('Valid # post', () => {
        const inputStr = 'https://medium.com/does-exist/some-post-123abc';
        const regex = SocialsRegex.Regexes.MEDIUM_URL_REGEX.post;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # post_of_subdomain_publication', () => {
        const inputStr = 'https://onezero.medium.com/what-facebooks-remote-work-policy-means-for-the-future-of-tech-salaries-everywhere-edf859226b62?source=grid_home------';
        const regex = SocialsRegex.Regexes.MEDIUM_URL_REGEX.post_of_subdomain_publication;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # user', () => {
        const inputStr = 'https://medium.com/@talaatmagdyx';
        const regex = SocialsRegex.Regexes.MEDIUM_URL_REGEX.user;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # user_by_id', () => {
        const inputStr = 'https://medium.com/u/b3d3d3653c2c?source=post_page-----da92b81b85ef----------------------';
        const regex = SocialsRegex.Regexes.MEDIUM_URL_REGEX.user_by_id;
        expect(regex.test(inputStr)).to.be.true;
    });


});

describe(SocialsRegex.Platforms.PLATFORM_PHONE, () => {
    it('Valid # number', () => {
        const inputStr = 'tel:+49 900 123456';
        const regex = SocialsRegex.Regexes.PHONE_URL_REGEX.number;
        expect(regex.test(inputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_REDDIT, () => {
    it('Valid # user', () => {
        const inputStr = 'https://old.reddit.com/user/ar-guetita';
        const regex = SocialsRegex.Regexes.REDDIT_URL_REGEX.user;
        expect(regex.test(inputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_SKYPE, () => {
    it('Valid # profile', () => {
        const inputStr = 'skype:echo123?call';
        const regex = SocialsRegex.Regexes.SKYPE_URL_REGEX.profile;
        expect(regex.test(inputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_SNAPCHAT, () => {
    it('Valid # profile', () => {
        const inputStr = 'https://www.snapchat.com/add/example_user/';
        const regex = SocialsRegex.Regexes.SNAPCHAT_URL_REGEX.profile;
        expect(regex.test(inputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_STACKEXCHANGE, () => {
    it('Valid # user', () => {
        const inputStr = 'https://www.stackexchange.com/users/12345/example_user/';
        const regex = SocialsRegex.Regexes.STACKEXCHANGE_URL_REGEX.user;
        expect(regex.test(inputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_STACKEXCHANGE_NETWORK, () => {
    it('Valid # user', () => {
        const inputStr = 'https://gaming.stackexchange.com/users/304007/talaat-magdy';
        const regex = SocialsRegex.Regexes.STACKEXCHANGE_NETWORK_URL_REGEX.user;
        expect(regex.test(inputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_STACKOVERFLOW, () => {
    it('Valid # question', () => {
        const inputStr = 'https://stackoverflow.com/questions/12345/how-to-embed';
        const regex = SocialsRegex.Regexes.STACKOVERFLOW_URL_REGEX.question;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # user', () => {
        const inputStr = 'https://stackoverflow.com/users/13916928/talaat-magdy';
        const regex = SocialsRegex.Regexes.STACKOVERFLOW_URL_REGEX.user;
        expect(regex.test(inputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_TELEGRAM, () => {
    it('Valid # profile', () => {
        const inputStr = 'https://t.me/example_username/';
        const regex = SocialsRegex.Regexes.TELEGRAM_URL_REGEX.profile;
        expect(regex.test(inputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_TWITTER, () => {
    it('Valid # status', () => {
        const inputStr = 'https://twitter.com/karllorey/status/1259924082067374088';
        const regex = SocialsRegex.Regexes.TWITTER_URL_REGEX.status;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # user', () => {
        const inputStr = 'https://twitter.com/talaatmagdyx';
        const regex = SocialsRegex.Regexes.TWITTER_URL_REGEX.user;
        expect(regex.test(inputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_VIMEO, () => {
    it('Valid # user', () => {
        const inputStr = 'https://vimeo.com/user12345';
        const regex = SocialsRegex.Regexes.VIMEO_URL_REGEX.user;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # video', () => {
        const inputStr = 'https://vimeo.com/123456789';
        const regex = SocialsRegex.Regexes.VIMEO_URL_REGEX.video;
        expect(regex.test(inputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_XING, () => {
    it('Valid # profile', () => {
        const inputStr = 'https://www.xing.com/profile/Tobias_Zilbersahn5';
        const regex = SocialsRegex.Regexes.XING_URL_REGEX.profile;
        expect(regex.test(inputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_YOUTUBE, () => {
    it('Valid # channel', () => {
        const inputStr = 'https://www.youtube.com/channel/UCxyz123456789';
        const regex = SocialsRegex.Regexes.YOUTUBE_URL_REGEX.channel;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # user', () => {
        const inputStr = 'https://www.youtube.com/user/username123';
        const regex = SocialsRegex.Regexes.YOUTUBE_URL_REGEX.user;
        expect(regex.test(inputStr)).to.be.true;
    });

    it('Valid # video', () => {
        const inputStr = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        const regex = SocialsRegex.Regexes.YOUTUBE_URL_REGEX.video;
        expect(regex.test(inputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_WHATSAPP, () => {
    it('Valid # phone', () => {
        const inputStr = 'https://wa.me/1234567890';
        const regex = SocialsRegex.Regexes.WHATSAPP_URL_REGEX.phone;
        expect(regex.test(inputStr)).to.be.true;
    });
});

describe(SocialsRegex.Platforms.PLATFORM_YELP, () => {
    it('Valid # company', () => {
        const inputStr = 'https://www.yelp.com/biz/example-business';
        const regex = SocialsRegex.Regexes.YELP_URL_REGEX.company;
        expect(regex.test(inputStr)).to.be.true;
    });
});
