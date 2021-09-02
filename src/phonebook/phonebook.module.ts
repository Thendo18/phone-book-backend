import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonebookSchema } from './phonebook-model-shema';
import { PhonebookController } from './phonebook.controller';
import { PhonebookService } from './phonebook.service';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: "Phonebook", schema: PhonebookSchema }]),
	],
	controllers: [PhonebookController],
	providers: [PhonebookService]
})
export class PhonebookModule {}
