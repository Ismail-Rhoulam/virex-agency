"use client";

import React from 'react';
import { Heading, Text, Flex, IconButton, Button, InlineCode, Logo, Background, LetterFx } from '@/once-ui/components';

export default function Home() {

	const currentYear = new Date().getFullYear();
	const wtsp = "https://wa.me/+212603915218?text=Hey"
	const ig = "https://www.instagram.com/virex_agency/"

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Background
				dots={false} lines={false} shootingStars={true}/>
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
							<Button
								href={wtsp}
								suffixIcon="chevronRight"
								variant="secondary">
								Book an appointment 
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Flex>

			<Flex 
				as="footer"
				position="relative"
				fillWidth padding="8"
				justifyContent="center">
				
				<Flex
                fillWidth maxWidth="m" paddingY="4" paddingX="16"
                justifyContent="space-between" alignItems="center">

					<Text
						variant="body-default-s" onBackground="neutral-weak">
						© {currentYear} VIREX Agency, All Rights Reserved
					</Text>

					<Flex
						gap="24"
						paddingY="s">
						<IconButton
							href={ig} tooltip="Instagram" tooltipPosition="top"
							icon="instagram" size="s" variant="tertiary"/>

						<IconButton
							href={wtsp} tooltip="Whatsapp" tooltipPosition="top"		
							icon="whatsapp" size="s" variant="tertiary"/>
					</Flex>
					
				</Flex>

			</Flex> {/* footer */}

		</Flex>
	);
}
