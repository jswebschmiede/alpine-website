// vite.config.js
export default {
    // Base public path when served in production
    base: '/',
    publicDir: 'src/assets',

    // Development server configuration
    server: {
        port: 3000, // Development server port
        open: true, // Open the browser automatically
    },

    // Build configuration
    build: {
        outDir: 'dist', // Output directory for production build
        assetsDir: 'assets', // Directory for static assets
        sourcemap: false, // Generate source maps
        manifest: true, // Generate manifest file
        rollupOptions: {
            input: {
                main: 'src/main.js',
            },

            // Output configuration
            output: {
                entryFileNames: 'js/[name].js', // Output file name
                assetFileNames: 'css/[name].[ext]', // Output file name for assets
            },
        },
    },
};
