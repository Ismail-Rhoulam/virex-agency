import { render } from '@/app/resources'
import { Flex, Grid, Logo, Text, Heading, SparkleFx } from '@/ui/components';
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
            direction='column' alignItems='center' justifyContent='center' flex={1}>
            
            <Flex
                position='relative'
                as="section" overflow='hidden'
                fillWidth direction='column' alignItems='center' flex={1}>
                
                <Flex
                    as-='main'
                    direction='column' justifyContent='center'
                    fillWidth fillHeight padding='l' gap='l'>
                        <Flex alignItems='center' justifyContent='center' fillWidth>
                            
                            <Heading wrap='balance' variant='display-strong-s' style={{textAlign: "center"}}>
                                <SparkleFx>
                                    <span>Come Closer</span>
                                </SparkleFx>
                            </Heading>
                        </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
};