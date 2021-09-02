import * as mongoose from 'mongoose';

export const PhonebookSchema = new mongoose.Schema({
    phone: { type: Number, unique: [ true, "Phone nuber already exists" ] },
	name: { type: String },
});

export interface Phonebook extends mongoose.Document{
	phone: number;
	name: string;
	id: string;
}
