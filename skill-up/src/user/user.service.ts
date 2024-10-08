import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
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

  // constructor(
  //   @InjectRepository(User)
  //   private userRepository: Repository<User>
  // ) {}

  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   // 1. 인스턴스 생성
  //   const user = this.userRepository.create(createUserDto);

  //   // 2. 인스턴스 Database에 저장
  //   return await this.userRepository.save(user); 
  // }

  // async findAll(): Promise<User[]> {
  //   return await this.userRepository.find();
  // }

 
  // async findOne(id: number) : Promise<User>{
  //   return await this.userRepository.findOne( { where: {id}});
  // }

  // async update(id: number, updateUserDto: UpdateUserDto) : Promise<User> {
  //   // 1. 해당 아이디 유저 찾기
  //   const user = await this.userRepository.findOne({where : {id}});
  //   if (!user) {
  //     throw new Error("유저를 찾을 수 없습니다.");
  //   }
  
  //   // 2. 기존 user와 새로운 updateUserDto와 병합
  //   this.userRepository.update(id, updateUserDto);

  //   // 3. 변경사항 저장
  //   const updatedUser = await this.userRepository.save(user);
  //   return updatedUser;
  // }

  // async remove(id: number): Promise<void> {
  //   await this.userRepository.delete(id);
  // }

}