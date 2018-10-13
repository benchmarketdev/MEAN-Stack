export class Contact
{
    _id?: String;
    first_name: String;
    last_name: String;
    phone: String;
}
export class School
{
    _id?: String;
    schollname: String;
}
export class Schooldata
{
    _id?: String;
    school_id: String;
    year: String;
    week: String;
    month: String;
    elect_eur: String;
    elect_kwh: String;
    heating_eur: String;
    heating_kwh: String;
    water_eur: String;
    water_kwh: String;
}