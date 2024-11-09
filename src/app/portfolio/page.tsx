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
        <Flex fillWidth justifyContent='center'>
          <Flex justifyContent='fit-content' maxHeight="l" maxWidth="m">
            <Spline content="" scene="https://prod.spline.design/wmxzs5LVPn1oQQGq/scene.splinecode"/>
          </Flex>
        </Flex>
    )
};