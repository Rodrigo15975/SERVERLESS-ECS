import { Module } from '@nestjs/common'
import { UsersModule } from './modules/users/users.module'
import { AuthModule } from './modules/auth/auth.module'
import { ChatBotModule } from './modules/chat-bot/chat-bot.module'
import { TaskModule } from './modules/task/task.module'
import { ConfigModule } from '@nestjs/config'
import configuration from 'config/configuration'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TaskModule,
    UsersModule,
    AuthModule,
    ChatBotModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log({
      port: process.env.port,
    })
  }
}
