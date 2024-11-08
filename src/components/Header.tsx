'use client';

import React from "react";
import { usePathname } from 'next/navigation'
import { routes, render } from "@/app/resources";
import { Flex, Logo, ToggleButton } from "@/ui/components";
import styles from './Header.module.scss'

export const Header = () => {

    const pathname = usePathname() ?? '';
    const { home, about, services, portfolio } = render();

    return (
        <>
            <Flex
                className={styles.mask}
                position="fixed" zIndex={0}
                fillWidth minHeight="80" justifyContent="center">
            </Flex>

            <Flex
                as="header" zIndex={10}
                style={{height: 'fit-content'}}
                className={styles.position} fillWidth
                padding="8" justifyContent="center">
                
                <Flex
                    paddingLeft="m" fillWidth
                    alignItems="center"
                    textVariant="body-default-s">
                    <Flex hide="s"><Logo size="s" icon={false}/></Flex>
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
                            { routes['/services'] && (
                                <ToggleButton
                                    href="/services"
                                    size="m"
                                    prefixIcon="grid"
                                    selected={pathname === '/services'}>
                                    <Flex paddingX="2" hide="s">{services.label}</Flex>
                                </ToggleButton>
                            )}
                            { routes['/porfolio'] && (
                                <ToggleButton
                                    href="/portfolio"
                                    size="m"
                                    prefixIcon="gallery"
                                    selected={pathname === '/portfolio'}>
                                    <Flex paddingX="2" hide="s">{portfolio.label}</Flex>
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
