import BASE_URL from "@/config/config";

export default class RoomService {

    constructor() {
        this.baseUrl = BASE_URL;
    }

    async getRoomsByHotel(id) {
        const response = await fetch(`${this.baseUrl}/hotel/${id}/rooms`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        });
        return response.json();
    }

    async saveRoomByHotel(room){
        const response = await fetch(`${this.baseUrl}/room`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(room)
        });
        return response.json();
    }

    async deleteRoomHotel(id){
        const response = await fetch(`${this.baseUrl}/room/${id}`,{
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        });
        return response.json();
    }

}