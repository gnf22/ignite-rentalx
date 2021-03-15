import { Router, Request, Response } from 'express';

export const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request: Request, response: Response) => {
  const { name, description } = request.body;

  categories.push({ name, description });

  return response.status(201).send();
});
