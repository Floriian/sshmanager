import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IServer } from '@sshmanager/shared';
import { HydratedDocument, Model } from 'mongoose';
import { BaseEntity } from 'src/types';

@Schema({ timestamps: true })
export class Server extends BaseEntity implements IServer {
  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  address: string;

  @Prop()
  password: string;

  @Prop()
  port: number;

  @Prop()
  commands: string[];
}

export type ServerDocument = HydratedDocument<Server>;
export type ServerModel = Model<Server>;
export const ServerSchema = SchemaFactory.createForClass(Server);
