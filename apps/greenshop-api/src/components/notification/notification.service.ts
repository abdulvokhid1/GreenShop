import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notification, Notifications } from '../../libs/dto/notification/notification';
import { Model, ObjectId } from 'mongoose';
import { NotificationInput } from '../../libs/dto/notification/notification.input';
import { lookupMemberLike } from '../../libs/config';
import { NotificationStatus } from '../../libs/enums/notification.enum';

@Injectable()
export class NotificationService {
	@InjectModel('Notification') private readonly notificationModel: Model<Notification>;

	public async createNotification(input: NotificationInput): Promise<Notification> {
		try {
			const createdNotification = await this.notificationModel.create({
				...input,
				notificationStatus: input.notificationStatus || NotificationStatus.WAIT, // Default status
			});
			return createdNotification;
		} catch (err) {
			console.log('Error, NotificationService.createNotification', err.message);
			throw new BadRequestException('Failed to create notification');
		}
	}

	public async getNotifications(): Promise<Notification[]> {
		const result = await this.notificationModel.find().exec();
		return result;
	}
}

// .aggregate([
// 	{
// 		$facet: {
// 			list: [
// 				// meLikedl
// 				lookupMemberLike,
// 				{ $unwind: '$memberData' },
// 			],
// 			// metaCounter: [{ $count: 'total' }],
// 		},
// 	},
// ])
