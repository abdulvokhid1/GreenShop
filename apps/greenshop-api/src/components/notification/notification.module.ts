import { Module } from '@nestjs/common';
import { NotificationResolver } from './notification.resolver';
import { NotificationService } from './notification.service';
import { MongooseModule } from '@nestjs/mongoose';
import NotificationSchema from '../../schemas/Notification.model';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { AuthModule } from '../auth/auth.module';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'Notification',
				schema: NotificationSchema,
			},
		]),
		AuthModule,
	],
	providers: [NotificationResolver, NotificationService],
	exports: [NotificationService],
})
export class NotificationModule {}
