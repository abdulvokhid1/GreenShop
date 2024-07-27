import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import FollowSchema from '../../schemas/Follow.model';
import { FollowResolver } from './follow.resolver';
import { FollowService } from './follow.service';
import { AuthModule } from '../auth/auth.module';
import { MemberModule } from '../member/member.module';
import { NotificationModule } from '../notification/notification.module';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'Follow',
				schema: FollowSchema,
			},
		]),
		AuthModule,
		NotificationModule,
		forwardRef(() => MemberModule),
	],
	providers: [FollowResolver, FollowService],
	exports: [FollowService],
})
export class FollowModule {}
