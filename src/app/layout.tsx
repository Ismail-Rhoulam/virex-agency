import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from 'classnames';
import { Footer } from "@/components";
import { Inter } from 'next/font/google';
import { Source_Code_Pro } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { Flex, Background} from '@/once-ui/components';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Sora, Raleway } from "next/font/google"

const primary = Raleway({
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap'
});

const secondary = Sora({
    variable: '--font-secondary',
    subsets: ['latin'],
    display: 'swap'
});

const tertiary: FontConfig | undefined = undefined;

type FontConfig = {
    variable: string;
};

const code = Source_Code_Pro({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<Flex
			as="html" lang="en"
			fillHeight background="page"
			data-theme="dark"
			data-brand="blue"
			data-accent="orange"
			data-neutral="slate"
			data-border="conservative"
			data-solid="contrast"
			data-solid-style="flat"
			data-surface="translucent"
			data-transition="all"
			className={classNames(
				primary.variable,
				secondary ? secondary.variable : '',
				tertiary ? tertiary.variable : '',
				code.variable,
				'root')}>
{/* style={{minHeight: '100vh'}} */}
			<Flex 
				as="body"
				direction="column"
				fillWidth fillHeight margin="0" padding="0">
				
				<Background
						gradient={true}
						dots={true}
						lines={true}/>

				<Flex
					flex={1} direction="column">
					{children}
					<Analytics />
					<SpeedInsights />
				</Flex>

				<Footer />

			</Flex> {/* body */}
		</Flex>
	);
}