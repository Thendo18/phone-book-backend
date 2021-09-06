import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Phonebook } from './phonebook-model-shema';

@Injectable()
export class PhonebookService {

	constructor(@InjectModel('Phonebook') private readonly __phonebookModel: Model<Phonebook> ){}

	async addNewPhonebookToTheDatabase(phonebook: any){
		try {
			const phonebook_model = new this.__phonebookModel(phonebook);
			return await phonebook_model.save();
		} catch (error) {
			if (error.code === 11000) throw new BadRequestException("Phone number already exists!");

			throw new BadRequestException(error);
		}
	}

	async getAllPhonebooksFromTheDatabase(){
		return (await this.__phonebookModel.find().exec()).map((book: any) => ({ id: book.id, phone: book.phone, name: book.name }));
	}

	async getOnePhonebookFromTheDatabase(phonebookId: string){
		return (await this.__phonebookModel.find({ _id: phonebookId }).exec()).map((book: any) => ({ id: book.id, phone: book.phone, name: book.name }));;
	}

	async updateOnePhonebookFromTheDatabase(phonebookId: string, new_phonebook: any){
		const current_phonebook = await this.__phonebookModel.findOne({ _id: phonebookId }).exec();

		if (new_phonebook.name) current_phonebook.name = new_phonebook.name;
		if (new_phonebook.phone) current_phonebook.phone = new_phonebook.phone;

		try {
			const phonebook_model = new this.__phonebookModel(current_phonebook);
			return await phonebook_model.save();
		} catch (error) {
			if (error.code === 11000) throw new BadRequestException("Phone number already exists!");

			throw new BadRequestException(error);
		}
	}

	async deleteOnePhonebookFromTheDatabase(phonebookId: string){
		const remove_phonebook = await this.__phonebookModel.findOneAndDelete({ _id: phonebookId }).exec();
		return { message: `successfully deleted ${remove_phonebook.name}'s number` };
	}

	searchPhonebookByNameOrNumber(options: any){
		return this.__phonebookModel.find(options).exec();
	}
}
