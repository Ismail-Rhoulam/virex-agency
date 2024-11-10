import { render } from '@/app/resources'
import { Flex, Heading, SparkleFx, Text, IconButton } from '@/ui/components';


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
            direction='column' alignItems='center' justifyContent='center'>
            
            <Flex
                position='relative'
                as="section" style={{minHeight: '100vh'}}
                fillWidth direction='column' alignItems='center'>
                
                <Flex
                    as-='main'
                    direction='column' justifyContent='center'
                    fillWidth fillHeight gap='l'>

                    <Flex fillHeight fillWidth direction='column'>

                        <Flex
                            fillWidth
                            fillHeight
                            direction='column' 
                            alignItems='center'
                            borderStyle='solid-1'
                            justifyContent='center'>

                            <Flex
                                paddingBottom='m'
                                padding='xl'
                                justifyContent='center'
                                alignItems='center'
                                >

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
                            
                            <Flex id='anchor1' fillWidth justifyContent='start' alignItems='center'
                                borderStyle='solid-1' direction='column' gap='24' padding='xl'>

                                <Flex
                                    style={{height: 'fit-content'}}>
                                    <Heading wrap='balance' variant='display-strong-m' padding='l' style={{textAlign: "center"}}>
                                        <SparkleFx>
                                            <span>Our Philosophy</span>
                                        </SparkleFx>
                                    </Heading>
                                </Flex>

                                <Flex
                                    gap='24'
                                    direction='column'
                                    fillHeight maxWidth='l'
                                    justifyContent='center'>

                                    <Text
                                        align='center'
                                        paddingBottom='8'
                                        variant='body-default-xl'>
                                        VIREX Agency is a versatile agency that combines marketing, production, and communication expertise to create dynamic and adaptable solutions that resonate with your audience. No matter your industry or vision, VIREX is equipped to amplify your voice and craft stories that make a lasting impression.
                                    </Text>
                                    <Text
                                        align='center'
                                        paddingBottom='8'
                                        variant='body-default-xl'>
                                        At the heart of Virex Agency lies the belief that collaboration fuels success. We work closely with our clients, aligning our creative vision with their business objectives to produce results that make a lasting impact. Every project is treated with care, ensuring that the final product reflects both your brand’s essence and our commitment to excellence.
                                    </Text>
                                </Flex>

                            </Flex>
                            <Flex id='anchor' fillWidth justifyContent='start' alignItems='center'
                                borderStyle='solid-1' direction='column' gap='24' padding='xl'>

                                <Flex
                                    style={{height: 'fit-content'}}>
                                    <Heading wrap='balance' variant='display-strong-m' padding='l' style={{textAlign: "center"}}>
                                        <SparkleFx>
                                            <span>Our Philosophy</span>
                                        </SparkleFx>
                                    </Heading>
                                </Flex>

                                <Flex
                                    gap='24'
                                    direction='column'
                                    fillHeight maxWidth='l'
                                    justifyContent='center'>

                                    <Text
                                        align='center'
                                        paddingBottom='8'
                                        variant='body-default-xl'>
                                        VIREX Agency is a versatile agency that combines marketing, production, and communication expertise to create dynamic and adaptable solutions that resonate with your audience. No matter your industry or vision, VIREX is equipped to amplify your voice and craft stories that make a lasting impression.
                                    </Text>
                                    <Text
                                        align='center'
                                        paddingBottom='8'
                                        variant='body-default-xl'>
                                        At the heart of Virex Agency lies the belief that collaboration fuels success. We work closely with our clients, aligning our creative vision with their business objectives to produce results that make a lasting impact. Every project is treated with care, ensuring that the final product reflects both your brand’s essence and our commitment to excellence.
                                    </Text>
                                </Flex>

                            </Flex>

                        </Flex>

                    </Flex>
                </Flex>

            </Flex>

        </Flex>
    )
};