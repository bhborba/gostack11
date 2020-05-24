import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
    const user = createUser({
        email: 'bruno@gmail.com',
        password: '123456',
        techs: ['Node', 'React', 'ReactNative',
        { title: 'Javascript', experience: 100 },
    ],
    });

    return res.json({ message: 'Hello World'});
}