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
        <Grid columns="repeat(3, 1fr)" fillWidth align="center">
            <Flex direction="column" background="neutral-medium" fillWidth justifyContent="center">
                <Heading>Get To Know Us!</Heading>
            </Flex>
            <Flex direction="column" fillWidth justifyContent="center">
                <Heading>Test</Heading>
            </Flex>
            <Flex direction="column" background="neutral-medium" fillWidth justifyContent="center">
                <Heading>Test</Heading>
            </Flex>
        </Grid>
    )
};