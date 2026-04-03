// This is the JSON Schema shape OpenAI expects in the `tools` array
export interface ToolDefinition {
    type: "function";
    function: {
        name: string;
        description: string; // Tell the LLM WHEN to use this tool
        parameters: {
            type: "object";
            properties: Record<string, {
                type: string;
                description: string;
                enum?: string[]; // optional: constrain values
            }>;
            required: string[];
        };
    };
}

// This is the pairing of the schema + actual JS function to run
export interface Tool {
    definition: ToolDefinition;
    // The executor receives whatever args the LLM decided to pass
    execute: (args: Record<string, unknown>) => Promise<string>;
}