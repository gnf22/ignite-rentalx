import { CarImage } from '../infra/typeorm/entities/CarImage';

export interface ICreateCarsImagesDTO {
  car_id: string;
  image_name: string;
}

export interface ICarsImagesRepository {
  create(data: ICreateCarsImagesDTO): Promise<CarImage>;
}
