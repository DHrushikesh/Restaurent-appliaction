import RestaurentCards from "../model/Restaurent.Model.js";

export function createRestaurent(req,res){
    const { name , rating , imgurl , DeliveryTime , Area  } = req.body;
    const newRestaurant = new RestaurentCards({
        name, rating , imgurl , DeliveryTime , Area
    })

    newRestaurant.save().then((data)=>{
    if(!data){
        return res.status(400).send("Something Went Wrong")
    }
    res.send(data)
    })      
}

export function getRestaurant(req, res) {
    RestaurentCards.find()
        .then(data => {
            if (data.length === 0) { // Check if the data array is empty
                return res.status(404).send("No data found");
            }
            res.send(data); // Send the data as JSON
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Server error");
        });
}


