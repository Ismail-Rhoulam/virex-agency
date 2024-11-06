import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from 'classnames';
import { Header, Footer } from "@/components";
import { Source_Code_Pro } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { Flex, Background} from '@/once-ui/components';
import { Sora, Raleway, Work_Sans } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';


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

const tertiary = Work_Sans({
    variable: '--font-tertiary',
    subsets: ['latin'],
    display: 'swap'
});

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
			data-border="playful"
			data-solid="contrast"
			data-solid-style="flat"
			data-surface="translucent"
			data-transition="all"
			className={classNames(
				primary.variable,
				secondary.variable,
				tertiary.variable,
				code.variable,
				'root')}>
					
			<Flex 
				as="body"
				direction="column"
				fillWidth fillHeight margin="0" padding="0">
				
				<Header />

				<Background
						mask="cursor"
						gradient={{
							display: true
						  }}
						dots={{
							display: true
						  }}
						lines={{
							display: true
						  }}/>

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