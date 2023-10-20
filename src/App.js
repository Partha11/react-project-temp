import React, { useState } from "react";
import "./App.css";

function App() {
    const handleAddResources = (event) => {
        event.preventDefault();
        const form = event.target;

        const query = form.query.value;

        const resource = {
            query,
        };
        console.log(resource);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch("http://localhost:10003/query", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                data: resource,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    // toast.success(`Resources is Added Successfully`);
                    form.reset();
                }
            });
    };
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <div className="chatbot">
            <button onClick={openPopup} className="rounded-circle">
                <img src="https://google.com" alt="" className="bot rounded-circle" />
            </button>

            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <p class="text-danger mb-0">শুভ অপরাহ্ণ!!!</p>
                        <img src="https://google.com" class="img-fluid bot" alt="" /> <br />
                        <small>
                            কৃত্তিম বুদ্ধিমতা দ্বারা পরিচালিত এআই বট এর কাছে <br /> আপনার প্রশ্নটি করুন
                        </small>
                        <br />
                        <p class="text-primary text-end mt-5">লেখার তিন অংশের শুরুতে তারিখ দেওয়া কেন?</p>
                        <p class="text-success">রোজনামচা বা দিনপঞ্জিমূলক রচনা বলে।</p>
                        <form action="POST" onSubmit={handleAddResources}>
                            <input type="text" class="w-75 ms-3 me-2" name="query" />
                            <button type="submit">Send</button>
                        </form>
                        <button className="close-button" onClick={closePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
