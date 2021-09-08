import { container } from 'tsyringe';
import { Router } from 'express';
import { ControllerRouter } from './shared/infrastructure/http/controller/controller-router';

import { CreateTrainerController } from './trainer/interface/controller/create-trainer-controller';
import { GetTrainerByIdController } from './trainer/interface/controller/get-trainer-by-id-controller';
import { GetTrainersController } from './trainer/interface/controller/get-trainers-controller';
import { GetTrainerReviewsController } from './trainer/interface/controller/get-trainer-reviews-controller';

import { CreateCustomerController } from './customer/interface/controller/create-customer-controller';
import { GetCustomerByIdController } from './customer/interface/controller/get-customer-by-id-controller';
import { GetCustomerFavoriteTrainersController } from './customer/interface/controller/get-customer-favorite-trainers-controller';
import { UpdateCustomerFavoriteTrainersController } from './customer/interface/controller/update-customer-favorite-trainers-controller';

export const createRouter = (): Router[] => {
  const controllerRouter = container.resolve(ControllerRouter);
  return [
    controllerRouter.creteRoute(container.resolve(CreateTrainerController)),
    controllerRouter.creteRoute(container.resolve(GetTrainerByIdController)),
    controllerRouter.creteRoute(container.resolve(GetTrainersController)),
    controllerRouter.creteRoute(container.resolve(GetTrainerReviewsController)),

    controllerRouter.creteRoute(container.resolve(CreateCustomerController)),
    controllerRouter.creteRoute(container.resolve(GetCustomerByIdController)),
    controllerRouter.creteRoute(container.resolve(GetCustomerFavoriteTrainersController)),
    controllerRouter.creteRoute(container.resolve(UpdateCustomerFavoriteTrainersController)),
  ];
};
