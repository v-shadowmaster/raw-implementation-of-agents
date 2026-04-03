const calculatorTool = {
    defination: {
        type: "function",
        description:
            "Evaluates a mathematical expression and returns the exact numeric result. " +
            "Use this for ANY arithmetic — never compute math yourself.",
        parameters: {
            type: "object",
            properties: {
                expression: {
                    type: "string",
                    description: "A valid JS math expression like '(12 * 4) + 7 / 2'"
                }
            },
            required: ["expression"]
        }
    },

    execute: async (args) => {
        try {
            const result = Function(`"use strict"; return (${args.expression})`)();
            return `Result: ${result}`
        } catch (err) {
            return `Error evaluating "${args.expression}": ${err.message}`;
        }
    }
}