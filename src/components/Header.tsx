'use client';

import React from "react";
import { usePathname } from 'next/navigation'
import { routes, render } from "@/app/resources";
import { Flex, Logo, ToggleButton } from "@/ui/components";
import styles from '@/components/Header.module.scss'

export const Header = () => {

    const pathname = usePathname() ?? '';
    const { home, about, services, portfolio } = render();

    return (

        <Flex
            as="header"
            style={{width: 'fit-content'}}
            className={styles.position}
            background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
            padding="4" justifyContent="center">

            <Flex direction="row" justifyContent="space-between">

                <Flex>
                    <Logo size="s" icon={false}/>
                </Flex>
                
                <Flex
                    gap="4"
                    textVariant="body-default-s">
                    { routes['/'] && (
                        <ToggleButton
                            href="/"
                            size="m"
                            prefixIcon="home"
                            label={home.label}
                            selected={pathname === '/'}
                            />
                    )}
                    { routes['/about'] && (
                        <ToggleButton
                            href="/about"
                            size="m"
                            prefixIcon="person"
                            label={about.label}
                            selected={pathname === '/about'}
                            />
                    )}
                    { routes['/services'] && (
                        <ToggleButton
                            href="/services"
                            size="m"
                            prefixIcon="grid"
                            label={services.label}
                            selected={pathname === '/services'}
                            />
                    )}
                    { routes['/porfolio'] && (
                        <ToggleButton
                            href="/portfolio"
                            size="m"
                            prefixIcon="gallery"
                            label={portfolio.label}
                            selected={pathname === '/portfolio'}
                            />
                    )}
                </Flex>
                
                <Flex></Flex>

            </Flex>
        </Flex>
    )
}
