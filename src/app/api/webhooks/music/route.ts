import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
    const headers = req.headers;
    const key = headers.get('Authorization');

    if (key !== process.env.WEBHOOK_SECRET) {
        return new Response('Unauthorized', { status: 401 });
    }

    revalidatePath('/music');
    revalidatePath('/music/[slug]', 'page');
}