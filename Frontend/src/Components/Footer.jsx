import { Link } from "react-router-dom";
export default function Footer(){

    return(
        <>
        <section className="bg-gray-200">
            <div className="grid md:grid-cols-4 gap-5 mx-20 pt-10 grid-cols-2">
            <div>
                <h4 className="text-xl font-thick p-4">ChronosVault</h4>
                <p className="text-gray-600">Timeless precision. Modern elegance.<br/>
Crafting watches that define every<br/> second of your journey.</p></div>

<div>
    <h4 className="text-xl font-thick p-4">Quick Links</h4>
    <ol className="text-gray-600">
       
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/cart">Cart</Link></li>
    </ol>
</div>

<div>
    <h4 className="text-xl font-thick p-4">Services</h4>
    <ol className="text-gray-600">
        <li>Shipping</li>
        <li>Returns</li>
        <li>Contact</li>
        <li>Terms of Services</li>
    </ol>
</div>

<div>
    <h4 className="text-xl font-thick p-4">The Gallery</h4>
    <p className="text-gray-600 "><i>"Design is not just what it look like or<br/> feels like. Design is how it works"</i></p>
</div>
</div>
<div className="justify-items-center mt-5">
    <div>
    <h4 className="text-xl font- p-2">Contact us</h4>
    <div className="flex gap-8 pl-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

    </div>
    </div>
    <div>
        <p className="text-gray-600 p-5">© 2026 ChronosVault. All rights reserved.
Designed for those who value time.</p>
    </div>
</div>
</section></>
    )
}

