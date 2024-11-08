import { render } from '@/app/resources'
import { Flex, Text } from '@/ui/components';

export async function generateMetadata() {
    const { services } = render();
    const title = services.title;
    const description = services.description;
    return {
      title,
      description
    }
  }

export default function Services() {
    return (
        <Flex>
            <Text>Services</Text>
        </Flex>
    )
};