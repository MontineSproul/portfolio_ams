import React, {useState} from 'react';
import Home from './Home';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';

function Footer() {
    const [page, setPage] = useState("Home")
    return (
    <div id="footer">
        <footer id="contact">
    <ul>
        <li>
            <a href="./linkingHTML/contact.html" target="_blank" class="contact">
                <i class="fa-regular fa-paper-plane-top"></i>
            </a>
        </li>
        <li>
            <a href="tel:6786204054" class="call">
                <i class="fa-solid fa-phone"></i>
            </a>
        </li>
        <li>
            <a href="mailto:montinesproul@gmail.com" target="_blank" class="email">
                <i class="fa-solid fa-envelope"></i>
            </a>
        </li>     
        <li>
            <a href="https://github.com/MontineSproul" target="_blank" class="github">
                <i class="fa-brands fa-github"></i>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/montinethebomb" target="_blank" class="twitter">
                <i class="fa-brands fa-twitter"></i>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/ashley-montine-sproul-7319781b3/" target="_blank" class="linkedin">
                <i class="fa-brands fa-linkedin"></i>
            </a>
        </li>
        
    </ul>
</footer>
    
    </div>
    )
}






export default Footer;