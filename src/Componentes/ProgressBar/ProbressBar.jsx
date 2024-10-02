import React, { useEffect, useState } from 'react'

function ProbressBar() {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

            setScrollPercentage(scrollPercentage);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    return (
        <div
            id='progress-container'
            style={{
                height: "5px",
                width: "100%",
                backgroundColor: "transparent",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1
            }}>
            <div
                className='progress-fill'
                style={{
                    height: "100%",
                    backgroundImage: "linear-gradient(135deg, #6B73FF 10%, #000DFF 100%)",
                    width: `${scrollPercentage}%`
                }}>
            </div>
        </div>
    )
}

export default ProbressBar