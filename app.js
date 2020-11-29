async function getImageURL(){
	let url='https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json';
	try{
		let res = await fetch(url);
		return await res.json();
	}
	catch(error){
		console.log(error);

	}
}

async function getData(){
	let url='https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json';
	try{
		let res = await fetch(url);
		return await res.json();
	}
	catch(error){
		console.log(error);

	}
}

async function renderData() {
    let data = await getData();
    let imageURL = await getImageURL();
    let html = `<tr>
            <th>Thumbnail</th>
            <th>Name</th>
                <th>style</th>
                    <th>id</th>
                        <th>abv</th>
                            <th>ounces</th>
        </tr>`;
    
    
    var i=0;
    var len=imageURL.length;
    console.log(len);
    data.forEach(data => {
    	let imageSegment=`<img src="${imageURL[i].image}" height='100' width='100'>`
        i++;
        i%=len;
        console.log(imageURL[i].image);
        let htmlSegment = `
        <tr>
        <div  class="brand">
        					
        			         <td>${imageSegment}</td>
                             <td>${data.name}</td>
                             <td>${data.style}</td>
                             <td>${data.id}</td>
                             <td>${data.abv} </td>
                            <td> ${data.ounces}</td>
                        </div>
                        </tr>`;

        
        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}
renderData();