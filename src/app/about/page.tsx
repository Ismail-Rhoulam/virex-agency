import { render } from '@/app/resources'
import { Flex, Grid, Logo, Text, Heading } from '@/ui/components';


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
        <Grid repeat="repeat(3, 1fr)">
            <Flex direction="column" background="neutral-medium">
                <Heading>Get To Know Us!</Heading>
            </Flex>
            <Flex direction="column" background="neutral-medium">
                <Heading>Test</Heading>
            </Flex>
            <Flex direction="column" background="neutral-medium">
                <Heading>Test</Heading>
            </Flex>
        </Grid>
    )
};