import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Name, LeftMenu, Products, Test } from "./components/index";

const URL = "https://assessment-edvora.herokuapp.com";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  if (!products) return null;

  // useEffect(() => {
  //   fetch(`https://assessment-edvora.herokuapp.com`)
  //     .then((response) => response.json())
  //     .then((actualData) => console.log(actualData));
  // }, []);

  // useEffect(() => {
  //   fetchProducts();
  // }, [])

  // useEffect(() => {
  //   console.log(products);
  // }, [products])

  // const fetchProducts=async()=>{
  //   const response=await Axios('https://assessment-edvora.herokuapp.com');
  //   setProducts(response.data)
  // }

  console.log(products);

  ///////////////////////////////////////////////////

  return (
    <div className="flex bg-[#292929] p-[43px]">
      <LeftMenu products={products}/>
      <div>
        <Name />

        <div className="">
          <div className="bg-[#131313] p-[20px] rounded-[15px] text-[#fff] overflow-x-scroll w-[984px]">
            <div className="flex space-x-4">
              {products &&
                products.map((product) => {
                  return (
                    <div key={product.time}>
                      <div className="w-[210px] h-[150px] p-[15px] bg-[#232323] rounded-lg flex flex-col hover:scale-[1.02]">
                        <div className="flex justify-between items-center">
                          <div>
                            <img
                              src={product.image}
                              alt=""
                              className="h-[70px]"
                            />
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium text-[15px] whitespace-nowrap">
                              {product.product_name}
                            </h4>
                            <p className="text-[13px] opacity-[0.6]">
                              {product.brand_name}
                            </p>
                            <p className="text-[16px]">
                              ${" "}
                              <span className="text-[13px]">
                                {product.price}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs opacity-[0.6] pt-[6px]">
                          <p className="whitespace-nowrap pr-2">
                            {product.address.state}
                          </p>
                          <p className="pr-[10px] whitespace-nowrap overflow-hidden pl-2">
                            {product.time}
                          </p>
                        </div>
                        <div className="text-xs opacity-[0.6] pt-[6px]">
                          {product.discription}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* Test */}
        
        <div>
          <h3 className="text-[20px] text-[#fff] pt-[45px]">Demo Products</h3>
          <hr className="pt-[4px] pb-[12px] opacity-[0.5]" />
        </div>
        <Test />
        <div></div>
      </div>
    </div>
  );
}

export default App;
