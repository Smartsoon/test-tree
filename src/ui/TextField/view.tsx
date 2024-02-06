import React from "react";
import type { TestFieldProps } from "./types";
import { Input } from 'antd'

export const TestField: React.FC<TestFieldProps> = (props) => {
    return <Input {...props}/>
}