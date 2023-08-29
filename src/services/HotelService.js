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

    async fetchHotelDetails(hotelId) {
        const response = await fetch(`${this.baseUrl}/hotel/${hotelId}`);
        const data = await response.json();
        return data;
    }

}