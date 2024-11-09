import { render } from '@/app/resources'
import { Flex, Heading, SparkleFx, IconButton } from '@/ui/components';


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
                        
                        <Flex direction='column' alignItems='center' justifyContent='center' fillWidth style={{minHeight: '50vh'}}>
                            
                            <Heading wrap='balance' variant='display-strong-l' style={{textAlign: "center"}}>
                                <SparkleFx>
                                    <span>Come Closer</span>
                                </SparkleFx>
                            </Heading>
                            <IconButton
                                size="l"
                                href='#anchor'
                                icon="chevronDown"
                                variant="ghost"
                                onClick={() => scrollTo({behavior: 'smooth'})}
                                />

                        </Flex>

                        <Flex ref='anchor' fillWidth justifyContent='center' minHeight={80}>
                            <Heading wrap='balance' variant='display-strong-l' style={{textAlign: "center"}}>
                                <SparkleFx>
                                    <span>Lamayaaae</span>
                                </SparkleFx>
                            </Heading>
                        </Flex>

                </Flex>
            </Flex>
        </Flex>
    )
};