import Router, { Request, Response } from 'express';
const route = Router();


route.get('/', ( request : Request , response : Response )=>{ 

    response.status(200).send('hi.....');
} );


export default route;