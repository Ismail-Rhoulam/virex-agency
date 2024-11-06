"use client";

import React from 'react';
import { Heading, Flex, Button, InlineCode, Logo, LetterFx, Badge } from '@/once-ui/components';

export default function Home() {

	const currentYear = new Date().getFullYear();
	const wtsp = "https://wa.me/+212663037739"

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl">
							<Logo size="l" icon={false} style={{zIndex: '1'}}/>
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<InlineCode
								className="shadow-m"
								style={{
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))'}}>
								Start by Building Connections, <span className="brand-on-background-medium">Finish with Lasting Impressions.</span>
							</InlineCode>
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										trigger="instant">
										Helping Brands Tell Stories and Stories Build Brands.
									</LetterFx>
								</span>
							</Heading>
							<Badge
								arrow
								effect
								href={wtsp}>
								Book an appointment 
							</Badge>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
