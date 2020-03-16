export interface MyJobs {

    id: number;
    jobTitle: string;
    typeOfJob: string;
    jobDescription: string;
    contacDetails: string;
    city?: string;
    country?: string;
    postedDate: Date;
}
