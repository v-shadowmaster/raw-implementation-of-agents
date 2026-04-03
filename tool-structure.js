const exampleTool = {
    defination: {
        type: "function",
        function: {
            name: "tool_name",
            description: "When and why to use this tool — write this carefully!",
            parameters: {
                type: "object",
                properties: {
                    someArg: {
                        type: "string",
                        description: "What this argument means"
                    }
                },
                required: ["someArgument"]
            }
        }
    },

    // This part runs OUTSIDE the LLM, in your Node.js process.
    execute: async (args) => {
        return "return as a string";
    }
}

