
const footerLinks=[
    {
        title: "Company",
        links: [             
            "About",
            "Feature",
            "Works",
            "Career"
        ]
    },
    {                      
        title: "Help",
        links: [              
            "Customer Support",
            "Delivery Details",
            "Terms & Conditions",
            "Privacy Policy"
        ]
    },
     {                      
        title: "FAQ",
        links: [              
            "Account",
            "Manage Deliveries",
            "Orders",
            "Payments"
        ]
    },

    {                       
        title: "Resources",
        links: [              
            "Free eBooks",
            "Development Tutorial",
            "How to - Blog",
            "YouTube Playlist"
        ]
    }

]


export default function Footer(){
    return(
        <div className="footer-space">
        <div className="footer">
            <div className="footer1">
                <h1>SHOP.CO</h1>
                <p>We have clothes that suits your style and<br />
                which you’re proud to wear. From<br />
                women to men.</p>
                <div className="icons">
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>
            <div className="footer-column">
            {footerLinks.map((col, i) => (
                <div className="title" key={i}>
             <b>{col.title}</b>
             {col.links.map((linkText, j)=>(
                <a href="#">{linkText}</a>
            ))}
             </div>
            ))}
            </div>
        </div>
         <hr className="divider"/>
         <div className="ending">
            <p>Usman Ali Khan© 2006-2026, All Rights Reserved</p>
         </div>
        </div>
       
    )
} 