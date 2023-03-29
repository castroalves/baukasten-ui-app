import { useFieldExtension, Wrapper } from "@graphcms/app-sdk-react";
import { Switch } from "@hygraph/baukasten";
import React from "react";

function SwitchField() {
    const { value, onChange, isReadOnly } = useFieldExtension();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <Switch
            checked={value}
            onChange={handleOnChange}
            disabled={isReadOnly}
        />
    );
}

export default function Field() {
    return (
        <Wrapper>
            <SwitchField />
        </Wrapper>
    );
}
