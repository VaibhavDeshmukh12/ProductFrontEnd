import axios from "axios"

const REST_API = "https://product-backend-production-dadb.up.railway.app/"
// const REST_API = "http://localhost:9090"

class ProductService{

    saveProduct(product){
        return axios.post(REST_API+"/saveProduct",product);
    }

    getProductById(id){
        return axios.get(REST_API+"/"+id);
    }

    getAllProduct(){
        return axios.get(REST_API+"/");
    }

    deleteProduct(id){
        return axios.delete(REST_API+"/deleteProduct/"+id);
    }

    editProduct(product){
        return axios.put(REST_API+"/edit/"+product.id,product);
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();