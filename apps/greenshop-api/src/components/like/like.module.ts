import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { MongooseModule } from '@nestjs/mongoose';
import LikeSchema from '../../schemas/Like.model';
import NotificationSchema from '../../schemas/Notification.model';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'Like',
				schema: LikeSchema,
			},
		]),
		// MongooseModule.forFeature([
		// 	{
		// 		name: 'Notification',
		// 		schema: NotificationSchema,
		// 	},
		// ]),
	],
	providers: [LikeService],
	exports: [LikeService],
})
export class LikeModule {}
