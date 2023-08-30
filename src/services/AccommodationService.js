import BASE_URL from "@/config/config";

export default class AccomodationService {

    constructor() {
        this.baseUrl = BASE_URL;
    }

    async getAccomodationsForType(id) {
        const response = await fetch(`${this.baseUrl}/type/${id}/accommodation`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        });
        return response.json();
    }

}