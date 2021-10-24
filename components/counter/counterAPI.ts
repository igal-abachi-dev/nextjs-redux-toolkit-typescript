export async function fetchCount(amount = 1): Promise<{ data: number }> {
    const response = await fetch('/api/counter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({amount}),
    })
    const result = await response.json()

    return result
}

//export function fetchCount(amount = 1) {
//  return new Promise<{ data: number }>((resolve) =>
//    setTimeout(() => resolve({ data: amount }), 500)
//  );
//}
