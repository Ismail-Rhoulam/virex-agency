"use client";

import React, { useEffect, useState } from 'react';
import { Heading, Flex, InlineCode, Logo, LetterFx, Badge } from '@/ui/components';

type Location = {
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string; // A string in the format "latitude,longitude"
  org: string;
  hostname: string;
  postal: string;
  timezone: string;
};

async function getLocationData(ip: string) {
  const response = await fetch(`https://ipinfo.io/${ip}?token=a9aae83ccddd15`);
  if (!response.ok) throw new Error('Failed to fetch location data');
  return response.json();
}

export default function Home() {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    async function fetchLocation() {
      const ip = '0.0.0.0'; // Replace with actual IP-fetching logic (e.g., via headers, API)
      try {
        const data = await getLocationData(ip);
        setLocation(data);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    }

    fetchLocation();
  }, []);

  const wtsp = "https://wa.me/+212663037739";

  return (
    <Flex
      fillWidth paddingTop="l" paddingX="l"
      direction="column" alignItems="center" flex={1}>
      <Flex
        position="relative"
        as="section" overflow="hidden"
        fillWidth minHeight="0" maxWidth={68}
        direction="column" alignItems="center" flex={1}>
        <Flex
          as="main"
          direction="column" justifyContent="center"
          fillWidth fillHeight padding="l" gap="l">
          <Flex
            mobileDirection="column"
            fillWidth gap="24">
            <Flex
              position="relative"
              flex={2} paddingTop="56" paddingX="xl">
              <Logo size="l" icon={false} style={{zIndex: '1'}}/>
            </Flex>
            <Flex
              position="relative"
              flex={4} gap="24" marginBottom="104"
              direction="column">
              <InlineCode
                className="shadow-m"
                style={{
                  width: 'fit-content',
                  padding: 'var(--static-space-8) var(--static-space-16)',
                  backdropFilter: 'blur(var(--static-space-1))'}}>
                Start by Building Connections, <span className="brand-on-background-medium">Finish with Lasting Impressions.</span>
              </InlineCode>
              <Heading
                wrap="balance"
                variant="display-strong-s">
                <span className="font-code">
                  <LetterFx
                    trigger="instant">
                    Helping Brands Tell Stories and Stories Build Brands.
                  </LetterFx>
                  <InlineCode>{location ? JSON.stringify(location) : 'Loading location...'}</InlineCode>
                </span>
              </Heading>
              <Badge
                arrow
                effect
                href={wtsp}>
                Book an appointment 
              </Badge>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}