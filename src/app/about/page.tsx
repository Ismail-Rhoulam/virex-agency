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
                as="section" overflow='hidden'
                fillWidth direction='column' alignItems='center' flex={1}>
                
                <Flex
                    as-='main'
                    direction='column' justifyContent='center'
                    fillWidth fillHeight padding='l' gap='l'>
                        
                        <Flex direction='column' alignItems='center' justifyContent='center' fillWidth style={{minHeight: '100vh'}}>
                            
                            <Heading wrap='balance' variant='display-strong-l' style={{textAlign: "center"}}>
                                <SparkleFx>
                                    <span>Come Closer</span>
                                </SparkleFx>
                            </Heading>
                            <IconButton
                                size="l"
                                href='#anchor'
                                variant="ghost"
                                icon="chevronDown"
                                />

                        </Flex>

                        <Flex id='anchor' fillWidth justifyContent='center' minHeight={100} alignItems='center'>
                            <Heading wrap='balance' variant='display-strong-l' style={{textAlign: "center"}}>
                                <SparkleFx>
                                    <span>Let's see what we got here</span>
                                </SparkleFx>
                            </Heading>
                        </Flex>

                </Flex>
            </Flex>
        </Flex>
    )
};