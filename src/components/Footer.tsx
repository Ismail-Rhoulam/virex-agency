import { Flex, Text, IconButton } from '@/once-ui/components';


export const Footer = () => {

    const currentYear = new Date().getFullYear();
    const wtsp = "https://wa.me/+212663037739"
	const ig = "https://www.instagram.com/virex_agency/"
    const gh = "https://github.com/Ismail-Rhoulam/virex-agency"
    const mailto = "mailto:contact@virex.agency"

    return (

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
                    
                    <IconButton
                        href={mailto} tooltip="Mail" tooltipPosition="top"
                        icon="mail" size="s" variant="tertiary"/>
                    
                    <IconButton
                        href={gh} tooltip="Github" tooltipPosition="top"
                        icon="github" size="s" variant="tertiary"/>

                </Flex>

            </Flex>

        </Flex>
    )
}