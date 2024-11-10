import "@/ui/styles/index.scss";
import "@/ui/tokens/index.scss";


import Head from 'next/head';
import classNames from 'classnames';
import { Header, Footer } from "@/components";
import { Flex, Background} from '@/ui/components';
import { Source_Code_Pro } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Flex
            as="html"
            lang="en"
            fillHeight
            background="page"
            className={classNames(
                primary.variable,
                secondary.variable,
                tertiary.variable,
                code.variable,
                'root'
            )}
        >
            <Flex as="body" direction="column" fillWidth margin="0" padding="0">
                <Header /> {/* Move header to be directly inside the body */}
                <Background
                    mask="cursor"
                    gradient={{ display: true }}
                    dots={{ display: true }}
                    lines={{ display: true }}
                />
                <Flex fillWidth paddingY="l" paddingX="l" justifyContent="center" flex={1} zIndex={1}>
                    <Flex justifyContent="center" fillWidth minHeight="0">
                        {children}
                        <Analytics />
                        <SpeedInsights />
                    </Flex>
                </Flex>
                <Footer />
            </Flex>
        </Flex>
    );
}