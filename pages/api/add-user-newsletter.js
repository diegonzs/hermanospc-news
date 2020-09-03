import Mailchimp from 'mailchimp-api-v3';

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

export default async (req, res) => {
	if (req.method === 'POST') {
		const { email } = JSON.parse(req.body);
		try {
			await mailchimp.post(
				{
					path: `/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
				},
				{
					email_address: email,
					status: 'subscribed',
				}
			);
			res.statusCode = 200;
			res.json({ message: 'ok' });
		} catch (error) {
			res.statusCode = 200;
			res.json({ error });
		}
	}
};
