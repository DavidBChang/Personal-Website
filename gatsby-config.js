module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-embed-video",
                        options: {
                            width: 800,
                            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                            height: 400, // Optional: Overrides optional.ratio
                            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
                            urlOverrides: [
                                {
                                    id: 'youtube',
                                    embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                                }
                            ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
                            containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
                        }
                    }
                ]
            }
        },
        `gatsby-plugin-mdx`,
        "gatsby-remark-embed-video",
        "gatsby-remark-responsive-iframe",
        "gatsby-remark-prismjs",
        "gatsby-remark-images",
    ],
};
