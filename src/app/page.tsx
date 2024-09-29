import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';

import { about, baseURL, home, newsletter, person, routes } from '@/app/resources'
import { Mailchimp } from '@/app/components';
import { Posts } from '@/app/blog/components/Posts';

export function generateMetadata() {
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home() {
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="column"
				paddingY="l" gap="m">
					<Flex
						direction="column"
						fillWidth maxWidth="s" gap="m">
						<RevealFx translateY="4">
							<Heading
								wrap="balance"
								variant="display-strong-l">
								{home.headline}
							</Heading>
						</RevealFx>
						
						<RevealFx translateY="8" delay={0.2}>
							<Text
								wrap="balance"
								onBackground="neutral-weak"
								variant="body-default-l">
								{home.subline}
							</Text>
						</RevealFx>
					</Flex>

				
			</Flex>

			
			<Projects range={[2]}/>
			{ newsletter.display &&
				<>
		<div className="flex gap-10 p-8">
      {/* Starter Plan */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center m-8">
        <h2 className="text-xl font-semibold mb-4 pl-16">Starter</h2>
        <p className="text-3xl font-bold pl-16 mb-4">$10<span className="text-base">/month</span></p>
        <ul className="mb-4 space-y-2">
          <li className="border-b pb-2">Feature 1sdkfjnskdjnfkjsdnfksj</li>
          <li className="border-b pb-2">Feature 2</li>
          <li className="border-b pb-2">Feature 3</li>
        </ul>
		<div className='max-h-[2px'>
			<Button
				id="mc-embedded-subscribe"
				value="Subscribe"
				size="s"
				fillWidth>
				Compre agora
			</Button>
		</div>
      </div>

      {/* Pro Plan */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center m-8">
        <h2 className="text-xl font-semibold mb-4 pl-16">Pro</h2>
        <p className="text-3xl font-bold mb-4 pl-16">$30<span className="text-base">/month</span></p>
        <ul className="mb-4 space-y-2">
          <li className="border-b pb-2">Feature 1 1sdkfjnskdjnfkjsdnfksj</li>
          <li className="border-b pb-2">Feature 2</li>
          <li className="border-b pb-2">Feature 3</li>
        </ul>
        <Button
			id="mc-embedded-subscribe"
			value="Subscribe"
			size="s"
			fillWidth>
			Compre agora
		</Button>
      </div>

      {/* Pro+ Plan */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center m-8">
        <h2 className="text-xl font-semibold mb-4 pl-16">Pro+</h2>
        <p className="text-3xl font-bold mb-4 pl-16">$50<span className="text-base">/month</span></p>
        <ul className="mb-4 space-y-2">
          <li className="border-b pb-2">Feature 1 1sdkfjnskdjnfkjsdnfksj</li>
          <li className="border-b pb-2">Feature 2</li>
          <li className="border-b pb-2">Feature 3</li>
        </ul>
        <Button
			id="mc-embedded-subscribe"
			value="Subscribe"
			size="s"
			fillWidth>
			Compre agora
		</Button>
      </div>
    </div>

					<Mailchimp/>
				</>
			}
		</Flex>
	);
}
