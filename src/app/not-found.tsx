import { Flex, Heading, Text } from "@/ui/components";

export default function NotFound() {
    return (
        <Flex zIndex="1"
            as="section"
            direction="column" alignItems="center" justifyContent="center">
            <Text
                marginBottom="s"
                variant="display-strong-xl">
                404
            </Text>
            <Heading
                marginBottom="l"
                variant="display-strong-xs">
                Page Not Found
            </Heading>
            <Text
                onBackground="neutral-weak">
                The page you are looking for does not exist.
            </Text>
        </Flex>
    )
}