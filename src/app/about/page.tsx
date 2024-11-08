import { render } from '@/app/resources'
import { Flex, Logo, Text, Heading } from '@/ui/components';


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
        <Flex
            fillWidth fillHeight border="surface">
            <Logo size='s'/>
            <Heading>
                <Text>Get To Know Us</Text>
            </Heading>
        </Flex>
    )
};