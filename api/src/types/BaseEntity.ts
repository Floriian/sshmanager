import { ApiProperty } from '@nestjs/swagger';

export class BaseEntity {
  @ApiProperty()
  _id: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  UpdatedAt: Date;
}
