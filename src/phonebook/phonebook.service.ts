import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Phonebook } from './phonebook-model-shema';

@Injectable()
export class PhonebookService {

	constructor(@InjectModel('Phonebook') private readonly __phonebookModel: Model<Phonebook> ){}

	async addNewPhonebookToTheDatabase(phonebook: any){
		return "Adding Phone Book...";
	}

	async getAllPhonebooksFromTheDatabase(){
		return "Getting All Phone Books...";
	}

	async getOnePhonebookFromTheDatabase(phonebookId: string){
		return "Getting One Phone Book...";
	}

	async updateOnePhonebookFromTheDatabase(phonebookId: string, phonebook: any){
		return "Updating One Phone Book...";
	}

	async deleteOnePhonebookFromTheDatabase(phonebookId: string){
		return "Deleting One Phone Book...";
	}

	searchPhonebookByNameOrNumber(options: any){
		return "Searching Phone Book...";
	}
}
