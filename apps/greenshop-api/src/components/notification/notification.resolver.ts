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

	@Query(() => [Notification])
	async getNotificationsByUserId(@Args('userId') userId: string): Promise<Notification[]> {
		const id = shapeIntoMongoObjectId(userId);
		return await this.notificationService.getNotificationsByUserId(id);
	}

	@Mutation(() => Boolean)
	async markNotificationAsRead(@Args('notificationId') notificationId: string): Promise<boolean> {
		const id = shapeIntoMongoObjectId(notificationId);
		await this.notificationService.markNotificationAsRead(id);
		return true; // 여기서는 성공적으로 완료됨을 나타내기 위해 true를 반환합니다.
	}
}
