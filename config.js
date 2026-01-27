/**
 * APPLICATION CONFIGURATION
 * This file consolidates environment variables and defaults.
 */

const CONFIG = {
    // Priority: window.ENV (local script) > Fallback
    API_URL: (typeof window.ENV !== 'undefined' && window.ENV.SHEET_API_URL) 
             ? window.ENV.SHEET_API_URL 
             : "YOUR_PRODUCTION_API_URL_HERE",
             
    API_KEY: (typeof window.ENV !== 'undefined' && window.ENV.API_KEY) 
             ? window.ENV.API_KEY 
             : ""
};

// Export for potential use in build scripts, or just use globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
