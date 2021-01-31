const postDate  = async(url,data) => {
        const request = await fetch(url, {
          method : 'POST',
          headers : {
            'Content-type' : 'application/json'
          },
          body : data
        });
    
        return await request.json();
      };

export default postDate;