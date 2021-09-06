import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonebookModule } from './phonebook/phonebook.module';

@Module({
	imports: [
		// MongooseModule.forRoot("mongodb+srv://nolan__kgotso:Nolan123@phonebook.gu113.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { autoCreate: true, }),
		MongooseModule.forRoot("mongodb://localhost:27017/phonebookDB", { autoCreate: true }),
		PhonebookModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
