import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {
    const handlePlaceServices = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const title = `${form.title.value}`;
        const img = `${form.img.value}`;
        const price = `${form.price.value}`;
        const description = form.description.value;
        const service = {
            title,
            img,
            price,
            description,
            name
        }
        fetch('http://localhost:5000/services',{
            method : 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
                if(data.acknowledged){
                    toast.success('Successfully added service card!')
                    form.reset();
                    
                }
        })
        .catch(er => console.error(er));


    }
    return (
        <div>
         <form onSubmit={handlePlaceServices} >
         <div className='grid grid-cols-1 lg:grid-cols-1 gap-10'>
         <label>
                 Name :<input type="text" name='name' placeholder="Enter your name" className="input w-full input-bordered max-w-xs" />
            </label>
            <label>
                Services Name :<input name='title' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </label>
            <label>
                Photo :<input type="text" name='img' placeholder="services img URL" className="input input-bordered w-full max-w-xs" />
            </label>
            <label>
                Price :<input type="text" name='price' placeholder="Type here" className="input w-full input-bordered max-w-xs" />
            </label>
         </div>
           
           <label>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="description" required></textarea>
           </label>

            <input className='btn' type="submit" value="submit"/>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            </form>
        </div>
    );
};

export default AddService;