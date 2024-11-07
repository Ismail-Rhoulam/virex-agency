import { Flex, Text, IconButton } from '@/ui/components';
import { render } from '@/app/resources'


export const Footer = () => {

    const currentYear = new Date().getFullYear();
    const { socials } = render();

    return (

        <Flex
            as="footer"
            position="relative"
            fillWidth padding="8"
            justifyContent="center">

            <Flex
                paddingY="4" paddingX="16"
                justifyContent="space-between" alignItems="center">
                
                <Text
                    variant="body-default-s" onBackground="neutral-weak">
                    © {currentYear} VIREX Agency, All Rights Reserved
                </Text>

                <Flex
                    gap="24"
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

        </Flex>
    )
}