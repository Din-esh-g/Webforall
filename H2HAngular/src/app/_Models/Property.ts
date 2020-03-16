import { Photo } from './photo';

export interface Property {
    id: number;
    title: string;
    typeOfProperty: string;
    propertyDescription: string;
    dateOfPosting: Date;
    contactDetails: string;
    zipecode: number;
    city?: string;
    county?: string;
    country?: string
    otherInformation: string;
    photoUrl: string;
    photos?: Photo[];
}