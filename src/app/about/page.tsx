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
        <Flex zIndex={1000}
            fillWidth fillHeight border="surface">
            <Heading>
                <Text>Get To Know Us</Text>
            </Heading>
        </Flex>
    )
};