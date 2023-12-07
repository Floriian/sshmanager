import { ApiProperty } from '@nestjs/swagger';

export class BaseEntity {
  @ApiProperty()
  _id: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  __v: number;
}
