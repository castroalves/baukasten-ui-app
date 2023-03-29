import { useFieldExtension, Wrapper } from "@graphcms/app-sdk-react";
import { CheckBox, Label } from "@hygraph/baukasten";
import React from "react";

function SwitchField() {
    const { value, onChange, isReadOnly, field } = useFieldExtension();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <Label gap="8" fontWeight={400} disabled={isReadOnly}>
            <CheckBox checked={value} onChange={handleOnChange} />
            {field.displayName}
        </Label>
    );
}

export default function Field() {
    return (
        <Wrapper>
            <SwitchField />
        </Wrapper>
    );
}
