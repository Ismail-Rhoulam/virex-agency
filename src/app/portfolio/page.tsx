'use client';

import { useCallback } from "react";
import { render } from '@/app/resources';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Flex, Text } from '@/ui/components';
import type { Container, Engine } from "tsparticles-engine";

export async function generateMetadata() {
    const { portfolio } = render();
    const title = portfolio.title;
    const description = portfolio.description;
    return {
      title,
      description
    }
  }

export default function Portfolio() {
    const particlesInit = useCallback(async (engine: Engine) => {
      console.log(engine);
      await loadSlim(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
  }, []);
    return (
        <Flex fillWidth justifyContent="center">
          <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} />
        </Flex>
    )
};