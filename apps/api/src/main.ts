import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const PORT = process.env.port ?? 3000
  await app.listen(PORT, () => {
    if (process.env.NODE_ENV === 'development')
      return Logger.verbose(
        `Application is running on: ${PORT} MODE: ${process.env.NODE_ENV}`,
      )
    Logger.log(
      `Application is running on: ${PORT} MODE: ${process.env.NODE_ENV}`,
    )
  })
}
void bootstrap()
