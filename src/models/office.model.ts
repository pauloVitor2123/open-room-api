import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Office {
  @Field()
  id: string;

  @Field({ nullable: true })
  name?: string;
}
