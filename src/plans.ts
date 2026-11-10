// The one hosting plan. Shared by the pricing card and the sign-up form so they can't drift apart.
// The create-checkout function maps the billing interval to the matching Stripe price.
export type BillingInterval = 'month' | 'year';

export const plan = {
	name: 'MyHostAdvantage Hosting',
	monthly: 50,
	yearly: 500,
	blurb: 'One plan with everything included. Your site is ready minutes after you sign up.',
	features: [
		{ label: 'WordPress website', detail: '1' },
		{ label: 'Storage', detail: '10 GB' },
		{ label: 'Monthly bandwidth', detail: '50 GB' },
		{ label: 'SSL certificate, CDN and firewall', detail: 'Included' },
		{ label: 'Daily backups, kept 30 days', detail: 'Included' },
		{ label: 'Uptime monitoring', detail: 'Included' },
		{ label: 'Free migration of your current site', detail: 'Included' },
		{ label: 'Domain and DNS setup help', detail: 'Included' },
	],
};
