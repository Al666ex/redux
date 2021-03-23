export default class PostDate{
  _ApiBase = 'http://localhost:3003'
  //_ApiBase = 'http://92.115.180.180:3003'
  
  async postData(url,data) {
        const path = `${this._ApiBase}/${url}`
        const request = await fetch(path, {
          method : 'POST',
          headers : {
            'Content-type' : 'application/json'
          },
          body : data
        });   

		if(!request.ok){
          throw new Error(`Could not post data fetch ${path} status ${request.status}`)
        }
    
        return await request.json();
  }
  
  async sendData(obj){
    return await this.postData('sales',obj)
  }  
  
}


/*

const postDate  = async(url,data) => {
        const request = await fetch(url, {
          method : 'POST',
          headers : {
            'Content-type' : 'application/json'
          },
          body : data
        });

        if(!request.ok){
          throw new Error(`Could not post data fetch ${url} status ${request.status}`)
        }
    
        return await request.json();
      };

export default postDate;
*/