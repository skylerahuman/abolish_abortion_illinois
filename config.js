/**
 * APPLICATION CONFIGURATION
 * This file consolidates environment variables and defaults.
 */

const CONFIG = {
    // Priority: window.ENV (local script) > Fallback
    API_URL: (typeof window.ENV !== 'undefined' && window.ENV.SHEET_API_URL) 
             ? window.ENV.SHEET_API_URL 
             : "https://docs.google.com/forms/d/e/1FAIpQLSdxwvMe6dwmsrKUiMt_le52iHjFKV91BQz5v9GcdrB8kl0GXQ/formResponse",
             
    API_KEY: (typeof window.ENV !== 'undefined' && window.ENV.API_KEY) 
             ? window.ENV.API_KEY 
             : ""
};

// Export for potential use in build scripts, or just use globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
