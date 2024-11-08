import { render } from '@/app/resources'
import { Flex, Grid, Logo, Text, Heading, RevealFx } from '@/ui/components';
import { about } from '../resources/content';


export async function generateMetadata() {
    const { about } = render();
    const title = about.title;
    const description = about.description;
    return {
      title,
      description
    }
  }

export default function About() {
    return (
        <Flex fillWidth gap='m' paddingY='l' direction='column' zIndex="1">
            <Flex direction='row' justifyContent="start" paddingLeft='l' gap='24'>
                <Flex>
                    <RevealFx translateY="4">
                        <Heading>{about.description}</Heading>
                    </RevealFx>
                </Flex>
                <Flex>
                    <RevealFx>
                        <Text>I'm Glad You Came This Far!!</Text>
                    </RevealFx>
                </Flex>
                <Flex>
                    <RevealFx>
                        <Text>This is where it get's intresting!!!</Text>
                    </RevealFx>
                </Flex>
            </Flex>
        </Flex>
    )
};