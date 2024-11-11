import { render } from '@/app/resources';
import { Flex, Text } from '@/ui/components';
import Spline from '@splinetool/react-spline/next';

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
        <Flex fillWidth justifyContent="center">
          <Text>Portfolio</Text>
        </Flex>
};