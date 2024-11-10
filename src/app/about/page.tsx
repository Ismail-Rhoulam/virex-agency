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

    const scrollAsabhi = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest"});
    }

    return (
        <Flex fillWidth paddingTop='l' paddingX='l'
            direction='column' alignItems='center' justifyContent='center' flex={1}>
            
            <Flex
                position='relative'
                as="section" overflow='hidden' style={{minHeight: '85vh'}}
                fillWidth direction='column' alignItems='center' flex={1}>
                
                <Flex
                    as-='main'
                    direction='column' justifyContent='center'
                    fillWidth fillHeight gap='l'>
                        
                        <Flex 
                            fillWidth
                            direction='column' 
                            alignItems='center' 
                            justifyContent='center'
                            borderStyle='solid-1'
                            style={{minHeight: '80vh'}}>
                            
                            <Flex
                                paddingBottom='m'>
                                <Heading wrap='balance' variant='display-strong-l' style={{textAlign: "center"}}>
                                    <SparkleFx>
                                        <span>Get to know Us</span>
                                    </SparkleFx>
                                </Heading>
                            </Flex>
                            
                            <IconButton
                                size="l"
                                href='#anchor1'
                                variant="ghost"
                                icon="chevronDown"
                                />

                        </Flex>

                </Flex>

                <Flex
                position='relative'
                as="section" overflow='hidden' style={{minHeight: '85vh'}}
                fillWidth direction='column' alignItems='center' flex={1}>
                
                    <Flex
                        as-='main'
                        direction='column' justifyContent='center'
                        fillWidth fillHeight gap='l'>
                            
                            <Flex id='anchor1' fillWidth justifyContent='center' alignItems='center' style={{minHeight: "85vh"}}
                                borderStyle='solid-1'>
                                <Heading wrap='balance' variant='display-strong-l' style={{textAlign: "center"}}>
                                    <SparkleFx>
                                        <span>Let's see what we got here</span>
                                    </SparkleFx>
                                </Heading>
                            </Flex>

                    </Flex>

                </Flex>

            </Flex>

        </Flex>
    )
};