import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':username')
  async findOne(@Param('username') username: string) {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  @Post()
  async create(@Body() body: { username: string; password: string }) {
    return this.usersService.create(body.username, body.password);
  }
}
