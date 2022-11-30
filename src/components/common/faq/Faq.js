import React, { useEffect, useState } from "react";
import { sanityClient } from "../../config";

import './Faq.css'

export default function Faq() {
    const [allFaqItems, setFaqItems] = useState(null);

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "faq"]{
                title,
                subtitle
            }`
            )
            .then((data) => setFaqItems(data))
            .catch(console.error);
      }, []);

    return (
        <div className="faq-container">
            <h1 className="faq-title">FAQ</h1>
            <div className="faq">
                {allFaqItems &&
                    allFaqItems.map((item, index) => (
                        <div className="faq-item" key={index}>
                            <h1 className="faq-question">{item.title}</h1>
                            <h2 className="faq-answer">{item.subtitle}</h2>
                        </div>
                    ))}
            </div>
        </div>
    )
}