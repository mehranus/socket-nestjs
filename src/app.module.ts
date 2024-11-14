import { Module } from '@nestjs/common';
import { ChatGateway } from './chat/chat.gateway';
import { GuropGateway } from './gurop/gurop.gateway';
import { ChannelGateway } from './channel/channel.gateway';
import { indexGateway } from './chat/index.gateway';


@Module({
  imports: [],
  controllers: [],
  providers: [ChatGateway,GuropGateway,ChannelGateway,indexGateway],
})
export class AppModule {}
