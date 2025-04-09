import React from "react";
import Nav from "./Nav";
import Blogtext from "./Blogtext";
import Form from "./Form";
import Footer from "./Footer";

function Blog({ openCart }) {
  return (
    <div>
      <Nav openCart={openCart} />
      <div className="blog-img">
        <h1>Blog</h1>
      </div>
      <div className="container mb-5">
        <div className="blogcard mt-5">
          <div className="mt-5">
            <img
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_17/m66gvpat/element_328/rwdMode_1/930x500/Workshop_header_blog_A.webp"
              alt=""
              height={"300px"}
            />
          </div>
          <div className="mt-5">
            <Blogtext
              h3={"What affects the quality of ceramic products?"}
              p1={"17 April 2025"}
              p2={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus suscipit..."
              }
              span={"Dixit"}
            />
          </div>
          <div className="mt-5">
            <img
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_12/m66gvisn/element_245/rwdMode_1/300x200/blog_social.webp"
              alt=""
              height={"250px"}
            />
            <h4 className="mt-3 text-center">Our social media</h4>
            <div className="icons mt-3">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="blogcard mt-5">
          <div>
            <img
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_16/m66gvqb6/element_328/rwdMode_1/930x500/Workshop_3_blog_B.webp"
              alt=""
              height={"300px"}
            />
          </div>
          <div>
            <Blogtext
              h3={"How ceramics are made"}
              p1={"20 April 2025"}
              p2={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus suscipit..."
              }
              span={"Nirav"}
            />
          </div>
          <div className="w-100">
            <Form />
          </div>
        </div>
        <div className="blogs">
          <div className="mt-5">
            <div>
              <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_18/m66gvobu/element_328/rwdMode_1/930x500/blog_3.webp"
                alt=""
                height={"300px"}
              />
            </div>
            <div className="mt-3">
              <Blogtext
                h3={"Ceramic soup bowls"}
                p1={"1 April 2025"}
                p2={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus suscipit..."
                }
                span={"Rohan"}
              />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_21/m66gvmml/element_328/rwdMode_1/930x500/blog_1.webp"
                alt=""
                height={"300px"}
              />
            </div>
            <div className="mt-3">
              <Blogtext
                h3={"How to price physical products"}
                p1={"2 April 2025"}
                p2={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus suscipit..."
                }
                span={"OgGod"}
              />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/newspage_20/m66gvngo/element_328/rwdMode_1/930x500/blog_2_product_2.webp"
                alt=""
                height={"300px"}
              />
            </div>
            <div className="mt-3">
              <Blogtext
                h3={"Modern techniques"}
                p1={"5 April 2025"}
                p2={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nisi nec massa rhoncus venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus suscipit..."
                }
                span={"Pain"}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
