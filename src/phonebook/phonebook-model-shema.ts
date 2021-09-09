import * as mongoose from 'mongoose';

export const PhonebookSchema = new mongoose.Schema({
    phone: { type: Number, required: [ true, 'Phone number is required' ] , unique: [ true, "Phone number already exists" ] },
	email: { type: String, defualt: null, index: { unique: true, sparse: true } },
	name: { type: String, required: [ true, 'Name is required' ] },
});

export interface Phonebook extends mongoose.Document{
	phone: number;
	email: string;
	name: string;
	id: string;
}
