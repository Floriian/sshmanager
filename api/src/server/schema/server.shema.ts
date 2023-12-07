import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IServer } from '@sshmanager/shared';
import { HydratedDocument, Model } from 'mongoose';
import { BaseEntity } from 'src/types';

@Schema({ timestamps: true })
export class Server extends BaseEntity implements IServer {
  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  username: string;

  @ApiProperty()
  @Prop()
  address: string;

  @ApiProperty()
  @Prop()
  password: string;

  @ApiProperty()
  @Prop()
  port: number;

  @ApiProperty()
  @Prop()
  commands: string[];
}

export type ServerDocument = HydratedDocument<Server>;
export type ServerModel = Model<Server>;
export const ServerSchema = SchemaFactory.createForClass(Server);
