import { useFieldExtension, Wrapper } from "@graphcms/app-sdk-react";
import { gql, GraphQLClient } from "graphql-request";
import React, { useEffect } from "react";

const ENUMS = gql`
    query getEnums($projectId: ID!, $environment: String!) {
        viewer {
            project(id: $projectId) {
                environment(name: $environment) {
                    contentModel {
                        enumerations {
                            apiId
                            values {
                                apiId
                                displayName
                            }
                        }
                    }
                }
            }
        }
    }
`;

function graphqlClient(endpoint: string) {
    const token = process.env.MGMT_TOKEN;
    return new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
}

function SelectField() {
    const {
        value,
        onChange,
        isReadOnly,
        context: { environment, project },
    } = useFieldExtension();

    useEffect(() => {
        const client: GraphQLClient = graphqlClient(project.mgmtApi);
        const fetchEnums = async () => {
            const data = await client.request(ENUMS, {
                projectId: project.id,
                environment: environment.name,
            });
            console.log(data);
            return data;
        };
        fetchEnums();
    }, []);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    );
}

export default function Field() {
    return (
        <Wrapper>
            <SelectField />
        </Wrapper>
    );
}
