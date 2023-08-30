import BASE_URL from "@/config/config";

export default class TypeService {

    constructor() {
        this.baseUrl = BASE_URL;
    }

    async getAllTypes() {
        const response = await fetch(`${this.baseUrl}/type`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        });
        return response.json();
    }

}