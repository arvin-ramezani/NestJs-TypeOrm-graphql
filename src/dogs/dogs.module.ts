import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsResolver } from './dogs.resolver';

@Module({
  providers: [DogsResolver, DogsService]
})
export class DogsModule {}
