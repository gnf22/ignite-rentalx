import { Router } from 'express';

import { AuthenticateUserController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';

export const authenticateRoutes = Router();

const authencitateUserController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', authencitateUserController.handle);
