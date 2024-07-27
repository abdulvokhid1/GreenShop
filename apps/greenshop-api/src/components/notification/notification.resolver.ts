import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
// import NotificationSchema from '../../schemas/Notification.model';
import { Notification, Notifications } from '../../libs/dto/notification/notification';
import { Roles } from '../auth/decorators/roles.decorator';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { UseGuards } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { shapeIntoMongoObjectId } from '../../libs/config';
import { WithoutGuard } from '../auth/guards/without.guard';
import { NotificationInput } from '../../libs/dto/notification/notification.input';
@Resolver()
export class NotificationResolver {
	constructor(private readonly notificationService: NotificationService) {}

	@Mutation(() => Notification)
	async createNotification(@Args('input') input: NotificationInput): Promise<Notification> {
		return await this.notificationService.createNotification(input);
	}

	@Query(() => [Notification])
	async getNotifications(): Promise<Notification[]> {
		return await this.notificationService.getNotifications();
	}
}
