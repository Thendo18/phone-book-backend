import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonebookModule } from './phonebook/phonebook.module';

@Module({
	imports: [
		MongooseModule.forRoot("mongodb+srv://nolan__kgotso:Nolan123@phonebook.gu113.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { autoCreate: true, }),
		PhonebookModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
