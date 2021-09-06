import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { PhonebookService } from './phonebook.service';
import { Request } from 'express';

@Controller('phonebook')
export class PhonebookController {

	constructor(private __phonebook: PhonebookService) {}

	@Get('search')
	async searchProduct(@Req() req: Request){
		let options: any = {}

		if (req.query.s) {
			options = {
				$or: [
					{ name: new RegExp(req.query.s.toString(), 'i' )},
				],
			}	
		}

		return this.__phonebook.searchPhonebookByNameOrNumber(options);
	}

	@Post()
	async addNewPhonebook(@Body() phonebook : { phone: number, name: string }){
		return await this.__phonebook.addNewPhonebookToTheDatabase(phonebook);
	}

	@Get()
	async getAllPhonebooks(){
		return await this.__phonebook.getAllPhonebooksFromTheDatabase();
	}

	@Get('/:phonebookId')
	async getOnePhonebook(@Param('phonebookId') phonebookId: string ){
		return await this.__phonebook.getOnePhonebookFromTheDatabase(phonebookId);
	}

	@Patch('/:phonebookId')
	async updateOnePhonebook(@Param('phonebookId') phonebookId: string, @Body() phonebook : { phone: number, name: string }){
		return await this.__phonebook.updateOnePhonebookFromTheDatabase(phonebookId, phonebook);
	}

	@Delete('/:phonebookId')
	async deleteOnePhonebook(@Param('phonebookId') phonebookId: string ){
		return await this.__phonebook.deleteOnePhonebookFromTheDatabase(phonebookId);
	}

}
