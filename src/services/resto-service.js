export default class RestoService{

    _apiBase = 'http://localhost:3003'

    async getResourse(url){
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status ${res.status} `)
        }
        
        return await res.json()
    }

    async getMenuItems(){
        return await this.getResourse(`/menu/`)
    }
   


}