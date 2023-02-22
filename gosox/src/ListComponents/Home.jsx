import React from 'react'
import "../Css/nav.css"
import { Link ,NavLink} from 'react-router-dom'

import Imageslider from './Imageslider'
// import { NavLink } from 'react-router-dom'

const slides=[
  {url:"https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-boy/subhome-xmedia-06//w/1366/IMAGE-landscape-default-fill-fdd4552f-c1f8-4b20-98fc-38cbbf64d096-default_0.jpg?ts=1676028951513",title:"img1"},
  {url:"https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-jeans/subhome-xmedia-05//w/1366/IMAGE-landscape-fill-422c110f-3ef2-44e1-8877-8d8a187b6daf-default_0.jpg?ts=1675687361617",title:"img2"},
  {url:"https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-08//w/1366/IMAGE-landscape-fill-172747c9-8287-49ff-bf75-55ff07bc90e4-default_0.jpg?ts=1676887954427",title:"img3"},
  {url:"https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-shoes-bags/subhome-xmedia-07//w/1366/IMAGE-landscape-default-fill-3cc20f02-4020-4189-8ce6-edf30a6b2034-default_0.jpg?ts=1676480793020",title:"img4"},
  {url:"https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-collection/subhome-xmedia-08-02//w/1366/IMAGE-landscape-fill-35d08327-a16f-41b1-94ed-52ca875a87ee-default_0.jpg?ts=1676885654764",title:"img5"},
]


const Home = () => {
  return (
    <div className='homemaindiv'>
<h3>Limited time only. Selected styles marked down as shown.</h3>
      <div className='homediv1'>
<Link to="/New in" style={{color:"black"}}><h1>UP TO 50% OFF <br />
LAYERING LEGENDS! <br />

COATS, HOODIES AND MORE</h1></Link>

<h6>Limited time only. Selected styles marked down as shown.</h6>
      </div>
    <div className='ssld1'><Imageslider slides={slides}/></div>

    <div className='iimg'>
        
       <div className='dddq'> <Link to="/men" style={{textDecoration:"none",color:"black"}}><img className='igm' src="https://content.asos-media.com/-/media/homepages/mw/2023/february/13-prime/moments/mw_global_new_szn_trousers_moment_870x1110.jpg" alt="" />
       <h2>NEW PANTS</h2>
       <h4>Incl. on-trend cargos, ofc</h4>
       </Link></div>
        <div className='dddq'><Link to="/men" style={{textDecoration:"none",color:"black"}}><img className='igm' src="https://content.asos-media.com/-/media/homepages/mw/2023/february/13-prime/moments/mw_global_new_szn_prints_moment_870x11101.jpg" alt="" />
        <h2>NEW PANTS</h2>
       <h4>Incl. on-trend cargos, ofc</h4>
        </Link></div>
        <div className='dddq'><Link to="/men" style={{textDecoration:"none",color:"black"}}><img className='igm' src="https://content.asos-media.com/-/media/homepages/mw/2023/february/13-prime/moments/mw_global_contingency_new_in_moment_870x1110.jpg" alt="" />
        <h2>NEW PANTS</h2>
       <h4>Incl. on-trend cargos, ofc</h4>
        </Link></div>
       <div className='dddq'> <Link to="/men" style={{textDecoration:"none",color:"black"}}><img className='igm' src="https://content.asos-media.com/-/media/homepages/mw/2023/february/13-prime/moments/mw_global_new_season_brights_moment_870x1110.jpg" alt="" />
       <h2>NEW PANTS</h2>
       <h4>Incl. on-trend cargos, ofc</h4>
       </Link></div>
      </div>

      <div className='denin'>
        <h1>DENIN BY TOPMAN</h1>
        <p id='pw'>DENIM BY TOPMAN
Jackets, jeans & shirts - your essentials are here</p>
          <button id='butr' ><NavLink style={{textDecoration:"none" ,color:"white"}} to="/men">Shop Now</NavLink></button> 
      </div>

<div className='ddenn1' >
  <h1>STYLE FEED </h1>
  <h3>Style. Grooming. Inspiration. Advice.</h3>
  <br />
<div className='ddenn'>
  
  <div className='card1'>
    <NavLink to="/men" style={{textDecoration:"none",color:"black"}}><img src="https://content.asos-media.com/-/media/images/articles/men/2023/02/20-mon/gettyimages-1247315886.jpeg?h=300&w=300&hash=83A1472DB201A29BB22F871547735CEE" alt="" />
    <h4>RED CARPET REPORT: THE BAFTAS</h4>
    <h4>Award-winning 'fits</h4></NavLink>
    
  </div>
  <div className='card1'>
 <NavLink to="/men" style={{textDecoration:"none",color:"black"}}>
 <img src="https://content.asos-media.com/-/media/images/articles/men/2023/01/26-thurs/thumv.jpg?h=300&w=300&hash=EDB8DF5F5F18639C0713360E93BE08C1" alt="" />
    <h4>RED CARPET REPORT: THE BAFTAS</h4>
    <h4>Award-winning 'fits</h4>
 </NavLink>
    
  </div>
  <div className='card1'>
  <NavLink to="/men" style={{textDecoration:"none",color:"black"}}>
  <img src="https://content.asos-media.com/-/media/images/articles/men/2023/02/08-wed/stormzythumb.jpg?h=300&w=300&hash=F8481F6613D80FF4747F8011F4A9C22A" alt="" />
    <h4>RED CARPET REPORT: THE BAFTAS</h4>
    <h4>Award-winning 'fits</h4>
  </NavLink>
    
  </div>
  <div className='card1'>
  <NavLink to="/men" style={{textDecoration:"none",color:"black"}}><img src="https://content.asos-media.com/-/media/images/articles/men/2023/02/03-fri/vday-thumb.jpg?h=300&w=300&hash=CA899DEB6DDE5870A30B98EF92133F38" alt="" />
    <h4>RED CARPET REPORT: THE BAFTAS</h4>
    <h4>Award-winning 'fits</h4></NavLink>
    
  </div>
  
</div>
<button id='butr1' ><NavLink style={{textDecoration:"none" ,color:"white"}} to="/men">View Styles & News</NavLink></button> 
</div>

<div className='finalDiv'>
  <div className='fin1'>
    <img src="https://static.zara.net/photos///2023/V/0/1/p/7969/235/330/13/w/430/7969235330_2_1_1.jpg?ts=1676892846905" alt="" />
    <h1>FELIX x CROOKED TONGUES</h1>
    <h3>Skater staples </h3>
    <button class='butr2'><NavLink style={{textDecoration:"none" ,color:"black"}} to="/men">SHOP THE BRAND</NavLink></button>
  </div>
  <div className='fin1'>
    <img src="https://static.zara.net/photos///2023/V/0/1/p/8741/256/250/14/w/430/8741256250_2_2_1.jpg?ts=1676893438964" alt="" />
    <h1>VACAY TIME</h1>
    <h3>Sun-ready steeze</h3>
    <button class='butr2'><NavLink style={{textDecoration:"none" ,color:"black"}} to="/men">SHOP THE TREND</NavLink></button>
  </div>

</div>


<div className='trend'>
  <h1>TRENDING BRANDS</h1>
  <div className='trend11'> 

    <NavLink><img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/asos-design-logo_256_v4.png" alt="" /></NavLink>
    <NavLink><img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png" alt="" /></NavLink>
    <NavLink><img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/topman_logo_256x128_v3.png" alt="" /></NavLink>
    <NavLink><img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/new-balance-hp-logos-256x256v2.png" alt="" /></NavLink>
    
  </div>
</div>

<div className='para'>
<h3>
Chilly days ahead – time to layer up. Your one-stop destination for everything men’s <br />
 fashion, trust ASOS to bring the goods. We’re talking chunky knits, sweaters and 
 cardis in this season’s must-have color palette, boxy overshirts for a smart-casj
  vibe, and *the* hottest throw-on jackets and structured coats (think puffers, camel 
  wool dusters and classic trenches, to name a few). Brave the elements in pull-on leather
   Chelsea boots, rough 'n' ready lace-up worker styles and the perfect low-key sneaks. 
   Finish off your cold-weather 'fits in cozy accessories, with ribbed fisherman beanies, 
   wool-mix scarves and faux-leather gloves as standard. Biting temps playing havoc with 
   your skin? We gotchu. Scroll Face + Body for soothing skincare from top brands like 
   The Ordinary, Bulldog and REN for nourishing products guaranteed to give you back your 
   glow. 
   Winter, we're ready for ya.
</h3>
</div>

    </div>

  )
}

export default Home