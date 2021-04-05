import { getRepository, Repository } from 'typeorm';

import {
  ICarsImagesRepository,
  ICreateCarsImagesDTO,
} from '@modules/cars/repositories/ICarsImageRepository';

import { CarImage } from '../entities/CarImage';

export class CarsImagesRepository implements ICarsImagesRepository {
  private repository: Repository<CarImage>;

  constructor() {
    this.repository = getRepository(CarImage);
  }

  async create({
    car_id,
    image_name,
  }: ICreateCarsImagesDTO): Promise<CarImage> {
    const carImage = this.repository.create({
      car_id,
      image_name,
    });

    await this.repository.save(carImage);

    return carImage;
  }
}
