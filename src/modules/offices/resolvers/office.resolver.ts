import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class OfficeResolver {
  @Query(() => String)
  async helloWorld() {
    return 'Hello World';
  }
}
