import BASE_URL from '../config/config';

export default class HotelService {

    constructor() {
        this.baseUrl = BASE_URL;
    }

    async fetchHotels() {
        try {
            const respuesta = await fetch(`${this.baseUrl}/hotel`);
            const datos = await respuesta.json();
            return datos.data;
          } catch (error) {
            console.error('Error al obtener la lista de hoteles', error);
            return [];
          }
    }

    async getHotebyId(hotelId) {
        const response = await fetch(`${this.baseUrl}/hotel/${hotelId}`);
        const data = await response.json();
        return data;
    }

    async saveHotel(hotelData){
        const response = await fetch(`${this.baseUrl}/hotel`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(hotelData)
        });

        return response;
    }

    async editHotel(hotelData, id){
        const response = await fetch(`${this.baseUrl}/hotel/${id}`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(hotelData)
        });

        return response;
    }


    async deleteHotel(id){
        const response = await fetch(`${this.baseUrl}/hotel/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "DELETE",
        })
        return response;
    }

}