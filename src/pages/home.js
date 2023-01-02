//Pages
import Hero from '../components/hero';
import Category from '../components/category';
import Benefits from '../components/Benefits';
import MenuCategory from '../components/MenuCategory';
// import LoadingSpinner from '../components/LoadingSpinner';
// import SearchNavbar from '../pages/SearchNavbar'


const Home = () =>{
    return(
        <>
            {/* <SearchNavbar/> */}
            <Hero/>
            <Category/>
            <Benefits/>
            <MenuCategory/> 
        </>
    )
} 


export default Home;