import { Resolver, Query, Args } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import NotificationSchema from '../../schemas/Notification.model';
import { Notification, Notifications } from '../../libs/dto/notification/notification';
import { Roles } from '../auth/decorators/roles.decorator';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { UseGuards } from '@nestjs/common';
import { ObjectId } from 'mongoose';
@Resolver(() => NotificationSchema)
export class NotificationResolver {
	constructor(private readonly notificationService: NotificationService) {}

	@UseGuards(AuthMember)
	@Query((returns) => [Notification])
	public async getNotifications() // @Args('auhtorId') input: string,
	// @AuthMember('_id') memberId: ObjectId,
	: Promise<Notification[]> {
		return this.notificationService.getNotifications();
	}
}
