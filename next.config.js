module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        compiler: {
            relay: {
              // This should match relay.config.js
              src: './src',
              artifactDirectory: './src/__generated__/relay',
              language: 'typescript',
            },
        },

        // https://stackoverflow.com/questions/67478532/module-not-found-cant-resolve-fs-nextjs
        future: {
            webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
            // Looks like backward compatibility approach.
        },
        webpack(config) {
            config.resolve.fallback = {
                ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
                    // by next.js will be dropped. Doesn't make much sense, but how it is
                fs: false, // the solution
            };

            return config;
        }
    };

    return nextConfig;
}