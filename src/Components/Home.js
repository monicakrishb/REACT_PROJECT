import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {

  return (
    <div>
      <br />
      <br />

      <main>
        <section>
          <h1>Wide selection | 25M+ books in 8+ languages</h1>
          <p>
            Shop the latest Books With Interesting and innovating Story books!
          </p>
          <img
            src="https://jackets.wordery.com/cms/00000000/scale/7e449a4ff612848aaaa3db82bb3fa7b9108da52b2a157544727437369683e8f217df38edd9b280b7040ceabef08ba915mNjmRitATCUrAP0gzTFX3qRHqExLK9_73xoeuMMc9ygZcxudRNU43yYxyrWgmApTtSRA5FHgwaWvxZWm6M1Mvg/2021%20November/bestsellers_main%20homepage_m.png"
            alt="p0"
          />
          <br />
          <br />
          <a href="/productpage" className="btn btn-dark">
            Shop Now
          </a>
        </section>
        <aside>
          <h2 className="Featured">Top Featured Products</h2>
          <div className="container">
            <div className="box1">

          <a href="http://localhost:3000/cart/10">

              <img
                src="https://rukminim1.flixcart.com/image/416/416/kk1h5e80/book/k/f/i/na-muthukumar-kavithaigal-original-imafzgyygfezv3xp.jpeg?q=70"
                alt="Product 1"
              /></a>
          <a href="http://localhost:3000/cart/11">

              <img
                src="https://m.media-amazon.com/images/I/71uiZa-tiOL._AC_UY436_FMwebp_QL65_.jpg"
                alt="Product 1"
              /></a>
            </div>

            <div className="box2">
          <a href="http://localhost:3000/cart/12">

              <img
                src="https://m.media-amazon.com/images/I/71rG+07lipL.jpg"
                alt="Product 2"
              /></a>
          <a href="http://localhost:3000/cart/13">

              <img
                src="https://m.media-amazon.com/images/I/61lPNVMaLmL._AC_UY436_FMwebp_QL65_.jpg"
                alt="Product 1"
              /></a>
            </div>
          </div>
        </aside>
      </main>
      <div className="viralBooks">
        <h3 data-testid="todo-1">Trending Books</h3>
        <div className="bookDiv">
      
          <img
            src="https://img.buzzfeed.com/buzzfeed-static/static/2020-08/23/14/asset/b8ac59c43a18/sub-buzz-10353-1598192887-1.jpg"
            alt=""
          />
          <img
            src="https://img.buzzfeed.com/buzzfeed-static/static/2020-08/22/3/asset/274e17366b88/sub-buzz-8146-1598067021-33.png?resize=625:624"
            alt=""
          />
          <img
            src="https://img.buzzfeed.com/buzzfeed-static/static/2021-06/22/22/asset/417e073acdb9/sub-buzz-1325-1624402605-9.jpg?resize=990:999"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
