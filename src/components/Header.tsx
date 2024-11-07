'use client';

import React from "react";
import { usePathname } from 'next/navigation'
import { routes, render } from "@/app/resources";
import { Flex, ToggleButton } from "@/ui/components";

export const Header = () => {

    const pathname = usePathname() ?? '';
    const { home, about, services, portfolio } = render();

    return (

        <Flex
            background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
            padding="4" justifyContent="center">
            <Flex
                gap="4"
                textVariant="body-default-s">
                { routes['/'] && (
                    <ToggleButton
                        href="/"
                        size="m"
                        label={home.label}
                        selected={pathname === '/'}
                        />
                )}
                { routes['/about'] && (
                    <ToggleButton
                        href="/about"
                        size="m"
                        label={about.label}
                        selected={pathname === '/about'}
                        />
                )}
                { routes['/services'] && (
                    <ToggleButton
                        href="/services"
                        size="m"
                        label={services.label}
                        selected={pathname === '/services'}
                        />
                )}
                { routes['/porfolio'] && (
                    <ToggleButton
                        href="/portfolio"
                        size="m"
                        label={portfolio.label}
                        selected={pathname === '/portfolio'}
                        />
                )}
            </Flex>
        </Flex>
    )
}