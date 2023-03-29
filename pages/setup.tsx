import { useApp, Wrapper } from "@graphcms/app-sdk-react";
import { Box, Button, Text, Heading, Stack } from "@hygraph/baukasten";
import { useRouter } from "next/router";

function SetupElement({ code }: { code: string }) {
    const { installation } = useApp();
    if (installation.status === "COMPLETED") {
        return <Configure />;
    }
    return <Install code={code} />;
}

function Install({ code }: { code: string }) {
    const { updateInstallation } = useApp();
    return (
        <Stack gap="12">
            <Box>
                <Heading>Baukasten UI</Heading>
                <Text>
                    Add custom fields to your Hygraph project using the
                    Baukasten UI library.
                </Text>
                <Button
                    onClick={() =>
                        updateInstallation({ status: "COMPLETED", config: {} })
                    }
                >
                    Install
                </Button>
            </Box>
        </Stack>
    );
}

function Configure() {
    const { updateInstallation } = useApp();
    return (
        <Stack gap="12">
            <Box>
                <Heading>Baukasten UI</Heading>
                <Text>
                    Add custom fields to your Hygraph project using the
                    Baukasten UI library.
                </Text>
                <Button
                    onClick={() =>
                        updateInstallation({ status: "COMPLETED", config: {} })
                    }
                >
                    Save
                </Button>
            </Box>
        </Stack>
    );
}

export default function Setup() {
    const { query } = useRouter();
    return (
        <Wrapper>
            <SetupElement code={query.code as string} />
        </Wrapper>
    );
}
