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
        <Flex fillWidth paddingTop='l' paddingX='l'
            direction='column' alignItems=' center' flex={1}>
            
            <Flex
                position='relative'
                as="section" overflow='hidden'
                fillWidth direction='column' alignItems='center' flex={1}>
                
                <Flex
                    as-='main'
                    direction='column' justifyContent='center'
                    fillWidth fillHeight padding='l' gap='l'>
                        <Heading>Test Test Lamyae zwina</Heading>
                </Flex>
            </Flex>
        </Flex>
    )
};