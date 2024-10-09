import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  getHello(): string {
    return 'Hello user!';
  }

  async getUser(userName: string): Promise<any> {
    try {
      const result = await this.userModel.findOne({ userName }).lean();
      return result;
    } catch (err) {
      console.log('error...');
    }
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    this.logger.log('Creating a new user');
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  async findAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

}