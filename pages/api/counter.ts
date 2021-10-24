import type {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';

type Data = {
    data: number
}

const countHandler: NextApiHandler = async (request: NextApiRequest, response: NextApiResponse<Data>) => {
    const {amount = 1} = request.body

    // simulate IO latency
    await new Promise((resolve) => setTimeout(resolve, 500))

    response.json({data: amount})
}

export default countHandler;
