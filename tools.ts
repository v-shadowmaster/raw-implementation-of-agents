import { Tool } from "./types";

// Calculator tool 
export const calculatorTool: Tool = {
    definition: {
        type: "function",
        function: {
            name: "calculator",
            description:
                "Evaluates a mathematical expression and returns the numeric result. " +
                "Use this whenever you need to perform arithmetic, not your own computation.",
            parameters: {
                type: "object",
                properties: {
                    expression: {
                        type: "string",
                        description: "A valid math expression, e.g. '(12 * 4) + 7 / 2'",
                    },
                },
                required: ["expression"],
            },
        },
    },
    execute: async (args) => {
        try {
            // NOTE: In production, use a proper math parser (e.g. mathjs).
            // Never use eval() on user-provided input in a real app.
            const result = Function(`"use strict"; return (${args.expression})`)();
            return `Result: ${result}`;
        } catch {
            return `Error: Could not evaluate expression "${args.expression}"`;
        }
    },
};