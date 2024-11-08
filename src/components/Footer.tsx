import { Flex, Text, IconButton } from '@/ui/components';
import styles from './Footer.module.scss';
import { render } from '@/app/resources';


export const Footer = () => {

    const currentYear = new Date().getFullYear();
    const { socials } = render();

    return (

        <Flex
            as="footer"
            position="relative"
            fillWidth padding="8"
            justifyContent="center" mobileDirection="column">

            <Flex
                className={styles.mobile}
                fillWidth maxWidth="m" paddingY="4" paddingX="16"
                justifyContent="space-between" alignItems="center">
                
                <Text
                    variant="body-default-s" onBackground="neutral-strong">
                    © {currentYear} VIREX Agency, All Rights Reserved
                </Text>

                <Flex
                    gap="16"
                    paddingY="s">
                    
                    {socials.map((item) => (
                        item.link && (
                            <IconButton
                                key={item.name}
                                href={item.link}
                                icon={item.icon}
                                tooltip={item.name}
                                variant='ghost'
                                size='s'/>
                        )
                    ))}

                </Flex>

            </Flex>
            {/* <Flex height="80" show='s'></Flex> */}
        </Flex>
    )
}