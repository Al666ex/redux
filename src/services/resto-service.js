export default class RestoService{

    _apiBase = 'http://localhost:3003'
    //_apiBase = 'http://92.115.180.180:3003'

    async getResourse(url){
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status ${res.status} `)
        }
        
        return await res.json()
    }

    getMenuItems = async () => {
        return await this.getResourse(`/menu/`);
    }

    getSalesItems = async () => {
        return await this.getResourse('/sales/');
    }

    getSalesItem = async (id) => {
        return await this.getResourse(`/sales/${id}/`);
    }


}