
import Hero from "@/components/Hero/Hero";
import Container from "@/components/Container";
import Quotes from "@/components/Quotes/Quotes";
// import CategoryCarousel from "@/components/Carousel_Data/CategoryCarousel";
import Track from "@/components/track/Track";
// import Products from "@/components/products/Products";
import JoinPack from "@/components/joinPack/JoinPack";
import ControlledAccordions from "@/components/reviewSection/ControlledAccordions";
// import { fetchApiData } from "@/Utils/Api";



export async function Home() {
  // const {data: products} = await fetchApiData()


  return (
    <main>
          <Hero />
          <Container>
            <Quotes />
          </Container>

          {/* <CategoryCarousel /> */}
          
            <Track /> 

          <Container>
            {/* <Products products = {products} /> */}
          </Container>

          <Container>
            <JoinPack />
          </Container>

          <Container>
              {/* <CustomerReviews /> */}
              <ControlledAccordions />
          </Container>
         
          
      </main>
  )
}

export default Home ;
