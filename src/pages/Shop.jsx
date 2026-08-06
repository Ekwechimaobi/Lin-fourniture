import Footer from "../components/Footer"
import Header from "../components/Header"



const Shop = () => {
  return (
    <div>
      
<Header />

    <section class="shop-banner ">

        <img src="images/shop-banner.jpg" alt="Banner Background" class="banner-img"/>

        <div class="banner-overlay">
            <h1>Shop</h1>

            <div class="breadcrumb">
                <span>Home</span>
                <i class="fa-solid fa-chevron-right"></i>
                <span>Shop</span>
            </div>
        </div>

    </section>


    <section class="filter-bar">

        <div class="filter-left">

            <div class="filter-item">
                <img src="images/filter-icon.png" alt="Filter"/>
                <span>Filter</span>
            </div>

            <img src="images/grid-icon.png" alt="Grid" class="icon"/>

            <img src="images/list-icon.png" alt="List" class="icon"/>

            <div class="divider"></div>

            <p>Showing 1–16 of 32 results</p>

        </div>

        <div class="filter-right">

            <div class="show-box">
                <span>Show</span>
                <input type="text" value="16"/>
            </div>

            <div class="sort-box">
                <span>Short by</span>
                <input type="text" value="Default"/>
            </div>

        </div>

    </section>
    <Footer/>
    </div>
  )
}

export default Shop