import * as mongoose from 'mongoose';

export const PhonebookSchema = new mongoose.Schema({
    phone: { type: Number, required: [ true, 'Phone number is required' ] , unique: [ true, "Phone number already exists" ] },
	name: { type: String, required: [ true, 'Name is required' ] },
	email: { type: String },
});

export interface Phonebook extends mongoose.Document{
	phone: number;
	email: string;
	name: string;
	id: string;
}
