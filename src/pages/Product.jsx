function Product() {
  return (
    <div>
      <section class="comparison w-300 my-15 mx-auto">
        <div class="compare-grid grid gap-7.5 items-center mb-10 ">
          <div class="intro">
            <h2>Go to Product page for more Products</h2>
            <a href="#">View More</a>
          </div>

          <div class="product-card">
            <img src="images/sofa1.png" alt="Sofa" />

            <h3>Asgaard Sofa</h3>

            <p class="price">Rs.250,000.00</p>

            <div class="rating">
              4.7 ★★★★★ <span>| 204 Review</span>
            </div>
          </div>

          <div class="product-card">
            <img src="images/sofa2.png" alt="Sofa" />

            <h3>Outdoor Sofa Set</h3>

            <p class="price">Rs.224,000.00</p>

            <div class="rating">
              4.2 ★★★★★ <span>| 145 Review</span>
            </div>
          </div>

          <div class="add-product">
            <h3>Add A Product</h3>

            <select>
              <option>Choose a Product</option>
              <option>Sofa</option>
              <option>Chair</option>
              <option>Table</option>
            </select>
          </div>
        </div>

        <table>
          <tr class="title">
            <td>General</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>Sales Package</td>
            <td>1 sectional sofa</td>
            <td>1 Three Seater, 2 Single Seater</td>
            <td></td>
          </tr>

          <tr>
            <td>Model Number</td>
            <td>TFCBLIGRBL6SRHS</td>
            <td>DTUBLGRBL568</td>
            <td></td>
          </tr>

          <tr>
            <td>Secondary Material</td>
            <td>Solid Wood</td>
            <td>Solid Wood</td>
            <td></td>
          </tr>

          <tr>
            <td>Configuration</td>
            <td>L-shaped</td>
            <td>L-shaped</td>
            <td></td>
          </tr>

          <tr>
            <td>Upholstery Material</td>
            <td>Fabric + Cotton</td>
            <td>Fabric + Cotton</td>
            <td></td>
          </tr>

          <tr>
            <td>Upholstery Color</td>
            <td>Bright Grey & Lion</td>
            <td>Bright Grey & Lion</td>
            <td></td>
          </tr>

          <tr class="title">
            <td>Product</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>Filling Material</td>
            <td>Foam</td>
            <td>Matte</td>
            <td></td>
          </tr>

          <tr>
            <td>Finish Type</td>
            <td>Bright Grey & Lion</td>
            <td>Bright Grey & Lion</td>
            <td></td>
          </tr>

          <tr>
            <td>Adjustable Headrest</td>
            <td>No</td>
            <td>Yes</td>
            <td></td>
          </tr>

          <tr>
            <td>Maximum Load Capacity</td>
            <td>280 KG</td>
            <td>300 KG</td>
            <td></td>
          </tr>

          <tr>
            <td>Origin of Manufacture</td>
            <td>India</td>
            <td>India</td>
            <td></td>
          </tr>

          <tr class="title">
            <td>Dimensions</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>Width</td>
            <td>265.32 cm</td>
            <td>265.32 cm</td>
            <td></td>
          </tr>

          <tr>
            <td>Height</td>
            <td>76 cm</td>
            <td>76 cm</td>
            <td></td>
          </tr>

          <tr>
            <td>Depth</td>
            <td>167.76 cm</td>
            <td>167.76 cm</td>
            <td></td>
          </tr>

          <tr>
            <td>Weight</td>
            <td>45 KG</td>
            <td>65 KG</td>
            <td></td>
          </tr>

          <tr>
            <td>Seat Height</td>
            <td>41.52 cm</td>
            <td>41.52 cm</td>
            <td></td>
          </tr>

          <tr>
            <td>Leg Height</td>
            <td>5.46 cm</td>
            <td>5.46 cm</td>
            <td></td>
          </tr>
        </table>

        <div class="warranty-section">
          <div class="row">
            <div class="label heading">Warranty</div>
            <div class="column"></div>
            <div class="column"></div>
          </div>

          <div class="row">
            <div class="label">Warranty Summary</div>

            <div class="column">1 Year Manufacturing Warranty</div>

            <div class="column">12 Year Manufacturing Warranty</div>
          </div>

          <div class="row">
            <div class="label">Warranty Service Type</div>

            <div class="column">
              For Warranty Claims or Any Product Related Issues Please Email at
              support@trivefurniture.com
            </div>

            <div class="column">
              For Warranty Claims or Any Product Related Issues Please Email at
              support@xyz.com
            </div>
          </div>

          <div class="row">
            <div class="label">Covered in Warranty</div>

            <div class="column">Warranty Against Manufacturing Defect</div>

            <div class="column">
              Warranty of the product is limited to manufacturing defects only.
            </div>
          </div>

          <div class="row">
            <div class="label">Not Covered In Warranty</div>

            <div class="column">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </div>

            <div class="column">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </div>
          </div>

          <div class="row">
            <div class="label">Domestic Warranty</div>

            <div class="column">1 Year</div>

            <div class="column">3 Months</div>
          </div>

          <div class="row button-row">
            <div class="label"></div>

            <div class="column">
              <button>Add To Cart</button>
            </div>

            <div class="column">
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
