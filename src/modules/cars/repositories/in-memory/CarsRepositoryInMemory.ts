import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

export class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    brand,
    daily_rate,
    category_id,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      brand,
      daily_rate,
      category_id,
      description,
      fine_amount,
      license_plate,
      name,
    });

    this.cars.push(car);
  }
}
