'use client';

import React from "react";
import { usePathname } from 'next/navigation'
import { routes, render } from "@/app/resources";
import { Flex, ToggleButton } from "@/ui/components";
import styles from './Header.module.scss'

export const Header = () => {

    const pathname = usePathname() ?? '';
    const { home, about } = render();

    return (
        <>
            <Flex
                className={styles.mask}
                position="fixed" zIndex={0}
                fillWidth minHeight='160' justifyContent="center">
            </Flex>

            <Flex
                paddingTop='24'
                as="header" zIndex={1000}
                style={{height: 'fit-content'}}
                className={styles.position} fillWidth
                aria-hidden={false}
                paddingX="8" paddingBottom="8" justifyContent="center">
                
                <Flex
                    paddingLeft="m" fillWidth
                    alignItems="center"
                    textVariant="body-default-s">
                    <Flex></Flex>
                </Flex>
                <Flex fillWidth justifyContent="center">
                    <Flex
                        background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l" padding="4" justifyContent="center">
                        <Flex
                            gap="4"
                            textVariant="body-default-s">
                            { routes['/'] && (
                                <ToggleButton
                                    href="/"
                                    size="m"
                                    prefixIcon="home"
                                    selected={pathname === '/'}>
                                    <Flex paddingX="2" hide="s">{home.label}</Flex>
                                </ToggleButton>
                                    
                            )}
                            { routes['/about'] && (
                                <ToggleButton
                                    href="/about"
                                    size="m"
                                    prefixIcon="person"
                                    selected={pathname === '/about'}>
                                    <Flex paddingX="2" hide="s">{about.label}</Flex>
                                </ToggleButton>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
                <Flex fillWidth justifyContent="flex-end" alignItems="center">
                </Flex>
            </Flex>

        </>
    )
}
