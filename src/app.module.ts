import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  controllers: [AppController, UserController],
  providers: [AppService],
  imports: [UserModule],
})
export class AppModule {}
