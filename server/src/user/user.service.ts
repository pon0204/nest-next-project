import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  find() {
    return 'this user from userService';
  }
}
