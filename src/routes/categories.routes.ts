import { Router, Request, Response } from 'express';

import { Category } from '../models/Category';

export const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const category: Category = new Category();

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json({ category });
});
