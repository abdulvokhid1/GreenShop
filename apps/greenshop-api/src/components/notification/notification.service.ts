import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notification, Notifications } from '../../libs/dto/notification/notification';
import { Model } from 'mongoose';
import { notificationInput } from '../../libs/dto/notification/notification.input';

@Injectable()
export class NotificationService {
	@InjectModel('Notification') private readonly notificationModel: Model<Notification>;

	public async createNotification(input: notificationInput): Promise<Notification> {
		const notification = new this.notificationModel(input);
		return await notification.save();
	}

	public async getNotifications(): Promise<Notification[]> {
		return await this.notificationModel.find().exec();
	}
}
