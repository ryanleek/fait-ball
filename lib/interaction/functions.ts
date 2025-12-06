export async function createInteraction(question: string, response: string, type: string, self_id: string, user_id: string) {
    try {
        const result = await fetch('/api/db/create-interaction', {
            method: 'POST',
            body: JSON.stringify({ question, response, type, self_id, user_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!result.ok) {
            throw new Error('Failed to create interaction');
        }

        return await result.json();
    } catch (error) {
        console.error("Error creating interaction:", error);
        throw error;
    }
}

export async function fetchInteractions(user_id: string) {
    try {
        const result = await fetch('/api/db/fetch-interaction', {
            method: 'POST',
            body: JSON.stringify({ user_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!result.ok) {
            throw new Error('Failed to fetch interactions');
        }

        return await result.json();
    } catch (error) {
        console.error("Error fetching interactions:", error);
        throw error;
    }
}

export function generateKey() {
    return Math.random().toString(36).substring(2, 15);
}

export async function getOpenAIChatResponse(
    instructions: string,
    input: Array<{ role: string; content: string }>
) {

    const res = await fetch("/api/openai", {
        method: "POST",
        body: JSON.stringify({
            instructions,
            input,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error(`OpenAI API failed with status ${res.status}`);
    }
    return await res.json();
}