// Public, browser-safe settings. Never put a Supabase secret or service_role key here.
// Shared Digicomb Supabase project (also used by missional.io, digitalhoneycomb.com and dreamdrivenmoney.com).
export const SUPABASE_URL = 'https://trpfvlxoxsprjzenuhti.supabase.co';
export const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_bCCBqRlktzqNmxtHXv2gRQ_NBcW0Qgr';
// Edge Functions that handle sign-up, Stripe checkout and the one-time credentials page.
export const FUNCTIONS_URL = `${SUPABASE_URL}/functions/v1`;

// Flip to true once Stripe checkout and provisioning have passed an end-to-end test.
// While false, the sign-up section shows an "opening soon" notice instead of the form.
export const SIGNUPS_OPEN = false;
