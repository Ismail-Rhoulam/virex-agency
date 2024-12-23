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
        <Flex fillWidth paddingTop='m' paddingX='s'
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
                            justifyContent='center'>
                            
                            <Flex direction='row' padding='l' mobileDirection='column' show='s'>
                                <Flex padding='xl' margin='xl'></Flex>
                                <Flex padding='xl' margin='xl'></Flex>
                                <Flex padding='l' margin='l'></Flex>
                            </Flex>

                            <Flex direction='column' margin="l" padding='l' hide='s'>
                                <Flex padding='m' margin='m'></Flex>
                            </Flex>

                            <Flex
                                paddingBottom='m'
                                justifyContent='center'
                                alignItems='center'
                                >
                                
                                <Flex paddingTop='xl'>
                                    <Heading wrap='balance' variant='display-strong-l' style={{textAlign: "center"}}>
                                        <SparkleFx>
                                            <span>Get to know Us</span>
                                        </SparkleFx>
                                    </Heading>
                                </Flex>
                            </Flex>
                            
                            <IconButton
                                size="l"
                                href='#anchor1'
                                variant="ghost"
                                icon="chevronDown"
                                />

                            <Flex direction='column' padding='xl' show="s">
                                <Flex padding='xl' margin='xl'></Flex>
                                <Flex padding='xl' margin='xl'></Flex>
                            </Flex>


                            <Flex direction='column' margin='l' padding='l'>
                                <Flex padding='m' margin='m'></Flex>
                                <Flex padding='m' margin='m'></Flex>
                            </Flex>

                            <Flex id='anchor1' fillWidth justifyContent='start' alignItems='center'
                                direction='column' gap='24' padding='xl' margin='xl'>

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
                                <IconButton
                                    size="l"
                                    href='#anchor'
                                    variant="ghost"
                                    icon="chevronDown"
                                    />
                            </Flex>

                            <Flex id='anchor' fillWidth justifyContent='start' alignItems='center'
                                direction='column' gap='24' padding='xl'>

                                <Flex
                                    style={{height: 'fit-content'}}>
                                    <Heading wrap='balance' variant='display-strong-m' padding='l' style={{textAlign: "center"}}>
                                        <SparkleFx>
                                            <span>Core Values</span>
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
                                        <Text variant='body-strong-xl'>Creativity:</Text> We don’t just follow trends; we set them. Our creative solutions are tailored to meet your brand’s needs and capture your audience’s attention.
                                    </Text>
                                    <Text
                                        align='center'
                                        paddingBottom='8'
                                        variant='body-default-xl'>
                                        <Text variant='body-strong-xl'>Collaboration:</Text> Your goals are our goals. We work together to bring your vision to life, ensuring that every detail aligns with your business strategy.
                                    </Text>
                                    <Text
                                        align='center'
                                        paddingBottom='8'
                                        variant='body-default-xl'>
                                        <Text variant='body-strong-xl'>Excellence:</Text> We believe in delivering nothing short of the best. Our focus on quality ensures that every project is executed to perfection.
                                    </Text>
                                </Flex>
                                <Flex paddingBottom='s' show='s'></Flex>

                            </Flex>

                        </Flex>

                    </Flex>
                </Flex>

            </Flex>

        </Flex>
    )
};