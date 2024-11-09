import { render } from '@/app/resources';
import { Flex, Text } from '@/ui/components';

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
    return (
        <Flex fillWidth justifyContent='center'>
          </Flex>
        </Flex>
    )
};